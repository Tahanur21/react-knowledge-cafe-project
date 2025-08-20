import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/BookMarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>    
      <div className='max-w-screen-2xl mx-auto'>
        <div className='grid grid-cols-3 gap-6 justify-center p-12'>
        <Blogs></Blogs>  
        <Bookmarks></Bookmarks>
      </div>
      </div>
    </>
  )
}

export default App
