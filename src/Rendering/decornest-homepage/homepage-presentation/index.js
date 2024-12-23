import React from 'react'

import presentationvid from '../../../Assets/Videos/presentation video (1).mp4';
import brand1 from '../../../Assets/Images/brand-1.png'
import brand2 from '../../../Assets/Images/brand-2.png'
import brand3 from '../../../Assets/Images/brand-3.png'
import brand4 from '../../../Assets/Images/brand-4.png'
import brand5 from '../../../Assets/Images/brand-5.png'
import brand6 from '../../../Assets/Images/brand-6.png'
import brand7 from '../../../Assets/Images/brand-7.png'

export default function HomepagePresentation() {
    return (
        <div>
            <div className=' max-w-[1517px] mx-auto p-[80px_0_60px] tab:p-[60px_0_60px_0] mob:p-[40px_0]'>
                <div className='grid max-w-[1242px] mx-auto gap-[30px] grid-cols-[611px,1fr] tab:grid-cols-1 tab:px-[40px] tab:gap-[60px] mob:px-[20px] mob:gap-[40px]'>
                    <div className='left rounded-[15px] shadow-black shadow-2xl overflow-hidden'>
                        <video className='transform hover:scale-105 duration-300' src={presentationvid} muted loop autoPlay alt='presentation-video' />
                    </div>
                    <div className='right my-auto'>
                        <h4 className='text-[46px] font-semibold text-lightblack tab:text-[30px] mob:text-[24px] animate__animated animate__fadeIn wow'data-wow-offset='300' >VIDEO PRESENTATION</h4>
                        <h6 className='text-[32px] font-medium text-[#8e8e8e] tab:text-[20px] mob:text-[14px]'>MAURIS VOLUTPAT & METUS</h6>
                        <div className='h-[1.5px] w-[50px] bg-gray-600 my-[10px]'></div>
                        <p className='text-[14px] text-gray-400 my-[15px]'>Praesent a nostra lacus aliquet torquent molestie class ullamcorper leo vulputate ut nascetur magnis sociis sodales condimentum mus dignissim a mi sem scelerisque ligula fermentum sociosqu et cursus parturient nostra ultricies vehicula.</p>
                        <button className='bg-lightgreen border border-lightgreen text-white text-[12px] mob:p-[8px_16px] mob:text-[10px] uppercase font-semibold p-[12px_24px] mr-[20px]'>contact us</button>
                        <button className='bg-white text-black border border-black text-[12px] uppercase mob:p-[8px_16px] mob:text-[10px] font-semibold p-[12px_24px]'>read more</button>
                    </div>
                </div>
            </div>

            <div className='max-w-[100%] m-[20px_0_0_0] border-y border-black'>
                <div className='flex justify-between bg-gray-300 p-[10px_20px] mob:p-[0_30px]'>
                    <div className='h-[80px] w-[150] items-center mob:hidden'>
                        <img className='h-[100%] w-[100%] object-cover' src={brand1} alt='brnad-1-img' />
                    </div>
                    <div className='h-[80px] w-[150] items-center mob:hidden'>
                        <img className='h-[100%] w-[100%] object-cover' src={brand2} alt='brnad-1-img' />
                    </div>
                    <div className='h-[80px] w-[150] items-center tab:hidden mob:block'>
                        <img className='h-[100%] w-[100%] object-cover' src={brand3} alt='brnad-1-img' />
                    </div>
                    <div className='h-[80px] w-[150] items-center mob:hidden'>
                        <img className='h-[100%] w-[100%] object-cover' src={brand4} alt='brnad-1-img' />
                    </div>
                    <div className='h-[80px] w-[150] items-center tab:hidden mob:block'>
                        <img className='h-[100%] w-[100%] object-cover' src={brand5} alt='brnad-1-img' />
                    </div>
                    <div className='h-[80px] w-[150] items-center tab:hidden'>
                        <img className='h-[100%] w-[100%] object-cover' src={brand6} alt='brnad-1-img' />
                    </div>
                    <div className='h-[80px] w-[150] items-center mob:hidden'>
                        <img className='h-[100%] w-[100%] object-cover' src={brand7} alt='brnad-1-img' />
                    </div>
                </div>
            </div>
        </div >
    )
}
