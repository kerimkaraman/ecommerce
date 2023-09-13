import React, { useEffect, useState } from 'react'
import ItemCard from '../components/ItemCard'
import axios from 'axios'

function Main() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(res => setData(res.data))
    }, [])

    return (
        <div className='main max-w-[1200px] mx-auto mt-[50px] flex flex-col gap-[100px] xl:px-[20px]'>
            <div className="main-header mx-auto w-fit flex flex-col items-center gap-[30px]">
                <h2 className='font-bold text-3xl text-[#5B21B6]'>OVERSTOCK</h2>
                <p>Times are tough. You have to buy something good. ✅</p>
            </div>
            <div className="card-area grid grid-cols-3 xl:grid-cols-2 md:grid-cols-1 gap-[50px]">
                {
                    data.map((items) => {
                        const { id, image, price, title, description } = items;
                        return <ItemCard key={id} id={id} name={title} desc={description} price={price} image={image} />
                    })
                }
            </div>
        </div>
    )
}

export default Main