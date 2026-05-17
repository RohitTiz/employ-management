import React from 'react'
import Header from '../Others/Header'
import TaskListNumber from '../Others/TaskListNumber'
import TaskList from '../../TaskList/TaskList'

const EmployDashboard = () => {
  return (
    <div className="min-h-screen p-4 h-screen ">
        <Header />
        EmployDashboard
        <TaskListNumber />
        <TaskList />

    </div>
  )
}

export default EmployDashboard