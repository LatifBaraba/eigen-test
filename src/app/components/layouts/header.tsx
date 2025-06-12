import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='w-full p-5 border-b-2 flex justify-between items-center mb-5'>
            <h1 className='text-2xl font-bold'>Eigen News</h1>
            <div className='flex gap-4'>
                <div className='flex items-end'>
                    <span className='text-md font-medium'>Hi, Latif</span>
                </div>
                <div className='relative rounded-full size-8 bg-amber-300 overflow-hidden cursor-pointer'>
                    <Image
                        className='object-cover'
                        src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt='User profile picture'
                        fill={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default Header
