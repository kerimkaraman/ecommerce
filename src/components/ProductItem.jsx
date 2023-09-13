import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, Redirect } from 'wouter';
import { ItemID } from '../context/CurrentItem';
import axios from 'axios';
import { CartItemContext } from '../context/CartItems';

function ProductItem() {

    const { productID, setProductID } = useContext(ItemID);
    const [data, setData] = useState([]);
    const { cartItems, setCartItems, subtotal, setSubtotal } = useContext(CartItemContext);
    const [buttonText, setButtonText] = useState("Add to Cart");
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productID}`)
            .then(res => setData(res.data));
    }, [productID]);


    const addToCart = () => {
        const item = {
            id: data.id,
            title: data.title,
            image: data.image,
            price: data.price,
        }
        setSubtotal(subtotal + data.price)
        setCartItems([...cartItems, item]);

        setTimeout(() => {
            setButtonText('Added To Cart');
            setIsClicked(true);
        }, 1000);

        setTimeout(() => {
            setButtonText('Add to Cart');
            setIsClicked(false);
        }, 2000);
    }

    return (
        productID == undefined ? <Redirect to='/error' /> :
            <div className='cart-item max-w-[1200px] mx-auto mt-[100px] flex justify-around items-center md:flex-col md:justify-center md:gap-[50px]'>
                <div className="img-area">
                    <img className='max-w-[300px] hover:scale-110 duration-500 md:max-h-[200px]' src={data.image} alt="" />
                </div>
                <div className="content-area flex flex-col md:flex-col-reverse md:items-center gap-[40px]">
                    <div className="button-area">
                        <button className='border py-2 px-4 text-[#5B21B6] hover:bg-[#F5F3FF] duration-500 border-[#5B21B6] rounded-xl'><Link href='/'>Go Back to Homepage</Link></button>
                    </div>
                    <div className="values-area flex flex-col md:items-center md:text-center gap-[20px]">
                        <p className='text-[#5B21B6] text-2xl font-semibold max-w-[400px]'>{data.title}</p>
                        <p className='text-sm text-gray-400 max-w-[400px]'>{data.description}</p>
                        <p className='text-2xl'>{data.price} $</p>
                        <button onClick={addToCart} className={`w-fit ${isClicked ? "bg-green-400" : "bg-[#5B21B6]"} py-2 px-4 rounded-md text-white hover:bg-[#F5F3FF] duration-500 hover:text-[#5B21B6] text-xl font-semibold`}>{buttonText}</button>
                    </div>
                </div>
            </div>
    )
}

export default ProductItem