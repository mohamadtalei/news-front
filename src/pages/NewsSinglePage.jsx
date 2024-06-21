import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export default function NewsSinglePage(props) {
  const {tags} = props
  const {id} = useParams()
  const [loading,setLoading]= useState(true)
  const [data,setData] = useState()
  const navigate = useNavigate()

  const handleClick = (title)=>{
    navigate(`/category/${title}`)
  }

  useEffect(()=>{
    setLoading(true)
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/news/${id}/`).then(res=>{
      setLoading(false)
      setData(res.data)
    })
  },[id])


  return (
    <Layout tags={tags}>
      <div className='pb-36'>
        {loading && 
        <h3 className='text-center'>Loading...</h3>
      }
      {!loading && data&&
        <div
        className=' bg-[#f4f3f3] rounded-lg shadow-lg m-36 overflow-hidden'
        >
        <div style={{backgroundImage:`url(${data.photo_link})`}} className='bg-center h-[300px] flex items-end justify-center relative' alt={data.title}>
        <h1 style={{direction: 'rtl'}} className='text-4xl text-white text-center mb-10 px-5 absolute z-10'>{data.title}</h1>
        <div style={{backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%)'}} className='absolute top-0 left-0 right-0 bottom-0'/>
        </div>
        <div className='p-14'>
        <div className='flex flex-row-reverse gap-x-3 py-4'>{data.tags.map(tag=>(
          <span onClick={()=>handleClick(tag)} className='cursor-pointer bg-slate-600 text-white rounded-full p-1 px-3 mb-2'> {tag} </span>
        ))}</div>
        <p style={{direction:'rtl'}} className='text-2xl text-gray-600'>{data.content}</p>
        </div>
      </div>
      }
      </div>
    </Layout>
  )
}
