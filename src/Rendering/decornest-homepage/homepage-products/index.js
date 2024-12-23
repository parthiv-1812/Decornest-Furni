import React, { Component } from 'react'
import Slider from "react-slick";

import leftarw from '../../../Assets/Icons/right-arrow-white.svg'
import rightarw from '../../../Assets/Icons/left-arrow-white.svg'
import favourite from '../../../Assets/Icons/favourite-icon.png'
import search from '../../../Assets/Icons/search-icon.png'
import compare from '../../../Assets/Icons/compare.png'

import product1img1 from '../../../Assets/Images/product 1 img 1.webp'
import product1img2 from '../../../Assets/Images/product 1 img 2.webp'
import product2img1 from '../../../Assets/Images/product 2 img 1.webp'
import product2img2 from '../../../Assets/Images/product 2 img 2.webp'
import product3img1 from '../../../Assets/Images/product 3 img 1.webp'
import product3img2 from '../../../Assets/Images/product 3 img 2.webp'
import product4img1 from '../../../Assets/Images/product 4 img 1.jpg'
import product4img2 from '../../../Assets/Images/product 4 img 2.webp'
import product5img1 from '../../../Assets/Images/product 5 img 1.jpg'
import product5img2 from '../../../Assets/Images/product 5 img 2.jpg'
import product6img1 from '../../../Assets/Images/product 6 img 1.webp'
import product6img2 from '../../../Assets/Images/product 6 img 2.webp'
import product7img1 from '../../../Assets/Images/product 7 img 1.webp'
import product7img2 from '../../../Assets/Images/product 7 img 2.webp'
import product8img1 from '../../../Assets/Images/product 8 img 1.jpg'
import product8img2 from '../../../Assets/Images/product 8 img 2.jpg'

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

