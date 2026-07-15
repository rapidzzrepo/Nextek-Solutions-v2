import { useEffect, useRef } from 'react'
import { html } from '../data/ContactUs'
import { INQUIRY_EMAIL, SUBJECT_LINE } from '../data/contactInfo'
import { useStarSystem } from '../hooks/useStarSystem'
import { useMouseGlow } from '../hooks/useMouseGlow'
import { useLiveClock } from '../hooks/useLiveClock'

const HUBS = [
  { id: 'time-ny', zone: 'America/New_York', label: 'EST' },
  { id: 'time-lon', zone: 'Europe/London', label: 'GMT' },
  { id: 'time-sin', zone: 'Asia/Singapore', label: 'SGT' },
]

function initFormFocus(): () => void {
  const groups = document.querySelectorAll('.group')
  const cleanups: Array<{ el: Element; focus: () => void; blur: () => void }> = []

  groups.forEach(group => {
    const input = group.querySelector('input, textarea')
    if (input) {
      const focus = () => group.classList.add('is-focused')
      const blur = () => group.classList.remove('is-focused')
      input.addEventListener('focus', focus)
      input.addEventListener('blur', blur)
      cleanups.push({ el: input, focus, blur })
    }
  })

  return () => {
    cleanups.forEach(({ el, focus, blur }) => {
      el.removeEventListener('focus', focus)
      el.removeEventListener('blur', blur)
    })
  }
}

function initFormSubmit(): () => void {
  const form = document.getElementById('contact-form') as HTMLFormElement | null
  const submitBtn = document.getElementById('contact-submit-btn') as HTMLButtonElement | null
  if (!form || !submitBtn) return () => {}

  const handleSubmit = (e: Event) => {
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
      firstName,
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

  form.addEventListener('submit', handleSubmit as EventListener)
  return () => form.removeEventListener('submit', handleSubmit as EventListener)
}

export default function ContactUs() {
  const ref = useRef<HTMLDivElement>(null)

  useStarSystem('contact-star-bg', 'contact-hero')
  useMouseGlow('contact-hero', 'contact-hero-glow')
  useLiveClock(HUBS)

  useEffect(() => {
    if (!ref.current) return
    const cleanups: (() => void)[] = []

    cleanups.push(initFormFocus())
    cleanups.push(initFormSubmit())

    return () => cleanups.forEach(fn => fn())
  }, [])

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />
}
