import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar.tsx'
import MainContent from './components/MainContent.tsx'
import ProductPage from './components/ProductPage.tsx'
import TopSellers from './components/TopSellers.tsx'
import PopularBlogs from './components/PopularBlogs.tsx'



const App = () => {
  return (
    <Router>
    <div className='flex h-screen'>
      <Sidebar/>
      <div className='rounded w-full flex justify-center flex-wrap'>
        <Routes>
          <Route path="/" element={<MainContent/>}></Route>
          <Route path="/product/:id" element={<ProductPage/>}></Route>
        </Routes>
      </div>
      <div>
        <TopSellers/>
        <PopularBlogs/>
      </div>
    </div>
    </Router>
  )
}

export default App