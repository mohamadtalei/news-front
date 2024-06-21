import React from 'react'
import NewsCard from './NewsCard'

export default function NewsGrid (props) {
  const {data}= props
  return (
    <div className='flex flex-wrap justify-center mt-10'>
      {
        data.map(i=>(
          <NewsCard key={i.id} data={i}/>
        ))
      }
    </div>
  )
}
