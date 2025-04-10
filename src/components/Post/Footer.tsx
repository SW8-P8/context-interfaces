import { useEffect, useState } from 'react'
import postFooter1 from '../../assets/instagram/post/post-footer-1.jpg'
import postFooter2 from '../../assets/instagram/post/post-footer-2.jpg'
import postFooter3 from '../../assets/instagram/post/post-footer-3.jpg'
import postFooter4 from '../../assets/instagram/post/post-footer-4.jpg'
import postFooter5 from '../../assets/instagram/post/post-footer-5.jpg'
import postFooter6 from '../../assets/instagram/post/post-footer-6.jpg'
import postFooter7 from '../../assets/instagram/post/post-footer-7.jpg'

const postFooters = [postFooter1, postFooter2, postFooter3, postFooter4, postFooter5, postFooter6, postFooter7]

const Footer = () => {
  const [postFooter, setPostFooter] = useState(postFooters[0])
  useEffect(() => {
    setPostFooter(postFooters[Math.floor(Math.random() * 7)])
  }, [])

  return <img src={postFooter} className="w-full pointer-events-none" />
}
export default Footer
