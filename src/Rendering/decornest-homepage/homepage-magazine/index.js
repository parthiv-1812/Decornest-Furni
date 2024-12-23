import React, { Component } from 'react';
import Slider from "react-slick";

import leftarw from '../../../Assets/Icons/right-arrow-white.svg'
import rightarw from '../../../Assets/Icons/left-arrow-white.svg'
import favourite from '../../../Assets/Icons/favourite-icon.png'
import search from '../../../Assets/Icons/search-icon.png'
import compare from '../../../Assets/Icons/compare.png'

import magazine1 from '../../../Assets/Images/magezine-1.webp'
import magazine2 from '../../../Assets/Images/magezine-2.webp'
import magazine3 from '../../../Assets/Images/magezine-3.webp'
import magazine4 from '../../../Assets/Images/magezine-4.webp'
import magazine5 from '../../../Assets/Images/magezine-5.jpg'


function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='right-arrow-categories '
            onClick={onClick}
        >
            <div className='bg-gray-400 h-[40px] w-[40px] absolute left-[-50px] top-[35%] rounded-full flex justify-center items-center hover:bg-green tab:hidden mob:hidden'>
                <img className=' h-[20px] w-[20px]' src={rightarw} />
            </div>
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
            <div className='bg-gray-400 h-[40px] w-[40px] absolute right-[-50px] top-[35%] rounded-full flex justify-center items-center hover:bg-green tab:hidden mob:hidden'>
                <img className=' h-[20px] w-[20px]' src={leftarw} />
            </div>
        </div>
    );
}

