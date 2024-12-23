import React from 'react'
import logo from '../../Assets/Logo/Decornest White logo.png';
import facebook from '../../Assets/Icons/facebook-svgrepo-com.svg';
import twitter from '../../Assets/Icons/twitter.svg';
import linkdin from '../../Assets/Icons/linkedin.svg';
import wifi from '../../Assets/Icons/wifi.svg';
import google from '../../Assets/Icons/google.svg';
import location from '../../Assets/Icons/location1.svg';
import telephone from '../../Assets/Icons/telephone.svg';
import email from '../../Assets/Icons/email.svg';
import payment from '../../Assets/Icons/paymentCard.png';
import footerchairimg from '../../Assets/Images/white chair2.png'

export default function DecornestrFooter() {
    return (
        <div>
            <div className='border-b-2 relative border-gray-400 bg-green mt-[100px] mob:mt-0'>
                <div className='absolute top-[-25%] right-[3%] h-[335px] w-[300px] tab:top-[-25%] tab:right-[7%] mob:hidden' >
                    <img src={footerchairimg} alt='footer-chair-image' className='h-full w-full' />
                </div>
                <div className='max-w-[1430px] mx-auto p-[30px_30px_30px_50px] flex gap-[50px] pt-[74px] pb-[60px] tab:flex-col tab:gap-[40px] mob:grid-cols-1 tab:py-10  mob:flex-col mob:gap-[30px]'>
                    <div className='max-w-80'>
                        <div className='w-[200px] h-[62.66px] flex gap-4 mb-[10px] mob:mb-4'>
                            <img src={logo} alt='logo' className='h-full w-full' />
                        </div>
                        <div className='text-[12px] text-white font-bold mb-6 mob:mb-4'>
                            <p>Furnishing Your Vision, Perfecting Your Space.</p>
                        </div>
                        <div className='flex gap-[15px] items-center'>
                            <div className='bg-[#45B08C] cursor-pointer hover:bg-lightblack h-[30px] w-[30px] rounded-full flex items-center justify-center  duration-300 ease-in-out'>
                                <img className='h-[16px] w-[16px]' src={facebook} alt='facebook' />
                            </div>
                            <div className='bg-[#45B08C] cursor-pointer hover:bg-lightblack h-[30px] w-[30px] rounded-full flex items-center justify-center duration-300 ease-in-out'>
                                <img className='h-[16px] w-[16px]' src={twitter} alt='twitter' />
                            </div>
                            <div className='bg-[#45B08C] cursor-pointer hover:bg-lightblack h-[30px] w-[30px] rounded-full flex items-center justify-center duration-300 ease-in-out'>
                                <img className='h-[14px] w-[14px]' src={linkdin} alt='linkdin' />
                            </div>
                            <div className='bg-[#45B08C] cursor-pointer hover:bg-lightblack h-[30px] w-[30px] rounded-full flex items-center justify-center duration-300 ease-in-out'>
                                <img className='h-[16px] w-[16px]' src={wifi} alt='wifi' />
                            </div>
                            <div className='bg-[#45B08C] cursor-pointer hover:bg-lightblack h-[30px] w-[30px] rounded-full flex items-center justify-center duration-300 ease-in-out'>
                                <img className='h-[14px] w-[14px]' src={google} alt='google' />
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-[50px] tab:flex tab:gap-[40px] mob:flex-col mob:gap-[20px]'>
                        <div className='max-w-80 mob:max-w-full'>
                            <div className='text-xl mb-6 font-extrabold tracking-wide mob:mb-4'>
                                <h3 className='text-white pb-[5px] border-b-2 inline border-white'>Our Company</h3>
                            </div>
                            <div>
                                <div className='mb-3 flex items-center gap-[3px] text-white text-sm mob:mb-2'>
                                    <img className='w-5 h-5 inline mr-2' src={location} alt='location' />
                                    <span className='hover:text-yellow ease-in-out duration-300 cursor-pointer'>99 New Theme St. XY, USA 12345, Beside the Sun point land.</span>
                                </div>
                                <div className='mb-4 flex items-center gap-[3px] text-white text-sm'>
                                    <img className='w-5 h-5 inline mr-2' src={telephone} alt='telephone' />
                                    <span className='hover:text-yellow  ease-in-out duration-300 cursor-pointer'>+00 123-456-789.</span>
                                </div>
                                <div className='mb-4 flex items-center gap-[3px] text-white text-sm '>
                                    <img className='w-5 h-5 inline mr-2' src={email} alt='email' />
                                    <span className='hover:text-yellow ease-in-out duration-300 cursor-pointer'>decornestfurni@gmail.com</span>
                                </div>
                            </div>
                        </div>
                        <div className='max-w-80'>
                            <div className='text-xl mb-6 font-extrabold tracking-wide mob:mb-4'>
                                <h3 className='text-white pb-[5px] border-b-2 border-white mob:inline'>Usefull Links</h3>
                            </div>
                            <div>
                                <a href='#' className='mb-3 text-white text-sm hover:text-yellow ease-in-out duration-300 block mob:mb-2 mob:pt-[3px]'>Return Policy</a>
                                <a href='#' className='mb-3 text-white text-sm hover:text-yellow ease-in-out duration-300 block mob:mb-2'>Security</a>
                                <a href='#' className='mb-3 text-white text-sm hover:text-yellow ease-in-out duration-300 block mob:mb-2'>Careers</a>
                                <a href='#' className='mb-3 text-white text-sm hover:text-yellow ease-in-out duration-300 block mob:mb-2'>Sitemap</a>
                            </div>
                        </div>
                        <div className='max-w-80'>
                            <div className='text-xl mb-6 font-extrabold tracking-wide mob:mb-4'>
                                <h3 className='text-white pb-[5px] border-b-2 border-white mob:inline'>Our Services</h3>
                            </div>
                            <div>
                                <a href='#' className='mb-3 text-white text-sm hover:text-yellow ease-in-out duration-300 block mob:mb-2 mob:pt-[3px]'>Press</a>
                                <a href='#' className='mb-3 text-white text-sm hover:text-yellow ease-in-out duration-300 block mob:mb-2'>Careers</a>
                                <a href='#' className='mb-3 text-white text-sm hover:text-yellow ease-in-out duration-300 block mob:mb-2'>Delivery</a>
                                <a href='#' className='mb-3 text-white text-sm hover:text-yellow ease-in-out duration-300 block mob:mb-2'>Service</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-green'>
                <div className='max-w-[1430px] mx-auto items-center pt-[30px] pb-[40px] px-4 py-6 tab:pb-12 mob:px-2 mob:pt-4 mob:pb-18'>
                    <div className='flex justify-between items-center mob:flex-col mob:gap-y-4'>
                        <div className='text-sm text-white'>
                            <p>Copyright © 2022. All Rights Reserved</p>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <img src={payment} alt='payment' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}