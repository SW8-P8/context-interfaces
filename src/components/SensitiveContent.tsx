import { useState, useEffect } from 'react'
import { ContextInterface } from '../types/ContextInterface'
import Baseline from './SensitiveContent/ContextInterfaces/Baseline'
import Text from './SensitiveContent/ContextInterfaces/Text'
import TriggerWarning from './SensitiveContent/ContextInterfaces/TriggerWarning'
import Drawing from './SensitiveContent/ContextInterfaces/Drawing'
import RevealedImage from './SensitiveContent/RevealedImage'
import WhyBox from './SensitiveContent/WhyBox'

const componentMap = {
  baseline: Baseline,
  text: Text,
  triggerWarning: TriggerWarning,
  drawing: Drawing,
}

const SentitiveContent = ({ imageId, contextInterface }: { imageId: number; contextInterface: ContextInterface }) => {
  const [revealed, setRevealed] = useState(false)
  const [showWhy, setShowWhy] = useState(false)

  useEffect(() => {
    const handleRemove = () => setShowWhy(false)
    document.addEventListener('mousedown', handleRemove)
    document.addEventListener('scroll', handleRemove, true)
    return () => {
      document.removeEventListener('mousedown', handleRemove)
      document.removeEventListener('scroll', handleRemove, true)
    }
  })

  if (revealed) {
    return <RevealedImage unreveal={() => setRevealed(false)} />
  }

  const Component = componentMap[contextInterface]

  return (
    <>
      {Component && <Component imageId={imageId} reveal={() => setRevealed(true)} showWhy={() => setShowWhy(true)} />}
      <WhyBox show={showWhy} />
    </>
  )
}

export default SentitiveContent
