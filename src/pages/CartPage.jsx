import React from 'react'
import Navbar from '../layouts/Navbar'
import Cart from '../layouts/Cart'

function CartPage() {
    return (
        <div className='cart-page'>
            <Navbar />
            <Cart />
        </div>
    )
}

export default CartPage