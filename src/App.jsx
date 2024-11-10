import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Search from './Pages/Search'
import PlayingVideo from './Pages/PlayingVideo'
import Loading from './Loader/Loading'

import { useAuth } from './context/AuthProvider'
function App() {
  // const [count, setCount] = useState(0)
  // const  {loading,data} = useAuth();
  // console.log(loading)
  // console.log(data);

  const {loading} = useAuth();
  
  return (
    <div>
      {loading && <Loading/>}
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/search/:searchQuery' element={<Search/>}/>
        <Route path='/video/:id' element={<PlayingVideo/>}/>
        
      </Routes>
    </div>
  )
}

export default App
