import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../../assets/banner-1.webp"
import "./home.css"
import ExImg1 from "../../assets/explore-img1.png"
import ExImg2 from "../../assets/explore-img.png"
import { Link } from 'react-router-dom';
import { MdOutlineArrowCircleRight } from "react-icons/md";
import ProductImg from "../../assets/product-img.webp"
import { FaStar } from "react-icons/fa6";
import FarmingImg from "../../assets/farming.png"
import ChemicalImg from "../../assets/chemical.png"
import GmoImg from "../../assets/gmo.png"
import LocallyImg from "../../assets/locally.png"
import GlobalImg from "../../assets/global.png"
import MostImg from "../../assets/food.jpg"
import MostImg2 from "../../assets/food-2.jpg"
import MostImg3 from "../../assets/food-3.jpg"
import TPProductImg from "../../assets/product1.webp"
import { MdFavorite } from "react-icons/md";
import { IoIosArrowForward } from 'react-icons/io';
import Marquee from "react-fast-marquee";
import Certificate1 from "../../assets/BRC-Global-Logo.webp"
import CategoryImg from "../../assets/category1.webp"
import Recipes from "../../assets/recepi.webp"

const Home = () => {
    var settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    var settingss = {
        // dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    var setting5 = {
        // dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    const [stop, setStop] = useState(false);
    const handleHover = (e) => {
        setStop(true);
    };
    return (
        <>
            <div className="home-slider-section">
                <div className="slider-container">
                    <Slider {...settings}>
                        <div>
                            <img src={Img1} alt="" />
                        </div>
                        <div>
                            <img src={Img1} alt="" />
                        </div>
                        <div>
                            <img src={Img1} alt="" />
                        </div>
                        <div>
                            <img src={Img1} alt="" />
                        </div>

                    </Slider>
                </div>
            </div>

            <div className="container-section mat-50">
                <div className="explore-category">
                    <h3 className='heading-h3' >Explore by Category</h3>
                    <div className="border-line"></div>

                    <div className="grid grid-cols-12 gap-3 mat-25">
                        <div className="lg:col-span-3 md:col-span-4 sm:col-span-6">
                            <div className="ex-box" >
                                <picture>
                                    <img src={ExImg1} alt="" />
                                </picture>
                                <h5 className='heading-h5'><Link to={"/shop"}>Shop All</Link> <span><MdOutlineArrowCircleRight /></span> </h5>
                            </div>
                        </div>
                        <div className="lg:col-span-3 md:col-span-4 sm:col-span-6">
                            <div className="ex-box">
                                <picture>
                                    <img src={ExImg1} alt="" />
                                </picture>
                                <h5 className='heading-h5'><Link>Shop All</Link> <span><MdOutlineArrowCircleRight /></span> </h5>
                            </div>
                        </div>
                        <div className="lg:col-span-3 md:col-span-4 sm:col-span-6">
                            <div className="ex-box">
                                <picture>
                                    <img src={ExImg1} alt="" />
                                </picture>
                                <h5 className='heading-h5'><Link>Shop All</Link> <span><MdOutlineArrowCircleRight /></span> </h5>
                            </div>
                        </div>
                        <div className="lg:col-span-3 md:col-span-4 sm:col-span-6">
                            <div className="ex-box">
                                <picture>
                                    <img src={ExImg1} alt="" />
                                </picture>
                                <h5 className='heading-h5'><Link>Shop All</Link> <span><MdOutlineArrowCircleRight /></span> </h5>
                            </div>
                        </div>
                        <div className="lg:col-span-3 md:col-span-4 sm:col-span-6">
                            <div className="ex-box">
                                <picture>
                                    <img src={ExImg1} alt="" />
                                </picture>
                                <h5 className='heading-h5'><Link>Shop All</Link> <span><MdOutlineArrowCircleRight /></span> </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MOST LOVED LEGENDS  */}
            <div className="container-section mat-50">
                <div className="most-legens-section">
                    <h3 className='heading-h3 text-center'>MOST LOVED LEGENDS</h3>
                    <div className="border-line text-center m-auto"></div>


                    <div className="slider-container mat-25">
                        <Slider {...settingss}>
                            <div className='element-box'>
                                <img src={ProductImg} alt="" />
                                <div className="elemt-content">
                                    <h4 className='heading-h4'><Link>A2 Cow Cultured Ghee, Desi Gir Cow</Link></h4>
                                    <div className="reviews">
                                        <div className='stars'><FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                        <span>1736 reviews</span>
                                    </div>
                                    <p className="price"> Rs. 575
                                    </p>
                                    <button>ADD TO CART</button>
                                </div>
                            </div>
                            <div className='element-box'>
                                <img src={ProductImg} alt="" />
                                <div className="elemt-content">
                                    <h4 className='heading-h4'><Link>A2 Cow Cultured Ghee, Desi Gir Cow</Link></h4>
                                    <div className="reviews">
                                        <div className='stars'><FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                        <span>1736 reviews</span>
                                    </div>
                                    <p className="price"> Rs. 575
                                    </p>
                                    <button>ADD TO CART</button>
                                </div>
                            </div>
                            <div className='element-box'>
                                <img src={ProductImg} alt="" />
                                <div className="elemt-content">
                                    <h4 className='heading-h4'><Link>A2 Cow Cultured Ghee, Desi Gir Cow</Link></h4>
                                    <div className="reviews">
                                        <div className='stars'><FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                        <span>1736 reviews</span>
                                    </div>
                                    <p className="price"> Rs. 575
                                    </p>
                                    <button>ADD TO CART</button>
                                </div>
                            </div>

                        </Slider>
                    </div>

                    <button className="btn text-center mat-25 flex m-auto">SHOP ALL</button>
                </div>
            </div>
            <div className="organic-choose-feats mat-50">
                <div className="feat-content">
                    <ul>
                        <li>
                            <img src={FarmingImg} alt="" />
                            <p>Sustainable Farming Techniques</p>
                        </li>
                        <li>
                            <img src={ChemicalImg} alt="" />
                            <p>Chemical Pesticide-free</p>
                        </li>
                        <li>
                            <img src={GmoImg} alt="" />
                            <p>Non-GMO Produce</p>
                        </li>
                        <li>
                            <img src={LocallyImg} alt="" />
                            <p>Locally Ethically Sourced</p>
                        </li>
                        <li>
                            <img src={GlobalImg} alt="" />
                            <p>189 Global Testing Standards</p>
                        </li>
                    </ul>
                </div>
            </div>


            <div className="container-section mat-50">
                <div className="grid grid-cols-12 gap-3 mat-25">
                    <div className="lg:col-span-4 md:col-span-4 sm:col-span-6">
                        <div className="most-img">
                            <img src={MostImg} alt="" />
                            <div className="content">
                                <h4 className='heading-h4'>Most <br /> Popular</h4>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-4 md:col-span-4 sm:col-span-6">
                        <div className="most-img">
                            <img src={MostImg2} alt="" />
                            <div className="content">
                                <h4 className='heading-h4'>Shop By <br /> Recipes</h4>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-4 md:col-span-4 sm:col-span-6">
                        <div className="most-img">
                            <img src={MostImg3} alt="" />
                            <div className="content">
                                <h4 className='heading-h4'>Special <br />Offers</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-section mat-50">
                <h3 className='heading-h3'>Bestsellers</h3>
                <hr className='mat-25 hr' />
                <div className="grid grid-cols-12 gap-4 mat-25">
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12">
                        <div className="best-section">
                            <div className="wist-off">
                                <span className='wish-list'>
                                    <MdFavorite />
                                </span>
                                <span className='offs'>
                                    10%
                                </span>
                            </div>
                            <div className="img-section">
                                <img src={TPProductImg} alt="" />
                            </div>
                            <div className="content">
                                <h5 className='heading-h5'>Organic Tranding bastment</h5>
                                <p className='price mt-2'>Price 200 <s>5836</s></p>
                                <div className="select-options flex items-center justify-between">
                                    <div className='flex items items-center mr-3'>
                                        <p>1Kg </p>
                                        <p>1Kg </p>
                                    </div>
                                    <button className='btn-tr'>Add To Cart</button>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12">
                        <div className="best-section">
                            <div className="wist-off">
                                <span className='wish-list'>
                                    <MdFavorite />
                                </span>
                                <span className='offs'>
                                    10%
                                </span>
                            </div>
                            <div className="img-section">
                                <img src={TPProductImg} alt="" />
                            </div>
                            <div className="content">
                                <h5 className='heading-h5'>Organic Tranding bastment</h5>
                                <p className='price mt-2'>Price 200 <s>5836</s></p>
                                <div className="select-options flex items-center justify-between">
                                    <div className='flex items items-center mr-3'>
                                        <p>1Kg </p>
                                        <p>1Kg </p>
                                    </div>
                                    <button className='btn-tr'>Add To Cart</button>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12">
                        <div className="best-section">
                            <div className="wist-off">
                                <span className='wish-list'>
                                    <MdFavorite />
                                </span>
                                <span className='offs'>
                                    10%
                                </span>
                            </div>
                            <div className="img-section">
                                <img src={TPProductImg} alt="" />
                            </div>
                            <div className="content">
                                <h5 className='heading-h5'>Organic Tranding bastment</h5>
                                <p className='price mt-2'>Price 200 <s>5836</s></p>
                                <div className="select-options flex items-center justify-between">
                                    <div className='flex items items-center mr-3'>
                                        <p>1Kg </p>
                                        <p>1Kg </p>
                                    </div>
                                    <button className='btn-tr'>Add To Cart</button>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12">
                        <div className="best-section">
                            <div className="wist-off">
                                <span className='wish-list'>
                                    <MdFavorite />
                                </span>
                                <span className='offs'>
                                    10%
                                </span>
                            </div>
                            <div className="img-section">
                                <img src={TPProductImg} alt="" />
                            </div>
                            <div className="content">
                                <h5 className='heading-h5'>Organic Tranding bastment</h5>
                                <p className='price mt-2'>Price 200 <s>5836</s></p>
                                <div className="select-options flex items-center justify-between">
                                    <div className='flex items items-center mr-3'>
                                        <p>1Kg </p>
                                        <p>1Kg </p>
                                    </div>
                                    <button className='btn-tr'>Add To Cart</button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>


            {/* check all best seller */}


            <div className="container-section mat-50">
                <div className="most-legens-section">
                    <h3 className='heading-h3 text-center'><button className='btn-tr text-center'>CHECK ALL BESTSELLER</button></h3>



                    <div className="slider-container mat-25">
                        <Slider {...setting5}>
                            <div className='element-box '>
                                <img src={ProductImg} alt="" />
                                <div className="elemt-content text-start">
                                    <h6 className='mb-2 heading-h6'><Link>A2 Cow Cultured Ghee, Desi Gir Cow</Link></h6>
                                    <p className='p-small'>A2 Cow Cultured Ghee, Desi Gir Cow</p>
                                    <p className='p-small'> Starting Rs. 575
                                    </p>
                                    <button className='btn-c mt-1'>BUY NOW</button>
                                </div>
                            </div>
                            <div className='element-box'>
                                <img src={ProductImg} alt="" />
                                <div className="elemt-content text-start">
                                    <h6 className='mb-2 heading-h6'><Link>A2 Cow Cultured Ghee, Desi Gir Cow</Link></h6>
                                    <p className='p-small'>A2 Cow Cultured Ghee, Desi Gir Cow</p>
                                    <p className='p-small'> Starting Rs. 575
                                    </p>
                                    <button className='btn-c mt-1'>BUY NOW</button>
                                </div>
                            </div>
                            <div className='element-box'>
                                <img src={ProductImg} alt="" />
                                <div className="elemt-content text-start ">
                                    <h6 className='mb-2 heading-h6'><Link>A2 Cow Cultured Ghee, Desi Gir Cow</Link></h6>
                                    <p className='p-small'>A2 Cow Cultured Ghee, Desi Gir Cow</p>
                                    <p className='p-small'> Starting Rs. 575
                                    </p>
                                    <button className='btn-c mt-1'>BUY NOW</button>
                                </div>
                            </div>
                            <div className='element-box'>
                                <img src={ProductImg} alt="" />
                                <div className="elemt-content text-start ">
                                    <h6 className='mb-2 heading-h6'><Link>A2 Cow Cultured Ghee, Desi Gir Cow</Link></h6>
                                    <p className='p-small'>A2 Cow Cultured Ghee, Desi Gir Cow</p>
                                    <p className='p-small'> Starting Rs. 575
                                    </p>
                                    <button className='btn-c mt-1'>BUY NOW</button>
                                </div>
                            </div>
                            <div className='element-box'>
                                <img src={ProductImg} alt="" />
                                <div className="elemt-content text-start ">
                                    <h6 className='mb-2 heading-h6'><Link>A2 Cow Cultured Ghee, Desi Gir Cow</Link></h6>
                                    <p className='p-small'>A2 Cow Cultured Ghee, Desi Gir Cow</p>
                                    <p className='p-small'> Starting Rs. 575
                                    </p>
                                    <button className='btn-c mt-1'>BUY NOW</button>
                                </div>
                            </div>
                            <div className='element-box'>
                                <img src={ProductImg} alt="" />
                                <div className="elemt-content text-start ">
                                    <h6 className='mb-2 heading-h6'><Link>A2 Cow Cultured Ghee, Desi Gir Cow</Link></h6>
                                    <p className='p-small'>A2 Cow Cultured Ghee, Desi Gir Cow</p>
                                    <p className='p-small'> Starting Rs. 575
                                    </p>
                                    <button className='btn-c mt-1'>BUY NOW</button>
                                </div>
                            </div>

                        </Slider>
                    </div>

                    <button className="btn text-center mat-25 flex m-auto">SHOP ALL</button>
                </div>
            </div>

            {/* Get the best deal for Grocery */}
            <div className="best-deal-bg mat-50">
                <div className="element-center">
                    <h2 className='heading-h2'>Get the best deal for Grocery</h2>
                    <p>You get into the 2k+ best Products in Flash offer with as into the find to
                        makein shaped sofa for sale.</p>
                    <button className='btn flex items-center mt-3'>Shop Now <IoIosArrowForward /></button>
                </div>
            </div>
            {/* Organic Certifications */}
            <div className="container-section">
                <div className="organic-certification mat-50">
                    <h2 className='heading-h2'>Organic Certifications</h2>
                    <hr className='mat-25 hr' />
                    <div className="slider-2">
                        <Marquee
                            behavior=""
                            direction="left"
                            speed={10}
                            delay={5}
                            pauseOnHover={handleHover}
                        >
                            <div className="img-slide">
                                <div className="img-box">
                                    <img src={Certificate1} alt="" />
                                    <h5 className='text-center color-c'>BRC Global Standards</h5>
                                </div>
                                <div className="img-box">
                                    <img src={Certificate1} alt="" />
                                    <h5 className='text-center color-c'>BRC Global Standards</h5>
                                </div>
                                <div className="img-box">
                                    <img src={Certificate1} alt="" />
                                    <h5 className='text-center color-c'>BRC Global Standards</h5>
                                </div>
                                <div className="img-box">
                                    <img src={Certificate1} alt="" />
                                    <h5 className='text-center color-c'>BRC Global Standards</h5>
                                </div>
                                <div className="img-box">
                                    <img src={Certificate1} alt="" />
                                    <h5 className='text-center color-c'>BRC Global Standards</h5>
                                </div>
                                <div className="img-box">
                                    <img src={Certificate1} alt="" />
                                    <h5 className='text-center color-c'>BRC Global Standards</h5>
                                </div>
                                <div className="img-box">
                                    <img src={Certificate1} alt="" />
                                    <h5 className='text-center color-c'>BRC Global Standards</h5>
                                </div>
                                <div className="img-box">
                                    <img src={Certificate1} alt="" />
                                    <h5 className='text-center color-c'>BRC Global Standards</h5>
                                </div>

                            </div>
                        </Marquee>
                    </div>
                </div>
            </div>

            {/* Categories */}
            <div className="container-section mat-50">
                <h3 className='heading-h3'>Categories</h3>
                {/* <div className="border-line"></div> */}
                <hr className='mat-25 hr' />

                <div className="grid grid-cols-12 gap-4 mat-25">
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12">
                        <div className="categories-2">
                            <div className="img-section">
                                <img src={CategoryImg} alt="" />
                            </div>
                            <button className='btn-tr'>Combos & Deals</button>

                        </div>
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12">
                        <div className="categories-2">
                            <div className="img-section">
                                <img src={CategoryImg} alt="" />
                            </div>
                            <button className='btn-tr'>Combos & Deals</button>

                        </div>
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12">
                        <div className="categories-2">
                            <div className="img-section">
                                <img src={CategoryImg} alt="" />
                            </div>
                            <button className='btn-tr'>Combos & Deals</button>

                        </div>
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12">
                        <div className="categories-2">
                            <div className="img-section">
                                <img src={CategoryImg} alt="" />
                            </div>
                            <button className='btn-tr'>Combos & Deals</button>

                        </div>
                    </div>

                </div>
            </div>

            {/* Recipes */}
            <div className="container-section mat-50 mab-50">
                <h3 className='heading-h3'>Recipes</h3>
                <hr className='mat-25 hr' />

                <div className="grid grid-cols-12 gap-4 mat-25">
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12">
                        <div className="recipes">
                            <h3 className='heading-h3 color-c text-center'>Crispy Urad Dal Vada
                            </h3>
                            <p className='color-c '>Posted: <span className='p-small'>July 25, 2022</span></p>
                            <div className="img-section">
                                <img src={Recipes} alt="" />
                            </div>

                        </div>
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12">
                        <div className="recipes">
                            <h3 className='heading-h3 color-c text-center'>Crispy Urad Dal Vada
                            </h3>
                            <p className='color-c '>Posted: <span className='p-small'>July 25, 2022</span></p>
                            <div className="img-section">
                                <img src={Recipes} alt="" />
                            </div>

                        </div>
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12">
                        <div className="recipes">
                            <h3 className='heading-h3 color-c text-center'>Crispy Urad Dal Vada
                            </h3>
                            <p className='color-c '>Posted: <span className='p-small'>July 25, 2022</span></p>
                            <div className="img-section">
                                <img src={Recipes} alt="" />
                            </div>

                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Home
