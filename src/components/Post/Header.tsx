import postHeader from '../../assets/instagram/post/post-header-1.png'

const Header = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r left-2 from-purple-500 via-pink-500 to-red-500 z-0 m-1 w-12" />
      <img src={postHeader} className="relative w-full pointer-events-none z-1" />
    </div>
  )
}
export default Header
