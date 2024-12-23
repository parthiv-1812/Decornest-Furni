import React, { Component } from 'react'
import Slider from "react-slick";

import leftarw from '../../../Assets/Icons/left-arrow.svg'
import rightarw from '../../../Assets/Icons/right-arrow.svg'

import sliderimg1 from '../../../Assets/Images/category-1.jpg'
import sliderimg2 from '../../../Assets/Images/category-2.jpg'
import sliderimg3 from '../../../Assets/Images/category-3.jpg'
import sliderimg4 from '../../../Assets/Images/category-4.jpg'

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='right-arrow-categories '
            onClick={onClick}
        >
            <img className='absolute left-[-50px] top-[50%] z-10 h-[30px] w-[30px] opacity-40 hover:opacity-100 tab:hidden' src={rightarw} />
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
            <img className='absolute right-[-50px] top-[50%] z-10 h-[30px] w-[30px] opacity-40 hover:opacity-100 tab:hidden' src={leftarw} />
        </div>
    );
}

export default function HomepageCategories() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        responsive: [
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: false,
                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 6000,
                    cssEase: "linear",
                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 6000,
                    cssEase: "linear",
                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,
                },
            },
        ],
    };
    return (
        <div>
            <div className=' max-w-[100%] p-[80px_0_60px] tab:px-[20px] mob:p-[60px_20px_20px_20px]'>
                <div className='max-w-[476.8px] mx-auto text-center mb-5 animate__animated animate__fadeIn wow'data-wow-offset='200' >
                    <strong className='text-[12px] text-lightgreen font-semibold block mb-2 mob:text-[10px]'>FURNITURE COLLECTIONS 2024</strong>
                    <h4 className='text-[38px] text-black font-semibold tab:text-[24px] mob:mb-[5px] mob:text-[20px]'>Featured Categories</h4>
                    <p className='text-[14px] text-lightblack font-semibold mob:text-[12px]'>Elit rhoncus dui ullamcorper tristique aenean nascetur accumsan ac himenaeos adipiscing quam potenti ac senectus consequat.</p>
                </div>
                <div className='slider max-w-[1202px] mx-auto'>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <div className='slider-img h-[390px] w-[100%] overflow-hidden tab:h-[354px]'>
                                    <img src={sliderimg1} alt='slider-img-1' className='transform hover:scale-110 transition duration-300 object-cover' />
                                </div>
                                <div className='slider-text text-center'>
                                    <h3 className='uppercase pt-[10px] text-[18px] font-semibold mob:text-[16px]'>Interior</h3>
                                    <p className='text-[16px] text-lightblack font-medium mob:text-[14px]'>12 products</p>
                                </div>
                            </div>

                            <div>
                                <div className='slider-img h-[390px] w-[100%] overflow-hidden tab:h-[354px]'>
                                    <img src={sliderimg2} alt='slider-img-2' className='transform hover:scale-110 transition duration-300 object-cover' />
                                </div>
                                <div className='slider-text text-center'>
                                    <h3 className='uppercase pt-[10px] text-[18px] font-semibold mob:text-[16px]'>Furniture</h3>
                                    <p className='text-[16px] text-lightblack font-medium mob:text-[14px]'>33 products</p>
                                </div>
                            </div>

                            <div>
                                <div className='slider-img h-[390px] w-[100%] overflow-hidden tab:h-[354px]'>
                                    <img src={sliderimg3} alt='slider-img-3' className='transform hover:scale-110 transition duration-300 object-cover' />
                                </div>
                                <div className='slider-text text-center'>
                                    <h3 className='uppercase pt-[10px] text-[18px] font-semibold mob:text-[16px]'>kitchen</h3>
                                    <p className='text-[16px] text-lightblack font-medium mob:text-[14px]'>12 products</p>
                                </div>
                            </div>

                            <div>
                                <div className='slider-img h-[390px] w-[100%] overflow-hidden tab:h-[354px]'>
                                    <img src={sliderimg4} alt='slider-img-4' className='transform hover:scale-110 transition duration-300 object-cover' />
                                </div>
                                <div className='slider-text text-center'>
                                    <h3 className='uppercase pt-[10px] text-[18px] font-semibold mob:text-[16px]'>accessories</h3>
                                    <p className='text-[16px] text-lightblack font-medium mob:text-[14px]'>47 products</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}
