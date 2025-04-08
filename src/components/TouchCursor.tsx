import { useEffect, useState } from 'react'

const TouchCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      document.body.style.cursor = 'none'
    }
    window.addEventListener('mousemove', updatePosition)
    return () => window.removeEventListener('mousemove', updatePosition)
  }, [])

  return (
    <div
      className="pointer-events-none fixed z-[9999] w-6 h-6 bg-black/40 rounded-full transform -translate-x-1/2 -translate-y-1/2 border-2 border-white/60"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  )
}

export default TouchCursor
