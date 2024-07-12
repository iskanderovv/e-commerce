import shoe from '../../images/shoe.png';
import Container from '../container/Container';

const Sneakers = () => {
  return (
    <div className='bg-[#40BFFF]'>
      <Container>
        <div className='flex justify-between items-center'>
          <div className='max-w-[600px]'>
            <h2 className='font-poppins font-medium text-[55px] leading-[82px] text-white '>
              Adidas Men Running
              Sneakers
            </h2>
            <p className='font-poppins text-xl font-normal text-white mt-5 '>Performance and design. Taken right to the edge.</p>
            <button className='text-white relative shop-btn before:content-[""] before:block before:w-14 before:h-[3px] before:bg-white mt-1 before:absolute before:top-7 before:-translate-y-1/2 before:left-0'>SHOP NOW</button>
          </div>
          <img src={shoe} alt="shoe" />
        </div>
      </Container>
    </div>
  )
}

export default Sneakers
