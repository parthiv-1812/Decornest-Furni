import React from 'react'

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

import product9img1 from '../../../Assets/Images/releted1-1.jpg'
import product9img2 from '../../../Assets/Images/releted1-2.jpg'
import product10img1 from '../../../Assets/Images/releted2-1.jpg'
import product10img2 from '../../../Assets/Images/releted2-2.jpg'
import product11img1 from '../../../Assets/Images/releted3-1.jpg'
import product11img2 from '../../../Assets/Images/releted3-2.jpg'
import product12img1 from '../../../Assets/Images/releted4-1.jpg'
import product12img2 from '../../../Assets/Images/releted4-2.jpg'
import product13img1 from '../../../Assets/Images/releted5-1.webp'
import product13img2 from '../../../Assets/Images/releted5-2.webp'
import product14img1 from '../../../Assets/Images/releted6-1.webp'
import product14img2 from '../../../Assets/Images/releted6-2.webp'
import product15img1 from '../../../Assets/Images/releted7-1.webp'
import product15img2 from '../../../Assets/Images/releted7-2.webp'
import product16img1 from '../../../Assets/Images/releted8-1.webp'
import product16img2 from '../../../Assets/Images/releted8-2.webp'
import product17img1 from '../../../Assets/Images/product17img1.webp'
import product17img2 from '../../../Assets/Images/product17img2.webp'
import product18img1 from '../../../Assets/Images/product18img1.jpg'
import product18img2 from '../../../Assets/Images/product18img2.webp'

