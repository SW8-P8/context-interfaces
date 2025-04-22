import BlurryImage from '../BlurryImage'
import ShowPhotoBtn from '../SeePhotoBtn'
import SensitiveWarning from '../SensitiveWarning'
import { context } from '../../../data/context.ts'

const TriggerWarning = ({ imageId, reveal, showWhy }: { imageId: number; reveal: () => void; showWhy: () => void }) => {
  return (
    <BlurryImage imageId={imageId}>
      <div className="flex flex-col w-full h-full text-white text-center">
        <div className="flex h-full"></div>
        <div className="flex flex-col h-full items-center justify-center">
          <SensitiveWarning showWhy={showWhy} />
        </div>
        <div className="flex flex-col h-full justify-center items-center">
          <p className="text-sm font-normal mt-5">Trigger Warnings</p>
          <div className="flex flex-wrap justify-center items-center gap-1 w-4/5 mt-2">
            {context[imageId].trggerWarnings.map((warning, idx) => (
              <div key={idx} className="flex items-center px-2 py-1 bg-white/10 rounded-lg">
                <span className="text-xs font-extralight">{warning}</span>
              </div>
            ))}
          </div>
        </div>
        <ShowPhotoBtn reveal={reveal} />
      </div>
    </BlurryImage>
  )
}
export default TriggerWarning
