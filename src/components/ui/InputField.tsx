interface InputFieldProps {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
  rows?: number
}

export default function InputField({ label, name, type = 'text', placeholder, required = false, rows }: InputFieldProps) {
  const baseClasses = "w-full bg-surface border border-outline-variant/40 rounded-ROUND_EIGHT p-4 focus:border-primary focus:ring-0 outline-none transition-all text-on-surface font-body-md input-focus-ring"

  return (
    <div className="space-y-2 group">
      <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant group-focus-within:text-primary transition-colors">
        {label}
      </label>
      {rows ? (
        <textarea
          className={`${baseClasses} min-h-[160px]`}
          name={name}
          placeholder={placeholder}
          required={required}
          rows={rows}
        />
      ) : (
        <input
          className={baseClasses}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
        />
      )}
    </div>
  )
}
