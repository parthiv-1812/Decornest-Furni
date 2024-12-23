import React from 'react'

import magazine1 from '../../../Assets/Images/magezine-1.webp'
import magazine2 from '../../../Assets/Images/magezine-2.webp'
import magazine3 from '../../../Assets/Images/magezine-3.webp'
import magazine4 from '../../../Assets/Images/magezine-4.webp'
import magazine5 from '../../../Assets/Images/magezine-5.jpg'
import magazine6 from '../../../Assets/Images/blog-6.webp'
import magazine7 from '../../../Assets/Images/blog-7.webp'
import magazine8 from '../../../Assets/Images/blog-8.webp'
import magazine9 from '../../../Assets/Images/blog-9.webp'
import magazine10 from '../../../Assets/Images/blog-10.webp'
import magazine11 from '../../../Assets/Images/blog-11.webp'
import magazine12 from '../../../Assets/Images/blog-12.jpg'

import dp from '../../../Assets/Images/avatar-home.jpg.webp'
import commentblog from '../../../Assets/Icons/comment-blog.svg'
import shareblog from '../../../Assets/Icons/share-blog.svg'

export default function BlogsHeroBanner() {
    return (
        <div>
            <div className='relative max-w-[100%] bg-green p-[80px_0_80px_0] tab:py-[60px]'>
                <div className='text-center'>
                    <p className='text-[12px] text-yellow font-semibold'><p className='text-gray-300 inline'>Home /</p> Blogs</p>
                    <h4 className='text-[60px] text-white font-semibold relative opacity-100 hover:opacity-100 tab:text-[38px] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0  after:bg-yellow after:transition-all after:ease-in-out after:duration-300 hover:after:w-full inline'>Blogs</h4>
                </div>
            </div>
            <div className='max-w-[100%] p-[60px_0_60px_0] tab:mx-[20px] mob:p-[40px_0_0]'>
                <div className='relative max-w-[1380px] mx-auto flex gap-[20px] tab:gap-0 mob:flex-col'>
                    <div className=' w-[77%] px-[5px] tab:px-0  tab:pr-[10px] mob:w-[100%] mob:pr-0'>
                        <div>
                            <h4 className='text-[14px] text-black font-semibold uppercase my-[20px] mob:mt-0'>Trending blogs</h4>
                        </div>
                        <div className='grid grid-cols-3 gap-[10px] tab:pb-[30px] tab:grid-cols-2 tab:gap-[20px] mob:grid-cols-1'>
                            <div className=' shadow-x-xl border border-black-100 rounded-[10px] '>
                                <div className=" tab:h-56 mob:h-48 group relative border rounded-[10px] overflow-hidden">
                                    <div className='img h-[324px]'>
                                        <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={magazine1} alt="product-image" />
                                        <img className="h-full absolute hover:scale-110 transition hover:duration-300 object-cover rounded-[10px]" src={magazine1} alt="product-image" />
                                    </div>
                                    <div className='text absolute top-3 left-3 z-10'>
                                        <p className='bg-white h-[60px] w-[60px] tab:text-[12px] tab:h-[40px] tab:w-[40px] rounded-[5px] shadow-2xl text-black text-[16px] font-bold flex justify-center text-center items-center'>23<br />JULY</p>
                                    </div>
                                </div>
                                <div className='relative slider-text text-center py-[20px] h-[196px] tab:px-[10px]'>
                                    <div className='absolute top-[-15px] left-[19%] tab:left-[12%] mob:left-[22%] z-50'>
                                        <p className='text-[12px] text-white font-semibold uppercase bg-lightgreen p-[5px_20px]'>Design trends, Furniture</p>
                                    </div>
                                    <h3 className='text-[24px] tab:text-[18px] text-[#333333] font-semibold pb-[5px]'>Seating collection inspiration</h3>
                                    <div className='flex gap-[10px] items-center justify-center py-[10px]'>
                                        <span className='text-[12px] text-gray-400 font-semibold'>By</span>
                                        <div className='h-[20px] w-[20px]'>
                                            <img src={dp} alt='dp image' className='h-full w-full rounded-full' />
                                        </div>
                                        <span className='text-[12px] text-gray-400 font-semibold'>S.Rogers</span>
                                        <div className='h-[20px] w-[20px] opacity-60'>
                                            <img src={commentblog} alt='dp image' className='h-full w-full' />
                                        </div>
                                        <div className='h-[20px] w-[20px] opacity-60'>
                                            <img src={shareblog} alt='dp image' className='h-full w-full' />
                                        </div>
                                    </div>
                                    <p className='text-[12px] max-w-[300px] mx-auto text-[#a5a5a5] font-medium mb-[10px]'>Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac et vestibulum duis a tincidunt per a apte...	</p>
                                    <p className='text-[12px] text-[#339059] font-semibold uppercase'>continue reading</p>
                                </div>
                            </div>

                            <div className=' shadow-x-xl border border-black-100 rounded-[10px]'>
                                <div className=" tab:h-56 mob:h-48 group relative border rounded-[10px] overflow-hidden ">
                                    <div className='img h-[324px]'>
                                        <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={magazine2} alt="product-image" />
                                        <img className="h-full absolute hover:scale-110 transition hover:duration-300 object-cover rounded-[10px]" src={magazine2} alt="product-image" />
                                    </div>
                                    <div className='text absolute top-3 left-3 z-10'>
                                        <p className='bg-white h-[60px] w-[60px] tab:text-[12px] tab:h-[40px] tab:w-[40px] rounded-[5px] shadow-2xl text-black text-[16px] font-bold flex justify-center text-center items-center'>23<br />JULY</p>
                                    </div>
                                </div>
                                <div className='relative slider-text text-center py-[20px] tab:px-[10px]'>
                                    <div className='absolute top-[-15px] left-[19%] tab:left-[12%] mob:left-[22%] z-50'>
                                        <p className='text-[12px] text-white font-semibold uppercase bg-lightgreen p-[5px_20px]'>Design trends, Furniture</p>
                                    </div>
                                    <h3 className='text-[24px] tab:text-[18px] text-[#333333] font-semibold pb-[5px]'>Creative water features and exterior</h3>
                                    <div className='flex gap-[10px] items-center justify-center py-[10px]'>
                                        <span className='text-[12px] text-gray-400 font-semibold'>By</span>
                                        <div className='h-[20px] w-[20px]'>
                                            <img src={dp} alt='dp image' className='h-full w-full rounded-full' />
                                        </div>
                                        <span className='text-[12px] text-gray-400 font-semibold'>S.Rogers</span>
                                        <div className='h-[20px] w-[20px] opacity-60'>
                                            <img src={commentblog} alt='dp image' className='h-full w-full' />
                                        </div>
                                        <div className='h-[20px] w-[20px] opacity-60'>
                                            <img src={shareblog} alt='dp image' className='h-full w-full' />
                                        </div>
                                    </div>
                                    <p className='text-[12px] max-w-[300px] mx-auto text-[#a5a5a5] font-medium mb-[10px]'>Adipiscing hac imperdiet id blandit varius scelerisque at sagittis libero dui dis volutpat vehicula mus sed ut. Lacinia dui rutrum a at...</p>
                                    <p className='text-[12px] text-[#339059] font-semibold uppercase'>continue reading</p>
                                </div>
                            </div>

                            <div className=' shadow-x-xl border border-black-100 rounded-[10px] '>
                                <div className=" tab:h-56 mob:h-48 group relative border rounded-[10px] overflow-hidden">
                                    <div className='img h-[324px]'>
                                        <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={magazine3} alt="product-image" />
                                        <img className="h-full absolute hover:scale-110 transition hover:duration-300 object-cover rounded-[10px]" src={magazine3} alt="product-image" />
                                    </div>
                                    <div className='text absolute top-3 left-3 z-10'>
                                        <p className='bg-white h-[60px] w-[60px] tab:text-[12px] tab:h-[40px] tab:w-[40px] rounded-[5px] shadow-2xl text-black text-[16px] font-bold flex justify-center text-center items-center'>23<br />JULY</p>
                                    </div>
                                </div>
                                <div className='relative slider-text text-center py-[20px] tab:px-[10px]'>
                                    <div className='absolute top-[-15px] left-[19%] tab:left-[12%] mob:left-[22%] z-50'>
                                        <p className='text-[12px] text-white font-semibold uppercase bg-lightgreen p-[5px_20px]'>Design trends, Furniture</p>
                                    </div>
                                    <h3 className='text-[24px] tab:text-[18px] text-[#333333] font-semibold pb-[5px]'>Sweet seat: functional seat for IT folks</h3>
                                    <div className='flex gap-[10px] items-center justify-center py-[10px]'>
                                        <span className='text-[12px] text-gray-400 font-semibold'>By</span>
                                        <div className='h-[20px] w-[20px]'>
                                            <img src={dp} alt='dp image' className='h-full w-full rounded-full' />
                                        </div>
                                        <span className='text-[12px] text-gray-400 font-semibold'>S.Rogers</span>
                                        <div className='h-[20px] w-[20px] opacity-60'>
                                            <img src={commentblog} alt='dp image' className='h-full w-full' />
                                        </div>
                                        <div className='h-[20px] w-[20px] opacity-60'>
                                            <img src={shareblog} alt='dp image' className='h-full w-full' />
                                        </div>
                                    </div>
                                    <p className='text-[12px] max-w-[300px] mx-auto text-[#a5a5a5] font-medium mb-[10px]'>A sed a risusat luctus esta anibh rhoncus hendrerit blandit nam rutrum sitmiad hac. Cras a vestibulum a varius adipiscing ut dignissim ullamcorpe...</p>
                                    <p className='text-[12px] text-[#339059] font-semibold uppercase'>continue reading</p>
                                </div>
                            </div>

                            <div className=' shadow-x-xl border border-black-100 rounded-[10px] '>
                                <div className=" tab:h-56 mob:h-48 group relative border rounded-[10px] overflow-hidden">
                                    <div className='img h-[324px]'>
                                        <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={magazine4} alt="product-image" />
                                        <img className="h-full absolute hover:scale-110 transition hover:duration-300 object-cover rounded-[10px]" src={magazine4} alt="product-image" />
                                    </div>
                                    <div className='text absolute top-3 left-3 z-10'>
                                        <p className='bg-white h-[60px] w-[60px] tab:text-[12px] tab:h-[40px] tab:w-[40px] rounded-[5px] shadow-2xl text-black text-[16px] font-bold flex justify-center text-center items-center'>23<br />JULY</p>
                                    </div>
                                </div>
                                <div className='relative slider-text text-center py-[20px] h-[196px] tab:px-[10px]'>
                                    <div className='absolute top-[-15px] left-[19%] tab:left-[12%] mob:left-[22%] z-50'>
                                        <p className='text-[12px] text-white font-semibold uppercase bg-lightgreen p-[5px_20px]'>Design trends, Furniture</p>
                                    </div>
                                    <h3 className='text-[24px] tab:text-[18px] text-[#333333] font-semibold pb-[5px]'>Green interior design inspiration</h3>
                                    <div className='flex gap-[10px] items-center justify-center py-[10px]'>
                                        <span className='text-[12px] text-gray-400 font-semibold'>By</span>
                                        <div className='h-[20px] w-[20px]'>
                                            <img src={dp} alt='dp image' className='h-full w-full rounded-full' />
                                        </div>
                                        <span className='text-[12px] text-gray-400 font-semibold'>S.Rogers</span>
                                        <div className='h-[20px] w-[20px] opacity-60'>
                                            <img src={commentblog} alt='dp image' className='h-full w-full' />
                                        </div>
                                        <div className='h-[20px] w-[20px] opacity-60'>
                                            <img src={shareblog} alt='dp image' className='h-full w-full' />
                                        </div>
                                    </div>
                                    <p className='text-[12px] max-w-[300px] mx-auto text-[#a5a5a5] font-medium mb-[10px]'>Vivamus enim sagittis aptent hac mi dui a per aptent suspendisse cras odio bibendum augue rhoncus laoreet dui praesent sodales sodales. Dignissim...</p>
                                    <p className='text-[12px] text-[#339059] font-semibold uppercase'>continue reading</p>
                                </div>
                            </div>

                            <div className=' shadow-x-xl border border-black-100 rounded-[10px] '>
                                <div className=" tab:h-56 mob:h-48 group relative border rounded-[10px] overflow-hidden">
                                    <div className='img h-[324px]'>
                                        <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={magazine5} alt="product-image" />
                                        <img className="h-full absolute hover:scale-110 transition hover:duration-300 object-cover rounded-[10px]" src={magazine5} alt="product-image" />
                                    </div>
                                    <div className='text absolute top-3 left-3 z-10'>
                                        <p className='bg-white h-[60px] w-[60px] tab:text-[12px] tab:h-[40px] tab:w-[40px] rounded-[5px] shadow-2xl text-black text-[16px] font-bold flex justify-center text-center items-center'>23<br />JULY</p>
                                    </div>
                                </div>
                                <div className='relative slider-text text-center py-[20px] h-[240px] tab:px-[10px]'>
                                    <div className='absolute top-[-20px] left-[19%] tab:left-[12%] mob:left-[22%] z-50'>
                                        <p className='text-[12px] text-white font-semibold uppercase bg-lightgreen p-[5px_20px]'>Design trends, Furniture</p>
                                    </div>
                                    <h3 className='text-[24px] tab:text-[18px] text-[#333333] font-semibold pb-[5px]'>Minimalist design furniture 2024</h3>
                                    <div className='flex gap-[10px] items-center justify-center py-[10px]'>
                                        <span className='text-[12px] text-gray-400 font-semibold'>By</span>
                                        <div className='h-[20px] w-[20px]'>
                                            <img src={dp} alt='dp image' className='h-full w-full rounded-full' />
                                        </div>
                                        <span className='text-[12px] text-gray-400 font-semibold'>S.Rogers</span>
                                        <div className='h-[20px] w-[20px] opacity-60'>
                                            <img src={commentblog} alt='dp image' className='h-full w-full' />
                                        </div>
                                        <div className='h-[20px] w-[20px] opacity-60'>
                                            <img src={shareblog} alt='dp image' className='h-full w-full' />
                                        </div>
                                    </div>
                                    <p className='text-[12px] max-w-[300px] mx-auto text-[#a5a5a5] font-medium mb-[10px]'>A taciti cras scelerisque scelerisque gravida natoque nulla vestibulum turpis primis adipiscing faucibus scelerisque adipiscing aliquet pretium. ...</p>
                                    <p className='text-[12px] text-[#339059] font-semibold uppercase'>continue reading</p>
                                </div>
                            </div>

                            <div className=' shadow-x-xl border border-black-100 rounded-[10px] '>
                                <div className=" tab:h-56 mob:h-48 group relative border rounded-[10px] overflow-hidden">
                                    <div className='img h-[324px]'>
                                        <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={magazine6} alt="product-image" />
                                        <img className="h-full absolute hover:scale-110 transition hover:duration-300 object-cover rounded-[10px]" src={magazine6} alt="product-image" />
                                    </div>
                                    <div className='text absolute top-3 left-3 z-10'>
                                        <p className='bg-white h-[60px] w-[60px] tab:text-[12px] tab:h-[40px] tab:w-[40px] rounded-[5px] shadow-2xl text-black text-[16px] font-bold flex justify-center text-center items-center'>23<br />JULY</p>
                                    </div>
                                </div>
                                <div className='relative slider-text text-center py-[20px] h-[240px] tab:px-[10px]'>
                                    <div className='absolute top-[-20px] left-[19%] tab:left-[12%] mob:left-[22%] z-50'>
                                        <p className='text-[12px] text-white font-semibold uppercase bg-lightgreen p-[5px_20px]'>Design trends, Furniture</p>
                                    </div>
                                    <h3 className='text-[24px] tab:text-[18px] text-[#333333] font-semibold pb-[5px]'>Furniture that explores wood as a material</h3>
                                    <div className='flex gap-[10px] items-center justify-center py-[10px]'>
                                        <span className='text-[12px] text-gray-400 font-semibold'>By</span>
                                        <div className='h-[20px] w-[20px]'>
                                            <img src={dp} alt='dp image' className='h-full w-full rounded-full' />
                                        </div>
                                        <span className='text-[12px] text-gray-400 font-semibold'>S.Rogers</span>
                                        <div className='h-[20px] w-[20px] opacity-60'>
                                            <img src={commentblog} alt='dp image' className='h-full w-full' />
                                        </div>
                                        <div className='h-[20px] w-[20px] opacity-60'>
                                            <img src={shareblog} alt='dp image' className='h-full w-full' />
                                        </div>
                                    </div>
                                    <p className='text-[12px] max-w-[300px] mx-auto text-[#a5a5a5] font-medium mb-[10px]'>Vivamus enim sagittis aptent hac mi dui a per aptent suspendisse cras odio bibendum augue rhoncus laoreet dui praesent sodales sodales. Dignissim...</p>
                                    <p className='text-[12px] text-[#339059] font-semibold uppercase'>continue reading</p>
                                </div>
                            </div>

                            <div className=' shadow-x-xl border border-black-100 rounded-[10px] '>
                                <div className=" tab:h-56 mob:h-48 group relative border rounded-[10px] overflow-hidden">
                                    <div className='img h-[324px]'>
                                        <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={magazine7} alt="product-image" />
                                        <img className="h-full absolute hover:scale-110 transition hover:duration-300 object-cover rounded-[10px]" src={magazine7} alt="product-image" />
                                    </div>
                                    <div className='text absolute top-3 left-3 z-10'>
                                        <p className='bg-white h-[60px] w-[60px] tab:text-[12px] tab:h-[40px] tab:w-[40px] rounded-[5px] shadow-2xl text-black text-[16px] font-bold flex justify-center text-center items-center'>23<br />JULY</p>
                                    </div>
                                </div>
                                <div className='relative slider-text text-center py-[20px] h-[240px] tab:px-[10px]'>
                                    <div className='absolute top-[-20px] left-[19%] tab:left-[12%] mob:left-[22%] z-50'>
                                        <p className='text-[12px] text-white font-semibold uppercase bg-lightgreen p-[5px_20px]'>Design trends, Furniture</p>
                                    </div>
                                    <h3 className='text-[24px] tab:text-[18px] text-[#333333] font-semibold pb-[5px]'>The big design: Wall likes pictures</h3>
                                    <div className='flex gap-[10px] items-center justify-center py-[10px]'>
                                        <span className='text-[12px] text-gray-400 font-semibold'>By</span>
                                        <div className='h-[20px] w-[20px]'>
                                            <img src={dp} alt='dp image' className='h-full w-full rounded-full' />
                                        </div>
                                        <span className='text-[12px] text-gray-400 font-semibold'>S.Rogers</span>
                                        <div className='h-[20px] w-[20px] opacity-60'>
                                            <img src={commentblog} alt='dp image' className='h-full w-full' />
                                        </div>
                                        <div className='h-[20px] w-[20px] opacity-60'>
                                            <img src={shareblog} alt='dp image' className='h-full w-full' />
                                        </div>
                                    </div>
                                    <p className='text-[12px] max-w-[300px] mx-auto text-[#a5a5a5] font-medium mb-[10px]'>Parturient in potenti id rutrum duis torquent parturient sceler isque sit vestibulum a posuere scelerisque viverra urna.Egestas tristique vestib...</p>
                                    <p className='text-[12px] text-[#339059] font-semibold uppercase'>continue reading</p>
                                </div>
                            </div>

                            <div className=' shadow-x-xl border border-black-100 rounded-[10px] '>
                                <div className=" tab:h-56 mob:h-48 group relative border rounded-[10px] overflow-hidden">
                                    <div className='img h-[324px]'>
                                        <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={magazine8} alt="product-image" />
                                        <img className="h-full absolute hover:scale-110 transition hover:duration-300 object-cover rounded-[10px]" src={magazine8} alt="product-image" />
                                    </div>
                                    <div className='text absolute top-3 left-3 z-10'>
                                        <p className='bg-white h-[60px] w-[60px] tab:text-[12px] tab:h-[40px] tab:w-[40px] rounded-[5px] shadow-2xl text-black text-[16px] font-bold flex justify-center text-center items-center'>23<br />JULY</p>
                                    </div>
                                </div>
                                <div className='relative slider-text text-center py-[20px] h-[240px] tab:px-[10px]'>
                                    <div className='absolute top-[-20px] left-[19%] tab:left-[12%] mob:left-[22%] z-50'>
                                        <p className='text-[12px] text-white font-semibold uppercase bg-lightgreen p-[5px_20px]'>Design trends, Furniture</p>
                                    </div>
                                    <h3 className='text-[24px] tab:text-[18px] text-[#333333] font-semibold pb-[5px]'>New home decor from John Doerson</h3>
                                    <div className='flex gap-[10px] items-center justify-center py-[10px]'>
                                        <span className='text-[12px] text-gray-400 font-semibold'>By</span>
                                        <div className='h-[20px] w-[20px]'>
                                            <img src={dp} alt='dp image' className='h-full w-full rounded-full' />
                                        </div>
                                        <span className='text-[12px] text-gray-400 font-semibold'>S.Rogers</span>
                                        <div className='h-[20px] w-[20px] opacity-60'>
                                            <img src={commentblog} alt='dp image' className='h-full w-full' />
                                        </div>
                                        <div className='h-[20px] w-[20px] opacity-60'>
                                            <img src={shareblog} alt='dp image' className='h-full w-full' />
                                        </div>
                                    </div>
                                    <p className='text-[12px] max-w-[300px] mx-auto text-[#a5a5a5] font-medium mb-[10px]'>
                                        Ullamcorper condimentum erat pretium velit at ut a nunc id a adeu vestibulum nibh urna nam consequat erat molestie lacinia rhoncus. Nisi a diamid...</p>
                                    <p className='text-[12px] text-[#339059] font-semibold uppercase'>continue reading</p>
                                </div>
                            </div>

                            <div className=' shadow-x-xl border border-black-100 rounded-[10px] '>
                                <div className=" tab:h-56 mob:h-48 group relative border rounded-[10px] overflow-hidden">
                                    <div className='img h-[324px]'>
                                        <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={magazine9} alt="product-image" />
                                        <img className="h-full absolute hover:scale-110 transition hover:duration-300 object-cover rounded-[10px]" src={magazine9} alt="product-image" />
                                    </div>
                                    <div className='text absolute top-3 left-3 z-10'>
                                        <p className='bg-white h-[60px] w-[60px] tab:text-[12px] tab:h-[40px] tab:w-[40px] rounded-[5px] shadow-2xl text-black text-[16px] font-bold flex justify-center text-center items-center'>23<br />JULY</p>
                                    </div>
                                </div>
                                <div className='relative slider-text text-center py-[20px] h-[240px] tab:px-[10px]'>
                                    <div className='absolute top-[-20px] left-[19%] tab:left-[12%] mob:left-[22%] z-50'>
                                        <p className='text-[12px] text-white font-semibold uppercase bg-lightgreen p-[5px_20px]'>Design trends, Furniture</p>
                                    </div>
                                    <h3 className='text-[24px] tab:text-[18px] text-[#333333] font-semibold pb-[5px]'>Exterior ideas: 10 colored garden seats</h3>
                                    <div className='flex gap-[10px] items-center justify-center py-[10px]'>
                                        <span className='text-[12px] text-gray-400 font-semibold'>By</span>
                                        <div className='h-[20px] w-[20px]'>
                                            <img src={dp} alt='dp image' className='h-full w-full rounded-full' />
                                        </div>
                                        <span className='text-[12px] text-gray-400 font-semibold'>S.Rogers</span>
                                        <div className='h-[20px] w-[20px] opacity-60'>
                                            <img src={commentblog} alt='dp image' className='h-full w-full' />
                                        </div>
                                        <div className='h-[20px] w-[20px] opacity-60'>
                                            <img src={shareblog} alt='dp image' className='h-full w-full' />
                                        </div>
                                    </div>
                                    <p className='text-[12px] max-w-[300px] mx-auto text-[#a5a5a5] font-medium mb-[10px]'>
                                        A sed a risusat luctus esta anibh rhoncus hendrerit blandit nam rutrum sitmiad hac. Crass a vestibulum a varius adipiscing ut dignissim ullamcorp...</p>
                                    <p className='text-[12px] text-[#339059] font-semibold uppercase'>continue reading</p>
                                </div>
                            </div>

                            <div className=' shadow-x-xl border border-black-100 rounded-[10px] '>
                                <div className=" tab:h-56 mob:h-48 group relative border rounded-[10px] overflow-hidden">
                                    <div className='img h-[324px]'>
                                        <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={magazine10} alt="product-image" />
                                        <img className="h-full absolute hover:scale-110 transition hover:duration-300 object-cover rounded-[10px]" src={magazine10} alt="product-image" />
                                    </div>
                                    <div className='text absolute top-3 left-3 z-10'>
                                        <p className='bg-white h-[60px] w-[60px] tab:text-[12px] tab:h-[40px] tab:w-[40px] rounded-[5px] shadow-2xl text-black text-[16px] font-bold flex justify-center text-center items-center'>23<br />JULY</p>
                                    </div>
                                </div>
                                <div className='relative slider-text text-center py-[20px] tab:px-[10px]'>
                                    <div className='absolute top-[-15px] left-[19%] tab:left-[12%] mob:left-[22%] z-50'>
                                        <p className='text-[12px] text-white font-semibold uppercase bg-lightgreen p-[5px_20px]'>Design trends, Furniture</p>
                                    </div>
                                    <h3 className='text-[24px] tab:text-[18px] text-[#333333] font-semibold pb-[5px]'>Sweet seat: functional seat for IT folks</h3>
                                    <div className='flex gap-[10px] items-center justify-center py-[10px]'>
                                        <span className='text-[12px] text-gray-400 font-semibold'>By</span>
                                        <div className='h-[20px] w-[20px]'>
                                            <img src={dp} alt='dp image' className='h-full w-full rounded-full' />
                                        </div>
                                        <span className='text-[12px] text-gray-400 font-semibold'>S.Rogers</span>
                                        <div className='h-[20px] w-[20px] opacity-60'>
                                            <img src={commentblog} alt='dp image' className='h-full w-full' />
                                        </div>
                                        <div className='h-[20px] w-[20px] opacity-60'>
                                            <img src={shareblog} alt='dp image' className='h-full w-full' />
                                        </div>
                                    </div>
                                    <p className='text-[12px] max-w-[300px] mx-auto text-[#a5a5a5] font-medium mb-[10px]'>A sed a risusat luctus esta anibh rhoncus hendrerit blandit nam rutrum sitmiad hac. Cras a vestibulum a varius adipiscing ut dignissim ullamcorpe...</p>
                                    <p className='text-[12px] text-[#339059] font-semibold uppercase'>continue reading</p>
                                </div>
                            </div>

                            <div className=' shadow-x-xl border border-black-100 rounded-[10px] '>
                                <div className=" tab:h-56 mob:h-48 group relative border rounded-[10px] overflow-hidden">
                                    <div className='img h-[324px]'>
                                        <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={magazine11} alt="product-image" />
                                        <img className="h-full absolute hover:scale-110 transition hover:duration-300 object-cover rounded-[10px]" src={magazine11} alt="product-image" />
                                    </div>
                                    <div className='text absolute top-3 left-3 z-10'>
                                        <p className='bg-white h-[60px] w-[60px] tab:text-[12px] tab:h-[40px] tab:w-[40px] rounded-[5px] shadow-2xl text-black text-[16px] font-bold flex justify-center text-center items-center'>23<br />JULY</p>
                                    </div>
                                </div>
                                <div className='relative slider-text text-center py-[20px] h-[196px] tab:px-[10px]'>
                                    <div className='absolute top-[-15px] left-[19%] tab:left-[12%] mob:left-[22%] z-50'>
                                        <p className='text-[12px] text-white font-semibold uppercase bg-lightgreen p-[5px_20px]'>Design trends, Furniture</p>
                                    </div>
                                    <h3 className='text-[24px] tab:text-[18px] text-[#333333] font-semibold pb-[5px]'>Green interior design inspiration</h3>
                                    <div className='flex gap-[10px] items-center justify-center py-[10px]'>
                                        <span className='text-[12px] text-gray-400 font-semibold'>By</span>
                                        <div className='h-[20px] w-[20px]'>
                                            <img src={dp} alt='dp image' className='h-full w-full rounded-full' />
                                        </div>
                                        <span className='text-[12px] text-gray-400 font-semibold'>S.Rogers</span>
                                        <div className='h-[20px] w-[20px] opacity-60'>
                                            <img src={commentblog} alt='dp image' className='h-full w-full' />
                                        </div>
                                        <div className='h-[20px] w-[20px] opacity-60'>
                                            <img src={shareblog} alt='dp image' className='h-full w-full' />
                                        </div>
                                    </div>
                                    <p className='text-[12px] max-w-[300px] mx-auto text-[#a5a5a5] font-medium mb-[10px]'>Vivamus enim sagittis aptent hac mi dui a per aptent suspendisse cras odio bibendum augue rhoncus laoreet dui praesent sodales sodales. Dignissim...</p>
                                    <p className='text-[12px] text-[#339059] font-semibold uppercase'>continue reading</p>
                                </div>
                            </div>

                            <div className=' shadow-x-xl border border-black-100 rounded-[10px] '>
                                <div className=" tab:h-56 mob:h-48 group relative border rounded-[10px] overflow-hidden">
                                    <div className='img h-[324px]'>
                                        <img className="h-full absolute duration-700 opacity-100 group-hover:opacity-0 rounded-[10px]" src={magazine12} alt="product-image" />
                                        <img className="h-full absolute hover:scale-110 transition hover:duration-300 object-cover rounded-[10px]" src={magazine12} alt="product-image" />
                                    </div>
                                    <div className='text absolute top-3 left-3 z-10'>
                                        <p className='bg-white h-[60px] w-[60px] tab:text-[12px] tab:h-[40px] tab:w-[40px] rounded-[5px] shadow-2xl text-black text-[16px] font-bold flex justify-center text-center items-center'>23<br />JULY</p>
                                    </div>
                                </div>
                                <div className='relative slider-text text-center py-[20px] h-[196px] tab:px-[10px]'>
                                    <div className='absolute top-[-15px] left-[19%] tab:left-[12%] mob:left-[22%] z-50'>
                                        <p className='text-[12px] text-white font-semibold uppercase bg-lightgreen p-[5px_20px]'>Design trends, Furniture</p>
                                    </div>
                                    <h3 className='text-[24px] tab:text-[18px] text-[#333333] font-semibold pb-[5px]'>Seating collection inspiration</h3>
                                    <div className='flex gap-[10px] items-center justify-center py-[10px]'>
                                        <span className='text-[12px] text-gray-400 font-semibold'>By</span>
                                        <div className='h-[20px] w-[20px]'>
                                            <img src={dp} alt='dp image' className='h-full w-full rounded-full' />
                                        </div>
                                        <span className='text-[12px] text-gray-400 font-semibold'>S.Rogers</span>
                                        <div className='h-[20px] w-[20px] opacity-60'>
                                            <img src={commentblog} alt='dp image' className='h-full w-full' />
                                        </div>
                                        <div className='h-[20px] w-[20px] opacity-60'>
                                            <img src={shareblog} alt='dp image' className='h-full w-full' />
                                        </div>
                                    </div>
                                    <p className='text-[12px] max-w-[300px] mx-auto text-[#a5a5a5] font-medium mb-[10px]'>Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac et vestibulum duis a tincidunt per a apte...	</p>
                                    <p className='text-[12px] text-[#339059] font-semibold uppercase'>continue reading</p>
                                </div>
                            </div>
                        </div>
                        <div className='text-center mt-[20px] mob:mt-[20px] tab:mt-[20px]'>
                            <button className='p-[10px_30px] mob:p-[8px_24px] text-white text-[14px] mob:text-[10px] uppercase bg-green border-2 border-green hover:border-2 hover:text-lightblack hover:font-semibold hover:border-lightblack hover:bg-gray-300 ease-in-out hover:duration-300'>Show More</button>
                        </div>
                    </div>
                    <div className='sticky top-0 h-[1300px] tab:h-[830px] mob:h-[1150px] mob:relative mob:left-0 mob:top-0 w-[23%] mob:w-[100%] p-[20px_0_0_25px] tab:p-[20px_0_0] mob:pl-0  mob:border-none tab:pl-[10px]  tab:border-l-2 tab:border-gray-200 mob:pb-[60px]'>
                        <h5 className='text-[16px] text-black font-bold tab:text-[14px] mob:mt-[20px] uppercase mb-[20px]'>Recent Posts</h5>
                        <div className='flex gap-[15px] tab:gap-[10px] items-center pb-[15px] border-b-2 border-gray-200 mb-[15px]'>
                            <div className='h-[65px] w-[94px]'>
                                <img src={magazine1} alt='rated product 1' className='h-full w-full object-cover' />
                            </div>
                            <div>
                                <h4 className='text-[13px] mob:text-[12px] tab:text-[10px] max-w-[156px] mob:max-w-[245px] text-gray-500 font-semibold'>5 Tips to Choose the Perfect Furniture for Your Home</h4>
                            </div>
                        </div>
                        <div className='flex gap-[15px] tab:gap-[10px] items-center pb-[15px] border-b-2 border-gray-200 mb-[15px]'>
                            <div className='h-[65px] w-[94px]'>
                                <img src={magazine2} alt='rated product 1' className='h-full w-full object-cover' />
                            </div>
                            <div>
                                <h4 className='text-[13px] mob:text-[12px] tab:text-[10px]  max-w-[156px] mob:max-w-[245px] text-gray-500 font-semibold'>Top Furniture Trends to Elevate Your Space in 2024
                                </h4>
                            </div>
                        </div>
                        <div className='flex gap-[15px] tab:gap-[10px] items-center pb-[15px] border-b-2 border-gray-200 mb-[15px]'>
                            <div className='h-[65px] w-[94px]'>
                                <img src={magazine3} alt='rated product 1' className='h-full w-full object-cover' />
                            </div>
                            <div>
                                <h4 className='text-[13px] mob:text-[12px] tab:text-[10px]  max-w-[156px] mob:max-w-[245px] text-gray-500 font-semibold'>How to Maximize Small Spaces with Multi-Functional Furniture</h4>
                            </div>
                        </div>
                        <div className='flex gap-[15px] tab:gap-[10px] items-center pb-[15px] border-b-2 border-gray-200 mb-[15px]'>
                            <div className='h-[65px] w-[94px]'>
                                <img src={magazine4} alt='rated product 1' className='h-full w-full object-cover' />
                            </div>
                            <div>
                                <h4 className='text-[13px] mob:text-[12px] tab:text-[10px]  max-w-[156px] mob:max-w-[245px] text-gray-500 font-semibold'>7 Must-Have Furniture Pieces for a Modern Living Room</h4>
                            </div>
                        </div>
                        <div className='flex gap-[15px] tab:gap-[10px] items-center'>
                            <div className='h-[65px] w-[94px]'>
                                <img src={magazine5} alt='rated product 1' className='h-full w-full object-cover' />
                            </div>
                            <div>
                                <h4 className='text-[13px] mob:text-[12px] tab:text-[10px]  max-w-[156px] mob:max-w-[245px] text-gray-500 font-semibold'>A Complete Guide to Caring for Your Wooden Furniture</h4>
                            </div>
                        </div>

                        <h5 className='text-[16px] text-black font-bold uppercase mt-[30px] mb-[20px] mob:text-[14px]  mob:block tab:hidden'>Recent Comments</h5>
                        <div className='tab:hidden mob:block'>
                            <p className='text-[14px] mob:text-[12px] pb-[10px] text-gray-500 font-semibold'>• Jones on Modern Oak Wood Dining Table Set</p>
                            <p className='text-[14px] mob:text-[12px] pb-[10px] text-gray-500 font-semibold'>• Tom on Classic Velvet Upholstered Sofa in Navy Blue</p>
                            <p className='text-[14px] mob:text-[12px] pb-[10px] text-gray-500 font-semibold'>• George on Stylish Glass Coffee Table with Chrome Legs</p>
                            <p className='text-[14px] mob:text-[12px] pb-[10px] text-gray-500 font-semibold'>• Alexandra on Rustic Solid Pine Bookshelf with Adjustable Shelves</p>
                            <p className='text-[14px] mob:text-[12px] pb-[10px] text-gray-500 font-semibold'>• Tom on Minimalist Metal Frame Bed with Wooden Slats</p>
                            <p className='text-[14px] mob:text-[12px] pb-[10px] text-gray-500 font-semibold'>• Sophia on Contemporary Leather Recliner Chair with Ottoman</p>
                        </div>

                        <h5 className='text-[16px] text-black font-bold uppercase mt-[30px] mob:mt-[20px] tab:text-[14px] mb-[20px]'>Tags</h5>
                        <div>
                            <span className='pr-[5px] block text-[14px] tab:text-[12px] text-gray-500 font-semibold pb-[5px]'>Living Room (6)</span>
                            <span className='pr-[5px] block text-[14px] tab:text-[12px] text-gray-500 font-semibold pb-[5px]'>Bedroom (5)</span>
                            <span className='pr-[5px] block text-[14px] tab:text-[12px] text-gray-500 font-semibold pb-[5px]'>Dining (4)</span>
                            <span className='pr-[5px] block text-[14px] tab:text-[12px] text-gray-500 font-semibold pb-[5px]'>Modern Design (7)</span>
                            <span className='pr-[5px] block text-[14px] tab:text-[12px] text-gray-500 font-semibold pb-[5px]'>Upholstery (4)</span>
                            <span className='pr-[5px] block text-[14px] tab:text-[12px] text-gray-500 font-semibold pb-[5px]'>Storage Solutions (5)</span>
                            <span className='pr-[5px] block text-[14px] tab:text-[12px] text-gray-500 font-semibold pb-[5px]'>Woodwork (6)</span>
                            <span className='pr-[5px] block text-[14px] tab:text-[12px] text-gray-500 font-semibold pb-[5px]'>Outdoor Furniture (4)</span>
                            <span className='pr-[5px] block text-[14px] tab:text-[12px] text-gray-500 font-semibold pb-[5px]'>Minimalist Style (5)</span>
                            <span className='pr-[5px] block text-[14px] tab:text-[12px] text-gray-500 font-semibold pb-[5px]'>Sustainable Furniture (4)</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
