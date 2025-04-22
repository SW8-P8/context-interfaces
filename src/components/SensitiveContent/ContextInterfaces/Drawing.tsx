import { context } from '../../../data/context.ts'
import ShowWhyBtn from '../ShowWhyBtn'

const Drawing = ({ imageId, reveal, showWhy }: { imageId: number; reveal: () => void; showWhy: () => void }) => {
  if (!context[imageId]) {
    return <div>Image does not exists</div>
  }

  return (
    <div
      className="bg-cover bg-center bg-no-repeat bg-black relative h-full appear"
      style={{ backgroundImage: `url(/drawing/${context[imageId].filename})` }}
    >
      <div className="flex flex-col w-full h-full text-white">
        <div className="flex flex-col justify-center items-center bg-black/70 px-2 backdrop-blur-sm py-3 rounded-2xl m-2 space-y-2">
          <div className="flex flex-col items-center w-4/5">
            <p className="text-sm font-normal">Sensitive Content</p>
            <p className="text-xs font-extralight text-center">
              This photo contains sensitive content which some people may find offensive or disturbing. Therefore it has
              been masked with a drawing filter
            </p>
          </div>
          <ShowWhyBtn showWhy={showWhy} />
        </div>
        <div className="flex h-full"></div>
        <div className="flex flex-col w-full justify-center items-center bg-black/70  px-2 backdrop-blur-sm">
          <button onClick={reveal} className="p-1 px-2 hover:bg-white/40 rounded-sm my-2 text-white font-light text-sm">
            See Photo
          </button>
        </div>
      </div>
    </div>
  )
}
export default Drawing
