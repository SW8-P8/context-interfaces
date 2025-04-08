import BlurryImage from '../BlurryImage'
import ShowPhotoBtn from '../SeePhotoBtn'
import SensitiveWarning from '../SensitiveWarning'

const Baseline = ({ imageId, reveal, showWhy }: { imageId: number; reveal: () => void; showWhy: () => void }) => {
  return (
    <BlurryImage imageId={imageId}>
      <div className="flex flex-col w-full h-full text-white">
        <div className="flex flex-col justify-center h-full">
          <SensitiveWarning showWhy={showWhy} />
        </div>
        <ShowPhotoBtn reveal={reveal} />
      </div>
    </BlurryImage>
  )
}
export default Baseline
