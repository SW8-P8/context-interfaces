const ShowPhotoBtn = ({ reveal }: { reveal: () => void }) => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="bg-white/30 h-[1px] w-4/5 "></div>
      <button onClick={reveal} className="p-1 px-2 hover:bg-white/40 rounded-sm my-2 text-white font-light text-sm">
        See Photo
      </button>
    </div>
  )
}
export default ShowPhotoBtn
