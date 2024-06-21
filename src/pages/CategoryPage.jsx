import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import NewsGrid from '../components/NewsGrid'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function CategoryPage(props) {
  const {tags} = props
  const {categoryPhrase} = useParams()
  const [loading,setLoading]= useState(true)
  const [data,setData] = useState()

  
  useEffect(()=>{
    setLoading(true)
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/news/?tags__title=${categoryPhrase}`).then(res=>{
      setLoading(false)
      setData(res.data)
    })
  },[categoryPhrase])

  useEffect(()=>{
    window.scrollTo(0,0)
  },[categoryPhrase])

  return (
    <Layout tags={tags}>
      {loading && 
        <h3 className='text-center'>Loading...</h3>
      }
      {
        data && data.length!==0&&!loading&&
        <>
      <h2 className='text-2xl mr-16 my-10 text-gray-600' style={{direction:'rtl'}}><span className='font-bold text-black'>{categoryPhrase}:</span></h2>

      <NewsGrid
      data={data}
      />
      </>
    }
    </Layout>
  )
}
