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

  const setting5 = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 500,
    autoplaySpeed: 1000,
    // autoPlay: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1600, // xl
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1200, // lg
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 991, // md-lg
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // sm-md
        settings: {
          slidesToShow: 2,
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

      {/* video section */}

      <div className="video w-[100%]">
        <div className="w-[100] mx-auto xl:h-[45rem] md-lg:h-[30rem] sm:h-[20rem] overflow-hidden">
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
              <div className="creation-section overflow-hidden xl:h-[23rem] sm:h-[25rem]">
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
        </div>
      </div>

      {/* product video */}

      <div className="container-section1 bg-slate-100 ">
        <div>
          <img src={Swimming} alt="" />
        </div>
        <div className="most-legens-section1 xl:py-20 md-lg:py-10 w-[95%] mx-auto">
          <div className="slider-container1 grid grid-cols-12  mat-25 gap-5">
            {/* <Slider {...setting5}> */}
            {products.map((product) =>
              product.videos.length > 0 ? (
                <div
                  key={product._id}
                  className=" xl:col-span-2 md-lg:col-span-3 sm:col-span-6  rounded-lg overflow-hidden bg-white"
                >
                  <Link
                    to={`/product/details/${product.slug}`}
                    className="element-box rounded-lg shadow-box overflow-hidden object-cover cursor-pointer"
                  >
                    <div className="w-full h-[20rem] overflow-hidden">
                      <video
                        className="w-full h-full object-cover"
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
              ) : null
            )}
            {/* </Slider> */}
          </div>
        </div>
      </div>

      <div className="w-full">
        <Link
          to={`/product/details/Analog-Day-Date-Functioning-Stainless-Steel-Chain-Watch`}
        >
          <img className="h-[90%] w-full" src={ecommbanner} alt="" />
        </Link>
      </div>

      {/* marquee */}

      <div className="sm:hidden lg:block my-10">
        <Marquee row1={row1} row2={row2} />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
