import React from 'react'
import Navbar from '../layouts/Navbar'
import ProductItem from '../components/ProductItem'

function ProductPage(props) {
    return (
        <div className='product-page'>
            <Navbar />
            <ProductItem />
        </div>
    )
}

export default ProductPage