import React from 'react'

import dotssvg from '../../../Assets/Icons/dots-light.svg'
import sofaimg from '../../../Assets/Images/white-sofa-png.png'
import dotyellowssvg from '../../../Assets/Icons/dots-yellow.svg'
import chooseimg from '../../../Assets/Images/choose-img.webp'
import truck from '../../../Assets/Icons/truck.svg'
import bag from '../../../Assets/Icons/bag.svg'
import support from '../../../Assets/Icons/support.svg'
import returnimg from '../../../Assets/Icons/return.svg'
import p1img from '../../../Assets/Images/p-1.webp'
import p2img from '../../../Assets/Images/p-2.webp'
import p3img from '../../../Assets/Images/p-3.webp'
import p4img from '../../../Assets/Images/p-4.webp'



export default function AboutUsHerobanner() {
    return (
        <div>
            <div className='relative  max-w-[100%] bg-green p-[110px_0_120px_0] mb-[70px] tab:mb-[30px] mob:mb-[40px] tab:p-[60px_0_440px] mob:p-[20px_0_440px_20px] tab:px-[20px] mob:overflow-hidden  '>
                <div className='absolute top-[15%] left-[20px] tab:left-[60%] tab:top-[32%] mob:h-[200px] mob:w-[200px] mob:top-[42%] mob:left-[37%]'>
                    <img src={dotssvg} alt='dots-bg' />
                </div>
                <div className='max-w-[1320px] mx-auto flex flex-row-reverse tab:flex-row'>
                    <div className='right absolute top-[110px] left-[25px] tab:left-[-5%] tab:top-[43%] mob:left-[-400px]'>
                        <div className='w-[780px] h-[439px]'>
                            <img src={sofaimg} alt='sofa-img' />
                        </div>
                    </div>
                    <div className='left max-w-[600px] tab:max-w-[100%]'>
                        <h1 className='text-[54px] font-bold text-white leading-[70px] mb-[20px] tab:text-[40px] tab:mb-0  mob:text-[28px]'>About Us</h1>
                        <p className='text-[14px] max-w-[500px] font-medium text-lightgray leading-[25px] mb-[30px] mob:text-[12px]'>At Decornest , we craft premium-quality furniture and interior that combines timeless design with exceptional comfort. Our commitment is to create spaces you love, blending style, functionality, and sustainability.</p>
                        <div className='btn'>
                            <button className='bg-yellow p-[12px_30px] text-black border-2 border-yellow rounded-full text-[16px] font-semibold mr-4'>shop now</button>
                            <button className='bg-transperent p-[12px_30px] border-2 text-white border-lightgray rounded-full text-[16px] font-semibold'>explore</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative'>
                <div className='absolute top-[-40px] right-[32.4%] z-[-10] tab:top-[33%] tab:right-[80%] mob:top-[52%] mob:right-[60%]'>
                    <img src={dotyellowssvg} alt='dots-bg' />
                </div>
                <div className=' max-w-[1220px] mx-auto grid grid-cols-[1fr_550px] gap-[80px] tab:gap-[60px] mob:gap-[30px] items-center p-[15px_0_80px] tab:grid-cols-1 tab:px-[30px] mob:p-[40px_20px]'>
                    <div className='left'>
                        <h4 className='text-[32px] font-medium text-[#2f2f2f] mb-[8px] mob:text-[28px] tab:mb-0'>Why Choose Us</h4>
                        <p className='text-[14px] max-w-[500px] font-medium text-gray-500 leading-[25px] mob:text-[12px] mob:leading-[20px] mb-[30px] tab:max-w-[100%]'>Choose us for unparalleled craftsmanship, innovative designs, and eco-friendly materials that bring your vision to life. We prioritize quality, customer satisfaction, and timeless elegance in every piece.</p>
                        <div className='grid grid-cols-2 gap-[40px] mob:px-[10px] mob:gap-[20px_30px] tab:px-[10px] tab:gap-[40px_30px]'>
                            <div>
                                <div className='h-[50px] w-[50px] mob:h-[40px] mob:w-[40px] bg-gray-300 p-[10px] rounded-full flex justify-end'>
                                    <img src={truck} alt='truck' className='h-full w-full object-cover' />
                                </div>
                                <div>
                                    <h6 className='text-[14px] text-black font-medium mt-[10px] pb-[5px]'>Fast & Free Shipping</h6>
                                    <p className='text-[12px] text-gray-600 font-medium'>Enjoy fast and free shipping on all orders, delivering your furniture quickly and efficiently.</p>
                                </div>
                            </div>
                            <div>
                                <div className='h-[50px] w-[50px] mob:h-[40px] mob:w-[40px] bg-gray-300 p-[10px] rounded-full flex justify-end'>
                                    <img src={bag} alt='truck' className='h-full w-full object-cover' />
                                </div>
                                <div>
                                    <h6 className='text-[14px] text-black font-medium mt-[10px] pb-[5px]'>Easy to Shop</h6>
                                    <p className='text-[12px] text-gray-600 font-medium'>Discover a seamless shopping experience with our user-friendly platform and intuitive design.</p>
                                </div>
                            </div>
                            <div>
                                <div className='h-[50px] w-[50px] mob:h-[40px] mob:w-[40px] bg-gray-300 p-[10px] rounded-full flex justify-end'>
                                    <img src={support} alt='truck' className='h-full w-full object-cover' />
                                </div>
                                <div>
                                    <h6 className='text-[14px] text-black font-medium mt-[10px] pb-[5px]'>24/7 Support</h6>
                                    <p className='text-[12px] text-gray-600 font-medium'>Our dedicated support team is available 24/7 to assist you with any queries or concerns.</p>
                                </div>
                            </div>
                            <div>
                                <div className='h-[50px] w-[50px] mob:h-[40px] mob:w-[40px] bg-gray-300 p-[10px] rounded-full flex justify-end'>
                                    <img src={returnimg} alt='truck' className='h-full w-full object-cover' />
                                </div>
                                <div>
                                    <h6 className='text-[14px] text-black font-medium mt-[10px] pb-[5px]'>Hassle Free Returns</h6>
                                    <p className='text-[12px] text-gray-600 font-medium'>Enjoy peace of mind with our hassle-free returns policy, designed to make your experience seamless.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' px-[12px] w-[526px] h-[602.3px] tab:w-[100%] tab:h-[796px] mob:w-[100%] mob:px-0 mob:h-[419px]'>
                        <img src={chooseimg} alt='sofa-img' className='h-full w-full object-cover rounded-[15px]' />
                    </div>
                </div>
            </div>

            <div className='max-w-[1280px] mx-auto p-[30px_0_70px_0] tab:px-[30px]'>
                <div className='text-center mb-[30px]'>
                    <h4 className='text-[32px] text-green font-semibold pb-[5px] border-b-2 border-green inline'>Our Team</h4>
                </div>
                <idv className=' grid grid-cols-4 gap-[24px] tab:grid-cols-2 tab:gap-[20px] mob:grid-cols-1'>
                    <div>
                        <div className='h-[306px] w-[100%] overflow-hidden rounded-[15px] shadow-md shadow-black'>
                            <img src={p1img} alt='truck' className='h-full w-full object-cover rounded-[15px] hover:transform hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out' />
                        </div>
                        <div>
                            <h6 className='text-[18px] text-green font-bold mt-[15px] pb-[5px]'>Lawson Arnold</h6>
                            <p className='text-[14px] text-lightblack font-medium pb-[6px]'>Founder & CEO.</p>
                            <p className='text-[12px] text-gray-600 font-medium'>Lawson Arnold , the visionary behind Decornestq, is dedicated to redefining modern living with innovative, sustainable furniture solutions.</p>
                        </div>
                    </div>

                    <div>
                        <div className='h-[306px] w-[100%] overflow-hidden rounded-[15px] shadow-md shadow-black'>
                            <img src={p2img} alt='truck' className='h-full w-full object-cover rounded-[15px] hover:transform hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out' />
                        </div>
                        <div>
                            <h6 className='text-[18px] text-green font-bold mt-[15px] pb-[5px]'>Jeremy Walker</h6>
                            <p className='text-[14px] text-lightblack font-medium pb-[6px]'>CFO.</p>
                            <p className='text-[12px] text-gray-600 font-medium'>Jeremy Walker , our Chief Financial Officer, expertly manages Decornest's financial strategy, ensuring sustainable growth and long-term success.</p>
                        </div>
                    </div>

                    <div>
                        <div className='h-[306px] w-[100%] overflow-hidden rounded-[15px] shadow-md shadow-black'>
                            <img src={p3img} alt='truck' className='h-full w-full object-cover rounded-[15px] hover:transform hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out' />
                        </div>
                        <div>
                            <h6 className='text-[18px] text-green font-bold mt-[15px] pb-[5px]'>Patrik White</h6>
                            <p className='text-[14px] text-lightblack font-medium pb-[6px]'>COO.</p>
                            <p className='text-[12px] text-gray-600 font-medium'>Patrik White , our Chief Operating Officer, oversees daily operations to ensure seamless efficiency and exceptional customer experiences at Decornest.</p>
                        </div>
                    </div>

                    <div>
                        <div className='h-[306px] w-[100%] overflow-hidden rounded-[15px] shadow-md shadow-black'>
                            <img src={p4img} alt='truck' className='h-full w-full object-cover rounded-[15px] hover:transform hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out' />
                        </div>
                        <div>
                            <h6 className='text-[18px] text-green font-bold mt-[15px] pb-[5px]'>Kathryn Ryan</h6>
                            <p className='text-[14px] text-lightblack font-medium pb-[6px]'>Managing Director</p>
                            <p className='text-[12px] text-gray-600 font-medium'>Kathryn Ryan , our Managing Director, leads Decornest with strategic vision and a commitment to excellence in every aspect of our business.</p>
                        </div>
                    </div>
                </idv>
            </div>

        </div>
    )
}
