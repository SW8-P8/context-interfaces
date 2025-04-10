import { useEffect, useState } from 'react'
import WhyBoxContent from '../../assets/instagram/post/why-box.png'

const WhyBox = ({ show }: { show: boolean }) => {
  const [shouldRender, setShouldRender] = useState(show)
  const [animationClass, setAnimationClass] = useState('')

  useEffect(() => {
    if (show) {
      setShouldRender(true)
      setAnimationClass('slide-up')
    } else {
      setAnimationClass('slide-down')
      setTimeout(() => setShouldRender(false), 400) // match animation duration
    }
  }, [show])

  if (!shouldRender) return null

  return (
    <div
      className={`absolute bottom-0 left-0 w-full flex flex-col justify-center items-center bg-white -mb-1 pt-4 rounded-t-3xl ${animationClass}`}
    >
      <p className="font-semibold">Why this post is covered</p>
      <div className="w-4/5 h-[1px] bg-black mt-4"></div>
      <img src={WhyBoxContent} className="pointer-events-none" />
    </div>
  )
}

export default WhyBox
