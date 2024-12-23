import React from 'react'
import decornestwhitelogo from '../../Assets/Logo/Decornest White logo.png'
import carticon from '../../Assets/Icons/cart-icon.svg'
import usericon from '../../Assets/Icons/user-icon.svg'
import menuicon from '../../Assets/Icons/menu-icon.svg'

export default function DecornestHeader() {
    return (
        <div>
            <div className='bg-green py-[15px] mob:py-[15px] border-b border-white'>
                <div className='decornest-header max-w-[1320px] mx-auto flex justify-between items-center tab:px-4'>
                    <div className='decornest-logo w-[160px] mob:w-[120px]'>
                        <img src={decornestwhitelogo} alt='decornest-logo' />
                    </div>
                    <div className='decornest-menu text-[14px] uppercase font-semibold text-white mob:hidden'>
                        <a className='p-2 relative opacity-100 hover:opacity-100 after:absolute after:bottom-0 hover:text-yellow after:left-0 after:h-px after:w-0 after:bg-yellow after:transition-all after:ease-in-out after:duration-300 hover:after:w-full tab:p-[5px]' href='#'>home</a>
                        <a className='p-2 relative opacity-100 hover:opacity-100 after:absolute after:bottom-0 hover:text-yellow after:left-0 after:h-px after:w-0 after:bg-yellow after:transition-all after:ease-in-out after:duration-300 hover:after:w-full tab:p-[5px]' href='#'>shop</a>
                        <a className='p-2 relative opacity-100 hover:opacity-100 after:absolute after:bottom-0 hover:text-yellow after:left-0 after:h-px after:w-0 after:bg-yellow after:transition-all after:ease-in-out after:duration-300 hover:after:w-full tab:p-[5px]' href='#'>blog</a>
                        <a className='p-2 relative opacity-100 hover:opacity-100 after:absolute after:bottom-0 hover:text-yellow after:left-0 after:h-px after:w-0 after:bg-yellow after:transition-all after:ease-in-out after:duration-300 hover:after:w-full tab:p-[5px]' href='#'>services</a>
                        <a className='p-2 relative opacity-100 hover:opacity-100 after:absolute after:bottom-0 hover:text-yellow after:left-0 after:h-px after:w-0 after:bg-yellow after:transition-all after:ease-in-out after:duration-300 hover:after:w-full tab:p-[5px]' href='#'>about us</a>
                        <a className='p-2 relative opacity-100 hover:opacity-100 after:absolute after:bottom-0 hover:text-yellow after:left-0 after:h-px after:w-0 after:bg-yellow after:transition-all after:ease-in-out after:duration-300 hover:after:w-full tab:p-[5px]' href='#'>contact us</a>
                    </div>
                    <div className='decornest-option flex mob:hidden'>
                        <img className='mx-2' src={carticon} alt='cart-icon' />
                        <img className='mx-2' src={usericon} alt='user-icon' />
                    </div>
                    <div className='decornest-option hidden mob:block'>
                        <img className='h-[20px] w-[20px]' src={menuicon} alt='user-icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}
