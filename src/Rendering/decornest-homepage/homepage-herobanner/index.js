import React from 'react'
import dotssvg from '../../../Assets/Icons/dots-light.svg'
import sofaimg from '../../../Assets/Images/sofa-img.png'

export default function HomepageHerobanner() {
  return (
    <div>
      <div className='relative max-w-[100%] bg-green p-[120px_0_120px_0] tab:p-[20px_0_420px] mob:p-[20px_0_360px_20px] tab:px-[20px] mob:overflow-hidden'>
        <div className='absolute top-[15%] right-[20px] tab:top-[33%] tab:right-[50px] mob:right-[-37%]'>
          <img src={dotssvg} alt='dots-bg' />
        </div>
        <div className='max-w-[1320px] mx-auto tab:flex-col'>
          <div className='left max-w-[550px] px-[12px] tab:max-w-[100%] mob:max-w-[100%] mob:px-0'>
            <h1 className='text-[54px] font-bold text-white leading-[70px] mb-[30px] mob:mb-[10px] tab:text-[40px] mob:text-[28px] mob:leading-[40px] animate__animated animate__fadeInLeft wow'data-wow-offset='300'>Modern Interior Design Studio</h1>
            <p className='text-[14px] max-w-[450px] tab:max-w-[100%] font-medium text-lightgray leading-[25px] mb-[30px] mob:mb-[15px] mob:text-[12px] animate__animated animate__animate__fadeIn wow'data-wow-offset='300' >Crafting timeless furniture with exceptional quality and style. Elevate your spaces with designs that inspire comfort and elegance.</p>
            <div className='btn'>
              <button className='bg-yellow p-[12px_30px] text-green border-2 border-yellow rounded-full text-[16px] font-semibold mr-4 mob:text-[14px] mob:p-[8px_24px] hover:bg-transparent hover:text-white hover:border-white'>shop now</button>
              <button className='bg-transperent p-[12px_30px] border-2 text-white border-white rounded-full text-[16px] font-semibold mob:text-[14px] mob:p-[8px_24px] hover:bg-lightblack hover:text-white hover:border-lightblack'>explore</button>
            </div>
          </div>
          <div className='right absolute top-[40px] right-[85px] tab:top-[30%] tab:right-[70px] mob:right-[-82%]'>
            <div className='w-[780px] h-[560px] tab:w-[680px] tab:h-[460px]'>
              <img src={sofaimg} alt='sofa-img' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
