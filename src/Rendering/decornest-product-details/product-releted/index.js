import React, { Component } from 'react'
import Slider from "react-slick";

import favourite from '../../../Assets/Icons/favourite-icon.png'
import search from '../../../Assets/Icons/search-icon.png'
import compare from '../../../Assets/Icons/compare.png'

import product1img1 from '../../../Assets/Images/releted1-1.jpg'
import product1img2 from '../../../Assets/Images/releted1-2.jpg'
import product2img1 from '../../../Assets/Images/releted2-1.jpg'
import product2img2 from '../../../Assets/Images/releted2-2.jpg'
import product3img1 from '../../../Assets/Images/releted3-1.jpg'
import product3img2 from '../../../Assets/Images/releted3-2.jpg'
import product4img1 from '../../../Assets/Images/releted4-1.jpg'
import product4img2 from '../../../Assets/Images/releted4-2.jpg'
import product5img1 from '../../../Assets/Images/releted5-1.webp'
import product5img2 from '../../../Assets/Images/releted5-2.webp'
import product6img1 from '../../../Assets/Images/releted6-1.webp'
import product6img2 from '../../../Assets/Images/releted6-2.webp'
import product7img1 from '../../../Assets/Images/releted7-1.webp'
import product7img2 from '../../../Assets/Images/releted7-2.webp'
import product8img1 from '../../../Assets/Images/releted8-1.webp'
import product8img2 from '../../../Assets/Images/releted8-2.webp'

import brand1 from '../../../Assets/Images/brand-1.png'
import brand2 from '../../../Assets/Images/brand-2.png'
import brand3 from '../../../Assets/Images/brand-3.png'
import brand4 from '../../../Assets/Images/brand-4.png'
import brand5 from '../../../Assets/Images/brand-5.png'
import brand6 from '../../../Assets/Images/brand-6.png'
import brand7 from '../../../Assets/Images/brand-7.png'

