import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Sidebar(props) {
  const {tags} = props
  const navigate = useNavigate()

  const handleClick = (title)=>{
    navigate(`/category/${title}`)
  }
  return (
    <div className='bg-[#e3e1da] w-1/5 fixed top-16 right-0 bottom-0 justify-center-center border border-l-gray-300'>
      {tags&& tags.length!==0&&
      <div>
        <h2 style={{direction: 'rtl'}} className='pr-5 pt-5 font-bold'>دسته بندی ها:</h2>
        <div className='flex flex-col items-center p-4'>{tags.map(tag=>(
          <span onClick={()=>handleClick(tag)} className='cursor-pointer bg-slate-600 text-white rounded-full p-1 px-3 mb-2'> {tag} </span>
        ))}</div>
        </div>
        }
    </div>
  )
}
