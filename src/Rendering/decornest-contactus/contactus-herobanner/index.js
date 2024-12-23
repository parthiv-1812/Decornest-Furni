import React from 'react'

import dotssvg from '../../../Assets/Icons/dots-light.svg'
import yellowsofaimg from '../../../Assets/Images/yellow-sofa.png'

import locationicon from '../../../Assets/Icons/location-contact.svg'
import emailicon from '../../../Assets/Icons/email-contact.svg'
import callicon from '../../../Assets/Icons/telephone-contact.svg'

export default function ContactUsHerobanner() {
    return (
        <div className=''>
            <div className='relative  max-w-[100%] bg-green p-[110px_0_120px_0] mb-[70px] tab:mb-[30px] tab:overflow-hidden mob:mb-[40px] tab:p-[40px_0_400px] mob:p-[20px_0_440px_20px] tab:px-[30px] mob:overflow-hidden '>
                <div className='absolute top-[10%] left-[20px] tab:top-[30%] tab:left-[55%] mob:top-[40%] mob:left-[30%]'>
                    <img src={dotssvg} alt='dots-bg' />
                </div>
                <div className='max-w-[1320px] mx-auto flex flex-row-reverse tab:flex-row'>
                    <div className='right absolute top-[20px] left-[25px] tab:top-[34%] tab:left-[5px] mob:top-[40%] mob:left-[-370px]'>
                        <div className='w-[780px] h-[439px]'>
                            <img src={yellowsofaimg} alt='sofa-img' />
                        </div>
                    </div>
                    <div className='left max-w-[600px]'>
                        <h1 className='text-[54px] font-bold text-white leading-[70px] mb-[20px] tab:text-[40px] mob:text-[32px] tab:mb-0 mob:mb-0'>Contact Us</h1>
                        <p className='text-[14px] max-w-[500px] tab:max-w-[100%] font-medium text-lightgray leading-[25px] mb-[30px] mob:text-[12px] tab:mb-[20px] mob:mb-[20px]'>Get in touch for any inquiries, assistance, or details about our furniture and Interior.<br /> We're here to help make your space perfect!</p>
                        <div className='btn'>
                            <button className='bg-yellow p-[12px_30px] mob:p-[8px_24px] mob:text-[12px] text-black border-2 border-yellow rounded-full text-[16px] font-semibold mr-4 mob:mr-2'>shop now</button>
                            <button className='bg-transperent p-[12px_30px] mob:p-[8px_24px] mob:text-[12px] border-2 text-white border-lightgray rounded-full text-[16px] font-semibold'>explore More</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-[1000px] tab:w-[100%] mx-auto flex gap-[10px] justify-center mb-[80px] tab:mb-[40px] tab:mt-[40px] tab:gap-0 tab:justify-between tab:px-[20px] mob:mb-[20px] mob:flex-col'>
                <div className='flex gap-[10px] items-center w-[270px] cursor-pointer mob:mb-[20px] mob:mx-auto'>
                    <div className='h-[50px] w-[50px] bg-green rounded-[10px] flex justify-center items-center'>
                        <img src={callicon} alt='location icon' className='h-[25px] w-[25px]' />
                    </div>
                    <div>
                        <p className='text-[12px] text-green font-semibold'>+00 123-456-789.</p>
                    </div>
                </div>
                <div className='flex gap-[10px] items-center w-[270px] cursor-pointer mob:mb-[20px] mob:mx-auto'>
                    <div className='h-[50px] w-[50px] bg-green rounded-[10px] flex justify-center items-center'>
                        <img src={emailicon} alt='location icon' className='h-[25px] w-[25px]' />
                    </div>
                    <div>
                        <p className='text-[12px] text-green font-semibold'>decornestfurni@gmail.com</p>
                    </div>
                </div>
                <div className='flex gap-[10px] items-center w-[270px] cursor-pointer mob:mb-[20px] mob:mx-auto'>
                    <div className='h-[50px] w-[50px] bg-green rounded-[10px] flex justify-center items-center'>
                        <img src={locationicon} alt='location icon' className='h-[25px] w-[25px]' />
                    </div>
                    <div>
                        <p className='text-[12px] max-w-[200px] text-green font-semibold'>99 New Theme St. XY, USA 12345, Beside the Sun point land.</p>
                    </div>
                </div>
            </div>

            <div className='max-w-[1280px] mx-auto'>
                <div className='flex gap-[40px] tab:flex-col'>
                    <div className='w-[60%] mob:w-[100%] tab:w-[100%] tab:px-[30px] tab:mt-[20px]'>
                        <div className='flex gap-[20px] tab:flex tab:w-[100%]'>
                            <div className='w-[50%]'>
                                <label className='text-[14px] text-black font-semibold block mb-[5px]'>First Name</label>
                                <div className='w-[100%]  '>
                                    <input type='text' className='w-[100%] p-[10px_20px] border border-gray-400 mob:text-[12px] bg-gray-100  rounded-[10px]' />
                                </div>
                            </div>
                            <div className='w-[50%]'>
                                <label className='text-[14px] text-black font-semibold block mb-[5px]'>Last Name</label>
                                <div className='w-[100%]'>
                                    <input type='text' className='w-[100%]  border border-gray-400 p-[10px_20px] mob:text-[12px] bg-gray-100 rounded-[10px]' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className='text-[14px] text-black font-semibold block mt-[10px] mb-[5px]'>Email Address</label>
                            <div className='w-[100%] '>
                                <input type='email' className='w-[100%]  border border-gray-400 p-[10px_20px] mob:text-[12px] bg-gray-100 rounded-[10px]' />
                            </div>
                        </div>
                        <div>
                            <label className='text-[14px] text-black font-semibold block mt-[10px] mb-[5px]'>Message</label>
                            <div className='w-[100%] '>
                                <textarea className='w-[100%]  border border-gray-400 p-[10px_20px] mob:text-[12px] bg-gray-100  rounded-[10px]' />
                            </div>
                        </div>
                        <div>
                            <div className='m-[20px_0_40px] tab:my-[20px] mob:mb-0'>
                                <button className='w-[200px] tab:w-[160px] tab:text-[12px] tab:p-[10px_15px] cursor-pointer p-[10px_20px] bg-lightblack text-white font-semibold rounded-full'>Send Message</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-[40%] mob:w-[100%] tab:w-[100%] tab:px-[50px] mob:px-[30px]'>
                        <div className='sticky top-0 right-0 mb-[80px] tab:mb-[60px] mob:mb-[40px] cursor-pointer'>
                            <iframe className='h-[440px] w-[100%] tab:w-[100%] tab:h-[550px] mob:h-[350px] rounded-[15px] shadow-black shadow-lg' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.54586592733!2d72.73989489706297!3d21.159180203697005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1729142537192!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
