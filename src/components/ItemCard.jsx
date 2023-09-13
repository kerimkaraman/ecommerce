import React, { useContext, useState } from 'react';
import NotAllowed from '../assets/notallowed.png';
import { Link } from "wouter";
import { ItemID } from '../context/CurrentItem';

function ItemCard(props) {
    const [subs, setSubs] = useState(100);
    const { productID, setProductID } = useContext(ItemID);

    return (
        <div className='item-card rounded-xl shadow-sm hover:shadow-xl duration-500 bg-white flex flex-col gap-[20px] cursor-pointer xl:max-w-[400px] xl:mx-auto'>
            <Link onClick={() => { setProductID(props.id) }} href={`/products/${props.id}`}>
                <div className="card-img-area border-b-2 border-[#F5F3FF] p-4">
                    <img className='max-w-[250px] min-h-[200px] max-h-[250px] mx-auto rounded-xl hover:scale-105 duration-500' src={props.image != null ? props.image : NotAllowed} alt="" />
                </div>
            </Link>
            <div className="card-details flex flex-col gap-[40px] p-4">
                <div className="card-content-area flex flex-col gap-[20px]">
                    <Link onClick={() => { setProductID(props.id) }} href={`/products/${props.id}`}>
                        <p className='text-2xl text-[#5B21B6]'>{props.name.substring(0, 20)}...</p>
                    </Link>
                    <p className='text-gray-400'>{props.desc.substring(0, subs)} <button className='text-black text-xs' onClick={() => { setSubs(subs === 100 ? 100000 : 100) }} >{subs === 100 ? "... Show More" : " Show Less"}</button> </p>
                </div>
                <div className="card-price-area flex justify-end">
                    <div className="price-tag bg-[#F5F3FF] text-[#5B21B6] w-fit p-[10px_20px] rounded-xl">{props.price} $</div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard