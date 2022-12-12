import React from 'react'
import ActivityCard from '../components/ActivityCard/ActivityCard'
import ActivityForm from '../components/Form/ActivityForm'
const Dashboard = () => {
  return (
    <div>
        <ActivityForm/>
        <ActivityCard />
    </div>
  )
}

export default Dashboard