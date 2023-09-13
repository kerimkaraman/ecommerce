import React from 'react'
import Navbar from '../layouts/Navbar'
import { Link } from 'wouter'

function ErrorPage() {
    return (
        <div className='error-page'>
            <Navbar />
            <div className='mt-[100px] flex flex-col gap-[50px]'>
                <p className='w-fit mx-auto text-2xl text-[#5B21B6]'>Something Went Wrong...</p>
                <button className='w-fit mx-auto block border border-[#5B21B6] text-[#5B21B6] p-[5px_20px] rounded-md'><Link href='/'>Go Back to Homepage</Link></button>
            </div>
        </div>
    )
}

export default ErrorPage