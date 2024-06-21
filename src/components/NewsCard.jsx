import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NewsCard(props) {
  const {title,content,id,photo_link}=props.data
  const navigate = useNavigate()

  const handleSelectCard = () =>{
    navigate(`/news/${id}`)
  }

  return (
    <div onClick={handleSelectCard} className=' w-1/4 grow-1 bg-[#f4f3f3] rounded-lg cursor-pointer overflow-hidden m-6 shadow-lg'>
        <img src={photo_link} alt={title}/>
        <div className='p-6'>

        <div style={{direction: 'rtl'}} className=' line-clamp-1 overflow-hidden font-bold m-2 mb-5 pb-5 border border-b-[#EBD143]'><div className='line-clamp-1'>{title}</div></div>
        <div style={{direction: 'rtl'}} className='m-2 line-clamp-5'>
            {content}
        </div>
        </div>
    </div>
  )
}
