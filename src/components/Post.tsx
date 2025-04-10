import React from 'react'
import Footer from './Post/Footer'
import Header from './Post/Header'

const Post = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {/* Post class needed for screenshot feature */}
      <div className="h-[500px] relative post">{children}</div>
      <Footer />
    </>
  )
}

export default Post
