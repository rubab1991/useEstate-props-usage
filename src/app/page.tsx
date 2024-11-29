import React from 'react'
import State from './state'
import ParentComponent from './ParentComponent'

const Home = () => {
  return (
    <div>
      <State />
      <ParentComponent/>
    </div>
  )
}

export default Home
