import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

const Dashboard = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <div>
      <div
        style={{
            background : theme === 'dark' ? "black" : "white",
            color:theme === 'dark' ? "white" : "black",
            padding:"50px",
            margin:"100px"
        }}
      >
        <h1>Welcome to Dashboard</h1>
        <h2>Current Theme : {theme}</h2>
      </div>
    </div>
  )
}

export default Dashboard
