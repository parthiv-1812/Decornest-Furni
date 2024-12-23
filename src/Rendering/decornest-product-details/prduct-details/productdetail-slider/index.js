import React, { Component } from "react";
import Slider from "react-slick";

import productsliderchairimg1 from '../../../../Assets/Images/product-slider-chair-5.jpg';
import productsliderchairimg2 from '../../../../Assets/Images/product-slider-chair-1.jpg';
import productsliderchairimg3 from '../../../../Assets/Images/product-slider-chair-2.jpg';
import productsliderchairimg4 from '../../../../Assets/Images/product-slider-chair-3.jpg';
import productsliderchairimg5 from '../../../../Assets/Images/product-slider-chair-4.jpg';

import leftarw from '../../../../Assets/Icons/left-arw.svg'
import rightarw from '../../../../Assets/Icons/right-arw.svg'
import uparw from '../../../../Assets/Icons/up-arrow-black.svg'
import downarw from '../../../../Assets/Icons/down-arrow-black.svg'

import ProductDetailDesc from "../productdetail-desc";


function SamplePrevArrow2(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='right-arrow-categories '
            onClick={onClick}
        >
            <div className='bg-green h-[30px] w-[47px] tab:w-[75px] mob:hidden tab:h-[35px] absolute left-[7px] bottom-[-35px] flex justify-center items-center hover:bg-gray-400'>
                <img className=' h-[12px] w-[12px]' src={uparw} />
            </div>
        </div>
    );
}

function SampleNextArrow2(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='left-arrow-categories'
            onClick={onClick}
        >
            <div className='bg-green h-[30px] w-[47px] tab:w-[75px] mob:hidden tab:h-[35px] absolute right-[7px] bottom-[-35px]  flex justify-center items-center hover:bg-gray-400'>
                <img className=' h-[12px] w-[12px]' src={downarw} />
            </div>
        </div>
    );
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='absolute top-[50%] right-[20px]'

            onClick={onClick}
        >
            <img src={rightarw} alt="right" className="w-6 h-6 opacity-[30%] hover:opacity-[100%]" />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='absolute top-[50%] left-[20px] z-10'

            onClick={onClick}
        >
            <img src={leftarw} alt="left" className="w-6 h-6 opacity-[30%] hover:opacity-[100%]" />

        </div>
    );
}

export default function Productpart() {
    const settings2 = {
        dots: false,
        infinite: true,
        slidesToShow: 3.99,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        nextArrow: <SampleNextArrow2 />,
        prevArrow: <SamplePrevArrow2 />,
        beforeChange: function (currentSlide, nextSlide) {
            console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            console.log("after change", currentSlide);
        },
        responsive: [
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    nextArrow: <SampleNextArrow2 />,
                    prevArrow: <SamplePrevArrow2 />,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    nextArrow: <SampleNextArrow2 />,
                    prevArrow: <SamplePrevArrow2 />,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    vertical: false,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 6000,
                    cssEase: "linear",
                    nextArrow: <SampleNextArrow2 />,
                    prevArrow: <SamplePrevArrow2 />,
                },
            },
        ],
    };
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className="max-w-[1222px] mx-auto">
            <div className='flex p-[60px_20px] gap-5 tab:flex-col tab:gap-[20px] mob:p-[40px_20px]'>
                <div className="flex w-[50%] tab:w-[100%] tab:h-[625px] mob:h-[590px] mob:flex-col-reverse tab:gap-[10px] mob:gap-[20px]">
                    <div className='w-[20%] mob:w-[100%] tab:w-[24%]'>
                        <div className="slider-container">
                            <div className="">
                                <Slider {...settings2}>
                                    <div className='rounded-[10px] border-2 border-green'>
                                        <img className='w-full h-full mob:h-[130px] tab:h-[185px] rounded-[10px]' src={productsliderchairimg1} alt='chair-image' />
                                    </div>
                                    <div className='rounded-[10px] border-2 border-green'>
                                        <img className='w-full h-full mob:h-[130px] tab:h-[185px] rounded-[10px]' src={productsliderchairimg2} alt='chair-image' />
                                    </div>
                                    <div className='rounded-[10px] border-2 border-green'>
                                        <img className='w-full h-full mob:h-[130px] tab:h-[185px] rounded-[10px]' src={productsliderchairimg3} alt='chair-image' />
                                    </div>
                                    <div className='rounded-[10px] border-2 border-green'>
                                        <img className='w-full h-full mob:h-[130px] tab:h-[185px] rounded-[10px]' src={productsliderchairimg4} alt='chair-image' />
                                    </div>
                                    <div className='rounded-[10px] border-2 border-green'>
                                        <img className='w-full h-full mob:h-[130px] tab:h-[185px] rounded-[10px]' src={productsliderchairimg5} alt='chair-image' />
                                    </div>
                                </Slider>
                            </div>
                        </div>

                    </div>
                    <div className='w-[80%] tab:w-[76%] mob:w-[100%]'>
                        <div className="h-[551px] w-[477px] tab:h-[625px] mob:h-[430px] object-cover tab:w-full">
                            <Slider {...settings}>
                                <div className="h-[550px] tab:h-[620px] mob:h-[430px] object-cover rounded-[10px] border-2 border-green">
                                    <img src={productsliderchairimg1} alt="chair-image" className="w-full object-cover h-full rounded-[10px]" />
                                </div>
                                <div className="h-[550px] tab:h-[620px] mob:h-[430px] rounded-[10px] border-2 border-green">
                                    <img src={productsliderchairimg2} alt="chair-image" className="w-full object-cover h-full rounded-[10px]" />
                                </div>
                                <div className="h-[550px] tab:h-[620px] mob:h-[430px] rounded-[10px] border-2 border-green">
                                    <img src={productsliderchairimg3} alt="chair-image" className="w-full object-cover h-full rounded-[10px]" />
                                </div>
                                <div className="h-[550px] tab:h-[620px] mob:h-[430px] rounded-[10px] border-2 border-green">
                                    <img src={productsliderchairimg4} alt="chair-image" className="w-full object-cover h-full rounded-[10px]" />
                                </div>
                                <div className="h-[550px] tab:h-[620px] mob:h-[430px] rounded-[10px] border-2 border-green">
                                    <img src={productsliderchairimg5} alt="chair-image" className="w-full object-cover h-full rounded-[10px]" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className='w-[50%] tab:w-full '>
                    <ProductDetailDesc />
                </div>
            </div>
        </div >
    )
}