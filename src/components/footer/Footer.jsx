import logo from '../../images/logo.svg';
import Container from '../container/Container';
import paypal from '../../images/Paypal.svg';
import visa from '../../images/visa.svg';
import mastercard from '../../images/mastercard.svg';
import wester from '../../images/Western-union.svg';

const Footer = () => {
  return (
    <div className="bg-[#BCDDFE] pt-[150px] pb-14">
      <Container>
        <div className='flex justify-between'>
          <div className='max-w-[221px]'>
            <img src={logo} alt="logo" />
            <p className='text-xs mt-4 leading-[14.62px] text-darkblack '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
          </div>
          <div className='max-w-[198px]'>
            <h4 className='text-darkblack font-poppins font-medium text-[18px] '>Follow Us</h4>
            <p className='text-darkblack mt-4 font-proxima text-xs'>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
          </div>
          <div>
            <h4 className='text-darkblack font-poppins font-medium text-[18px] '>Contact Us</h4>
            <p className='text-darkblack mt-4 font-proxima text-[14px] uppercase max-w-[148px]'>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>
          </div>
        </div>
        <div className='flex justify-between border-t-2 mt-[140px] border-[#F6F7F8] pt-10'>
          <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
          <div className='flex gap-5'>
            <img src={wester} alt="" />
            <img src={mastercard} alt="" />
            <img src={visa} alt="" />
            <img src={paypal} alt="" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer
