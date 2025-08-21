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

  const [mark, setMark] = useState(0)
  const handleMarkAsRead = time =>{
    const newMark = mark + time;
    setMark(newMark);
  }
  return (
    <>
      <Header></Header>    
      <div className='max-w-screen-2xl mx-auto'>
        <div className='grid grid-cols-3 gap-6 justify-center p-12'>
        <Blogs 
        handleAddToBookMark={handleAddToBookMark}
        handleMarkAsRead={handleMarkAsRead}></Blogs>  
        <Bookmarks bookmarks={bookmarks} mark={mark}></Bookmarks>
      </div>
      </div>
    </>
  )
}

export default App
