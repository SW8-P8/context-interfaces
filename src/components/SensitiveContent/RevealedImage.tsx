const RevealedImage = ({ unreveal }: { unreveal: () => void }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-black h-full appear">
      <p className="text-white text-sm font-normal">This is an explicit image</p>
      <p className="text-white text-xs font-extralight">(Purposefully not displayed)</p>
      <button onClick={unreveal} className="ig-btn mt-5">
        <span>Go Back</span>
      </button>
    </div>
  )
}

export default RevealedImage
