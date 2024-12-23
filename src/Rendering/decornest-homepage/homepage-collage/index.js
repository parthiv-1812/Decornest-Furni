import React from 'react'
import gridleftleftimg from '../../../Assets/Images/grid-left-left.jpg'
import gridleftright1img from '../../../Assets/Images/light-green-bg.jpeg'
import gridleftright2img from '../../../Assets/Images/grid-left-right-2.jpg'
import gridrighttopimg from '../../../Assets/Images/grid-right-top.jpg'
import gridrightbottomimg1 from '../../../Assets/Images/grid-right-bottom-1.jpg'
import gridrightbottomimg2 from '../../../Assets/Images/grid-right-bottom-2.jpg'

export default function HomepageCollage() {
    return (
        <div>
            <div className=' max-w-[1517px]  mx-auto p-[80px_0_60px] mob:p-[60px_0_40px]'>
                <div className='collage grid grid-cols-2 tab:grid-cols-[255px_1fr] mob:grid-cols-1'>
                    <div className='grid-left grid grid-cols-2 tab:grid-cols-1'>
                        <div className='left-left relative tab:hidden'>
                            <div className='img overflow-hidden'>
                                <img src={gridleftleftimg} alt='grid-left-left-img' className='transform hover:scale-110 transition duration-300 object-cover' />
                            </div>
                            <div className='text absolute top-[10px] text-center p-[40px] animate__animated animate__fadeIn wow'data-wow-offset='200'>
                                <h3 className='text-[36px] leading-[40px] text-[#246763] font-bold mb-[10px]'>MINIMAL ARMCHAIRS</h3>
                                <p className='text-[14px] leading-[20px] text-white font-semibold mb-[10px]' >Facilisis volutpat augue non himenaeos eros hendrerit habitant mi cras nascetur semper bibendum consectetur in est imperdiet sociis.</p>
                                <button className='bg-transparent p-[5px_10px] text-white font-semibold text-[14px] border-2 border-solid border-white hover:bg-white hover:text-black transition-all' >READ MORE</button>
                            </div>
                        </div>
                        <div className='left-right flex flex-col'>
                            <div className='right-bottom-1 relative tab:h-[255px] tab:w-[255px] mob:min-w-full'>
                                <div className='img overflow-hidden'>
                                    <img src={gridleftright1img} alt='grid-right-bottom-img' className='transform hover:scale-110 transition duration-300 h-[379.25px] object-cover tab:h-[255px]' />
                                </div>
                                <div className='text absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 animate__animated animate__fadeIn wow'data-wow-offset='200'>
                                    <div className='text text-center'>
                                        <h3 className='text-[34px] mb-[20px] text-white font-bold leading-[40px]'>HOT SALE<br />UP TO 70%</h3>
                                    </div>
                                    <div className='timer'>
                                        <div className='flex gap-[10px] text-center justify-center'>
                                            <div className=' bg-white px-4 py-2 rounded-[10px] tab:px-2 tab:py-1'>
                                                <b className='text-xl tab:text-base'>401</b>
                                                <p className='text-xs'>DAYS</p>
                                            </div>
                                            <div className=' bg-white px-4 py-2 rounded-[10px] tab:px-2 tab:py-1'>
                                                <b className='text-xl tab:text-base'>12</b>
                                                <p className='text-xs'>HOURS</p>
                                            </div>
                                            <div className=' bg-white px-4 py-2 rounded-[10px] tab:px-2 tab:py-1'>
                                                <b className='text-xl tab:text-base'>17</b>
                                                <p className='text-xs'>MINS</p>
                                            </div>
                                            <div className=' bg-white px-4 py-2 rounded-[10px] tab:px-2 tab:py-1'>
                                                <b className='text-xl tab:text-base'>45</b>
                                                <p className='text-xs'>SECS</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='right-bottom-2'>
                                <div className='img overflow-hidden '>
                                    <img src={gridleftright2img} alt='grid-right-bottom-img' className='transform hover:scale-110 transition duration-300 h-[379.25px] object-cover tab:h-[255px] tab:w-[255px] mob:min-w-full' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid-right grid grid-rows-2 mob:grid-rows-1'>
                        <div className='right-left relative'>
                            <div className='img overflow-hidden'>
                                <img src={gridrighttopimg} alt='grid-right-top-img' className='transform hover:scale-110 transition duration-300 object-cover' />
                            </div>
                            <div className='text absolute max-w-[350px] top-[95px] left-[50px] tab:top-[40px] mob:top-[10px] animate__animated animate__fadeIn wow'data-wow-offset='200'>
                                <h3 className='text-[36px] leading-[40px] text-yellow font-bold mb-[10px] uppercase mob:text-[34px]'>furniture factory</h3>
                                <p className='text-[12px] leading-[20px] text-gray-500 font-semibold mb-[10px] mob:hidden' >Lobortis semper nullam hac gravida <br />scelerisque sed ad cum erat.</p>
                                <button className='bg-transparent p-[5px_10px] text-yellow font-semibold text-[14px] border-2 border-solid border-yellow hover:bg-yellow hover:text-white transition-all mob:bg-yellow mob:text-white mob:hover:bg-white mob:hover:text-yellow' >READ MORE</button>
                            </div>
                        </div>
                        <div className='right-right grid grid-cols-2 mob:grid-cols-1'>
                            <div className='right-bottom-1 relative'>
                                <div className='img overflow-hidden'>
                                    <img src={gridrightbottomimg1} alt='grid-right-bottom-img' className='transform hover:scale-110 transition duration-300 object-cover' />
                                </div>
                                <div className='text absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 animate__animated animate__fadeIn wow'data-wow-offset='200'>
                                    <h3 className='text-[36px] leading-[50px] text-white font-semibold uppercase text-center w-[230px]'>yellow trend soda</h3>
                                </div>
                            </div>
                            <div className='right-bottom-2 mob:hidden'>
                                <div className='img overflow-hidden'>
                                    <img src={gridrightbottomimg2} alt='grid-right-bottom-img' className='transform hover:scale-110 transition duration-300 object-cover' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