export default function ShopCollectionRight() {
    return (
        <div>
            <div className='px-[40px] mob:px-[20px]'>
                <div className='grid grid-cols-3 gap-[40px_30px] tab:grid tab:grid-cols-2 mob:grid-cols-2 mob:gap-[20px_15px]'>
                    <div>
                        <div className=" tab:h-56 mob:h-48 group relative border rounded-[10px]">
                            <div className='img h-[324px]'>
                                <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={product1img1} alt="product-image" />
                                <img className="h-full absolute duration-700 opacity-0 group-hover:opacity-100 rounded-[10px]" src={product1img2} alt="product-image" />
                            </div>
                            <div className='text absolute top-2 left-2 z-10'>
                                <p className='bg-green tab:h-[40px] tab:w-[40px] h-[50px] w-[50px] rounded-full text-white text-[12px] mob:text-[10px] font-semibold flex justify-center items-center'>-25%</p>
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
                                <p className='bg-green mob:text-[10px] tab:h-[40px] tab:w-[40px] h-[50px] w-[50px] rounded-full text-white text-[12px] font-semibold flex justify-center items-center'>-50%</p>
                                <p className='bg-red-500 mob:text-[10px] tab:h-[40px] tab:w-[40px] h-[50px] w-[50px] rounded-full text-white text-[12px] font-semibold flex justify-center items-center mt-[5px]'>HOT</p>
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
                                <p className='bg-green mob:text-[10px] mob:h-[70px] mob:w-[30px] tab:h-[40px] tab:w-[40px] h-[50px] w-[50px] rounded-full text-white text-[12px] font-semibold flex justify-center items-center'>SALE</p>
                            </div>
                            <div className='absolute top-[10px] right-[10px] bg-white h-[90px] w-[40px] flex justify-center items-center shadow-md border border-gray-200 rounded-[8px] flex-col gap-[10px]'>
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
                            <div className='absolute top-[10px] right-[10px] mob:h-[70px] mob:w-[30px] bg-white h-[90px] w-[40px] flex justify-center items-center shadow-md border border-gray-200 rounded-[8px] flex-col gap-[10px]'>
                                <img className='h-[17px] w-[17px] mob:h-[12px] mob:w-[12px]' src={compare} alt='compare-icon' />
                                <img className='h-[17px] w-[17px] mob:h-[12px] mob:w-[12px]' src={search} alt='search-icon' />
                                <img className='h-[16px] w-[16px] mob:h-[11px] mob:w-[11px]' src={favourite} alt='favourite-icon' />
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
                                <p className='bg-green mob:text-[10px] tab:h-[40px] tab:w-[40px] h-[50px] w-[50px] rounded-full text-white text-[12px] font-semibold flex justify-center items-center'>-75%</p>
                                <p className='bg-red-500 mob:text-[10px] tab:h-[40px] tab:w-[40px] h-[50px] w-[50px] rounded-full text-white text-[12px] font-semibold flex justify-center items-center mt-[5px]'>HOT</p>
                            </div>
                            <div className='absolute top-[10px] right-[10px] mob:h-[70px] mob:w-[30px] bg-white h-[90px] w-[40px] flex justify-center items-center shadow-md border border-gray-200 rounded-[8px] flex-col gap-[10px]'>
                                <img className='h-[17px] w-[17px] mob:h-[12px] mob:w-[12px]' src={compare} alt='compare-icon' />
                                <img className='h-[17px] w-[17px] mob:h-[12px] mob:w-[12px]' src={search} alt='search-icon' />
                                <img className='h-[16px] w-[16px] mob:h-[11px] mob:w-[11px]' src={favourite} alt='favourite-icon' />
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
                            <h3 className='text-[14px] text-[#333333] font-semibold'>Reflect Chest of Drawers</h3>
                            <p className='text-[13px] text-[#a5a5a5] font-medium'>furniture</p>
                            <div className='flex justify-center gap-2 items-center'>
                                <p className='text-[12px]'>⭐⭐⭐⭐⭐</p>
                            </div>
                            <p className='text-[14px] text-[#339059] font-medium'>$399.00</p>
                        </div>
                    </div>

                    <div>
                        <div className=" tab:h-56 mob:h-48 group relative border rounded-[10px] ">
                            <div className='img h-[324px]'>
                                <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={product18img1} alt="product-image" />
                                <img className="h-full absolute duration-700 opacity-0 group-hover:opacity-100 rounded-[10px]" src={product18img2} alt="product-image" />
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

                    <div>
                        <div className=" tab:h-56 mob:h-48 group relative border rounded-[10px]">
                            <div className='img h-[324px]'>
                                <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={product9img1} alt="product-image" />
                                <img className="h-full absolute duration-700 opacity-0 group-hover:opacity-100 rounded-[10px]" src={product9img2} alt="product-image" />
                            </div>
                            <div className='text absolute top-2 left-2 z-10'>
                                <p className='bg-green mob:text-[10px] tab:h-[40px] tab:w-[40px] h-[50px] w-[50px] rounded-full text-white text-[12px] font-semibold flex justify-center items-center'>-25%</p>
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
                        <div className=" tab:h-56 mob:h-48 group relative border rounded-[10px] ">
                            <div className='img h-[324px]'>
                                <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={product10img1} alt="product-image" />
                                <img className="h-full absolute duration-700 opacity-0 group-hover:opacity-100 rounded-[10px]" src={product10img2} alt="product-image" />
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
                        <div className=" tab:h-56 mob:h-48 group relative border rounded-[10px]">
                            <div className='img h-[324px]'>
                                <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={product12img1} alt="product-image" />
                                <img className="h-full absolute duration-700 opacity-0 group-hover:opacity-100 rounded-[10px]" src={product12img2} alt="product-image" />
                            </div>
                            <div className='text absolute top-2 left-2 z-10'>
                                <p className='bg-green mob:text-[10px] tab:h-[40px] tab:w-[40px] h-[50px] w-[50px] rounded-full text-white text-[12px] font-semibold flex justify-center items-center'>-50%</p>
                                <p className='bg-red-500 mob:text-[10px] tab:h-[40px] tab:w-[40px] h-[50px] w-[50px] rounded-full text-white text-[12px] font-semibold flex justify-center items-center mt-[5px]'>HOT</p>
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
                        <div className=" tab:h-56 mob:h-48 group relative border rounded-[10px] ">
                            <div className='img h-[324px]'>
                                <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={product17img1} alt="product-image" />
                                <img className="h-full absolute duration-700 opacity-0 group-hover:opacity-100 rounded-[10px]" src={product17img2} alt="product-image" />
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

                    <div>
                        <div className=" tab:h-56 mob:h-48 group relative border rounded-[10px]">
                            <div className='img h-[324px] '>
                                <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={product13img1} alt="product-image" />
                                <img className="h-full absolute duration-700 opacity-0 group-hover:opacity-100 rounded-[10px]" src={product13img2} alt="product-image" />
                            </div>
                            <div className='text absolute top-2 left-2 z-10'>
                                <p className='bg-green mob:text-[10px] tab:h-[40px] tab:w-[40px] h-[50px] w-[50px] rounded-full text-white text-[12px] font-semibold flex justify-center items-center'>SALE</p>
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
                        <div className=" tab:h-56 mob:h-48 group relative border rounded-[10px]">
                            <div className='img h-[324px]'>
                                <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={product14img1} alt="product-image" />
                                <img className="h-full absolute duration-700 opacity-0 group-hover:opacity-100 rounded-[10px]" src={product14img2} alt="product-image" />
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
                        <div className=" tab:h-56 mob:h-48 group relative border rounded-[10px] ">
                            <div className='img h-[324px]'>
                                <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={product15img1} alt="product-image" />
                                <img className="h-full absolute duration-700 opacity-0 group-hover:opacity-100 rounded-[10px]" src={product15img2} alt="product-image" />
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
                        <div className=" tab:h-56 mob:h-48 group relative border rounded-[10px] ">
                            <div className='img h-[324px]'>
                                <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={product16img1} alt="product-image" />
                                <img className="h-full absolute duration-700 opacity-0 group-hover:opacity-100 rounded-[10px]" src={product16img2} alt="product-image" />
                            </div>
                            <div className='text absolute top-2 left-2 z-10'>
                                <p className='bg-green mob:text-[10px] tab:h-[40px] tab:w-[40px] h-[50px] w-[50px] rounded-full text-white text-[12px] font-semibold flex justify-center items-center'>-75%</p>
                                <p className='bg-red-500 mob:text-[10px] tab:h-[40px] tab:w-[40px] h-[50px] w-[50px] rounded-full text-white text-[12px] font-semibold flex justify-center items-center mt-[5px]'>HOT</p>
                            </div>
                            <div className='absolute top-[10px] right-[10px] bg-white mob:h-[70px] mob:w-[30px] h-[90px] w-[40px] flex justify-center items-center shadow-md border border-gray-200 rounded-[8px] flex-col gap-[10px]'>
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
                        <div className=" tab:h-56 mob:h-48 group relative border rounded-[10px] ">
                            <div className='img h-[324px]'>
                                <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={product11img1} alt="product-image" />
                                <img className="h-full absolute duration-700 opacity-0 group-hover:opacity-100 rounded-[10px]" src={product11img2} alt="product-image" />
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

                </div>
            </div>
        </div>
    )
}
