import React from 'react'
import User from './User'
import UserClass from './UserClass'

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <User name={"aman aswal (function)"} />
      <UserClass name={"aman aswal (class)"} location={"dehraduun class"} />
    </div>
  )
}

export default About