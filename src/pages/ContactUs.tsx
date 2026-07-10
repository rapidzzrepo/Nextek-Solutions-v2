import { useEffect, useRef } from 'react'
import { html } from '../data/ContactUs'
import { StarSystem } from '../utils/starSystem'
import { initMouseGlow } from '../utils/mouseGlow'

export default function ContactUs() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const cleanups: (() => void)[] = []

    const heroStars = new StarSystem('contact-star-bg', 'contact-hero')
    if (heroStars.canvas) cleanups.push(() => heroStars.destroy())
    cleanups.push(initMouseGlow('contact-hero', 'contact-hero-glow'))

    function updateHubTimes() {
      const hubs = [
        { id: 'time-ny', zone: 'America/New_York', label: 'EST' },
        { id: 'time-lon', zone: 'Europe/London', label: 'GMT' },
        { id: 'time-sin', zone: 'Asia/Singapore', label: 'SGT' }
      ]
      hubs.forEach(hub => {
        const element = document.getElementById(hub.id)
        if (element) {
          const time = new Intl.DateTimeFormat('en-US', {
            timeZone: hub.zone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
          }).format(new Date())
          element.textContent = `${time} ${hub.label}`
        }
      })
    }

    updateHubTimes()
    const interval = setInterval(updateHubTimes, 1000)

    const formGroups = document.querySelectorAll('.group')
    formGroups.forEach(group => {
      const input = group.querySelector('input, textarea')
      if (input) {
        input.addEventListener('focus', () => group.classList.add('is-focused'))
        input.addEventListener('blur', () => group.classList.remove('is-focused'))
      }
    })

    const form = document.getElementById('contact-form') as HTMLFormElement
    const submitBtn = document.getElementById('contact-submit-btn') as HTMLButtonElement

    const handleSubmit = async (e: SubmitEvent) => {
      e.preventDefault()
      submitBtn.disabled = true
      submitBtn.innerHTML = 'Sending...'

      const formData = new FormData(form)
      const systemDomain = formData.get('subject') as string || ''
      formData.set('subject', 'New Inquiry from Nextek Sol Website')
      formData.set('from_name', 'Nextek Sol Webapp')
      formData.append('domain', systemDomain)
      formData.append('access_key', '540d0f5b-cde7-4326-936f-84a4adad9f82')

      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        })
        const data = await res.json()
        if (data.success) {
          submitBtn.innerHTML = 'Sent Successfully ✓'
          submitBtn.classList.remove('bg-primary', 'hover:bg-tertiary')
          submitBtn.classList.add('bg-green-600')
          form.reset()
          setTimeout(() => {
            submitBtn.innerHTML = 'Send Inquiry'
            submitBtn.classList.remove('bg-green-600')
            submitBtn.classList.add('bg-primary', 'hover:bg-tertiary')
            submitBtn.disabled = false
          }, 2500)
        } else {
          submitBtn.innerHTML = 'Failed - Try Again'
          submitBtn.disabled = false
        }
      } catch {
        submitBtn.innerHTML = 'Failed - Try Again'
        submitBtn.disabled = false
      }
    }

    form?.addEventListener('submit', handleSubmit)

    return () => {
      cleanups.forEach(fn => fn())
      clearInterval(interval)
      form?.removeEventListener('submit', handleSubmit)
    }
  }, [])

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />
}