export default function HomepageProducts() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
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
                    slidesToShow: 3,
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
                    slidesToShow: 2,
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
            <div className=' max-w-[1517px]  mx-auto p-[80px_0_60px] tab:px-[20px] mob:p-[40px_20px_40px_20px]'>
                <div className='max-w-[476.8px] mx-auto text-center mb-[50px] animate__animated animate__fadeIn wow'data-wow-offset='200'>
                    <strong className='text-[12px] text-lightgreen font-semibold block mb-2 tab:text-[10px] mob:text-[10px] mob:mb-[3px]'>FURNITURE COLLECTIONS 2024</strong>
                    <h4 className='text-[38px] text-black font-semibold tab:text-[32px] mob:text-[28px]'>Featured Products</h4>
                    <p className='text-[14px] text-lightblack font-semibold mob:text-[12px]'>Featured Products are a selection of highlighted items in a catalog or store, chosen to draw attention due to their significance or appeal.</p>
                </div>

                <div className='slider max-w-[1220px] mx-auto'>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <div className=" tab:h-56 mob:h-48 group relative border rounded-[10px]">
                                    <div className='img h-[324px]'>
                                        <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={product1img1} alt="product-image" />
                                        <img className="h-full absolute duration-700 opacity-0 group-hover:opacity-100 rounded-[10px]" src={product1img2} alt="product-image" />
                                    </div>
                          v
                                    <div className='text absolute top-2 left-2 z-10'>
                                        <p className='bg-green h-[50px] w-[50px] mob:h-[40px] mob:w-[40px] mob:text-[10px] rounded-full text-white text-[12px] font-semibold flex justify-center items-center'>-25%</p>
                                    </div>
                                    <div className='absolute top-[10px] right-[10px] bg-white h-[90px] w-[40px] mob:h-[70px] mob:w-[30px] flex justify-center items-center shadow-md border border-gray-200 rounded-[8px] flex-col gap-[10px]'>
                                        <img className='h-[17px] w-[17px]  mob:h-[12px] mob:w-[12px]' src={compare} alt='compare-icon' />
                                        <img className='h-[17px] w-[17px]  mob:h-[12px] mob:w-[12px]' src={search} alt='search-icon' />
                                        <img className='h-[16px] w-[16px]  mob:h-[11px] mob:w-[11px]' src={favourite} alt='favourite-icon' />
                                    </div>
                                </div>
                                <div className='slider-text text-center'>
                                    <div className='flex justify-center gap-2 items-center my-[10px]'>
                                        <div className='h-[15px] w-[15px] rounded-full bg-pink-300 '></div>
                                        <div className='h-[15px] w-[15px] rounded-full bg-black '></div>
                                        <div className='h-[15px] w-[15px] rounded-full bg-blue-500 '></div>
                                        <div className='h-[15px] w-[15px] rounded-full bg-gray-500 '></div>
                                        <div className='h-[15px] w-[15px] rounded-full bg-yellow '></div>
                                        <div className='h-[15px] w-[15px] rounded-full bg-red-500 '></div>
                                    </div>
                                    <h3 className='text-[14px] text-[#333333] font-semibold'>Nerd Wooden Chair</h3>
                                    <p className='text-[13px] text-[#a5a5a5] font-medium'>furniture</p>
                                    <p className='text-[14px] text-[#339059] font-medium'><del className='text-[#a5a5a5] mr-[5px]'>$799.00</del>$599.00</p>
                                </div>
                            </div>

                            <div>
                                <div className=" tab:h-56 mob:h-48 group relative border rounded-[10px] ">
                                    <div className='img h-[324px]'>
                                        <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={product2img1} alt="product-image" />
                                        <img className="h-full absolute duration-700 opacity-0 group-hover:opacity-100 rounded-[10px]" src={product2img2} alt="product-image" />
                                    </div>
                                    <div className='absolute top-[10px] right-[10px] bg-white h-[90px] w-[40px] mob:h-[70px] mob:w-[30px] flex justify-center items-center shadow-md border border-gray-200 rounded-[8px] flex-col gap-[10px]'>
                                        <img className='h-[17px] w-[17px]  mob:h-[12px] mob:w-[12px]' src={compare} alt='compare-icon' />
                                        <img className='h-[17px] w-[17px]  mob:h-[12px] mob:w-[12px]' src={search} alt='search-icon' />
                                        <img className='h-[16px] w-[16px]  mob:h-[11px] mob:w-[11px]' src={favourite} alt='favourite-icon' />
                                    </div>
                                </div>
                                <div className='slider-text text-center'>
                                    <div className='flex justify-center gap-2 items-center my-[10px]'>
                                        <div className='h-[15px] w-[15px] rounded-full bg-pink-300 '></div>
                                        <div className='h-[15px] w-[15px] rounded-full bg-yellow '></div>
                                        <div className='h-[15px] w-[15px] rounded-full bg-red-500 '></div>
                                    </div>
                                    <h3 className='text-[14px] text-[#333333] font-semibold'>Wooden naïve chair</h3>
                                    <p className='text-[13px] text-[#a5a5a5] font-medium'>furniture</p>
                                    <p className='text-[14px] text-[#339059] font-medium'>$199.00</p>
                                </div>
                            </div>

                            <div>
                                <div className=" tab:h-56 mob:h-48 group relative border rounded-[10px]">
                                    <div className='img h-[324px]'>
                                        <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={product3img1} alt="product-image" />
                                        <img className="h-full absolute duration-700 opacity-0 group-hover:opacity-100 rounded-[10px]" src={product3img2} alt="product-image" />
                                    </div>
                                    <div className='text absolute top-2 left-2 z-10'>
                                        <p className='bg-green h-[50px] w-[50px] mob:h-[40px] mob:w-[40px] mob:text-[10px] rounded-full text-white text-[12px] font-semibold flex justify-center items-center'>-50%</p>
                                        <p className='bg-red-500 h-[50px] w-[50px] mob:h-[40px] mob:w-[40px] mob:text-[10px] rounded-full text-white text-[12px] font-semibold flex justify-center items-center mt-[5px]'>HOT</p>
                                    </div>
                                    <div className='absolute top-[10px] right-[10px] bg-white h-[90px] w-[40px] mob:h-[70px] mob:w-[30px] flex justify-center items-center shadow-md border border-gray-200 rounded-[8px] flex-col gap-[10px]'>
                                        <img className='h-[17px] w-[17px]  mob:h-[12px] mob:w-[12px]' src={compare} alt='compare-icon' />
                                        <img className='h-[17px] w-[17px]  mob:h-[12px] mob:w-[12px]' src={search} alt='search-icon' />
                                        <img className='h-[16px] w-[16px]  mob:h-[11px] mob:w-[11px]' src={favourite} alt='favourite-icon' />
                                    </div>
                                </div>
                                <div className='slider-text text-center'>
                                    <div className='flex justify-center gap-2 items-center my-[10px]'>
                                        <div className='h-[15px] w-[15px] rounded-full bg-black '></div>
                                        <div className='h-[15px] w-[15px] rounded-full bg-gray-500 '></div>
                                    </div>
                                    <h3 className='text-[14px] text-[#333333] font-semibold'>Eames lounge chair</h3>
                                    <p className='text-[13px] text-[#a5a5a5] font-medium'>furniture</p>
                                    <p className='text-[14px] text-[#339059] font-medium'><del className='text-[#a5a5a5] mr-[5px]'>$799.00</del>$399.00</p>
                                </div>
                            </div>

                            <div>
                                <div className=" tab:h-56 mob:h-48 group relative border rounded-[10px]">
                                    <div className='img h-[324px] '>
                                        <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={product4img1} alt="product-image" />
                                        <img className="h-full absolute duration-700 opacity-0 group-hover:opacity-100 rounded-[10px]" src={product4img2} alt="product-image" />
                                    </div>
                                    <div className='text absolute top-2 left-2 z-10'>
                                        <p className='bg-green h-[50px] w-[50px] mob:h-[40px] mob:w-[40px] mob:text-[10px] rounded-full text-white text-[12px] font-semibold flex justify-center items-center'>SALE</p>
                                    </div>
                                    <div className='absolute top-[10px] right-[10px] bg-white h-[90px] w-[40px] mob:h-[70px] mob:w-[30px] flex justify-center items-center shadow-md border border-gray-200 rounded-[8px] flex-col gap-[10px]'>
                                        <img className='h-[17px] w-[17px] mob:h-[12px] mob:w-[12px]' src={compare} alt='compare-icon' />
                                        <img className='h-[17px] w-[17px] mob:h-[12px] mob:w-[12px]' src={search} alt='search-icon' />
                                        <img className='h-[16px] w-[16px] mob:h-[11px] mob:w-[11px]' src={favourite} alt='favourite-icon' />
                                    </div>
                                </div>
                                <div className='slider-text text-center'>
                                    <h3 className='text-[14px] text-[#333333] font-semibold mt-[10px]'>Wooden single drawer</h3>
                                    <p className='text-[13px] text-[#a5a5a5] font-medium'>furniture</p>
                                    <p className='text-[14px] text-[#339059] font-medium'>$249.00 – $399.00</p>
                                </div>
                            </div>

                            <div>
                                <div className=" tab:h-56 mob:h-48 group relative border rounded-[10px]">
                                    <div className='img h-[324px]'>
                                        <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={product5img1} alt="product-image" />
                                        <img className="h-full absolute duration-700 opacity-0 group-hover:opacity-100 rounded-[10px]" src={product5img2} alt="product-image" />
                                    </div>
                                    <div className='absolute top-[10px] right-[10px] bg-white h-[90px] w-[40px] mob:h-[70px] mob:w-[30px] flex justify-center items-center shadow-md border border-gray-200 rounded-[8px] flex-col gap-[10px]'>
                                        <img className='h-[17px] w-[17px]  mob:h-[12px] mob:w-[12px]' src={compare} alt='compare-icon' />
                                        <img className='h-[17px] w-[17px]  mob:h-[12px] mob:w-[12px]' src={search} alt='search-icon' />
                                        <img className='h-[16px] w-[16px]  mob:h-[11px] mob:w-[11px]' src={favourite} alt='favourite-icon' />
                                    </div>
                                </div>
                                <div className='slider-text text-center'>
                                    <div className='flex justify-center gap-2 items-center my-[10px]'>
                                        <div className='h-[15px] w-[15px] rounded-full bg-blue-500 '></div>
                                        <div className='h-[15px] w-[15px] rounded-full bg-black '></div>
                                        <div className='h-[15px] w-[15px] rounded-full bg-yellow '></div>
                                    </div>
                                    <h3 className='text-[14px] text-[#333333] font-semibold'>Eames Plastic Side Chair</h3>
                                    <p className='text-[13px] text-[#a5a5a5] font-medium'>furniture</p>
                                    <p className='text-[14px] text-[#339059] font-medium'>$99.00</p>
                                </div>
                            </div>

                            <div>
                                <div className=" tab:h-56 mob:h-48 group relative border rounded-[10px] ">
                                    <div className='img h-[324px]'>
                                        <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={product6img1} alt="product-image" />
                                        <img className="h-full absolute duration-700 opacity-0 group-hover:opacity-100 rounded-[10px]" src={product6img2} alt="product-image" />
                                    </div>
                                    <div className='absolute top-[10px] right-[10px] bg-white h-[90px] w-[40px] mob:h-[70px] mob:w-[30px] flex justify-center items-center shadow-md border border-gray-200 rounded-[8px] flex-col gap-[10px]'>
                                        <img className='h-[17px] w-[17px]  mob:h-[12px] mob:w-[12px]' src={compare} alt='compare-icon' />
                                        <img className='h-[17px] w-[17px]  mob:h-[12px] mob:w-[12px]' src={search} alt='search-icon' />
                                        <img className='h-[16px] w-[16px]  mob:h-[11px] mob:w-[11px]' src={favourite} alt='favourite-icon' />
                                    </div>
                                </div>
                                <div className='slider-text text-center'>
                                    <h3 className='text-[14px] text-[#333333] font-semibold mt-[10px]'>Char with love</h3>
                                    <p className='text-[13px] text-[#a5a5a5] font-medium'>furniture</p>
                                    <div className='flex justify-center gap-2 items-center'>
                                        <p className='text-[12px]'>⭐⭐⭐⭐⭐</p>
                                    </div>
                                    <p className='text-[14px] text-[#339059] font-medium'>$420.00</p>
                                </div>
                            </div>

                            <div>
                                <div className=" tab:h-56 mob:h-48 group relative border rounded-[10px] ">
                                    <div className='img h-[324px]'>
                                        <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={product7img1} alt="product-image" />
                                        <img className="h-full absolute duration-700 opacity-0 group-hover:opacity-100 rounded-[10px]" src={product7img2} alt="product-image" />
                                    </div>
                                    <div className='text absolute top-2 left-2 z-10'>
                                        <p className='bg-green h-[50px] w-[50px] mob:h-[40px] mob:w-[40px] mob:text-[10px] rounded-full text-white text-[12px] font-semibold flex justify-center items-center'>-75%</p>
                                        <p className='bg-red-500 h-[50px] w-[50px] mob:h-[40px] mob:w-[40px] mob:text-[10px]     rounded-full text-white text-[12px] font-semibold flex justify-center items-center mt-[5px]'>HOT</p>
                                    </div>
                                    <div className='absolute top-[10px] right-[10px] bg-white h-[90px] w-[40px] mob:h-[70px] mob:w-[30px] flex justify-center items-center shadow-md border border-gray-200 rounded-[8px] flex-col gap-[10px]'>
                                        <img className='h-[17px] w-[17px]  mob:h-[12px] mob:w-[12px]' src={compare} alt='compare-icon' />
                                        <img className='h-[17px] w-[17px]  mob:h-[12px] mob:w-[12px]' src={search} alt='search-icon' />
                                        <img className='h-[16px] w-[16px]  mob:h-[11px] mob:w-[11px]' src={favourite} alt='favourite-icon' />
                                    </div>
                                </div>
                                <div className='slider-text text-center'>
                                    <h3 className='text-[14px] text-[#333333] font-semibold'>Classic wooden chair</h3>
                                    <p className='text-[13px] text-[#a5a5a5] font-medium'>furniture</p>
                                    <div className='flex justify-center gap-2 items-center'>
                                        <p className='text-[12px]'>⭐⭐⭐⭐⭐</p>
                                    </div>
                                    <p className='text-[14px] text-[#339059] font-medium'><del className='text-[#a5a5a5] mr-[5px]'>$19.00</del>$5.00</p>
                                </div>
                            </div>

                            <div>
                                <div className=" tab:h-56 mob:h-48 group relative border rounded-[10px] ">
                                    <div className='img h-[324px]'>
                                        <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={product8img1} alt="product-image" />
                                        <img className="h-full absolute duration-700 opacity-0 group-hover:opacity-100 rounded-[10px]" src={product8img2} alt="product-image" />
                                    </div>
                                    <div className='absolute top-[10px] right-[10px] bg-white h-[90px] w-[40px] mob:h-[70px] mob:w-[30px] flex justify-center items-center shadow-md border border-gray-200 rounded-[8px] flex-col gap-[10px]'>
                                        <img className='h-[17px] w-[17px]' src={compare} alt='compare-icon' />
                                        <img className='h-[17px] w-[17px]' src={search} alt='search-icon' />
                                        <img className='h-[16px] w-[16px]' src={favourite} alt='favourite-icon' />
                                    </div>
                                </div>
                                <div className='slider-text text-center'>
                                    <div className='flex justify-center gap-2 items-center my-[10px]'>
                                        <div className='h-[15px] w-[15px]  mob:h-[12px] mob:w-[12px] rounded-full bg-black '></div>
                                        <div className='h-[15px] w-[15px]  mob:h-[12px] mob:w-[12px] rounded-full bg-pink-200 '></div>
                                        <div className='h-[15px] w-[15px]  mob:h-[11px] mob:w-[11px] rounded-full bg-red-900 '></div>
                                    </div>
                                    <h3 className='text-[14px] text-[#333333] font-semibold'>Reflect Chest of Drawers</h3>
                                    <p className='text-[13px] text-[#a5a5a5] font-medium'>furniture</p>
                                    <div className='flex justify-center gap-2 items-center'>
                                        <p className='text-[12px]'>⭐⭐⭐⭐⭐</p>
                                    </div>
                                    <p className='text-[14px] text-[#339059] font-medium'>$399.00</p>
                                </div>
                            </div>



                        </Slider>
                    </div>
                </div>

            </div>
        </div>
    )
}
