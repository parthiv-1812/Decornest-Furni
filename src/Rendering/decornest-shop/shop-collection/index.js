import React from 'react'

import shopicon1 from '../../../Assets/Icons/shop-clock.svg'
import shopicon2 from '../../../Assets/Icons/shop-light-bulb.svg'
import shopicon3 from '../../../Assets/Icons/shop-chair.svg'
import shopicon4 from '../../../Assets/Icons/shop-flower.svg'
import shopicon5 from '../../../Assets/Icons/shop-knives.svg'
import shopicon6 from '../../../Assets/Icons/rocking-shop-horse.svg'
import searchicon from '../../../Assets/Icons/search-icon.svg'
import shopbrand1 from '../../../Assets/Images/shop-brand-1.png'
import shopbrand2 from '../../../Assets/Images/shop-brand-2.png'
import shopbrand3 from '../../../Assets/Images/shop-brand-3.png'
import shopbrand4 from '../../../Assets/Images/shop-brand-4.png'
import shopbrand5 from '../../../Assets/Images/shop-brand-5.webp'
import shopbrand6 from '../../../Assets/Images/shop-brand-6.png'
import shopbrand7 from '../../../Assets/Images/shop-brand-7.png'
import shopbrand8 from '../../../Assets/Images/shop-brand-8.png'
import shopbrand9 from '../../../Assets/Images/shop-brand-9.webp'
import shopbrand10 from '../../../Assets/Images/shop-brand-10.png'
import rated1 from '../../../Assets/Images/rated-1.webp'
import rated2 from '../../../Assets/Images/rated-2.jpg'
import rated3 from '../../../Assets/Images/rated-3.webp'
import ShopCollectionRight from '../shop-collection-right'


