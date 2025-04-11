import footer from '../../assets/instagram/feed/footer.png'

const Footer = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r ml-auto mr-4 from-teal-400 via-blue-500 to-violet-600 z-0 m-1 w-12" />
      <img src={footer} className="relative w-full pointer-events-none z-1" />
    </div>
  )
}
export default Footer
