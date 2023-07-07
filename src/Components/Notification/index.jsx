const Notification = ({ text }) => {
  return (
    <div className="text-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-lime text-white rounded-lg shadow-lg p-4 z-50">
      <p className="text-2xl font-bold xs:text-lg">{text}</p>
    </div>
  )
}

export default Notification