export default function ProductReleted() {
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1279, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: false,
                },
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                },
            },
            {
                breakpoint: 576, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                },
            },
        ],
    };
    return (
        <div>
            <div className='max-w-[100%] tab:px-0'>
                <div className='border border-green opacity-[60%]'> </div>

                <div className='slider max-w-[1220px] mx-auto py-[40px] tab:py-[30px] tab:px-[20px]'>
                    <div className='uppercase text-[18px] font-extrabold tab:text-[14px]  text-green p-[20px_0_30px_0] tab:p-[15px_0_20px_0] flex'>
                        <p className='border-b-2 border-green pb-[5px]'>Releted Products</p>
                    </div>
                    <div className='overflow-hidden'>
                        <Slider {...settings}>
                            <div>
                                <div className=" tab:h-[255px] mob:h-[215px] group relative border rounded-[10px]">
                                    <div className='img h-[324px]'>
                                        <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={product1img1} alt="product-image" />
                                        <img className="h-full absolute duration-700 opacity-0 group-hover:opacity-100 rounded-[10px]" src={product1img2} alt="product-image" />
                                    </div>
                                    <div className='text absolute top-2 left-2 z-10'>
                                        <p className='bg-green h-[50px] w-[50px] rounded-full text-white text-[12px] font-semibold flex justify-center items-center'>-25%</p>
                                    </div>
                                    <div className='absolute top-[10px] right-[10px] mob:h-[70px] mob:w-[30px] bg-white h-[90px] w-[40px] flex justify-center items-center shadow-md border border-gray-200 rounded-[8px] flex-col gap-[10px]'>
                                        <img className='h-[17px] w-[17px]' src={compare} alt='compare-icon' />
                                        <img className='h-[17px] w-[17px]' src={search} alt='search-icon' />
                                        <img className='h-[16px] w-[16px]' src={favourite} alt='favourite-icon' />
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
                                    <h3 className='text-[14px] text-[#333333] font-semibold'>Id a primis proin dui</h3>
                                    <p className='text-[13px] text-[#a5a5a5] font-medium'>furniture</p>
                                    <p className='text-[14px] text-[#339059] font-medium'><del className='text-[#a5a5a5] mr-[5px]'>$799.00</del>$599.00</p>
                                </div>
                            </div>

                            <div>
                                <div className=" tab:h-[255px] mob:h-[215px] group relative border rounded-[10px] ">
                                    <div className='img h-[324px]'>
                                        <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={product2img1} alt="product-image" />
                                        <img className="h-full absolute duration-700 opacity-0 group-hover:opacity-100 rounded-[10px]" src={product2img2} alt="product-image" />
                                    </div>
                                    <div className='absolute top-[10px] right-[10px] mob:h-[70px] mob:w-[30px] bg-white h-[90px] w-[40px] flex justify-center items-center shadow-md border border-gray-200 rounded-[8px] flex-col gap-[10px]'>
                                        <img className='h-[17px] w-[17px] mob:h-[12px] mob:w-[12px]' src={compare} alt='compare-icon' />
                                        <img className='h-[17px] w-[17px] mob:h-[12px] mob:w-[12px]' src={search} alt='search-icon' />
                                        <img className='h-[16px] w-[16px] mob:h-[11px] mob:w-[11px]' src={favourite} alt='favourite-icon' />
                                    </div>
                                </div>
                                <div className='slider-text text-center'>
                                    <div className='flex justify-center gap-2 items-center my-[10px]'>
                                        <div className='h-[15px] w-[15px] rounded-full bg-pink-300 '></div>
                                        <div className='h-[15px] w-[15px] rounded-full bg-yellow '></div>
                                        <div className='h-[15px] w-[15px] rounded-full bg-red-500 '></div>
                                    </div>
                                    <h3 className='text-[14px] text-[#333333] font-semibold'>Ornare auctor</h3>
                                    <p className='text-[13px] text-[#a5a5a5] font-medium'>furniture</p>
                                    <p className='text-[14px] text-[#339059] font-medium'>$429.00</p>
                                </div>
                            </div>

                            <div>
                                <div className=" tab:h-[255px] mob:h-[215px] group relative border rounded-[10px]">
                                    <div className='img h-[324px]'>
                                        <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={product3img1} alt="product-image" />
                                        <img className="h-full absolute duration-700 opacity-0 group-hover:opacity-100 rounded-[10px]" src={product3img2} alt="product-image" />
                                    </div>
                                    <div className='text absolute top-2 left-2 z-10'>
                                        <p className='bg-green h-[50px] w-[50px] rounded-full text-white text-[12px] font-semibold flex justify-center items-center'>-50%</p>
                                        <p className='bg-red-500 h-[50px] w-[50px] rounded-full text-white text-[12px] font-semibold flex justify-center items-center mt-[5px]'>HOT</p>
                                    </div>
                                    <div className='absolute top-[10px] right-[10px] mob:h-[70px] mob:w-[30px] bg-white h-[90px] w-[40px] flex justify-center items-center shadow-md border border-gray-200 rounded-[8px] flex-col gap-[10px]'>
                                        <img className='h-[17px] w-[17px] mob:h-[12px] mob:w-[12px]' src={compare} alt='compare-icon' />
                                        <img className='h-[17px] w-[17px] mob:h-[12px] mob:w-[12px]' src={search} alt='search-icon' />
                                        <img className='h-[16px] w-[16px] mob:h-[11px] mob:w-[11px]' src={favourite} alt='favourite-icon' />
                                    </div>
                                </div>
                                <div className='slider-text text-center'>
                                    <div className='flex justify-center gap-2 items-center my-[10px]'>
                                        <div className='h-[15px] w-[15px] rounded-full bg-black '></div>
                                        <div className='h-[15px] w-[15px] rounded-full bg-gray-500 '></div>
                                    </div>
                                    <h3 className='text-[14px] text-[#333333] font-semibold'>Senectus ac nisi a imperdiet</h3>
                                    <p className='text-[13px] text-[#a5a5a5] font-medium'>furniture</p>
                                    <p className='text-[14px] text-[#339059] font-medium'>$359.00</p>
                                </div>
                            </div>

                            <div>
                                <div className=" tab:h-[255px] mob:h-[215px] group relative border rounded-[10px]">
                                    <div className='img h-[324px] '>
                                        <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={product4img1} alt="product-image" />
                                        <img className="h-full absolute duration-700 opacity-0 group-hover:opacity-100 rounded-[10px]" src={product4img2} alt="product-image" />
                                    </div>
                                    <div className='text absolute top-2 left-2 z-10'>
                                        <p className='bg-green h-[50px] w-[50px] rounded-full text-white text-[12px] font-semibold flex justify-center items-center'>SALE</p>
                                    </div>
                                    <div className='absolute top-[10px] right-[10px] mob:h-[70px] mob:w-[30px] bg-white h-[90px] w-[40px] flex justify-center items-center shadow-md border border-gray-200 rounded-[8px] flex-col gap-[10px]'>
                                        <img className='h-[17px] w-[17px] mob:h-[12px] mob:w-[12px]' src={compare} alt='compare-icon' />
                                        <img className='h-[17px] w-[17px] mob:h-[12px] mob:w-[12px]' src={search} alt='search-icon' />
                                        <img className='h-[16px] w-[16px] mob:h-[11px] mob:w-[11px]' src={favourite} alt='favourite-icon' />
                                    </div>
                                </div>
                                <div className='slider-text text-center'>
                                    <h3 className='text-[14px] text-[#333333] font-semibold mt-[10px]'>Ullamcorper nisl ullamcorper</h3>
                                    <p className='text-[13px] text-[#a5a5a5] font-medium'>furniture</p>
                                    <p className='text-[14px] text-[#339059] font-medium'>$456.00</p>
                                </div>
                            </div>

                            <div>
                                <div className=" tab:h-[255px] mob:h-[215px] group relative border rounded-[10px]">
                                    <div className='img h-[324px]'>
                                        <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={product5img1} alt="product-image" />
                                        <img className="h-full absolute duration-700 opacity-0 group-hover:opacity-100 rounded-[10px]" src={product5img2} alt="product-image" />
                                    </div>
                                    <div className='absolute top-[10px] right-[10px] mob:h-[70px] mob:w-[30px] bg-white h-[90px] w-[40px] flex justify-center items-center shadow-md border border-gray-200 rounded-[8px] flex-col gap-[10px]'>
                                        <img className='h-[17px] w-[17px] mob:h-[12px] mob:w-[12px]' src={compare} alt='compare-icon' />
                                        <img className='h-[17px] w-[17px] mob:h-[12px] mob:w-[12px]' src={search} alt='search-icon' />
                                        <img className='h-[16px] w-[16px] mob:h-[11px] mob:w-[11px]' src={favourite} alt='favourite-icon' />
                                    </div>
                                </div>
                                <div className='slider-text text-center'>
                                    <div className='flex justify-center gap-2 items-center my-[10px]'>
                                        <div className='h-[15px] w-[15px] rounded-full bg-blue-500 '></div>
                                        <div className='h-[15px] w-[15px] rounded-full bg-black '></div>
                                        <div className='h-[15px] w-[15px] rounded-full bg-yellow '></div>
                                    </div>
                                    <h3 className='text-[14px] text-[#333333] font-semibold'>Geometric chair</h3>
                                    <p className='text-[13px] text-[#a5a5a5] font-medium'>furniture</p>
                                    <p className='text-[14px] text-[#339059] font-medium'>$400.00</p>
                                </div>
                            </div>

                            <div>
                                <div className=" tab:h-[255px] mob:h-[215px] group relative border rounded-[10px] ">
                                    <div className='img h-[324px]'>
                                        <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={product6img1} alt="product-image" />
                                        <img className="h-full absolute duration-700 opacity-0 group-hover:opacity-100 rounded-[10px]" src={product6img2} alt="product-image" />
                                    </div>
                                    <div className='absolute top-[10px] right-[10px] mob:h-[70px] mob:w-[30px] bg-white h-[90px] w-[40px] flex justify-center items-center shadow-md border border-gray-200 rounded-[8px] flex-col gap-[10px]'>
                                        <img className='h-[17px] w-[17px] mob:h-[12px] mob:w-[12px]' src={compare} alt='compare-icon' />
                                        <img className='h-[17px] w-[17px] mob:h-[12px] mob:w-[12px]' src={search} alt='search-icon' />
                                        <img className='h-[16px] w-[16px] mob:h-[11px] mob:w-[11px]' src={favourite} alt='favourite-icon' />
                                    </div>
                                </div>
                                <div className='slider-text text-center'>
                                    <h3 className='text-[14px] text-[#333333] font-semibold mt-[10px]'>Indoor bench</h3>
                                    <p className='text-[13px] text-[#a5a5a5] font-medium'>furniture</p>
                                    <div className='flex justify-center gap-2 items-center'>
                                        <p className='text-[12px]'>⭐⭐⭐⭐⭐</p>
                                    </div>
                                    <p className='text-[14px] text-[#339059] font-medium'>$480.00</p>
                                </div>
                            </div>

                            <div>
                                <div className=" tab:h-[255px] mob:h-[215px] group relative border rounded-[10px] ">
                                    <div className='img h-[324px]'>
                                        <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={product7img1} alt="product-image" />
                                        <img className="h-full absolute duration-700 opacity-0 group-hover:opacity-100 rounded-[10px]" src={product7img2} alt="product-image" />
                                    </div>
                                    <div className='text absolute top-2 left-2 z-10'>
                                        <p className='bg-green h-[50px] w-[50px] rounded-full text-white text-[12px] font-semibold flex justify-center items-center'>-75%</p>
                                        <p className='bg-red-500 h-[50px] w-[50px] rounded-full text-white text-[12px] font-semibold flex justify-center items-center mt-[5px]'>HOT</p>
                                    </div>
                                    <div className='absolute top-[10px] right-[10px] mob:h-[70px] mob:w-[30px] bg-white h-[90px] w-[40px] flex justify-center items-center shadow-md border border-gray-200 rounded-[8px] flex-col gap-[10px]'>
                                        <img className='h-[17px] w-[17px] mob:h-[12px] mob:w-[12px]' src={compare} alt='compare-icon' />
                                        <img className='h-[17px] w-[17px] mob:h-[12px] mob:w-[12px]' src={search} alt='search-icon' />
                                        <img className='h-[16px] w-[16px] mob:h-[11px] mob:w-[11px]' src={favourite} alt='favourite-icon' />
                                    </div>
                                </div>
                                <div className='slider-text text-center'>
                                    <h3 className='text-[14px] text-[#333333] font-semibold mt-[10px]'>Sculptures jeux</h3>
                                    <p className='text-[13px] text-[#a5a5a5] font-medium'>furniture</p>
                                    <div className='flex justify-center gap-2 items-center'>
                                        <p className='text-[12px]'>⭐⭐⭐⭐⭐</p>
                                    </div>
                                    <p className='text-[14px] text-[#339059] font-medium'><del className='text-[#a5a5a5] mr-[5px]'>$599.00</del>$399.00</p>
                                </div>
                            </div>

                            <div>
                                <div className=" tab:h-[255px] mob:h-[215px] group relative border rounded-[10px] ">
                                    <div className='img h-[324px]'>
                                        <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={product8img1} alt="product-image" />
                                        <img className="h-full absolute duration-700 opacity-0 group-hover:opacity-100 rounded-[10px]" src={product8img2} alt="product-image" />
                                    </div>
                                    <div className='absolute top-[10px] right-[10px] mob:h-[70px] mob:w-[30px] bg-white h-[90px] w-[40px] flex justify-center items-center shadow-md border border-gray-200 rounded-[8px] flex-col gap-[10px]'>
                                        <img className='h-[17px] w-[17px] mob:h-[12px] mob:w-[12px]' src={compare} alt='compare-icon' />
                                        <img className='h-[17px] w-[17px] mob:h-[12px] mob:w-[12px]' src={search} alt='search-icon' />
                                        <img className='h-[16px] w-[16px] mob:h-[11px] mob:w-[11px]' src={favourite} alt='favourite-icon' />
                                    </div>
                                </div>
                                <div className='slider-text text-center'>
                                    <div className='flex justify-center gap-2 items-center my-[10px]'>
                                        <div className='h-[15px] w-[15px] rounded-full bg-black '></div>
                                        <div className='h-[15px] w-[15px] rounded-full bg-pink-200 '></div>
                                        <div className='h-[15px] w-[15px] rounded-full bg-red-900 '></div>
                                    </div>
                                    <h3 className='text-[14px] text-[#333333] font-semibold'>Eames lounge chair</h3>
                                    <p className='text-[13px] text-[#a5a5a5] font-medium'>furniture</p>
                                    <div className='flex justify-center gap-2 items-center'>
                                        <p className='text-[12px]'>⭐⭐⭐⭐⭐</p>
                                    </div>
                                    <p className='text-[14px] text-[#339059] font-medium'><del className='text-[#a5a5a5] mr-[5px]'>$799.00</del>$399.00</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>

                <div className='max-w-[100%] border-y border-black'>
                    <div className='flex justify-between bg-gray-300 p-[10px_20px]'>
                        <div className='h-[80px] w-[150] mob:h-[60px] mob:w-[100px] items-center tab:hidden mob:block'>
                            <img className='h-[100%] w-[100%] object-cover' src={brand1} alt='brnad-1-img' />
                        </div>
                        <div className='h-[80px] w-[150] items-center mob:hidden'>
                            <img className='h-[100%] w-[100%] object-cover' src={brand2} alt='brnad-1-img' />
                        </div>
                        <div className='h-[80px] w-[150] mob:h-[60px] mob:w-[100px] items-center tab:hidden mob:block'>
                            <img className='h-[100%] w-[100%] object-cover' src={brand3} alt='brnad-1-img' />
                        </div>
                        <div className='h-[80px] w-[150] items-center mob:hidden'>
                            <img className='h-[100%] w-[100%] object-cover' src={brand4} alt='brnad-1-img' />
                        </div>
                        <div className='h-[80px] w-[150] mob:h-[60px] mob:w-[100px] items-center tab:hidden mob:block'>
                            <img className='h-[100%] w-[100%] object-cover' src={brand5} alt='brnad-1-img' />
                        </div>
                        <div className='h-[80px] w-[150] items-center mob:hidden'>
                            <img className='h-[100%] w-[100%] object-cover' src={brand6} alt='brnad-1-img' />
                        </div>
                        <div className='h-[80px] w-[150] items-center mob:hidden'>
                            <img className='h-[100%] w-[100%] object-cover' src={brand7} alt='brnad-1-img' />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
