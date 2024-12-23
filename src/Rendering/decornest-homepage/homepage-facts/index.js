import React from 'react'
import lasrbennerimg from '../../../Assets/Images/last-banner-2.jpg'
import factimg1 from '../../../Assets/Icons/fact-1.svg'
import factimg2 from '../../../Assets/Icons/fact-2.svg'
import factimg3 from '../../../Assets/Icons/fact-3.svg'
import factimg4 from '../../../Assets/Icons/fact-4.svg'

export default function HomepageFacts() {
    return (
        <div>
            <div className=' max-w-[1517px] relative mx-auto mob:p-[40px_0_60px_0] mob:bg-slate-200'>
                <div className='img opacity-[70%] h-[700px] tab:h-[850px] mob:hidden'>
                    <img className='h-[100%] object-cover' src={lasrbennerimg} alt='last-banner-img' />
                </div>
                <div className='max-w-[476.8px] mob:max-w-[100%] mob:px-[30px] absolute top-[16%] left-[35%] tab:top-[60px] tab:left-[21%] mx-auto text-center mob:top-0 mob:left-0 mob:relative'>
                    <strong className='text-[12px] text-lightgreen font-semibold block animate__animated animate__fadeIn' data-wow-offset='200'>SOMETHING ABOUT US</strong>
                    <h4 className='text-[38px] text-black font-semibold animate__animated animate__fadeInDown wow'data-wow-offset='200'>Interesting Facts</h4>
                    <p className='text-[14px] text-gray-600 font-semibold pb-[20px] animate__animated animate__fadeIn' data-wow-offset='200'>Decornest flat-pack furniture to revolutionize affordable and portable design. Herman Miller's iconic chairs, like the Eames Lounge, blend functionality with art and are museum-worthy.</p>
                </div>
                <div className='max-w-[1200px] mx-auto absolute top-[45%] left-[12%] tab:top-[34%] tab:left-0 mob:relative'>
                    <div className='grid grid-cols-4 gap-8 tab:grid-cols-2 px-[40px] mob:px-[20px] mob:gap-[25px] mob:grid-cols-1'>
                        <div className='bg-gray-100 p-[20px] rounded-[10px] shadow-black shadow-lg animate__animated animate__fadeIn wow'data-wow-offset='300'>
                            <div className='tab:h-[40px] tab:w-[40px] h-[60px] w-[60px] mx-auto'>
                                <img className='h-[100%] w-[100%]' src={factimg1} alt='fact-image' />
                            </div>
                            <div className='text-center'>
                                <h4 className='text-[17px] tab:text-[14px] font-medium text-[#242424] mt-[15px]'>APTENT VESTIBULUM</h4>
                                <p className='text-[13px] tab:text-[12px] font-normal text-[#767676] mt-[10px] pb-[25px]'>It symbolizes a harmonious and functional gateway, commonly used metaphorically for balance and elegance in design or structure.</p>
                                <a className='no-underline uppercase text-[12px] tab:text-[10px] text-red-900 font-semibold mt-[10px]'>Learn More</a>
                            </div>
                        </div>
                        <div className='bg-gray-100 p-[20px] rounded-[10px] shadow-black shadow-lg animate__animated animate__fadeIn wow'data-wow-offset='200'>
                            <div className='tab:h-[40px] tab:w-[40px] h-[60px] w-[60px] mx-auto'>
                                <img src={factimg2} alt='fact-image' />
                            </div>
                            <div className='text-center'>
                                <h4 className='text-[17px] tab:text-[14px] font-medium text-[#242424] mt-[15px]'>RIDICULUS SCELERIS</h4>
                                <p className='text-[13px] tab:text-[12px] font-normal text-[#767676] mt-[10px] tab:pb-[20px] pb-[45px]'>It conveys the idea of something so foolishly wrong or outrageous that it borders on being ridiculous.</p>
                                <a className='no-underline tab:text-[10px] uppercase text-[12px] text-red-900 font-semibold mt-[10px]'>Learn More</a>
                            </div>
                        </div>
                        <div className='bg-gray-100 p-[20px] rounded-[10px] shadow-black shadow-lg animate__animated animate__fadeIn wow'data-wow-offset='200'>
                            <div className='tab:h-[40px] tab:w-[40px] h-[60px] w-[60px] mx-auto'>
                                <img src={factimg3} alt='fact-image' />
                            </div>
                            <div className='text-center'>
                                <h4 className='text-[17px] tab:text-[14px] font-medium text-[#242424] mt-[15px]'>METUS EUISMOD</h4>
                                <p className='text-[13px] tab:text-[12px] font-normal text-[#767676] mt-[10px] pb-[5px]'>Metus Euismod is a Latin phrase that translates to "fear of adjustment" or "fear of change." It suggests a reluctance or anxiety about adapting to new circumstances or situations.</p>
                                <a className='no-underline tab:text-[10px] uppercase text-[12px] text-red-900 font-semibold mt-[10px]'>Learn More</a>
                            </div>
                        </div>
                        <div className='bg-gray-100 p-[20px] rounded-[10px] shadow-black shadow-lg animate__animated animate__fadeIn wow'data-wow-offset='200'>
                            <div className='tab:h-[40px] tab:w-[40px] h-[60px] w-[60px] mx-auto'>
                                <img src={factimg4} alt='fact-image' />
                            </div>
                            <div className='text-center'>
                                <h4 className='text-[17px] tab:text-[14px] font-medium text-[#242424] mt-[15px]'>FUSCE RIDICULUS</h4>
                                <p className='text-[13px] tab:text-[12px] font-normal text-[#767676] mt-[10px] tab:pb-[22px] pb-[45px]'>It conveys the idea of something seemingly serious or gloomy that is, in fact, foolish or ridiculous.</p>
                                <a className='no-underline tab:text-[10px] uppercase text-[12px] text-red-900 font-semibold mt-[10px]'>Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
