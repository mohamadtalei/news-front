import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function Layout(props) {
    const {children, tags} = props
  return (
    <div className='block'>
        <Navbar />
        <div className='bg-[#efeeee] pt-16 pr-[20vw] min-h-[100vh]'>
            {children}
        </div>
        <Sidebar tags={tags}/>
    </div>
  )
}
