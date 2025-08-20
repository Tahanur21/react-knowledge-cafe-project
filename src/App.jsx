import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/BookMarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookMark = blog =>{
    const newBookMarks = [...bookmarks,blog];
    setBookmarks(newBookMarks)
  }
  return (
    <>
      <Header></Header>    
      <div className='max-w-screen-2xl mx-auto'>
        <div className='grid grid-cols-3 gap-6 justify-center p-12'>
        <Blogs handleAddToBookMark={handleAddToBookMark}></Blogs>  
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
      </div>
    </>
  )
}

export default App
