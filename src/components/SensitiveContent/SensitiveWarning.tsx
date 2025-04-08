import crossedEye from '../../assets/icons/crossed-eye.svg'
import ShowWhyBtn from './ShowWhyBtn'

const SensitiveWarning = ({ showWhy }: { showWhy: () => void }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full ">
      <img src={crossedEye} className="w-10 mb-5 pointer-events-none" />
      <p className="text-sm font-normal">Sensitive Content</p>
      <p className="text-xs font-extralight text-center mb-5">
        This photo contains sensitive content which some <br />
        people may find offensive or disturbing
      </p>
      <ShowWhyBtn showWhy={showWhy} />
    </div>
  )
}

export default SensitiveWarning
