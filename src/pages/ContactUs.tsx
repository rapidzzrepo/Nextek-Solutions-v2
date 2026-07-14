import { useEffect, useRef } from 'react'
import { html } from '../data/ContactUs'
import { StarSystem } from '../utils/starSystem'
import { initMouseGlow } from '../utils/mouseGlow'

const INQUIRY_EMAIL = 'umairshafi737@gmail.com'
const SUBJECT_LINE = 'Inquiry Request from NextekSol Website'

// TODO: When backend is re-enabled, remove client CC from mailto and use server-side auto-reply instead

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

    const handleSubmit = (e: SubmitEvent) => {
      e.preventDefault()

      const formData = new FormData(form)
      const firstName = String(formData.get('first_name') || '')
      const lastName = String(formData.get('last_name') || '')
      const fromEmail = String(formData.get('from_email') || '')
      const company = String(formData.get('company') || '')
      const subject = String(formData.get('subject') || '')
      const message = String(formData.get('message') || '')

      if (!firstName || !fromEmail || !subject || !message) return

      const fullName = [firstName, lastName].filter(Boolean).join(' ')

      const lines = [
        'Hello Nextek Sol Team,',
        '',
        `I would like to inquire about: ${subject}`,
        '',
        `Name: ${fullName}`,
        `Email: ${fromEmail}`,
        company ? `Organization: ${company}` : null,
        '',
        'Message:',
        message,
        '',
        'Best regards,',
        firstName
      ].filter((line): line is string => line !== null)

      const body = lines.join('%0A')
      const mailtoLink = `mailto:${INQUIRY_EMAIL}?subject=${encodeURIComponent(SUBJECT_LINE)}&body=${body}`

      submitBtn.innerHTML = 'Opening Email...'
      submitBtn.disabled = true

      window.location.href = mailtoLink

      setTimeout(() => {
        form.reset()
        submitBtn.innerHTML = 'Initialize Inquiry'
        submitBtn.disabled = false
      }, 2000)
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
