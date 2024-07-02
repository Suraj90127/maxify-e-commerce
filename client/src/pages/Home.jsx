import React, { Fragment, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./main.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Heders from "../components/Headers";
import Banner from "../components/Banner";
import Categorys from "../components/Categorys";
import FeatureProducts from "../components/products/FeatureProducts";
import Products from "../components/products/Products";
import Footer from "../components/Footer";
import video from "../assets/video1.mp4";
import Swimming from "../assets/Swimming.jpg";
import ecommbanner from "../assets/e-comm-banner.jpeg";
import { get_category, get_products } from "../store/reducers/homeReducer";
import Marquee from "../components/Marquee";
import l1 from "../assets/marqee/l1.jpg";
import l2 from "../assets/marqee/l2.jpg";
import l3 from "../assets/marqee/l3.jpg";
import l4 from "../assets/marqee/l4.jpg";
import l5 from "../assets/marqee/l5.jpg";
import l6 from "../assets/marqee/l6.jpg";
import l7 from "../assets/marqee/l7.jpg";
import l8 from "../assets/marqee/l8.jpg";
import l9 from "../assets/marqee/l9.jpg";
import l10 from "../assets/marqee/l10.jpg";
import l11 from "../assets/marqee/l11.jpg";
import l12 from "../assets/marqee/l12.jpg";
import l13 from "../assets/marqee/l13.jpg";
import l14 from "../assets/marqee/l14.jpg";
import l15 from "../assets/marqee/l15.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  const dispatch = useDispatch();
  const { products, latest_product, topRated_product, discount_product } =
    useSelector((state) => state.home);
  useEffect(() => {
    dispatch(get_products());
  }, []);

  console.log("product", products);

  // var setting5 = {
  //   // dots: true,
  //   infinite: true,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   // autoplay: true,
  //   speed: 500,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear",
  // };

  const setting5 = {
    infinite: true,
    slidesToShow: 6, // Default to 6 slides
    slidesToScroll: 1,
    speed: 500,
    autoplaySpeed: 1000,
    autoPlay: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1600, // xl
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 991, // md-lg
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576, // sm
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const row2 = [l1, l2, l3, l4, l5, l9, l7, l8];
  const row1 = [l1, l2, l3, l4, l5, l9, l7, l8];

  return (
    <div className="w-full">
      <Heders />
      <Banner />
      {/* <div className="seconBanner">
        <div className="w-full xl:h-[25rem] md-lg:h-[30rem] bg-[#d9d9d9] relative">
          <div className="xl:pt-[80px] md-lg:pt-5 grid grid-cols-12 gap-5 ">
            <div className="xl:col-span-3 md-lg:col-span-12 relative">
              <img
                className="xl:w-[80%] md-lg:w-[35%] absolute xl:top-[25%] md-lg:top-[14rem] sm:top-[19rem] xs:top-[20rem] left-0 z-10"
                src={secondbanner1}
                alt=""
              />
            </div>

            <div className="xl:col-span-3 md-lg:col-span-12 flex justify-center md-lg:mx-5">
              <h2 className="xl:text-[67px] md-lg:text-[30px] sm:text-[24px] xl:leading-[83px] md-lg:leading-[30px] roboto-bold text-[#244316] font-[600]">
                WE ARE 4TH GEN FARMERS
              </h2>
            </div>
            <div className="xl:col-span-3 md-lg:col-span-12 font-[500]">
              <p className=" xl:ml-5 md-lg:mx-5 md-lg:text-[15px] font-[500] text-center">
                Our Farm is a Bio-diverse, Organic ecosystem, certified by
                ECOCERT and located in the beautiful village of Bhodani in
                Maharashtra. Our work is inspired by ancient wisdom and
                sustainability.
              </p>
            </div>
            <div className="xl:col-span-3 md-lg:col-span-12 relative">
              <img
                className="xl:w-[80%] sm:h-[8rem] sm:w-[50%] md-lg:w-[35%] absolute xl:top-[25%] md-lg:top-[2rem] sm:top-[4rem] xs:top-[1rem] right-0 z-10"
                src={secondbanner2}
                alt=""
              />
            </div>
          </div>
          <div className="w-full bg-[#91C72E] absolute bottom-0 h-8"></div>
        </div>
      </div> */}
      <div className="my-4">
        <Categorys />
      </div>
      <div className="py-[45px]">
        <FeatureProducts products={products} />
      </div>

      <div className="py-10">
        <div className="w-[95%] flex flex-wrap mx-auto">
          <div className="grid w-full grid-cols-3 md-lg:grid-cols-2 md:grid-cols-1 gap-7">
            <div className="overflow-hidden">
              <Products title="Latest Product" products={latest_product} />
            </div>
            <div className="overflow-hidden">
              <Products title="Top Rated Product" products={topRated_product} />
            </div>
            <div className="overflow-hidden">
              <Products title="Discount Product" products={discount_product} />
            </div>
          </div>
        </div>
      </div>

      {/* third banner type */}

      {/* <div className="w-full mx-auto">
        <div className="organic-choose-feats mat-50">
          <div className="feat-content">
            <ul className="xl:mr-20 md-lg:mr-0 md-lg:ml-[26rem] sm:ml-[13rem]">
              <li className="flex items-center xl:text-[20px] md-lg:text-[15px] sm:text-[8px] font-[600] xl:mb-4 xl:w-[80%] md-lg:w-[93%]">
                <img className="w-[11%]" src={FarmingImg} alt="" />
                <p>Sustainable Farming Techniques</p>
              </li>
              <li className="flex items-center xl:text-[20px] md-lg:text-[15px] sm:text-[8px] font-[600] xl:mb-4 xl:w-[80%] md-lg:w-[93%]">
                <img className="w-[11%]" src={ChemicalImg} alt="" />
                <p>Chemical Pesticide-free</p>
              </li>
              <li className="flex items-center xl:text-[20px] md-lg:text-[15px] sm:text-[8px] font-[600] xl:mb-4 xl:w-[80%] md-lg:w-[93%]">
                <img className="w-[11%]" src={GmoImg} alt="" />
                <p>Non-GMO Produce</p>
              </li>
              <li className="flex items-center xl:text-[20px] md-lg:text-[15px] sm:text-[8px] font-[600] xl:mb-4 xl:w-[80%] md-lg:w-[93%]">
                <img className="w-[11%]" src={LocallyImg} alt="" />
                <p>Locally Ethically Sourced</p>
              </li>
              <li className="flex items-center xl:text-[20px] md-lg:text-[15px] sm:text-[8px] font-[600] xl:mb-4 xl:w-[80%] md-lg:w-[93%]">
                <img className="w-[11%]" src={GlobalImg} alt="" />
                <p>189 Global Testing Standards</p>
              </li>
            </ul>
          </div>
        </div>
      </div> */}

      {/* video section */}

      <div className="video w-[100%]">
        <div className="w-[100] mx-auto h-[45rem] overflow-hidden">
          <video
            className="w-full h-full object-cover py-10"
            autoPlay
            muted
            loop
            src={video}
          ></video>
        </div>
      </div>

      {/* Latest Product */}

      <div className="creation-bg1 bg-[#c7e0f0] h-auto xl:p-[40px]  md-lg:p-[20px]">
        <h2 className="xl:text-4xl md-lg:text-2xl font-bold my-5 text-black ">
          Latest Product
        </h2>
        <div className="grid grid-cols-10 xl:gap-[2%] sm:gap-0 xl:py-5 md-lg:py-0 xl:mx-10 md-lg:mx-0">
          {latest_product[0]?.map((item) => (
            <div className="md-lg:col-span-5 lg:col-span-5 xl:col-span-2 md:col-span-5 sm:col-span-12 sm:my-5 rounded-lg">
              <div className="creation-section overflow-hidden h-[23rem]">
                <Link to={`/product/details/${item.slug}`}>
                  <img
                    className="xl:h-[15rem] md-lg:h-[20rem] p-4 w-full"
                    src={item?.images[0]}
                    alt={item?.name}
                  />
                  <p className="text-base font-[400] p-2"> {item?.name}</p>
                </Link>
              </div>
            </div>
          ))}
          {latest_product[1]?.map((item, i) => (
            <div className="md-lg:col-span-5 lg:col-span-5 xl:col-span-2 md:col-span-5 sm:col-span-12 sm:my-5 rounded-lg">
              {i < 2 && (
                <div className="creation-section overflow-hidden h-[23rem]">
                  <Link to={`/product/details/${item.slug}`}>
                    <img
                      className="xl:h-[15rem] md-lg:h-[20rem] p-4 w-full"
                      src={item?.images[0]}
                      alt={item?.name}
                    />
                    <p className="text-base font-[400] p-2"> {item?.name}</p>
                  </Link>
                </div>
              )}
            </div>
          ))}
          {/* <div className="md-lg:col-span-5 lg:col-span-5 xl:col-span-2 md:col-span-5 sm:col-span-12 sm:my-5">
            <div className="creation-section">
              <img
                className="xl:h-[15rem] md-lg:h-[20rem] w-full"
                src="https://twobrothersindiashop.com/cdn/shop/files/Image_1_600x.png?v=1680183127"
                alt=""
              />
              <p className="text-lg font-[400] py-2"> Bilona A2 ghee</p>
            </div>
          </div>
          <div className="md-lg:col-span-5 lg:col-span-5 xl:col-span-2 md:col-span-5 sm:col-span-12 sm:my-5">
            <div className="creation-section overflow-auto">
              <img
                className="xl:h-[15rem] md-lg:h-[20rem] w-full"
                src="https://twobrothersindiashop.com/cdn/shop/files/0Y6A0445_copy_1-1-1_700x.jpg?v=1681394783"
                alt=""
              />
              <p className="text-lg font-[400] py-2"> Bilona A2 ghee</p>
            </div>
          </div>
          <div className="md-lg:col-span-5 lg:col-span-5 xl:col-span-2 md:col-span-5 sm:col-span-12 sm:my-5">
            <div className="creation-section">
              <img
                className="xl:h-[15rem] md-lg:h-[20rem] w-full"
                src="https://twobrothersindiashop.com/cdn/shop/files/Image_1_600x.png?v=1680183127"
                alt=""
              />
              <p className="text-lg font-[400] py-2"> Bilona A2 ghee</p>
            </div>
          </div>
          <div className="md-lg:col-span-5 lg:col-span-5 xl:col-span-2 md:col-span-5 sm:col-span-12 sm:my-5">
            <div className="creation-section overflow-hidden">
              <img
                className="xl:h-[15rem] md-lg:h-[20rem] w-full "
                src="https://twobrothersindiashop.com/cdn/shop/files/Image_3_700x.png?v=1680183210"
                alt=""
              />
              <p className="text-lg font-[400] py-2"> Bilona A2 ghee</p>
            </div>
          </div>
          <div className="md-lg:col-span-5 lg:col-span-5 xl:col-span-2 md:col-span-5 sm:col-span-12 sm:my-5">
            <div className="creation-section">
              <img
                className="xl:h-[15rem] md-lg:h-[20rem] w-full"
                src="https://twobrothersindiashop.com/cdn/shop/files/Image_1_600x.png?v=1680183127"
                alt=""
              />
              <p className="text-lg font-[400] py-2"> Bilona A2 ghee</p>
            </div>
          </div> */}
        </div>
      </div>

      {/* product video */}

      <div className="container-section1 bg-slate-100 ">
        <div>
          <img src={Swimming} alt="" />
        </div>
        <div className="most-legens-section1 xl:py-20 md-lg:py-10 w-[95%] mx-auto">
          <div className="slider-container1 mat-25">
            <Slider {...setting5}>
              {products.map((product, i) => (
                <Fragment>
                  {console.log("obiuuii", product.videos.length == 1)}
                  {product.videos.length == 1 && (
                    <div key={product._id}>
                      <div>
                        <Link
                          to={`/product/details/${product.slug}`}
                          className="element-box border-[1px] rounded-lg shadow-box overflow-hidden object-cover cursor-pointer bg-gray-200"
                        >
                          <div className="w-full h-[19rem] overflow-hidden">
                            <video
                              className=""
                              src={product.videos[0]}
                              autoPlay
                              muted
                              loop
                            ></video>
                          </div>
                          <div className="elemt-content text-center py-5 px-3 text-md font-semibold">
                            <h6 className="mb-2 heading-h6 text-sm">
                              <h2>{product.name}</h2>
                            </h6>
                            <p className="p-small font-bold text-lg">
                              <span>Rs.</span> <span>{product.price}</span>
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  )}
                </Fragment>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* OUR WAY OF LIFE */}
      {/* <div className="flex flex-col items-center justify-center py-10 gap-4 md:gap-6 xl:gap-8 xl:w-[85%] mx-auto">
        <div className="md:flex lg:w-full flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-10 sm:mx-5">
          <div className="text-center mb-10 xl:w-[80%] md-lg:w-full mx-auto">
            <h2 className="xl:text-5xl sm:text-3xl font-semibold text-[#243945]">
              OUR WAY OF LIFE
            </h2>
            <p className="py-5 text-[17px] text-center text-gray-500 sm:mx-0 ">
              Our production group is a team of professionals who have multiyear
              experience in fabrication and erection of structural steel in
              Various industries as follows:
            </p>
          </div>
          <div className="lg:grid lg:grid-cols-12 xl:grid xl:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 lg:mx-20 md-lg:mx-0">
            <div className=" xl:col-span-6 md:col-span-12">
              <img
                className="xl:w-[80%] md:w-full rounded-full"
                src={Brother}
                alt=""
              />
            </div>
            <div className="xl:col-span-6 md:col-span-12 md:mt-5 align-middle h-full">
              <div className=" w-full h-full flex flex-col justify-center">
                <h2 className="xl:text-3xl md:text-2xl font-semibold text-[#243945]">
                  FARMERS ARE PROFESSIONAL PROBLEM SOLVERS:
                </h2>
                <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />

                <ol class="list-decimal space-y-1 text-gray-500 list-inside dark:text-gray-400 mb-10">
                  <li>
                    Organic Farming isn't a type of farming but a way of life.
                    Besides being workers of the soil, farmers believe in
                    community strength and rely on the natural interconnection
                    of species!
                  </li>
                </ol>
                <div className="xl:w-[50%] md:w-full">
                  <button className="animated-button">
                    <svg
                      viewBox="0 0 24 24"
                      className="arr-2"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                    </svg>
                    <span className="text">Modern Button</span>
                    <span className="circle" />
                    <svg
                      viewBox="0 0 24 24"
                      className="arr-1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="w-full">
        <img src={ecommbanner} alt="" />
      </div>

      {/* client review */}
      {/* <div className="bg-slate-500">
        <div className="py-10 text-center w-[80%] m-auto">
          <div className="w-full">
            <Carousel
              showThumbs={false}
              showArrows={true}
              showStatus={false}
              className="dark:bg-gray-800"
            >
              <div className="flex flex-col items-center">
                <div class="flex items-center">
                  <svg
                    class="w-8 h-8 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-8 h-8 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-8 h-8 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-8 h-8 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-8 h-8 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>

                <p className="lead font-italic mx-4 md:mx-5 text-[20px] text-white">
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugit, error amet numquam iure provident voluptate esse quasi,
                  voluptas nostrum quisquam!"
                </p>
                <div className="mt-5 mb-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                    className="rounded-full shadow-md"
                    alt="sample image"
                    width="100"
                    height="100"
                  />
                </div>
                <p className="text-slate-100 mb-0">- Anna Morian</p>
              </div>
              <div className="flex flex-col items-center">
                <div class="flex items-center">
                  <svg
                    class="w-8 h-8 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-8 h-8 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-8 h-8 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-8 h-8 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-8 h-8 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
                <p className="lead font-italic mx-4 md:mx-5 text-[20px] text-white">
                  "Neque cupiditate assumenda in maiores repudiandae mollitia
                  adipisci maiores repudiandae mollitia consectetur adipisicing
                  architecto elit sed adipiscing elit."
                </p>
                <div className="mt-5 mb-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
                    className="rounded-full shadow-md"
                    alt="sample image"
                    width="100"
                    height="100"
                  />
                </div>
                <p className="text-slate-100 mb-0">- Teresa May</p>
              </div>
              <div className="flex flex-col items-center">
                <div class="flex items-center">
                  <svg
                    class="w-8 h-8 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-8 h-8 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-8 h-8 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-8 h-8 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-8 h-8 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
                <p className="lead font-italic mx-4 md:mx-5 text-[20px] text-white">
                  "Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur est laborum neque
                  cupiditate assumenda in maiores."
                </p>
                <div className="mt-5 mb-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                    className="rounded-full shadow-md"
                    alt="sample image"
                    width="100"
                    height="100"
                  />
                </div>
                <p className="text-slate-100 mb-0">- Kate Allise</p>
              </div>
            </Carousel>
          </div>
        </div>
      </div> */}

      {/* marquee */}

      <div className="sm:hidden lg:block my-10">
        <Marquee row1={row1} row2={row2} />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
