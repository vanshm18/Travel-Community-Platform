import Navbar from "../components/Navbar/Navbar"
import Search from "../components/Search/Search"
import HeroImage from "../components/Hero/HeroImage"
import Featured from "../components/Featured/Featured"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Search/>
      <HeroImage/>
      <Featured/>
    </div>
  )
}

export default Home
