import React from 'react'

const TaskList = () => {
  return (
    <div id="tasklist" className="bg-transparent rounded-lg mt-4 h-[55%] w-full overflow-x-auto overflow-y-hidden">
      {/* Custom Scrollbar */}
      <style>{`
        #tasklist::-webkit-scrollbar {
          height: 6px;
        }
        #tasklist::-webkit-scrollbar-track {
          background: #1e1e2e;
          border-radius: 10px;
        }
        #tasklist::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
          border-radius: 10px;
        }
      `}</style>

      {/* Horizontal Scrollable Container */}
      <div className="flex flex-nowrap gap-5 h-full w-max px-4">
        
        {/* Card 1 - Purple Theme */}
        <div className="flex-shrink-0 w-80 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-white/10">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-bold text-xl text-white">Design System</h3>
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">📐</span>
            </div>
          </div>
          <p className="text-white/80 text-sm mb-3">Create component library</p>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-white/60 text-xs">📅</span>
            <h4 className="text-white/70 text-sm">Due: 20 Feb 2026</h4>
          </div>
          <span className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm">
            ⚡ High Priority
          </span>
        </div>

        {/* Card 2 - Blue Theme */}
        <div className="flex-shrink-0 w-80 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-white/10">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-bold text-xl text-white">API Integration</h3>
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">🔌</span>
            </div>
          </div>
          <p className="text-white/80 text-sm mb-3">Connect backend endpoints</p>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-white/60 text-xs">📅</span>
            <h4 className="text-white/70 text-sm">Due: 25 Feb 2026</h4>
          </div>
          <span className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm">
            📊 Medium Priority
          </span>
        </div>

        {/* Card 3 - Green Theme */}
        <div className="flex-shrink-0 w-80 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-white/10">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-bold text-xl text-white">Testing</h3>
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">🧪</span>
            </div>
          </div>
          <p className="text-white/80 text-sm mb-3">Write unit tests</p>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-white/60 text-xs">📅</span>
            <h4 className="text-white/70 text-sm">Due: 28 Feb 2026</h4>
          </div>
          <span className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm">
            🐢 Low Priority
          </span>
        </div>

        {/* Card 4 - Red Theme */}
        <div className="flex-shrink-0 w-80 bg-gradient-to-br from-rose-500 to-rose-700 rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-white/10">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-bold text-xl text-white">Deployment</h3>
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">🚀</span>
            </div>
          </div>
          <p className="text-white/80 text-sm mb-3">Deploy to production</p>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-white/60 text-xs">📅</span>
            <h4 className="text-white/70 text-sm">Due: 1 Mar 2026</h4>
          </div>
          <span className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm">
            🔥 High Priority
          </span>
        </div>

        {/* Card 5 - Orange Theme */}
        <div className="flex-shrink-0 w-80 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-white/10">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-bold text-xl text-white">Documentation</h3>
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">📄</span>
            </div>
          </div>
          <p className="text-white/80 text-sm mb-3">Write API docs</p>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-white/60 text-xs">📅</span>
            <h4 className="text-white/70 text-sm">Due: 5 Mar 2026</h4>
          </div>
          <span className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm">
            📚 Medium Priority
          </span>
        </div>

        {/* Card 6 - Indigo Theme */}
        <div className="flex-shrink-0 w-80 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-white/10">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-bold text-xl text-white">Code Review</h3>
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">👀</span>
            </div>
          </div>
          <p className="text-white/80 text-sm mb-3">Review pull requests</p>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-white/60 text-xs">📅</span>
            <h4 className="text-white/70 text-sm">Due: 10 Mar 2026</h4>
          </div>
          <span className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm">
            💙 Normal Priority
          </span>
        </div>

        {/* Card 7 - Cyan Theme */}
        <div className="flex-shrink-0 w-80 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-white/10">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-bold text-xl text-white">UI/UX Design</h3>
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">🎨</span>
            </div>
          </div>
          <p className="text-white/80 text-sm mb-3">Design new components</p>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-white/60 text-xs">📅</span>
            <h4 className="text-white/70 text-sm">Due: 15 Mar 2026</h4>
          </div>
          <span className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm">
            🎯 Medium Priority
          </span>
        </div>

        {/* Card 8 - Pink Theme */}
        <div className="flex-shrink-0 w-80 bg-gradient-to-br from-pink-500 to-pink-700 rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-white/10">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-bold text-xl text-white">Performance</h3>
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">⚡</span>
            </div>
          </div>
          <p className="text-white/80 text-sm mb-3">Optimize app speed</p>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-white/60 text-xs">📅</span>
            <h4 className="text-white/70 text-sm">Due: 20 Mar 2026</h4>
          </div>
          <span className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm">
            🚀 High Priority
          </span>
        </div>

      </div>
    </div>
  )
}

export default TaskList