export function initMouseGlow(containerId: string, glowId: string): () => void {
  const container = document.getElementById(containerId)
  if (!container) return () => {}

  let glow = document.getElementById(glowId) as HTMLDivElement | null
  if (!glow) {
    glow = document.createElement('div')
    glow.id = glowId
    glow.style.cssText = 'position:absolute;pointer-events:none;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,rgba(180,140,255,0.2) 0%,rgba(180,140,255,0.06) 40%,transparent 70%);transform:translate(-50%,-50%);transition:opacity .3s;opacity:0;z-index:1;'
    container.style.position = 'relative'
    container.appendChild(glow)
  }

  let timeout: ReturnType<typeof setTimeout>

  const onMouseMove = (e: MouseEvent) => {
    const rect = container.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    glow!.style.left = x + 'px'
    glow!.style.top = y + 'px'
    glow!.style.opacity = '1'
    clearTimeout(timeout)
    timeout = setTimeout(() => { glow!.style.opacity = '0' }, 2000)
  }

  container.addEventListener('mousemove', onMouseMove)

  return () => {
    container.removeEventListener('mousemove', onMouseMove)
    clearTimeout(timeout)
    glow?.remove()
  }
}
