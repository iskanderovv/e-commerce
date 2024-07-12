import React, { useState } from 'react'
import Container from '../../components/container/Container'
import { useFetch } from '../../hooks/usePostFetch';
import ProductsItem from '../product-item/ProductsItem';

const Products = () => {
  const [url, setUrl] = useState('/products');
  const { data: products, error, loading } = useFetch(url);

  
  return (
    <Container>
      <div className='my-[200px]'>
        <h2 className='text-center text-3xl uppercase font-semibold text-darkblack mb-20 '>All products</h2>
        <div className='grid grid-cols-4 gap-8 place-items-center'>
          {products?.map((product) => (
            <ProductsItem key={product.id} product={product} />
          ))}
        </div>
        <button className='uppercase text-[#33A0FF] block mx-auto font-medium mt-6 text-xl border-b-2 border-[#33A0FF] '>Load More</button>
      </div>
    </Container>
  )
}

export default Products
