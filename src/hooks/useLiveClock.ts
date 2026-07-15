import { useEffect } from 'react'

interface ClockHub {
  id: string
  zone: string
  label: string
}

export function useLiveClock(hubs: ClockHub[]) {
  useEffect(() => {
    const updateTimes = () => {
      hubs.forEach(hub => {
        const element = document.getElementById(hub.id)
        if (element) {
          const time = new Intl.DateTimeFormat('en-US', {
            timeZone: hub.zone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
          }).format(new Date())
          element.textContent = `${time} ${hub.label}`
        }
      })
    }

    updateTimes()
    const interval = setInterval(updateTimes, 1000)

    return () => clearInterval(interval)
  }, [hubs])
}
