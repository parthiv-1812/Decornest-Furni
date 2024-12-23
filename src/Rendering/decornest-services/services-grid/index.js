import React from 'react'

import interior2 from '../../../Assets/Images/service1.jpg'
import interior3 from '../../../Assets/Images/service2.jpg'
import interior4 from '../../../Assets/Images/property image 4.jpg'
import interior5 from '../../../Assets/Images/property image 5.jpg'

import serviceimg1 from '../../../Assets/Images/grid img 1.jpg'
import serviceimg2 from '../../../Assets/Images/grid img 2.jpg'
import serviceimg3 from '../../../Assets/Images/grid img 3.jpg'

import interiorimg3 from '../../../Assets/Images/property image 3.jpg'
import interiorvideoservices from '../../../Assets/Videos/interior video property.mp4'

export default function ServicesGrids() {
    return (
        <div>

            <div className='max-w-[1320px] mx-auto flex gap-[80px] pt-[80px] tab:py-[40px] tab:gap-0 tab:flex-col tab:px-[30px] mob:px-[20px]'>
                <div className='w-[50%] tab:w-[100%] tab:flex tab:flex-col-reverse'>
                    <div>
                        <p className='w-[421px] tab:w-[100%] text-gray-500 text-[14px] pb-[50px] pt-[40px] tab:p-[30px_0] font-semibold tab:text-center'>Spark human connection, engage the senses, create a sense of scale and flow, and define zones for social and solitary pursuits. Workshop Collection unites style and ease through a modern lens.</p>
                    </div>
                    <div className='w-[519px] h-[696px] tab:h-[400px] mob:h-[250px] tab:w-[100%] float-end'>
                        <video src={interiorvideoservices} alt='video' muted autoPlay loop className='h-full w-full tab:rounded-[20px] tab:shadow-2xl tab:shadol-black object-cover' />
                    </div>
                </div>
                <div>
                    <div className='w-[580px] h-[781px] tab:h-[400px] tab:w-[100%] mob:h-[250px] float-end'>
                        <img src={interiorimg3} alt='image' className='h-full w-full tab:rounded-[20px] object-cover' />
                    </div>
                </div>
            </div>

            <div className='bg-green max-w-[100%] my-[100px] tab:my-0 tab:p-[30px_0_100px_0] mob:py-[40px]' >
                <div className='max-w-[1320px] mx-auto my-[30px] py-[60px] tab:px-[30px] tab:py-0 tab:my-0 flex tab:flex-col mob:px-[20px]'>
                    <div className='W-[30%] pt-[300px] tab:pt-[10px] tab:w-[100%] mob:pt-0'>
                        <h4 className='text-[58px] text-white font-semibold leading-[65px] mb-[20px] tab:text-[42px] mob:text-[32px] tab:mb-0 mob:leading-[50px]'>PURE MATERIALITY</h4>
                        <p className='max-w-[300px] tab:max-w-[100%] text-gray-200 text-[14px] font-medium tab:mb-[20px] mob:text-[12px]'>Materials tell a story. Fine fabrics and trims accentuate angles and curves, bringing light, luxurious contrast to solid forms. Wood furnishings - shaped, smoothed and softened by the best makers - explore high-tech and hand techniques and celebrate natural texture. Wood, metal, resin, and natural stone are paired and joined in unexpected ways, playing with light and shadow, positive and negative space, and contrasting colors and textures.</p>
                    </div>
                    <div className='w-[70%] tab:w-[100%] relative tab:px-[10px] mob:px-0'>
                        <div className='w-[394px] h-[548px] tab:top-0 tab:left-0 mob:hidden tab:relative absolute bottom-0 left-[-10px]'>
                            <img src={serviceimg1} alt='service image 1' className='w-full h-full shadow-xl shadow-black' />
                        </div>
                        <div className='w-[591px] h-[443px] tab:w-[530px] tab:right-[10px] mob:hidden tab:top-[10%] absolute bottom-[50px] right-[-30px]'>
                            <img src={serviceimg2} alt='service image 1' className='w-full h-full shadow-xl shadow-black' />
                        </div>
                        <div className='w-[394px] h-[528px] tab:top-[22%] tab:h-[480px] mob:relative mob:top-0 mob:left-0 mob:w-[100%] tab:left-[34%]  absolute top-0 right-[30px]'>
                            <img src={serviceimg3} alt='service image 1' className='w-full h-full shadow-xl shadow-black' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='max-w-[1320px] mx-auto flex flex-row-reverse gap-[120px] tab:flex-col tab:gap-0 tab:px-[30px] mob:px-[20px] mob:pt-[40px] tab:pt-[60px]'>
                <div className='w-[50%] flex flex-col-reverse tab:w-[100%]'>
                    <div>
                        <p className='w-[521px] text-gray-500 tab:w-[100%] tab:px-[10px] mob:px-0 mob:py-[25px] mob:text-[12px] mob:leading-[22px] tab:py-[30px] text-[14px] pb-[50px] pt-[40px] font-semibold'>Look again. Thoughtfully designed from every angle, our offering is well-suited to an infinite array of styles, room types. and uses. Chic, practical pieces solve for common and complex design problems, drawing on the Workshop/APD team's experience. Dining tables deftly seat large families. Swivel chairs dazzle from every angle, and coffee tables conceal additional seating.</p>
                    </div>
                    <div className='w-[519px] h-[696px] tab:h-[520px] tab:w-[100%] mob:h-[360px] float-end'>
                        <img src={interior5} alt='image' className='h-full w-full object-cover' />

                    </div>
                </div>
                <div>
                    <div className='w-[519px] h-[679px] tab:hidden'>
                        <img src={interior4} alt='image' className='mt-[180px] h-full w-full object-cover' />
                    </div>
                </div>
            </div>

            <div className='max-w-[100%] grid grid-cols-2 py-[80px] cursor-pointer mob:grid-cols-1 mob:py-[40px]'>
                <div className='h-[500px] w-full tab:h-[400px]  mob:h-[300px] overflow-hidden'>
                    <img src={interior2} alt='interior image ' className='h-full w-full object-cover hover:scale-105 hover:ease-in-out hover:duration-300' />
                </div>
                <div className='h-[500px] w-full tab:h-[400px] mob mob:h-[300px]  overflow-hidden'>
                    <img src={interior3} alt='interior image' className='h-full w-full object-cover hover:scale-105 hover:ease-in-out hover:duration-300' />
                </div>
            </div>

            <div className='max-w-[1320px] mx-auto flex gap-[50px] items-center tab:gap-[20px] tab:px-[30px] mob:flex-col mob:px-[20px] mob:pb-[20px] tab:pb-[20px] pb-[40px]'>
                <div className='w-[50%] tab:w-[60%] mob:w-[100%]'>
                    <h4 className='text-[58px] text-green font-semibold tab:text-[38px] mob:text-[32px]'>STAY CONNECTED</h4>
                    <p className='text-[14px] text-gray-500 font-semibold uppercase  tab:text-[12px]'>Never miss an update from Workshop Collection.</p>
                </div>
                <div className='w-[50%] mob:w-[100%]'>
                    <div className='w-[100%] '>
                        <input type='email' placeholder='enter your email' className='w-[100%] tab:text-[12px] text-[14px] font-semibold uppercase border border-gray-400 p-[10px_20px] bg-gray-100 rounded-[10px]' />
                    </div>
                </div>
            </div>

        </div>
    )
}
