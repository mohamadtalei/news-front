import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

export default function Navbar() {
  return (
    <div className='flex z-20 bg-[#EBD143] h-16 fixed top-0 left-0 right-0 items-center justify-between px-10 shadow-md'>
        <SearchBar/>
        <Link to={'/'}>
            <img className='h-40' src="/2.png" alt="خبر فوری" />
        </Link>
    </div>
  )
}
