import { useState } from "react"
import Container from "../container/Container"
import { useFetch } from "../../hooks/usePostFetch";
import { ImStarHalf } from "react-icons/im";
import { ImStarFull } from "react-icons/im";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


const TopRated = () => {
  const [url, setUrl] = useState('/products');
  const { t } = useTranslation();
  const { data: products } = useFetch(url);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<ImStarFull key={i} className="text-[#FFC600]" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<ImStarHalf key={i} className="text-[#FFC600]" />);
      } else {
        stars.push(<ImStarFull key={i} className="text-[#FFC600]" />);
      }
    }
    return stars;
  }

  return (
    <Container>
      <h2 className="font-poppins font-semibold text-darkblack text-4xl text-center mb-14">{t('topRatedTitle')}</h2>
      <div className="grid grid-cols-3 place-items-center mb-[200px]">
        {products?.filter((product) => product.rating >= 4).slice(0, 3).map((product) => (
          <Link to={`/single-product/${product.id}`} key={product.id} className="flex gap-6 items-center ">
            <img className="w-[152px] h-[152px] object-contain" src={product.image} alt="" />
            <div>
              <h4 className="text-[22px] text-darkblack ">{product.name}</h4>
              <p className="flex gap-[13px] my-3 ">{renderStars(product.rating)}</p>
              <div className="font-poppins text-[14px] flex gap-3">
                <p className="text-[#FF4858]">${(product.price - (product.price * 0.24).toFixed(1))} </p>
                <p className="text-[#5D656B]  line-through ">{product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  )
}

export default TopRated
