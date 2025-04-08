import iphoneFrame from '../assets/device.png'

const Phone = ({ showBorder: showBorder, children }: { showBorder: boolean; children: React.ReactNode }) => {
  if (!showBorder) {
    return (
      <div className="flex no-scrollbar border-2 border-gray-300 w-[433px] h-[879px] overflow-y-auto">{children}</div>
    )
  }

  return (
    <div className="relative w-[433px] h-[879px] ">
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute">
        <clipPath id="viewport-mask">
          <path d="M61.9942 0H117.789C120.279 0 122.298 2.01925 122.298 4.51035V10.7121C122.298 21.6103 131.129 30.4449 142.023 30.4449H248.54C259.435 30.4449 268.266 21.6103 268.266 10.7121V4.51035C268.266 2.01925 270.285 0 272.775 0H328.006C348.013 0 363.37 2.31491 374.501 12.9673C386.3 24.258 390 36.3647 390 62.0174V681.122C390 685.81 390 686.962 390 689.81V782.31C390 807.963 386.864 819.742 375.065 831.033C363.933 841.685 348.577 844 328.569 844H62.5578C42.5506 844 27.194 841.685 16.0621 831.033C4.2632 819.742 0.000287411 807.463 0.000287411 781.81V165.31C0.000690563 162.31 0 157.328 0 154.48V62.0174C0 36.3647 3.69962 24.258 15.4986 12.9673C26.6304 2.31491 41.987 0 61.9942 0Z"></path>
        </clipPath>
      </svg>

      <div
        className="w-full h-full"
        style={{
          backgroundImage: `url(${iphoneFrame})`,
          filter: `drop-shadow(rgb(169, 169, 169) 0px 10px 15px)`,
          backgroundSize: `100%`,
        }}
      >
        <div
          className="absolute flex w-[390px] h-[844px] top-[18px] left-[23px] "
          style={{
            clipPath: 'url(#viewport-mask)',
            transformOrigin: '0px 0px',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default Phone
