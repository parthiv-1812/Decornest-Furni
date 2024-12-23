import React from 'react'

import heart from '../../../../Assets/Icons/favourite-icon.png';

import favourite from '../../../../Assets/Icons/favourite-icon.png';
import refresh from '../../../../Assets/Icons/refresh-icon.svg';
import ruler from '../../../../Assets/Icons/ruler-icon.svg';
import payment from '../../../../Assets/Icons/payment-product.png';

import box from '../../../../Assets/Icons/box-icon.svg';
import time from '../../../../Assets/Icons/time-icon.svg';

import facebook from '../../../../Assets/Icons/facebook-icon.svg';
import instagram from '../../../../Assets/Icons/instagram-icon.svg';
import pintrest from '../../../../Assets/Icons/pinterest-icon.svg';
import twitter from '../../../../Assets/Icons/twitter-icon.svg';


export default function ProductDetailDesc() {
    return (
        <div className='pr-[30px] tab:px-[30px] mob:p-0'>
            <div>
                <h4 className='text-[14px] mb-[10px] font-medium text-gray-500 tab:text-[12px]'>Home / Furniture /<span className='cursor-pointer text-black font-medium'> Nerd Wooden Chair </span></h4>
                <h2 className='text-[34px] mb-[1px] font-semibold text-[#333333] tab:text-[28px] mob:text-[24px]'>Nerd Wooden Chair</h2>
                <p className='text-[20px] text-lightgreen font-bold mb-[15px] tab:text-[16px] mob:text-[14px]'><del className='text-gray-400 mr-[10px]'>$799.00</del>$599.00</p>
                <p className='text-gray-400 text-[12px]' >Placerat tempor dolor eu leo ullamcorper et magnis habitant ultrices consectetur arcu nulla mattis fermentum adipiscing a et bibendum sed platea malesuada eget vestibulum.</p>
                <div className='flex gap-2 items-center my-[10px]'>
                    <p className='text-[12px] text-black font-extrabold'>Color : </p>
                    <div className='h-[25px] w-[25px] rounded-full border border-black bg-pink-300 '></div>
                    <div className='h-[25px] w-[25px] rounded-full border border-black bg-black '></div>
                    <div className='h-[25px] w-[25px] rounded-full border border-black bg-blue-500 '></div>
                    <div className='h-[25px] w-[25px] rounded-full border border-black bg-gray-500 '></div>
                    <div className='h-[25px] w-[25px] rounded-full border border-black bg-yellow '></div>
                    <div className='h-[25px] w-[25px] rounded-full border border-black bg-red-500 '></div>
                </div>
            </div>
            <div className='flex gap-2 items-center py-[15px]'>
                <div className='flex items-center  border border-gray-300 '>
                    <p className='border border-gray-300 px-2 py-1 text-[16px] text-gray-400'>-</p>
                    <p className='border border-gray-300 px-2 py-1 text-[16px] text-gray-400'>1</p>
                    <p className='border border-gray-300 px-2 py-1 text-[16px] text-gray-400'>+</p>
                </div>
                <div>
                    <button className='bg-green text-white uppercase text-[12px] w-[120px] py-2 border-2 border-green hover:bg-btn '>
                        Add To Cart
                    </button>
                </div>
            </div>
            <div className='flex gap-[5px] items-center pb-[10px] border-b-2 border-gray-200'>
                <div className=''>
                    <img src={favourite} alt='heart' className='w-[18px] h-[18px] object-cover ' />
                </div>
                <div className='pr-[10px]'>
                    <p className='text-[12px] font-bold text-lightblack'>Add to Wishlist</p>
                </div>
                <div className=''>
                    <img src={refresh} alt='refresh' className='w-[19px] h-full object-cover ' />
                </div>
                <div className='pr-[10px]'>
                    <p className='text-[12px] font-bold text-lightblack'>Compare</p>
                </div>
                <div className=''>
                    <img src={ruler} alt='refresh' className='w-[19px] h-full object-cover ' />
                </div>
                <div className='pr-[10px]'>
                    <p className='text-[12px] font-bold text-lightblack'>Size Guide</p>
                </div>
            </div>

            <div className='bg-gray-200 py-[15px] my-[15px] rounded-[5px] '>
                <div className='w-[400px] h-[28px] mob:h-[20px] mob:w-[300px] mb-[15px] mx-auto'>
                    <img src={payment} alt='payment' className=' w-full h-full object-cover' />
                </div>
                <div className=''>
                    <p className='text-[12px] text-black text-center font-bold uppercase'>Guaranteed Checkout</p>
                </div>
            </div>


            <div>
                <div className='flex gap-2 items-center'>
                    <div className='w-[20px] h-[20px]'>
                        <img src={box} alt='box' className='w-full h-full' />
                    </div>
                    <div>
                        <p className='text-[12px] text-lightblack font-semibold'>Free worldwide shipping on all orders over $100</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center pt-2 border-b border-gray-200 pb-[15px]'>
                    <div className='w-[20px] h-[20px]'>
                        <img src={time} alt='watch' className='w-full h-full object-cover' />
                    </div>
                    <div >
                        <p className='text-[12px] text-lightblack font-semibold'>Delivers in: 3-7 Working Days Shipping & Return</p>
                    </div>
                </div>
            </div>


            <div className='pt-2'>
                <p className='text-[12px] text-lightblack font-bold hover:text-btn'>Categories: Furniture , Interior</p>
            </div>
            <div className='pt-2 flex items-center gap-3'>
                <div>
                    <p className='text-[12px] font-bold text-black hover:text-btn'>Share:</p>
                </div>
                <div className='flex gap-[10px]'>
                    <div className='h-[20px] w-[20px]'>
                        <img className='h-full w-full' src={facebook} alt='facebook' />
                    </div>
                    <div className='h-[19px] w-[19px]'>
                        <img className='h-full w-full' src={instagram} alt='instagram' />
                    </div>
                    <div className='h-[19px] w-[19px]'>
                        <img className='h-full w-full' src={pintrest} alt='pintrest' />
                    </div>
                    <div className='h-[19px] w-[19px]'>
                        <img className='h-full w-full' src={twitter} alt='twitter' />
                    </div>

                </div>
            </div>
        </div>
    )
}