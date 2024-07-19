import Services from '../../components/services/Services'
import Sneakers from '../../components/sneakers/Sneakers'
import TopRated from '../../components/top-rated/TopRated'
import hero from '../../images/hero.png'
import Products from '../products/Products'

const Home = () => {
  return (
    <div>
      <img src={hero} className='h-[663px] w-full' alt="hero img" />
      <Products />
      <Sneakers />
      <Services />
      <TopRated />
    </div>
  )
}

export default Home
