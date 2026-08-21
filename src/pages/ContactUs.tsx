import { useState, useEffect, type FormEvent } from 'react'
import { useStarSystem, useMouseGlow } from '../hooks'
import { Badge, Button, Icon, StarCanvas } from '../components/ui'
import {
  heroBadge,
  heroTitle,
  heroDescription,
  formFields,
  contactInfo,
  hubs,
  type FormField,
} from '../data/ContactUs'

const INQUIRY_EMAIL = 'info@nexteksol.com'
const SUBJECT_LINE = 'Inquiry Request from NextekSol Website'

export default function ContactUs() {
  useStarSystem('contact-star-bg', 'contact-hero')
  useMouseGlow('contact-hero', 'contact-hero-glow')

  const [formData, setFormData] = useState<Record<string, string>>(() =>
    Object.fromEntries(formFields.map((f) => [f.name, '']))
  )
  const [submitting, setSubmitting] = useState(false)
  const [hubTimes, setHubTimes] = useState(() =>
    hubs.map((h) => getTimeForZone(h.timezone))
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setHubTimes(hubs.map((h) => getTimeForZone(h.timezone)))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  function handleChange(name: string, value: string) {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const { first_name, last_name, from_email, company, subject, message } = formData
    if (!first_name || !from_email || !subject || !message) return

    const fullName = [first_name, last_name].filter(Boolean).join(' ')

    const lines = [
      'Hello Nextek Sol Team,',
      '',
      `I would like to inquire about: ${subject}`,
      '',
      `Name: ${fullName}`,
      `Email: ${from_email}`,
      company ? `Organization: ${company}` : null,
      '',
      'Message:',
      message,
      '',
      'Best regards,',
      first_name,
    ].filter((line): line is string => line !== null)

    const body = lines.join('%0A')
    const mailtoLink = `mailto:${INQUIRY_EMAIL}?subject=${encodeURIComponent(SUBJECT_LINE)}&body=${body}`

    setSubmitting(true)
    window.location.href = mailtoLink

    setTimeout(() => {
      setFormData(Object.fromEntries(formFields.map((f) => [f.name, ''])))
      setSubmitting(false)
    }, 2000)
  }

  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero-gradient relative overflow-hidden bg-surface min-h-[750px] md:min-h-[600px] py-16 md:py-section-gap border-b border-outline-variant/20 flex items-center"
        id="contact-hero"
      >
        <StarCanvas id="contact-star-bg" />
        <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop text-center relative z-10">
          <Badge pulse className="mb-8">
            {heroBadge}
          </Badge>
          <h1 className="font-display-lg text-[28px] sm:text-display-lg-mobile md:text-display-lg font-bold mb-6 leading-tight text-on-surface tracking-tight">
            {heroTitle.text}
            <span className="text-gradient">{heroTitle.highlight}</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
            {heroDescription}
          </p>
        </div>
      </section>

      {/* Contact Interface */}
      <section className="py-16 md:py-section-gap bg-surface-container-lowest" id="contact-interface">
        <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop grid md:grid-cols-12 gap-gutter items-start">
          {/* Technical Form */}
          <div className="md:col-span-8">
            <div className="glass-card p-6 md:p-10 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="mb-8 flex items-center justify-between">
                <h2 className="font-headline-lg text-headline-lg text-on-surface">System Intake Form</h2>
                <span className="text-on-surface-variant/40 font-mono text-xs">REF: FRM-2024-NT</span>
              </div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <FormFieldPairs fields={formFields} values={formData} onChange={handleChange} />
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-5 rounded-ROUND_EIGHT font-sora font-semibold text-body-md shadow-xl shadow-primary/10 active:scale-[0.99]"
                  >
                    {submitting ? 'Opening Email...' : 'Initialize Inquiry'}
                    {!submitting && <Icon name="arrow_forward" className="text-sm" />}
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Side Info */}
          <div className="md:col-span-4 space-y-8 md:space-y-12 pl-0 md:pl-8">
            <div className="space-y-8">
              <h3 className="font-headline-lg text-[20px] sm:text-headline-lg text-on-surface flex items-center gap-3">
                Direct Access
                <span className="w-8 h-[1px] bg-outline-variant" />
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="group flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 overflow-hidden">
                      {item.image ? (
                        <img className="w-full h-full object-cover" src={item.image} alt={item.label} />
                      ) : (
                        <Icon name={item.icon} />
                      )}
                    </div>
                    <div>
                      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">
                        {item.label}
                      </p>
                      <p className="font-sora font-semibold text-on-surface">{item.value}</p>
                      {item.subValue && (
                        <p className="text-sm text-on-surface-variant">{item.subValue}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 md:p-8 rounded-xl bg-surface-container-low border border-outline-variant/30">
              <h4 className="font-sora font-bold text-on-surface mb-4">Availability</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                Engineering teams operate across three global shifts to ensure 24/7 technical oversight and deployment capability.
              </p>
              <div className="flex items-center gap-2 text-primary font-bold">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                <span className="text-sm">SYSTEMS ONLINE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Hubs Section */}
      <section className="py-16 md:py-section-gap bg-surface" id="hubs">
        <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end text-center md:text-left mb-16 gap-8">
            <div className="space-y-4">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">Distributed Presence</span>
              <h2 className="font-headline-xl text-[22px] sm:text-headline-xl text-on-surface">Strategic Global Hubs</h2>
              <p className="text-on-surface-variant max-w-xl text-body-md">
                Our sovereign engineering nodes are strategically placed in key financial and technology corridors to provide local expertise with global reach.
              </p>
            </div>
            <div className="flex gap-12 items-center">
              <div className="text-center">
                <div className="text-primary font-bold font-sora text-2xl md:text-3xl">24/7</div>
                <div className="font-label-sm text-label-sm text-on-surface-variant uppercase">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-primary font-bold font-sora text-2xl md:text-3xl">3</div>
                <div className="font-label-sm text-label-sm text-on-surface-variant uppercase">HeadQuarters</div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-gutter">
            {hubs.map((hub, i) => (
              <div key={hub.code} className="glass-card rounded-xl overflow-hidden hover:translate-y-[-4px] transition-all duration-300 group">
                <div className="p-6 md:p-8 space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-sora font-bold text-xl text-on-surface group-hover:text-primary transition-colors">
                        {hub.city}
                      </h3>
                      <p className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">
                        {hub.label}
                      </p>
                    </div>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-[10px] font-bold">
                      {hub.code}
                    </span>
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed font-body-md">
                    {hub.addressLines.map((line, j) => (
                      <span key={j}>
                        {line}
                        {j < hub.addressLines.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                  <div className="space-y-2 pt-4 border-t border-outline-variant/30">
                    <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                      <Icon name="alternate_email" className="text-primary text-lg" />
                      <span>{hub.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                      <Icon name="call" className="text-primary text-lg" />
                      <span>{hub.phone}</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon name="schedule" className="text-primary text-lg" />
                      <span className="font-mono text-xs text-on-surface-variant">
                        {hubTimes[i]} {hub.timezoneLabel}
                      </span>
                    </div>
                    <Icon name="hub" className="text-outline-variant group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function getTimeForZone(timezone: string): string {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(new Date())
}

function FormFieldPairs({
  fields,
  values,
  onChange,
}: {
  fields: FormField[]
  values: Record<string, string>
  onChange: (name: string, value: string) => void
}) {
  const rows: FormField[][] = []
  let i = 0
  while (i < fields.length) {
    const first = fields[i]
    if (first.halfWidth && i + 1 < fields.length && fields[i + 1].halfWidth) {
      rows.push([first, fields[i + 1]])
      i += 2
    } else {
      rows.push([first])
      i += 1
    }
  }

  return (
    <>
      {rows.map((row, ri) => (
        <div key={ri} className={row.length === 2 ? 'grid md:grid-cols-2 gap-6' : ''}>
          {row.map((field) => (
            <div key={field.name} className="space-y-2 group">
              <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant group-focus-within:text-primary transition-colors">
                {field.label}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  className="w-full bg-surface border border-outline-variant/40 rounded-ROUND_EIGHT p-4 focus:border-primary focus:ring-0 outline-none transition-all text-on-surface font-body-md input-focus-ring min-h-[160px]"
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                  rows={field.rows ?? 5}
                  value={values[field.name] ?? ''}
                  onChange={(e) => onChange(field.name, e.target.value)}
                />
              ) : (
                <input
                  className="w-full bg-surface border border-outline-variant/40 rounded-ROUND_EIGHT p-4 focus:border-primary focus:ring-0 outline-none transition-all text-on-surface font-body-md input-focus-ring"
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.required}
                  value={values[field.name] ?? ''}
                  onChange={(e) => onChange(field.name, e.target.value)}
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </>
  )
}
