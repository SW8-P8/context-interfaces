import caughtUp from '../../assets/instagram/feed/caught-up.jpg'

const CaughtUp = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-black/30 h-[1px] w-4/5 mt-5"></div>
      <img src={caughtUp} className="w-full pointer-events-none" />
    </div>
  )
}
export default CaughtUp
