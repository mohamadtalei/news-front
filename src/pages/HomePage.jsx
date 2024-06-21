import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import NewsGrid from '../components/NewsGrid'
import axios from 'axios'

export default function HomePage(props) {
  const {data,loading,tags} = props

  return (
    <Layout tags={tags}>
      {loading && 
        <h3 className='text-center'>Loading...</h3>
      }
      {
        data && data.length!==0&&
      <NewsGrid
      data={data}
      />
    }
    </Layout>
  )
}
