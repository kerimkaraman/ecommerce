import React, { useContext, useState } from 'react';
import { CartItemContext } from '../context/CartItems';
import { Link } from 'wouter';
import { ItemID } from '../context/CurrentItem';

function CartItem(props) {

    const [itemCount, setItemCount] = useState(1);
    const { cartItems, setCartItems, subtotal, setSubtotal } = useContext(CartItemContext);
    const { productID, setProductID } = useContext(ItemID);

    const deleteItem = (id, price) => {
        const filteredArray = cartItems.filter(item => item.id !== id);
        setCartItems(filteredArray);
        setSubtotal(subtotal - price * itemCount);
        setItemCount(0);
        console.log(cartItems);
    }

    return (
        <div className='cart-item flex justify-center gap-[20px] border-b max-w-[600px] mx-auto items-center py-4 md:px-[20px] md:gap-[10px]'>
            <Link className='flex items-center gap-[10px]' href={`/products/${props.id}`} onClick={() => { setProductID(props.id) }}>
                <div className="product-img">
                    <img className='w-[100px] h-[100px] object-contain' src={props.image} alt="" />
                </div>
                <div className="product-name">
                    <p className='text-xl md:text-sm text-[#5B21B6]'>{props.title}</p>
                </div>
            </Link>
            <div className="product-count group border border-[#5B21B6] rounded-md px-[10px] flex gap-[10px] items-center duration-500">
                <p className='text-xl md:text-sm text-[#5B21B6]'>{itemCount}</p>
                <div className='count-control flex flex-col font-semibold md:font-light text-[#5B21B6]'>
                    <button onClick={() => { setSubtotal(subtotal + props.price); setItemCount(itemCount + 1); }}>+</button>
                    <button onClick={() => { setSubtotal(subtotal - props.price); setItemCount(itemCount - 1); }}>-</button>
                </div>
            </div>
            <div className="product-price">
                <p className='text-sm text-gray-500'>{(itemCount * props.price).toFixed(2)}$</p>
            </div>
            <div className="remove-from-cart">
                <button onClick={() => { deleteItem(props.id, props.price) }} className='border border-[#5B21B6]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#5B21B6" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default CartItem