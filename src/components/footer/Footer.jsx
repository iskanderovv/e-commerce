import logo from '../../images/logo.svg';
import Container from '../container/Container';
import paypal from '../../images/Paypal.svg';
import visa from '../../images/visa.svg';
import mastercard from '../../images/mastercard.svg';
import wester from '../../images/Western-union.svg';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation("footer");
  return (
    <div className="bg-[#BCDDFE] pt-[150px] pb-14">
      <Container>
        <div className='flex justify-between'>
          <div className='max-w-[221px]'>
            <img src={logo} alt="logo" />
            <p className='text-xs mt-4 leading-[14.62px] text-darkblack '>{t("footerText1")}</p>
          </div>
          <div className='max-w-[198px]'>
            <h4 className='text-darkblack font-poppins font-medium text-[18px] '> {t("footerTitle1")} </h4>
            <p className='text-darkblack mt-4 font-proxima text-xs'> {t("footerText2")} </p>
          </div>
          <div>
            <h4 className='text-darkblack font-poppins font-medium text-[18px] '>{t("footerTitle2")}</h4>
            <p className='text-darkblack mt-4 font-proxima text-[14px] uppercase max-w-[148px]'>{t("footerText3")}</p>
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