export default function ShopCollection() {
  return (
    <div>
      <div className='relative max-w-[100%] bg-green p-[80px_0_80px_0] tab:py-[60px] tab:px-[40px] mob:px-[30px]'>
        <div className='text-center'>
          <h4 className='text-[60px] text-white font-semibold relative opacity-100 hover:opacity-100 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0  after:bg-yellow after:transition-all after:ease-in-out after:duration-300 hover:after:w-full inline tab:text-[52px] mob:text-[38px]'>Accessories</h4>
        </div>
        <div className='max-w-[1280px] mx-auto flex gap-[60px] justify-center mt-[40px] tab:grid tab:grid-cols-3 mob:grid-cols-2 mob:gap-[40px_20px] tab:gap-[60px_60px]'>

          <div className='flex gap-[15px] cursor-pointer'>
            <div className='h-[40px] w-[40px]'>
              <img src={shopicon1} alt='shop icon 1' className='h-full w-full' />
            </div>
            <div className='group'>
              <p className='uppercase text-[14px] text-white font-semibold hover:text-yellow ease-in-out duration-300 cursor-pointer'>clocks</p>
              <p className='text-[14px] text-lightgray font-semibold mob:text-[12px]'>345 Products</p>
            </div>
          </div>

          <div className='flex gap-[15px] cursor-pointer'>
            <div className='h-[40px] w-[40px]'>
              <img src={shopicon2} alt='shop icon 1' className='h-full w-full' />
            </div>
            <div>
              <p className='uppercase text-[14px] text-white font-semibold hover:text-yellow ease-in-out duration-300 cursor-pointer'>lighting</p>
              <p className='text-[14px] text-lightgray font-semibold mob:text-[12px]'>545 Products</p>
            </div>
          </div>

          <div className='flex gap-[15px] cursor-pointer'>
            <div className='h-[40px] w-[40px]'>
              <img src={shopicon3} alt='shop icon 1' className='h-full w-full' />
            </div>
            <div>
              <p className='uppercase text-[14px] text-white font-semibold hover:text-yellow ease-in-out duration-300 cursor-pointer'>furniture</p>
              <p className='text-[14px] text-lightgray font-semibold mob:text-[12px]'>700 Products</p>
            </div>
          </div>

          <div className='flex gap-[15px] cursor-pointer'>
            <div className='h-[40px] w-[40px] mob:h-[50px] mob:w-[50px]'>
              <img src={shopicon4} alt='shop icon 1' className='h-full w-full' />
            </div>
            <div>
              <p className='uppercase text-[14px] text-white font-semibold hover:text-yellow ease-in-out duration-300 cursor-pointer'>accessories</p>
              <p className='text-[14px] text-lightgray font-semibold mob:text-[12px]'>120 Products</p>
            </div>
          </div>

          <div className='flex gap-[15px] cursor-pointer'>
            <div className='h-[40px] w-[40px]'>
              <img src={shopicon5} alt='shop icon 1' className='h-full w-full' />
            </div>
            <div>
              <p className='uppercase text-[14px] text-white font-semibold hover:text-yellow ease-in-out duration-300 cursor-pointer'>cooking</p>
              <p className='text-[14px] text-lightgray font-semibold mob:text-[12px]'>670 Products</p>
            </div>
          </div>

          <div className='flex gap-[15px] cursor-pointer'>
            <div className='h-[40px] w-[40px]'>
              <img src={shopicon6} alt='shop icon 1' className='h-full w-full' />
            </div>
            <div>
              <p className='uppercase text-[14px] text-white font-semibold hover:text-yellow ease-in-out duration-300 cursor-pointer'>toys</p>
              <p className='text-[14px] text-lightgray font-semibold mob:text-[12px]'>900 Products</p>
            </div>
          </div>

        </div>
      </div>

      <div className='max-w-[100%] p-[60px_0_60px_0] mob:py-[40px]'>
        <div className='max-w-[1280px] mx-auto flex relative mob:flex-col'>
          <div className='w-[20%] tab:w-[30%] px-[5px] h-[1600px] sticky top-0 tab:p-[0_0_0_30px] mob:relative mob:top-0 mob:left-0 mob:w-[100%] mob:px-[20px] mob:h-[100%]'>
            <h5 className='text-[14px] text-black font-semibold uppercase mb-[10px]'>Filter by price</h5>
            <div>
              <input id="default-range" type="range" value="10" class="w-full h-[3px] bg-green rounded-lg appearance-none cursor-pointer dark:bg-green"></input>
            </div>
            <div className='flex justify-between items-center p-[10px_0_30px_0] mb-[30px] border-b-2 border-gray-200 mob:pb-[20px] mob:mb-[20px]' >
              <p className='text-[12px] text-lightblack font-semibold'>Price:<span className='text-black'> $80 — $600</span></p>
              <button className='text-[12px] font-semibold p-[4px_15px] bg-gray-200 uppercase'>filter</button>
            </div>
            <div className='mob:flex mob:pb-[20px] mob:border-b-2 mob:border-gray-200 mob:mb-[20px]'>
              <div className='mob:w-[50%] mob:pr-[20px] mob:border-r-2 mob:border-gray-200'>
                <h5 className='text-[14px] text-black font-semibold uppercase mb-[15px] mob:mb-[20px]'>Filter by color</h5>
                <div>
                  <div className='mb-[15px] flex justify-between items-center cursor-pointer mob:mb-[10px]'>
                    <div className='flex gap-[15px] items-center'>
                      <div className='h-[25px] w-[25px] rounded-full bg-pink-300 '></div>
                      <p className='text-[12px] font-semibold capitalize'>pink</p>
                    </div>
                    <div>
                      <p className='text-[12px] p-[0_8px] border border-gray-300 rounded-[10px]'>2</p>
                    </div>
                  </div>
                  <div className='mb-[15px] flex justify-between items-center cursor-pointer mob:mb-[10px]'>
                    <div className='flex gap-[15px] items-center'>
                      <div className='h-[25px] w-[25px] rounded-full bg-blue-500 '></div>
                      <p className='text-[12px] font-semibold capitalize'>blue</p>
                    </div>
                    <div>
                      <p className='text-[12px] p-[0_8px] border border-gray-300 rounded-[10px]'>5</p>
                    </div>
                  </div>
                  <div className='mb-[15px] flex justify-between items-center cursor-pointer mob:mb-[10px]'>
                    <div className='flex gap-[15px] items-center'>
                      <div className='h-[25px] w-[25px] rounded-full bg-gray-500 '></div>
                      <p className='text-[12px] font-semibold capitalize'>gray</p>
                    </div>
                    <div>
                      <p className='text-[12px] p-[0_8px] border border-gray-300 rounded-[10px]'>1</p>
                    </div>
                  </div>
                  <div className='mb-[15px] flex justify-between items-center cursor-pointer mob:mb-[10px]'>
                    <div className='flex gap-[15px] items-center'>
                      <div className='h-[25px] w-[25px] rounded-full bg-yellow '></div>
                      <p className='text-[12px] font-semibold capitalize'>yellow</p>
                    </div>
                    <div>
                      <p className='text-[12px] p-[0_8px] border border-gray-300 rounded-[10px]'>5</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='mob:w-[50%] mob:pl-[20px]'>
                <h5 className='text-[14px] text-black font-semibold uppercase m-[30px_0_20px] mob:mt-0'>Filter by size</h5>
                <div>
                  <div className='mb-[15px] flex justify-between items-center cursor-pointer mob:mb-[10px]'>
                    <p className='text-[12px] font-semibold uppercase'>xs</p>
                    <p className='text-[12px] p-[0_8px] border border-gray-300 rounded-[10px]'>18</p>
                  </div>
                  <div className='mb-[15px] flex justify-between items-center cursor-pointer mob:mb-[10px]'>
                    <p className='text-[12px] font-semibold uppercase'>s</p>
                    <p className='text-[12px] p-[0_8px] border border-gray-300 rounded-[10px]'>21</p>
                  </div>
                  <div className='mb-[15px] flex justify-between items-center cursor-pointer mob:mb-[10px]'>
                    <p className='text-[12px] font-semibold uppercase'>m</p>
                    <p className='text-[12px] p-[0_8px] border border-gray-300 rounded-[10px]'>23</p>
                  </div>
                  <div className='mb-[15px] flex justify-between items-center cursor-pointer mob:mb-[10px]'>
                    <p className='text-[12px] font-semibold uppercase'>l</p>
                    <p className='text-[12px] p-[0_8px] border border-gray-300 rounded-[10px]'>17</p>
                  </div>
                  <div className='mb-[15px] flex justify-between items-center cursor-pointer mob:mb-[10px]'>
                    <p className='text-[12px] font-semibold uppercase'>xl</p>
                    <p className='text-[12px] p-[0_8px] border border-gray-300 rounded-[10px]'>17</p>
                  </div>
                  <div className='mb-[15px] pb-[20px] border-b-2 border-gray-200 flex justify-between items-center mob:mb-0 mob:pb-0 mob:border-none cursor-pointer'>
                    <p className='text-[12px] font-semibold uppercase'>xxl</p>
                    <p className='text-[12px] p-[0_8px] border border-gray-300 rounded-[10px]'>12</p>
                  </div> 
                </div>
              </div>
            </div>

            <h5 className='text-[14px] text-black font-semibold uppercase m-[30px_0_20px] mob:hidden'>Find by brand</h5>
            <div>
              <div>

                <div className='relative mob:hidden'>
                  <div>
                    <input type='search' placeholder='Find a Brand' className='tab:w-[160px] text-[12px] font-semibold border-2 border-gray-300 p-[10px_20px]' />
                  </div>
                  <div className='absolute right-[35px] bottom-[10px] h-[20px] w-[20px]'>
                    <img src={searchicon} alt='shop icon 1' className='h-full w-full' />
                  </div>
                </div>

                <div className='grid grid-cols-2 gap-[20px] p-[20px_0_30px_0] border-b-2 border-gray-200 mb-[30px] mob:hidden'>
                  <div className='h-[30px] w-[60px]'>
                    <img src={shopbrand1} alt='brand logo' className='h-full w-full object-cover' />
                  </div>
                  <div className='h-[30px] w-[60px]'>
                    <img src={shopbrand2} alt='brand logo' className='h-full w-full object-cover' />
                  </div>
                  <div className='h-[30px] w-[60px]'>
                    <img src={shopbrand3} alt='brand logo' className='h-full w-full object-cover' />
                  </div>
                  <div className='h-[30px] w-[60px]'>
                    <img src={shopbrand4} alt='brand logo' className='h-full w-full object-cover' />
                  </div>
                  <div className='h-[30px] w-[60px]'>
                    <img src={shopbrand5} alt='brand logo' className='h-full w-full object-cover' />
                  </div>
                  <div className='h-[30px] w-[60px]'>
                    <img src={shopbrand6} alt='brand logo' className='h-full w-full object-cover' />
                  </div>
                  <div className='h-[30px] w-[60px]'>
                    <img src={shopbrand7} alt='brand logo' className='h-full w-full object-cover' />
                  </div>
                  <div className='h-[30px] w-[60px]'>
                    <img src={shopbrand8} alt='brand logo' className='h-full w-full object-cover' />
                  </div>
                  <div className='h-[30px] w-[60px]'>
                    <img src={shopbrand9} alt='brand logo' className='h-full w-full object-cover' />
                  </div>
                  <div className='h-[30px] w-[60px]'>
                    <img src={shopbrand10} alt='brand logo' className='h-full w-full object-cover' />
                  </div>
                </div>

                <h5 className='text-[14px] text-black font-semibold uppercase m-[30px_0_20px] mob:hidden'>product status</h5>
                <div className='pb-[15px] border-b-2 border-gray-200 mob:hidden'>
                  <div className='flex items-center mb-[5px]'>
                    <input type='checkbox' className='border-2 border-gray-300' />
                    <label className='text-[14px] text-gray-400 pl-[10px]'>On Sale</label>
                  </div>
                  <div className='flex items-center'>
                    <input type='checkbox' className='border-2 border-gray-300' />
                    <label className='text-[14px] text-gray-400 pl-[10px]'>In Stock</label>
                  </div>
                </div>

                <h5 className='text-[14px] text-black font-semibold uppercase m-[30px_0_20px] mob:hidden'>top rated product</h5>
                <div className='mob:hidden'>
                  <div className='flex gap-[15px] items-center pb-[15px] border-b-2 border-gray-200 mb-[15px]'>
                    <div className='h-[74px] w-[65px]'>
                      <img src={rated1} alt='rated product 1' className='h-full w-full object-cover' />
                    </div>
                    <div>
                      <h4 className='text-[13px] text-black font-semibold'>Light wood consectetur</h4>
                      <p className='text-[12px]'>⭐⭐⭐⭐⭐</p>
                      <p className='text-[12px] text-lightgreen font-semibold'>$499.00</p>
                    </div>
                  </div>
                  <div className='flex gap-[15px] items-center pb-[15px] border-b-2 border-gray-200 mb-[15px]'>
                    <div className='h-[74px] w-[65px]'>
                      <img src={rated2} alt='rated product 1' className='h-full w-full object-cover' />
                    </div>
                    <div>
                      <h4 className='text-[13px] text-black font-semibold'>Vestibulum tempus metus</h4>
                      <p className='text-[12px]'>⭐⭐⭐⭐⭐</p>
                      <p className='text-[12px] text-lightgreen font-semibold'><del className='text-gray-400 pr-[5px]'>$299.00</del>$499.00</p>
                    </div>
                  </div>
                  <div className='flex gap-[15px] items-center'>
                    <div className='h-[74px] w-[65px]'>
                      <img src={rated3} alt='rated product 1' className='h-full w-full object-cover' />
                    </div>
                    <div>
                      <h4 className='text-[13px] text-black font-semibold'>Char with Magazine</h4>
                      <p className='text-[12px]'>⭐⭐⭐⭐⭐</p>
                      <p className='text-[12px] text-lightgreen font-semibold'>$249.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[80%] mob:w-[100%]'>
            <h4 className='hidden tab:hidden mob:block mob:mb-[20px] mob:text-center mob:text-[14px] mob:uppercase mob:text-lightblack mob:font-semibold'>Our Products</h4>
            <ShopCollectionRight />
          </div>


        </div>
      </div>

    </div >
  )
}
