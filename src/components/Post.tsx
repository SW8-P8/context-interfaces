import React from 'react'
import Footer from './Post/Footer'
import Header from './Post/Header'

const Post = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="h-[500px] relative">{children}</div>
      <Footer />
    </>
  )
}

export default Post
