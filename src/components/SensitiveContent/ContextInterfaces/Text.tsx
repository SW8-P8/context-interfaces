import BlurryImage from '../BlurryImage'
import ShowPhotoBtn from '../SeePhotoBtn'
import SensitiveWarning from '../SensitiveWarning'
import { context } from '../../../data/context.ts'

const Text = ({ imageId, reveal, showWhy }: { imageId: number; reveal: () => void; showWhy: () => void }) => {
  return (
    <BlurryImage imageId={imageId}>
      <div className="flex flex-col w-full h-full text-white text-center">
        <div className="flex h-full"></div>
        <div className="flex flex-col h-full items-center justify-center">
          <SensitiveWarning showWhy={showWhy} />
        </div>
        <div className="flex flex-col h-full justify-center items-center">
          <p className="text-sm font-normal mt-5">Content Description</p>
          <p className="text-xs font-extralight w-3/5">{context[imageId].description.slice(0, -1)}</p>
        </div>
        <ShowPhotoBtn reveal={reveal} />
      </div>
    </BlurryImage>
  )
}
export default Text
