import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import SearchResultPage from './pages/SearchResultPage';
import NewsSinglePage from './pages/NewsSinglePage';
import CategoryPage from './pages/CategoryPage';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [loading,setLoading]= useState(true)
  const [data,setData] = useState()
  const [tags,setTags] = useState()

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/news/`).then(res=>{
      setLoading(false)
      setData(res.data.slice(0,30))
    })
  },[])

  useEffect(()=>{
    if(data && data.length!==0){
      const tagsArr = []
      data.forEach(element => {
        const tag = element.tags
        tag.forEach(t=>{
          if (!tagsArr.includes(t)) {
            tagsArr.push(t);
        }
        })
      });
      setTags(tagsArr.slice(0,10));
    }
  },[data])
  return (
    <Routes>
      <Route path='/' index element={<HomePage loading={loading} data={data} tags={tags}/>}/>
      <Route path='/search-result/:searchPhrase' element={<SearchResultPage tags={tags}/>}/>
      <Route path='/news/:id' element={<NewsSinglePage tags={tags}/>}/>
      <Route path='/category/:categoryPhrase' element={<CategoryPage tags={tags}/>}/>
    </Routes>
  );
}

export default App;
