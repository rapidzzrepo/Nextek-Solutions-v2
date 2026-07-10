export function initPrecisionStars(canvasId: string): () => void {
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement
  if (!canvas) return () => {}

  const onResize = () => {
    const parent = canvas.parentElement
    if (parent && (canvas.width !== parent.clientWidth || canvas.height !== parent.clientHeight)) {
      canvas.width = parent.clientWidth
      canvas.height = parent.clientHeight
    }
  }
  window.addEventListener('resize', onResize)
  onResize()

  const gl = (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null
  if (!gl) return () => window.removeEventListener('resize', onResize)

  const vs = 'attribute vec2 a_position; varying vec2 v_texCoord; void main() { v_texCoord = a_position * 0.5 + 0.5; gl_Position = vec4(a_position, 0.0, 1.0); }'
  const fs = 'precision highp float; uniform float u_time; uniform vec2 u_resolution; uniform vec2 u_mouse; varying vec2 v_texCoord; float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); } void main() { vec2 uv = v_texCoord; vec2 mouse = u_mouse / u_resolution; vec3 bg = vec3(0.0, 0.0, 0.0); vec3 star1 = vec3(1.0, 1.0, 1.0); vec3 star2 = vec3(0.85, 0.85, 1.0); vec3 halo = vec3(0.388, 0.055, 0.831); vec3 color = bg; for (float i = 0.0; i < 3.0; i++) { float s = 50.0 + i * 25.0; vec2 g = floor(uv * s); vec2 f = fract(uv * s) - 0.5; float h = hash(g + i * 1.5); if (h > 0.91) { float d = length((uv-mouse)*vec2(u_resolution.x/u_resolution.y,1.0)); float m = smoothstep(0.3, 0.0, d); float tw = sin(u_time * (h * 3.5) + h * 6.28) * 0.5 + 0.5; float r = 0.025 + m * 0.035; float st = smoothstep(r, 0.0, length(f)); vec3 c = mix(star1, star2, h); color += st * c * tw * (2.2 + m * 0.8); } } float gd = length((uv-mouse)*vec2(u_resolution.x/u_resolution.y,1.0)); color += halo * (exp(-gd * 5.0) * 0.25); gl_FragColor = vec4(color, 1.0); }'

  const prog = gl.createProgram()!
  ;[gl.VERTEX_SHADER, gl.FRAGMENT_SHADER].forEach((type, i) => {
    const s = gl.createShader(type)!
    gl.shaderSource(s, i === 0 ? vs : fs)
    gl.compileShader(s)
    gl.attachShader(prog, s)
  })
  gl.linkProgram(prog)
  gl.useProgram(prog)

  const buf = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buf)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW)

  const pos = gl.getAttribLocation(prog, 'a_position')
  gl.enableVertexAttribArray(pos)
  gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0)

  const uTime = gl.getUniformLocation(prog, 'u_time')
  const uRes = gl.getUniformLocation(prog, 'u_resolution')
  const uMouse = gl.getUniformLocation(prog, 'u_mouse')

  let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }

  const onMouseMove = (e: MouseEvent) => {
    const rect = canvas.getBoundingClientRect()
    mouse.x = ((e.clientX - rect.left) / rect.width) * canvas.width
    mouse.y = (1.0 - (e.clientY - rect.top) / rect.height) * canvas.height
  }
  window.addEventListener('mousemove', onMouseMove)

  let animId = 0
  const render = (t: number) => {
    gl.viewport(0, 0, canvas.width, canvas.height)
    if (uTime) gl.uniform1f(uTime, t * 0.001)
    if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height)
    if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y)
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    animId = requestAnimationFrame(render)
  }
  render(0)

  return () => {
    cancelAnimationFrame(animId)
    window.removeEventListener('resize', onResize)
    window.removeEventListener('mousemove', onMouseMove)
  }
}