export default function HomepageMagezine() {
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
                    autoplaySpeed: 3000,
                    cssEase: "linear",
                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,
                },
            },
        ],
    };

    return (
        <div>
            <div className=' max-w-[1517px]  mx-auto p-[80px_0_60px] tab:p-[40px_20px_40px_20px]'>
                <div className='max-w-[476.8px] mx-auto text-center mb-[50px] tab:mb-[40px] mob:mb-[30px] animate__animated animate__fadeIn wow'data-wow-offset='200'>
                    <strong className='text-[12px] text-lightgreen font-semibold block mb-2 tab:text-[10px] tab:mb-[5px] mob:mb-[3px] mob:text-[10px]'>BEST DESIGNERS IDEAS</strong>
                    <h4 className='text-[38px] text-black font-semibold tab:text-[32px] mob:text-[30px]'>Furniture Magazine</h4>
                    <p className='text-[14px] text-lightblack font-semibold tab:text-[12px] mob:text-[12px]'>Elit rhoncus dui ullamcorper tristique aenean nascetur accumsan ac himenaeos adipiscing quam potenti ac senectus consequat.</p>
                </div>

                <div className='slider max-w-[1220px] mx-auto tab:px-[20px] mob:px-0'>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className=' shadow-x-xl border border-black-100 rounded-[10px] '>
                                <div className=" tab:h-56 mob:h-48 group relative border rounded-[10px] overflow-hidden">
                                    <div className='img h-[324px]'>
                                        <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={magazine1} alt="product-image" />
                                        <img className="h-full absolute hover:scale-110 transition hover:duration-300 object-cover rounded-[10px]" src={magazine1} alt="product-image" />
                                    </div>
                                    <div className='text absolute top-3 left-3 z-10'>
                                        <p className='bg-white h-[60px] w-[60px] rounded-[5px] shadow-2xl text-black text-[16px] font-bold flex justify-center text-center items-center'>23<br />JULY</p>
                                    </div>
                                </div>
                                <div className='slider-text text-center py-[20px] h-[196px]'>
                                    <h3 className='text-[24px] text-[#333333] font-semibold pb-[5px] mob:text-[22px]'>Seating collection inspiration</h3>
                                    <p className='text-[12px] max-w-[300px] mx-auto text-[#a5a5a5] font-medium mb-[10px]'>Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac et vestibulum duis a tincidunt per a apte...	</p>
                                    <p className='text-[10px] text-[#339059] font-medium uppercase'>continue reading</p>
                                </div>
                            </div>

                            <div className=' shadow-x-xl border border-black-100 rounded-[10px]'>
                                <div className=" tab:h-56 mob:h-48 group relative border rounded-[10px] overflow-hidden ">
                                    <div className='img h-[324px]'>
                                        <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={magazine2} alt="product-image" />
                                        <img className="h-full absolute hover:scale-110 transition hover:duration-300 object-cover rounded-[10px]" src={magazine2} alt="product-image" />
                                    </div>
                                    <div className='text absolute top-3 left-3 z-10'>
                                        <p className='bg-white h-[60px] w-[60px] rounded-[5px] shadow-2xl text-black text-[16px] font-bold flex justify-center text-center items-center'>23<br />JULY</p>
                                    </div>
                                </div>
                                <div className='slider-text text-center py-[20px]'>
                                    <h3 className='text-[24px] text-[#333333] font-semibold pb-[5px] mob:text-[22px]'>Creative water features and exterior</h3>
                                    <p className='text-[12px] max-w-[300px] mx-auto text-[#a5a5a5] font-medium mb-[10px]'>Adipiscing hac imperdiet id blandit varius scelerisque at sagittis libero dui dis volutpat vehicula mus sed ut. Lacinia dui rutrum a at...</p>
                                    <p className='text-[10px] text-[#339059] font-medium uppercase'>continue reading</p>
                                </div>
                            </div>

                            <div className=' shadow-x-xl border border-black-100 rounded-[10px] '>
                                <div className=" tab:h-56 mob:h-48 group relative border rounded-[10px] overflow-hidden">
                                    <div className='img h-[324px]'>
                                        <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={magazine3} alt="product-image" />
                                        <img className="h-full absolute hover:scale-110 transition hover:duration-300 object-cover rounded-[10px]" src={magazine3} alt="product-image" />
                                    </div>
                                    <div className='text absolute top-3 left-3 z-10'>
                                        <p className='bg-white h-[60px] w-[60px] rounded-[5px] shadow-2xl text-black text-[16px] font-bold flex justify-center text-center items-center'>23<br />JULY</p>
                                    </div>
                                </div>
                                <div className='slider-text text-center py-[20px]'>
                                    <h3 className='text-[24px] text-[#333333] font-semibold pb-[5px] mob:text-[22px]'>Sweet seat: functional seat for IT folks</h3>
                                    <p className='text-[12px] max-w-[300px] mx-auto text-[#a5a5a5] font-medium mb-[10px]'>A sed a risusat luctus esta anibh rhoncus hendrerit blandit nam rutrum sitmiad hac. Cras a vestibulum a varius adipiscing ut dignissim ullamcorpe...</p>
                                    <p className='text-[10px] text-[#339059] font-medium uppercase'>continue reading</p>
                                </div>
                            </div>

                            <div className=' shadow-x-xl border border-black-100 rounded-[10px] '>
                                <div className=" tab:h-56 mob:h-48 group relative border rounded-[10px] overflow-hidden">
                                    <div className='img h-[324px]'>
                                        <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={magazine4} alt="product-image" />
                                        <img className="h-full absolute hover:scale-110 transition hover:duration-300 object-cover rounded-[10px]" src={magazine4} alt="product-image" />
                                    </div>
                                    <div className='text absolute top-3 left-3 z-10'>
                                        <p className='bg-white h-[60px] w-[60px] rounded-[5px] shadow-2xl text-black text-[16px] font-bold flex justify-center text-center items-center'>23<br/>JULY</p>
                                    </div>
                                </div>
                                <div className='slider-text text-center py-[20px] h-[196px]'>
                                    <h3 className='text-[24px] text-[#333333] font-semibold pb-[5px] mob:text-[22px]'>Green interior design inspiration</h3>
                                    <p className='text-[12px] max-w-[300px] mx-auto text-[#a5a5a5] font-medium mb-[10px]'>Vivamus enim sagittis aptent hac mi dui a per aptent suspendisse cras odio bibendum augue rhoncus laoreet dui praesent sodales sodales. Dignissim...</p>
                                    <p className='text-[10px] text-[#339059] font-medium uppercase'>continue reading</p>
                                </div>
                            </div>

                            <div className=' shadow-x-xl border border-black-100 rounded-[10px] '>
                                <div className=" tab:h-56 mob:h-48 group relative border rounded-[10px] overflow-hidden">
                                    <div className='img h-[324px]'>
                                        <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={magazine5} alt="product-image" />
                                        <img className="h-full absolute hover:scale-110 transition hover:duration-300 object-cover rounded-[10px]" src={magazine5} alt="product-image" />
                                    </div>
                                    <div className='text absolute top-3 left-3 z-10'>
                                        <p className='bg-white h-[60px] w-[60px] rounded-[5px] shadow-2xl text-black text-[16px] font-bold flex justify-center text-center items-center'>23<br/>JULY</p>
                                    </div>
                                </div>
                                <div className='slider-text text-center py-[20px] h-[196px]'>
                                    <h3 className='text-[24px] text-[#333333] font-semibold pb-[5px] mob:text-[22px]'>Minimalist design furniture 2024</h3>
                                    <p className='text-[12px] max-w-[300px] mx-auto text-[#a5a5a5] font-medium mb-[10px]'>A taciti cras scelerisque scelerisque gravida natoque nulla vestibulum turpis primis adipiscing faucibus scelerisque adipiscing aliquet pretium. ...</p>
                                    <p className='text-[10px] text-[#339059] font-medium uppercase'>continue reading</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>

            </div>
        </div>
    )
}
