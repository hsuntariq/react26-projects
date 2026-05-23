import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="flex justify-between items-center">
                <h2 className="text-4xl">Brand</h2>
                <ul className="unstyled flex gap-2">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/services'}>Services</Link>
                    <Link to={'/projects'}>Project</Link>
                </ul>
            </div>
        </>
    )
}

export default Navbar