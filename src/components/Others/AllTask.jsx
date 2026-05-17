const AllTask = () => {
  return (
    <div className="mt-4 p-4 flex flex-col gap-3 overflow-auto h-90 ">
      
      <div className="bg-gray-800 rounded-lg p-4 shadow-md">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 border-amber-400 border-2 p-3 rounded-lg">
          <div>
            <h2 className="text-lg font-bold text-white">Rohit</h2>
            <h3 className="text-gray-300">make a ui design</h3>
          </div>
          <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-500/10 rounded-full w-fit">
            Active
          </span>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-4 shadow-md">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <div>
            <h2 className="text-lg font-bold text-white">Jiya</h2>
            <h3 className="text-gray-300">make a college design</h3>
          </div>
          <span className="text-yellow-500 text-sm font-medium px-2 py-1 bg-yellow-500/10 rounded-full w-fit">
            In Progress
          </span>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-4 shadow-md">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <div>
            <h2 className="text-lg font-bold text-white">Priya</h2>
            <h3 className="text-gray-300">make a website design</h3>
          </div>
          <span className="text-blue-500 text-sm font-medium px-2 py-1 bg-blue-500/10 rounded-full w-fit">
            Pending
          </span>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-4 shadow-md">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <div>
            <h2 className="text-lg font-bold text-white">Amrit</h2>
            <h3 className="text-gray-300">make an app design</h3>
          </div>
          <span className="text-purple-500 text-sm font-medium px-2 py-1 bg-purple-500/10 rounded-full w-fit">
            Review
          </span>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-4 shadow-md">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <div>
            <h2 className="text-lg font-bold text-white">Vikas</h2>
            <h3 className="text-gray-300">make a software design</h3>
          </div>
          <span className="text-orange-500 text-sm font-medium px-2 py-1 bg-orange-500/10 rounded-full w-fit">
            On Hold
          </span>
        </div>
      </div>

    </div>
  )
}

export default AllTask