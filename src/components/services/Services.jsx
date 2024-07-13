import Container from '../container/Container';
import refund from '../../images/refund.svg';
import shipping from '../../images/shipping.svg';
import support from '../../images/support.svg';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const {t} = useTranslation();
  return (
    <Container>
      <div className='my-[242px] flex justify-between'>
        <div className='max-w-[200px] flex flex-col text-center items-center'>
          <img src={shipping} alt="" />
          <h4 className='mt-14 mb-3 text-darkblack font-poppins font-semibold text-xl '> {t("servisTitle1")}</h4>
          <p className='font-proxima text-[18px] leading-[21px] text-darkblack '>{t("servisComment")}</p>
        </div>
        <div className='max-w-[200px] flex flex-col text-center items-center'>
          <img src={refund} alt="" />
          <h4 className='mt-14 mb-3 text-darkblack font-poppins font-semibold text-xl '> {t("servisTitle2")} </h4>
          <p className='font-proxima text-[18px] leading-[21px] text-darkblack '>{t("servisComment")}</p>
        </div>
        <div className='max-w-[200px] flex flex-col text-center items-center'>
          <img src={support} alt="" />
          <h4 className='mt-14 mb-3 text-darkblack font-poppins font-semibold text-xl '> {t("servisTitle3")}</h4>
          <p className='font-proxima text-[18px] leading-[21px] text-darkblack '>{t("servisComment")}</p>
        </div>
      </div>
    </Container>
  )
}

export default Services
