import React from 'react'
import Image404 from '../../public/404.svg'
import { Image } from '@nextui-org/react'

function NotFound() {
    return (
        <div className='flex justify-center items-center w-full'>
            <div className='pt-9 h-screen'>
                <Image 
                    isZoomed
                    src={Image404} 
                    alt="404"
                    className='h-[80vh]'
                />
                <p className = 'w-full text-center font-bold'>The Page You are looking for does'nt exist</p>
            </div>
        </div>
    )
}

export default NotFound