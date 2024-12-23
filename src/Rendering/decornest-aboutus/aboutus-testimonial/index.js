import React, { Component } from 'react'
import Slider from "react-slick";

import leftarw from '../../../Assets/Icons/left-arrow.svg'
import rightarw from '../../../Assets/Icons/right-arrow.svg'

import reviewimg1 from '../../../Assets/Images/review1.webp'
import reviewimg2 from '../../../Assets/Images/review2.webp'
import reviewimg3 from '../../../Assets/Images/review3.webp'
import reviewimg4 from '../../../Assets/Images/review4.webp'

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='right-arrow-categories '
            onClick={onClick}
        >
            <img className='absolute left-[-50px] tab:left-[30px] mob:top-[60%] mob:left-[10px] tab:top-[40%] top-[50%] z-10 h-[30px] w-[30px] opacity-40 hover:opacity-100' src={rightarw} />
        </div>
    );
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='left-arrow-categories'
            onClick={onClick}
        >
            <img className='absolute tab:right-[30px] right-[-50px] mob:top-[60%] mob:right-[10px] tab:top-[40%] top-[50%] z-10 h-[30px] w-[30px] opacity-40 hover:opacity-100' src={leftarw} />
        </div>
    );
}

export default function AboutUsTestimonial() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
    };
    return (
        <div>
            <div className=' max-w-[100%] p-[80px_0_60px] tab:py-[40px] mob:py-[30px]'>
                <div className='max-w-[476.8px] mx-auto text-center mb-[40px] tab:mb-[30px] mob:mb-[20px]'>
                    <strong className='text-[12px] text-lightgreen font-bold block mb-2 tab:text-[10px] mob:text-[10px]'>SOME BEST REVIEWS IN 2024</strong>
                    <h4 className='text-[38px] tab:text-[28px] mob:text-[22px] text-green font-semibold border-b-2 border-green inline'>Testimonials</h4>
                </div>
                <div className='slider max-w-[1020px] mx-auto px-[20px]'>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <div className='slider-text text-center'>
                                    <p className='text-[14px] max-w-[800px] tab:max-w-[500px] tab:text-[12px] mx-auto text-gray-500 font-medium mb-[20px]'>"Working with Decornest has been a fantastic experience. Their furniture not only elevates the aesthetics of our spaces but also provides exceptional comfort and durability. The attention to detail and commitment to quality are evident in every piece. We highly recommend Decornest for anyone looking to enhance their interiors."</p>
                                </div>
                                <div className='slider-img h-[120px] w-[120px] tab:h-[80px] tab:w-[80px] border-2 border-green rounded-full mx-auto overflow-hidden'>
                                    <img src={reviewimg1} alt='slider-img-1' className='transform hover:scale-110 transition duration-300 object-cover' />
                                </div>
                                <div className='text-center'>
                                    <h6 className='text-[18px] tab:text-[16px] text-green font-bold mt-[15px] pb-[5px]'>Julie Sweet</h6>
                                    <p className='text-[14px] tab:text-[12px] text-lightblack font-medium pb-[6px]'>CEO , Accenture</p>
                                </div>
                            </div>

                            <div>
                                <div className='slider-text text-center'>
                                    <p className='text-[14px] max-w-[800px] tab:max-w-[500px] tab:text-[12px] mx-auto text-gray-500 font-medium mb-[20px]'>"We've been consistently impressed with the quality and craftsmanship of Decornest's furniture. Their pieces are not only stylish but also built to last, making them a great addition to any workspace. The team's professionalism and attention to detail make them our go-to partner for all furniture needs."</p>
                                </div>
                                <div className='slider-img h-[120px] w-[120px] tab:h-[80px] tab:w-[80px] border-2 border-green rounded-full mx-auto overflow-hidden'>
                                    <img src={reviewimg2} alt='slider-img-1' className='transform hover:scale-110 transition duration-300 object-cover' />
                                </div>
                                <div className='text-center'>
                                    <h6 className='text-[18px] tab:text-[16px] text-green font-bold mt-[15px] pb-[5px]'>Juliet Luxa</h6>
                                    <p className='text-[14px] tab:text-[12px] text-lightblack font-medium pb-[6px]'>CEO , Luxa Care Furni.</p>
                                </div>
                            </div>

                            <div>
                                <div className='slider-text text-center'>
                                    <p className='text-[14px] max-w-[800px] tab:max-w-[500px] tab:text-[12px] mx-auto text-gray-500 font-medium mb-[20px]'>"Collaborating with Decornest has been a delight. Their furniture collection combines timeless design with top-tier quality, creating the perfect balance for our office environment. We’ve received countless compliments on their pieces and highly recommend them for any business looking to upgrade their interiors."</p>
                                </div>
                                <div className='slider-img h-[120px] w-[120px] tab:h-[80px] tab:w-[80px] border-2 border-green rounded-full mx-auto overflow-hidden'>
                                    <img src={reviewimg3} alt='slider-img-1' className='transform hover:scale-110 transition duration-300 object-cover' />
                                </div>
                                <div className='text-center'>
                                    <h6 className='text-[18px] tab:text-[16px] text-green font-bold mt-[15px] pb-[5px]'>Devold Bravis</h6>
                                    <p className='text-[14px] tab:text-[12px] text-lightblack font-medium pb-[6px]'>CEO , Harmony Home Co.</p>
                                </div>
                            </div>

                            <div>
                                <div className='slider-text text-center'>
                                    <p className='text-[14px] max-w-[800px] tab:max-w-[500px] tab:text-[12px] mx-auto text-gray-500 font-medium mb-[20px]'>"The furniture from Decornest has transformed our office into a more functional and visually appealing space. Their customer service is outstanding, and the craftsmanship of each piece speaks volumes. We’re extremely satisfied and would not hesitate to recommend their products to others."</p>
                                </div>
                                <div className='slider-img h-[120px] w-[120px] tab:h-[80px] tab:w-[80px] border-2 border-green rounded-full mx-auto overflow-hidden'>
                                    <img src={reviewimg4} alt='slider-img-1' className='transform hover:scale-110 transition duration-300 object-cover' />
                                </div>
                                <div className='text-center'>
                                    <h6 className='text-[18px] tab:text-[16px] text-green font-bold mt-[15px] pb-[5px]'>Cozy</h6>
                                    <p className='text-[14px] tab:text-[12px] text-lightblack font-medium pb-[6px]'>CEO , Cozy Furni.</p>
                                </div>
                            </div>


                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

