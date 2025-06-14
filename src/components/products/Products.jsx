import React from 'react'
import styled from 'styled-components'
import Sort from './Sort'
import ProductList from './ProductList'
import FilterSection from './FilterSection'
import { useFilterContext } from '../../context/Filter_context'


const Products = () => {
  // const {filter_products} = useFilterContext();
  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
      <div>
        <FilterSection />
      </div>
      <section className="product-view--sort">
        <div className="sort-filter">
          <Sort />
        </div>
        <div className="main-product">
          <ProductList/>
        </div>

      </section>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

`;
export default Products
