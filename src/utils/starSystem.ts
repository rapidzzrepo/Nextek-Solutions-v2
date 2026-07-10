export class StarSystem {
  canvas: HTMLCanvasElement | null = null
  private ctx: CanvasRenderingContext2D | null = null
  private container: HTMLElement | null = null
  colors!: string[]
  behavior!: string
  private stars: any[] = []
  private width = 0
  private height = 0
  private mouseX = -1000
  private mouseY = -1000
  private animationId = 0
  private boundResize: (() => void) | null = null
  private boundMouseMove: ((e: MouseEvent) => void) | null = null
  private boundMouseLeave: (() => void) | null = null

  constructor(canvasId: string, containerId: string, customColors?: string[], behavior = 'normal') {
    const c = document.getElementById(canvasId) as HTMLCanvasElement
    if (!c) { return }
    this.canvas = c
    const ctx = c.getContext('2d', { alpha: true })
    if (!ctx) { return }
    this.ctx = ctx
    const cont = document.getElementById(containerId)
    if (!cont) { return }
    this.container = cont
    this.colors = customColors || ['#7c3aed', '#3d48d9', '#630ed4', '#5864f3']
    this.behavior = behavior
    this.init()
    this.bindEvents()
    this.animate()
  }

  private bindEvents() {
    this.boundMouseMove = (e: MouseEvent) => {
      const rect = this.container!.getBoundingClientRect()
      this.mouseX = e.clientX - rect.left
      this.mouseY = e.clientY - rect.top
    }
    this.boundMouseLeave = () => {
      this.mouseX = -1000
      this.mouseY = -1000
    }
    this.boundResize = () => this.init()
    this.container!.addEventListener('mousemove', this.boundMouseMove, { passive: true })
    this.container!.addEventListener('mouseleave', this.boundMouseLeave, { passive: true })
    window.addEventListener('resize', this.boundResize, { passive: true })
  }

  private init() {
    if (!this.canvas || !this.container || !this.ctx) return
    const dpr = window.devicePixelRatio || 1
    this.width = this.container.offsetWidth
    this.height = this.container.offsetHeight
    this.canvas.width = this.width * dpr
    this.canvas.height = this.height * dpr
    this.canvas.style.width = `${this.width}px`
    this.canvas.style.height = `${this.height}px`
    this.ctx.scale(dpr, dpr)
    this.stars = []
    const count = Math.min(Math.floor((this.width * this.height) / 4000), 250)
    for (let i = 0; i < count; i++) {
      this.stars.push(this.createStar())
    }
  }

  private createStar() {
    const x = Math.random() * this.width
    const y = Math.random() * this.height
    return {
      x, y, baseX: x, baseY: y,
      size: Math.random() * 2 + 0.5,
      color: this.colors[Math.floor(Math.random() * this.colors.length)],
      driftX: (Math.random() - 0.5) * (this.behavior === 'resilient' ? 0.4 : 0.15),
      driftY: (Math.random() - 0.5) * (this.behavior === 'resilient' ? 0.4 : 0.15),
      glow: Math.random() * 0.5 + 0.2,
      glowSpeed: Math.random() * 0.015 + 0.005,
      currentGlow: 0
    }
  }

  private updateStar(star: any) {
    star.baseX += star.driftX
    star.baseY += star.driftY
    if (star.baseX < 0) star.baseX = this.width
    if (star.baseX > this.width) star.baseX = 0
    if (star.baseY < 0) star.baseY = this.height
    if (star.baseY > this.height) star.baseY = 0
    const dx = this.mouseX - star.baseX
    const dy = this.mouseY - star.baseY
    const distance = Math.sqrt(dx * dx + dy * dy)
    const maxDistance = this.behavior === 'resilient' ? 300 : 200
    if (distance < maxDistance) {
      const force = (maxDistance - distance) / maxDistance
      const angle = Math.atan2(dy, dx)
      if (this.behavior === 'resilient') {
        star.x = star.baseX + Math.cos(angle) * (force * 25)
        star.y = star.baseY + Math.sin(angle) * (force * 25)
        star.currentGlow = Math.min(star.glow + force, 1)
      } else {
        star.x = star.baseX - Math.cos(angle) * (force * 12)
        star.y = star.baseY - Math.sin(angle) * (force * 12)
        star.currentGlow = Math.min(star.glow + force * 0.5, 1)
      }
    } else {
      star.x = star.baseX
      star.y = star.baseY
      star.currentGlow = star.glow
    }
    star.glow += star.glowSpeed
    if (star.glow > 0.9 || star.glow < 0.2) star.glowSpeed *= -1
  }

  private drawStar(star: any) {
    if (!this.ctx) return
    this.ctx.globalAlpha = star.currentGlow
    this.ctx.fillStyle = star.color
    this.ctx.beginPath()
    this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
    this.ctx.fill()
    if (this.behavior === 'resilient' && this.mouseX !== -1000) {
      const dx = this.mouseX - star.x
      const dy = this.mouseY - star.y
      const mouseDist = Math.sqrt(dx * dx + dy * dy)
      if (mouseDist < 180) {
        for (let idx = 0; idx < this.stars.length; idx += 2) {
          const otherStar = this.stars[idx]
          const dist = Math.sqrt((star.x - otherStar.x) ** 2 + (star.y - otherStar.y) ** 2)
          if (dist < 45) {
            this.ctx.beginPath()
            this.ctx.moveTo(star.x, star.y)
            this.ctx.lineTo(otherStar.x, otherStar.y)
            this.ctx.strokeStyle = star.color
            this.ctx.globalAlpha = (1 - dist / 45) * 0.25
            this.ctx.lineWidth = 0.5
            this.ctx.stroke()
          }
        }
      }
    }
  }

  private animate = () => {
    if (!this.ctx) return
    this.ctx.clearRect(0, 0, this.width, this.height)
    for (let i = 0; i < this.stars.length; i++) {
      this.updateStar(this.stars[i])
      this.drawStar(this.stars[i])
    }
    this.animationId = requestAnimationFrame(this.animate)
  }

  destroy() {
    if (this.animationId) cancelAnimationFrame(this.animationId)
    if (this.container && this.boundMouseMove) {
      this.container.removeEventListener('mousemove', this.boundMouseMove)
    }
    if (this.container && this.boundMouseLeave) {
      this.container.removeEventListener('mouseleave', this.boundMouseLeave)
    }
    if (this.boundResize) {
      window.removeEventListener('resize', this.boundResize)
    }
  }
}
