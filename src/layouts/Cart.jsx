import React, { useContext } from 'react';
import { Link } from "wouter";
import CartItem from '../components/CartItem';
import { CartItemContext } from '../context/CartItems';

function Cart() {

    const { cartItems, subtotal } = useContext(CartItemContext);

    return (
        <div className='cart max-w-[1200px] mx-auto flex flex-col gap-[50px]'>
            <div className="cart-header w-fit mx-auto mt-[100px]">
                <h1 className='text-5xl text-[#5B21B6] font-semibold'>Your Cart</h1>
            </div>
            <div className="cart-items">
                {
                    cartItems.length == 0 ? <p className='w-fit mx-auto text-xl'>Your Cart Is Empty...</p> :
                        cartItems.map((item, idx) => {
                            const { id, title, price, image } = item;
                            return (
                                <CartItem key={idx} id={id} image={image} title={title} price={price} />
                            )
                        })
                }
            </div>
            <p className='mx-auto flex items-center gap-[5px]'><span className='text-xl font-semibold text-[#5B21B6]'>Subtotal:</span> {subtotal.toFixed(2)}$</p>
            <div className="cart-bottom-btns flex flex-col items-center">
                <button className='border border-[#5B21B6] p-2 rounded-md text-[#5B21B6]'>
                    <Link href='/'>Go Back to Homepage</Link>
                </button>
            </div>
        </div>
    )
}

export default Cart