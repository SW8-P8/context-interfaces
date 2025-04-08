import { useState, useEffect } from 'react'
import { ContextInterface, contextValues } from './types/ContextInterface'
import TouchCursor from './components/TouchCursor'
import Feed from './components/Feed'
import Post from './components/Post'
import Phone from './components/Phone'
import SentitiveContent from './components/SensitiveContent'

function App() {
  const [contextInterface, setContextInterface] = useState<ContextInterface>('baseline')
  const [imageIds, setImageIds] = useState<number[]>([])
  const [isMobile, setIsMobile] = useState(false)

  function handleUrlParams() {
    const params = new URLSearchParams(window.location.search)
    const imagesParam = params.get('images')
    const contextParam = params.get('context-interface')

    const ids = imagesParam ? imagesParam.split(',') : []
    setImageIds(ids.map((id) => parseInt(id)))
    setContextInterface((contextParam as ContextInterface) || 'baseline')
  }

  function handleMobileCheck() {
    const userAgent = navigator.userAgent
    const mobileRegex = /android|iphone|ipad|ipod|opera mini|iemobile|wpdesktop/i
    setIsMobile(mobileRegex.test(userAgent))
  }

  useEffect(() => {
    handleUrlParams()
    handleMobileCheck()
  }, [])

  if (import.meta.env.PROD) {
    return (
      <div className="flex w-screen h-screen justify-center items-center overflow-y-hidden select-none">
        {!isMobile && <TouchCursor />}
        <Phone showBorder={!isMobile}>
          <Feed>
            {imageIds.map((id) => (
              <Post key={id}>
                <SentitiveContent imageId={id} contextInterface={contextInterface} />
              </Post>
            ))}
          </Feed>
        </Phone>
      </div>
    )
  } else {
    return (
      <div className="flex flex-col w-screen h-screen justify-center items-center select-none py-5">
        <button onClick={() => setIsMobile((cur) => !cur)} className="ig-btn-inverse">
          Toggle phone border
        </button>
        <div className="flex w-full justify-center">
          <div className="flex flex-row h-min items-center overflow-x-auto p-5 space-x-5 no-scrollbar">
            <TouchCursor />
            {[...contextValues].map((contextInterface, idx) => (
              <div className="flex flex-col items-center" key={idx}>
                <div
                  className="transform scale-75 -me-[110px] -mb-[200px]"
                  style={{ transformOrigin: '0px 0px' }}
                  key={idx}
                >
                  <Phone showBorder={!isMobile}>
                    <Feed>
                      {Array.from({ length: 30 }, (_, i) => i).map((id, idx) => (
                        <Post key={idx}>
                          <SentitiveContent imageId={id} contextInterface={contextInterface} />
                        </Post>
                      ))}
                    </Feed>
                  </Phone>
                </div>
                <p className="text-center font-thin uppercase">{contextInterface}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default App
