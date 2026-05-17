import React from 'react'

const CreateTsk = () => {
  return (
    <div className="max-w-2xl mx-auto px-0 py-0 border-amber-500 border-2">
        <form>       
        {/* Card */}
        <div className="bg-gray-800 rounded-2xl shadow-xl p-8 border border-red-500 border-opacity-50">
          
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Create Task
          </h2>
          
          <div className="space-y-5 border-amber-600 border-2 p-5 rounded-lg">
            
            {/* Task Title */}
            <div>
              <label className="block text-gray-300 font-medium mb-2">Task Title</label>
              <input 
                type="text"
                placeholder="Make a UI design"
                className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-300 font-medium mb-2">Description</label>
              <textarea 
                rows="4"
                placeholder="Detailed description of task (Max 500 word)"
                className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 resize-none"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-gray-300 font-medium mb-2">Date</label>
              <input 
                type="date"
                className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              />
            </div>

            {/* Assign To */}
            <div>
              <label className="block text-gray-300 font-medium mb-2">Assign To</label>
              <select className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500">
                <option value="" disabled selected>Select team member</option>
                <option>Vikas Neggi</option>
                <option>Rohit Sharma</option>
                <option>Priya Patel</option>
                <option>Amrit Singh</option>
              </select>
            </div>

            {/* Category */}
            <div>
              <label className="block text-gray-300 font-medium mb-2">Category</label>
              <div className="flex flex-wrap gap-4">
                {['Design', 'Development', 'Marketing', 'Testing'].map((cat) => (
                  <label key={cat} className="flex items-center gap-2">
                    <input type="radio" name="category" value={cat} className="accent-purple-500" />
                    <span className="text-gray-300">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Button */}
            <button className="w-full py-3 mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200">
              Create Task
            </button>

          </div>
        </div>
        </form>
      </div>
  )
}

export default CreateTsk