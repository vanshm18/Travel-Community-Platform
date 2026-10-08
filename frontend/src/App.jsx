import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Listing from './pages/Listing'
import SignIn from './pages/SignIn'
import Register from './pages/Register'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/listings/:id" element={<Listing/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  )
}

export default App
