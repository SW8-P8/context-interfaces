const ShowWhyBtn = ({ showWhy }: { showWhy: () => void }) => {
  return (
    <button onClick={showWhy} className="ig-btn">
      <span>See Why</span>
    </button>
  )
}
export default ShowWhyBtn
