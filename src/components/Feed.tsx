import StatusBar from './Feed/StatusBar'
import Footer from './Feed/Footer'
import ForYouBar from './Feed/ForYouBar'
import { useScrollContainer } from 'react-indiana-drag-scroll'

const Feed = ({ children }: { children: React.ReactNode }) => {
  const scrollContainer = useScrollContainer()

  return (
    <div className="relative flex flex-col overflow-hidden bg-white">
      <div className="sticky top-0 left-0 w-full">
        <StatusBar />
      </div>
      <div className="overflow-y-auto no-scrollbar" ref={scrollContainer.ref}>
        <ForYouBar />
        {children}
      </div>
      <div className="sticky bottom-0 left-0 w-full">
        <Footer />
      </div>
    </div>
  )
}
export default Feed
