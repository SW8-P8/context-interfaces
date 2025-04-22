import { context } from '../../data/context.ts'

const BlurryImage = ({ imageId, children }: { imageId: number; children: React.ReactNode }) => {
  if (!context[imageId]) {
    return <div>Image does not exists</div>
  }

  return (
    <div
      className="bg-cover bg-center bg-no-repeat bg-black relative h-full appear"
      style={{ backgroundImage: `url(/original/${context[imageId].filename})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      <div className="h-full w-full backdrop-blur-xs">{children}</div>
    </div>
  )
}

export default BlurryImage
