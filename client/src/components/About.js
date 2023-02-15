import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <p>This is a Task Manager to make your every day life a little easier.</p>
            <p>You can add your daily tasks and delete them as you go.</p>
            <p style={{marginBottom:"20px"}}>Happy Productivity!</p>
            <Link to={"/"}>Go back</Link>
        </div>
    )
}

export default About
