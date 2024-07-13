import React, { useState } from 'react'
import Container from '../../components/container/Container'
import { useFetch } from '../../hooks/usePostFetch';
import SingleTopRatedItem from '../single-top-rated-item/SingleTopRatedItem';
import { useTranslation } from 'react-i18next';

const SingleTopRated = () => {
  const [url, setUrl] = useState('/products');
  const { t } = useTranslation()
  const { data: products, error, loading } = useFetch(url);


  return (
    <Container>
      <div className='my-[100px]'>
        <h2 className='text-center text-3xl uppercase font-semibold text-darkblack mb-20 '></h2>
        <div className='grid grid-cols-4 gap-8 place-items-center'>
          {products?.filter((product) => product.rating >= 4).slice(0, 4).map((product) => (
            <SingleTopRatedItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default SingleTopRated
