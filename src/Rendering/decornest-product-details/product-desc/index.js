import React from 'react'

import chairimgdetail from '../../../Assets/Images/chair-blue-png.png'

export default function ProductDesc() {
    return (
        <div>
            <div className='max-w-[100%] tab:px-[20px] mob:py-[40px]'>
                <div className='border border-green opacity-[60%]'></div>
                <div className='max-w-[1300px] mx-auto'>
                    <div className=' max-w-[800px] mx-auto flex justify-between uppercase text-[14px] font-extrabold text-green py-[20px] tab:px-[10px] mob:w-[350px] mob:px-0 mob:mx-0 mob:overflow-x-auto mob:gap-[20px]' >
                        <p className='border-b-2 border-green pb-[5px] whitespace-nowrap'>Description</p>
                        <p className='whitespace-nowrap'>Additional information</p>
                        <p className='whitespace-nowrap'>Reviews (0)</p>
                        <p className='whitespace-nowrap'>About brand</p>
                        <p className='whitespace-nowrap'>Shipping & Delivery</p>
                    </div>
                    <div className='relative max-w-[1120px] mx-auto flex gap-[20px] items-center py-[20px] tab:gap-0 tab:flex-col tab:pt-0 tab:pb-[40px] mob:pb-0'>
                        <div className='tab:absolute tab:z-[-20] tab:top-[-30px] mob:top-[10%] tab:opacity-[40%] h-[400px] w-[300px] tab:h-[450px] tab:w-[300px]'>
                            <img src={chairimgdetail} alt='chair-img' className='h-full w-full object-cover' />
                        </div>
                        <div className='text-[15px] tab:mt-[30px] text-lightblack font-bold flex flex-col gap-[20px] tab:gap-[10px] tab:px-[20px] mob:px-0'>
                            <li className='text-green'>Modern simple chairs emphasize minimalism, functionality, reflecting the principles of modernist design.</li>
                            <li className='text-gray-500'>Commonly crafted from materials like wood, metal, and high-quality plastic, often with neutral finishes</li>
                            <li className='text-green'>Ergonomics play a vital role, ensuring user comfort with features like curved backs and padded seating.</li>
                            <li className='text-gray-500'>High-quality construction ensures longevity, with an emphasis on lightweight yet robust materials.</li>
                            <li className='text-green'>Many designs incorporate eco-friendly materials and production methods.</li>
                            <li className='text-gray-500'>Ideal for both home and office use, fitting into dining rooms, workspaces, or living areas.</li>
                            <li className='text-green'>A favorite choice for modern homeowners and designers due to their timeless appeal and adaptability.</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
