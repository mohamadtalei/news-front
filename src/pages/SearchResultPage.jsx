import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import NewsGrid from '../components/NewsGrid'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function SearchResultPage(props) {
  const {tags}=props
  const {searchPhrase} = useParams()
  const [loading,setLoading]= useState(true)
  const [data,setData] = useState()
  const isEmpty = data && data.length===0

  
  useEffect(()=>{
    setLoading(true)
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/news/?tags__title=${searchPhrase}`).then(res=>{
      setLoading(false)
      setData(res.data)
    })
  },[searchPhrase])

  return (
    <Layout tags={tags}>
      <h2 className='text-2xl mr-16 my-10 text-gray-600' style={{direction:'rtl'}}>نتایج جست جو برای کلمه <span className='font-bold text-black'>{searchPhrase}:</span></h2>

{isEmpty &&
      <h2 className='text-2xl text-center mr-16 my-10 text-gray-600' style={{direction:'rtl'}}>نتیجه ای یافت نشد!</h2>
}
{loading && 
        <h3 className='text-center'>Loading...</h3>
      }
{
  data && data.length!==0 && !loading &&
    <NewsGrid
    data={data}
    />
  }
  </Layout>
  )
}
