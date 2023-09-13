import React, { useContext, useEffect, useState } from 'react'
import Logo from '../assets/logo.png';
import Cart from '../assets/cart.svg';
import { Link } from "wouter";
import axios from 'axios';
import { ItemID } from '../context/CurrentItem';
import { CartItemContext } from '../context/CartItems';


function Navbar() {

    const [searchValue, setSearchValue] = useState("");
    const [data, setData] = useState([]);
    const { cartItems } = useContext(CartItemContext);
    const { productID, setProductID } = useContext(ItemID);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(res => setData(res.data));
    }, []);

    return (
        <div className="navbar-wrapper border-b xl:px-[20px]">
            <div className='navbar max-w-[1200px] mx-auto flex justify-between py-[10px] items-center'>
                <Link href='/'>
                    <div className="logo-area flex shrink-0 items-center gap-[20px] cursor-pointer">
                        <img className='w-[50px] xs:w-[25px] shrink-0' src={Logo} alt="" />
                        <p className='brand-name text-[24px] font-semibold text-[#5B21B6] md:hidden'>OVERSTOCK</p>
                    </div>
                </Link>
                <div className='input-area flex items-center border rounded-2xl border-black px-[15px] py-[5px] xs:px-[5px] xs:py-[5px]'>
                    <input className='placeholder:text-black outline-none ' type="text" placeholder='Search...' onChange={(e) => { setSearchValue(e.target.value) }} />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000" className="w-6 h-6 xs:w-3 xs:h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>
                <div className={`search-results ${searchValue == "" ? "hidden" : "flex"} flex-col gap-[10px] max-w-[600px] absolute top-[70px] translate-[(-50%,-50%)] bg-white border-black border p-[10px] rounded-lg shadow-md`}>
                    {
                        searchValue === "" ? null : data.filter(item => item.title.toLowerCase().includes(searchValue.toLocaleLowerCase())).map((item, idx) => {
                            const { id, title, image } = item;
                            return (
                                <Link key={idx} onClick={() => { setProductID(id) }} href={`/products/${id}`} className='cursor-pointer flex items-center gap-[20px]'>
                                    <div className="img-area">
                                        <img className='w-[50px] h-[50px] object-contain' src={image} alt="" />
                                    </div>
                                    <div className="content-area">
                                        <p>{title}</p>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
                <div className="cart-area hover:cursor-pointer">
                    <Link className='relative flex items-center justify-around' href="/cart">
                        <img className='link w-[32px] xs:w-[24px]' src={Cart} alt="" />
                        <div className='rounded-full absolute top-[-10px] right-[-20px] bg-[yellow] px-2 '>
                            <p>{cartItems.length}</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar