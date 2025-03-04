import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

      const navigate = useNavigate()

      const handleNavigate = () => {
            navigate('/addPost');
      }

  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Social Media</h1>
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={handleNavigate}>Create Post</button>
        
      </div>
    </div>
  )
}

export default Navbar
