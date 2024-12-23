import React from 'react'
import servicehero from '../../../Assets/Images/room.jpg'

import interior1 from '../../../Assets/Images/Green Living Wall Design.jpg'
  

import truck from '../../../Assets/Icons/truck.svg'
import bag from '../../../Assets/Icons/bag.svg'
import support from '../../../Assets/Icons/support.svg'
import returnimg from '../../../Assets/Icons/return.svg'
import payment from '../../../Assets/Icons/payment-service.svg'
import assembly from '../../../Assets/Icons/assembly-service.svg'
import design from '../../../Assets/Icons/design-service.svg'
import warranty from '../../../Assets/Icons/warranty-service.svg'

export default function ServicesHeroBanner() {
  return (
    <div>
      <div className='max-w-[100%]'>

        <div className='relative'>
          <div className='h-[600px] w-[100%] tab:h-[750px] mob:h-[860px] opacity-70'>
            <img src={servicehero} alt='hero banner' className='h-full w-full object-cover' />
          </div>

          <div className='max-w-[1320px] mx-auto absolute left-[130px] tab:left-0 top-[120px] tab:top-[90px] tab:p-[0_30px] mob:top-[60px] tab:text-center'>
            <div className='text-center'>
              <h4 className='text-[60px] text-white font-semibold relative opacity-100 hover:opacity-100 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0  after:bg-yellow after:transition-all after:ease-in-out after:duration-300 hover:after:w-full inline tab:text-[48px] tab:text-white'>Our Services</h4>
            </div>
            <div className='grid grid-cols-4 gap-[30px] mt-[30px] tab:mt-[40px] tab:grid-cols-3 mob:gap-[15px] mob:grid-cols-2'>
              <div  className='tab:border-2 tab:border-gray-300 tab:p-[5px] tab:bg-green'>
                <div className='h-[50px] w-[50px] bg-white p-[10px] rounded-full flex justify-end  tab:mx-auto'>
                  <img src={truck} alt='truck' className='h-full w-full object-cover' />
                </div>
                <div>
                  <h6 className='text-[14px] text-white font-medium mt-[10px] pb-[5px]'>Fast & Free Shipping</h6>
                  <p className='text-[12px] text-gray-200 font-medium'>Prompt delivery of your furniture to your doorstep.</p>
                </div>
              </div>
              <div  className='tab:border-2 tab:border-gray-300 tab:p-[5px] tab:bg-green'>
                <div className='h-[50px] w-[50px] bg-white p-[10px] rounded-full flex justify-end tab:mx-auto'>
                  <img src={bag} alt='truck' className='h-full w-full object-cover' />
                </div>
                <div>
                  <h6 className='text-[14px] text-white font-medium mt-[10px] pb-[5px]'>Easy to Shop</h6>
                  <p className='text-[12px] text-gray-200 font-medium'>Smooth and user-friendly shopping experience.</p>
                </div>
              </div>
              <div  className='tab:border-2 tab:border-gray-300 tab:p-[5px] tab:bg-green'>
                <div className='h-[50px] w-[50px] bg-white p-[10px] rounded-full flex justify-end tab:mx-auto'>
                  <img src={support} alt='truck' className='h-full w-full object-cover' />
                </div>
                <div>
                  <h6 className='text-[14px] text-white font-medium mt-[10px] pb-[5px]'>24/7 Support</h6>
                  <p className='text-[12px] text-gray-200 font-medium'>Assistance anytime for all your queries.</p>
                </div>
              </div>
              <div  className='tab:border-2 tab:border-gray-300 tab:p-[5px] tab:bg-green'>
                <div className='h-[50px] w-[50px] bg-white p-[10px] rounded-full flex justify-end tab:mx-auto'>
                  <img src={returnimg} alt='truck' className='h-full w-full object-cover' />
                </div>
                <div>
                  <h6 className='text-[14px] text-white font-medium mt-[10px] pb-[5px]'>Hassle Free Returns</h6>
                  <p className='text-[12px] text-gray-200 font-medium'>Easy returns with no stress or complications.</p>
                </div>
              </div>
              <div  className='tab:border-2 tab:border-gray-300 tab:p-[5px] tab:bg-green'>
                <div className='h-[50px] w-[50px] bg-white p-[10px] rounded-full flex justify-end tab:mx-auto'>
                  <img src={payment} alt='truck' className='h-full w-full object-cover' />
                </div>
                <div>
                  <h6 className='text-[14px] text-white font-medium mt-[10px] pb-[5px]'>Secure Payments</h6>
                  <p className='text-[12px] text-gray-200 font-medium'>Reliable and safe payment options for convenience.</p>
                </div>
              </div>
              <div  className='tab:border-2 tab:border-gray-300 tab:p-[5px] tab:bg-green'>
                <div className='h-[50px] w-[50px] bg-white p-[10px] rounded-full flex justify-end tab:mx-auto'>
                  <img src={assembly} alt='truck' className='h-full w-full object-cover' />
                </div>
                <div>
                  <h6 className='text-[14px] text-white font-medium mt-[10px] pb-[5px]'>Furniture Assembly</h6>
                  <p className='text-[12px] text-gray-200 font-medium'>Professional service to assemble your furniture.</p>
                </div>
              </div>
              <div  className='tab:border-2 tab:border-gray-300 tab:p-[5px] tab:bg-green'>
                <div className='h-[50px] w-[50px] bg-white p-[10px] rounded-full flex justify-end tab:mx-auto'>
                  <img src={warranty} alt='truck' className='h-full w-full object-cover' />
                </div>
                <div>
                  <h6 className='text-[14px] text-white font-medium mt-[10px] pb-[5px]'>Product Warranty</h6>
                  <p className='text-[12px] text-gray-200 font-medium'> Guaranteed quality with long-term warranties</p>
                </div>
              </div>
              <div className='tab:border-2 tab:border-gray-300 tab:p-[5px] tab:bg-green'>
                <div className='h-[50px] w-[50px] bg-white p-[10px] rounded-full flex justify-end tab:mx-auto'>
                  <img src={design} alt='truck' className='h-[30px] w-[40px] object-cover' />
                </div>
                <div>
                  <h6 className='text-[14px] text-white font-medium mt-[10px] pb-[5px]'>Custom Furniture Design</h6>
                  <p className='text-[12px] text-gray-200 font-medium'> Unique pieces designed to match your vision.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='max-w-[1280px] mx-auto'>
          <div className='p-[40px_0_40px] max-w-[1080px] mx-auto text-center '>
            <h2 className='text-[50px] font-bold text-green capitalize pb-[60px] tab:pb-[40px] tab:px-[20px] border-b-2 border-green tab:text-[38px] tab:leading-[50px] mob:text-[28px] mob:leading-[40px] mob:pb-[20px]'>Movements Defines Our Latest Designs , Breathing Lifr And Energy Into Simple Materials.</h2>
          </div>

          <div className='flex gap-[40px] items-center my-[40px] tab:m-[20px_0_40px_0] tab:px-[30px] mob:px-[20px] mob:flex-col mob:gap-[20px] mob:mt-0'>
            <div className='h-[460px] w-[819px] tab:w-[55%] mob:w-[100%] mob:h-[300px]'>
              <img src={interior1} alt='interior image' className='h-full w-full object-cover' />
            </div>
            <div className='tab:w-[45%] mob:w-[100%]'>
              <p className='w-[421px] tab:w-[100%] text-gray-500 text-[14px] pb-[10px] font-semibold mob:text-[12px] mob:pb-[4px]'>Perpetual Motion, our second offering, explores motions ranging from weaving, twisting, and shifting, to meeting and passing by. Each design, exquisitely rendered in wood, stone, metal, and leather, expresses our Crafted Modern ethos and a passion for material connections, extraordinary craftsmanship, and effortless functionality.</p>
              <a href='#' className='text-[14px] text-lightblack font-semibold underline mob:text-[12px]'>Explore More →</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
