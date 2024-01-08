import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-6 px-4'>
        <div className='max-w-[1240px] max-auto grid md:grid-cols-2'>
            <img className='w-[600px] mx-auto my-4' src={Laptop} alt="/" />
            <div className='flex flex-col justify-center mx-4'>
                <p className='text-[#00df9a] font-bold '>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ducimus sit distinctio. Perspiciatis aperiam maxime nam labore officia non dolores recusandae corporis dicta quae, ad possimus reiciendis quod, omnis reprehenderit!</p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics