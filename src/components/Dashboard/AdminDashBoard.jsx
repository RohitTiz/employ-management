import React from 'react'
import Header from '../Others/Header'
import CreateTsk from '../Others/CreateTsk'
import AllTask from '../Others/AllTask'

const AdminDashBoard = () => {
  return (
    <div className="min-h-screen bg-gray-900 border-amber-600">
      <Header />
      <CreateTsk /> 
      <AllTask />
      
      
    </div>
  )
}

export default AdminDashBoard