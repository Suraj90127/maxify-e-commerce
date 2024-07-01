import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const RecipeProduct = () => {
  return (
    <div className="row">
      <div className="">
        <h3 className="mb-10 text-xl font-medium text-center roboto-medium">
          Shop items used in the recipe
          <hr className="bg-yellow-300 h-2 rounded-full mt-2 w-20 mx-auto" />
        </h3>
        <div className="grid grid-cols-12 gap-3">
          <div className="xl:col-span-3 md:col-span-6 sm:col-span-12">
            <div className="product-cart relative overflow-hidden group-hover:">
              <div className="absolute top-[5%] right-5 duration-300">
                <Link>
                  <img
                    src="images/wish.svg"
                    alt="prodcompare"
                    className="w-6 h-6"
                  />
                </Link>
              </div>
              <div className="cart-image flex flex-col justify-center items-center">
                <div className="flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-red-500 font-semibold text-xs left-2 top-2">
                  12%
                </div>
                <img
                  src="images/watch.jpg"
                  alt="watch"
                  className="watch w-full h-full"
                />
                {/* <img
              src="images/watch-1.jpeg"
              alt="watch"
              className="w-[230px] h-[230px] object-fill"
            /> */}
              </div>
              <div className="product-detail px-2">
                <h6 className="brand text-red-500">Apple</h6>
                <h5 className="product-title my-3 text-black font-semibold text-lg">
                  Lorem ipsum dolor sit amet.
                </h5>
                <ReactStars count={5} size={24} activeColor="#ffd700" />
                <p className="price text-blue-500 text-lg">$100.00</p>
              </div>

              <div className="action-bar group absolute top-[15%] right-[-30px] duration-300">
                <div className="flex flex-col gap-5">
                  <Link>
                    <img
                      src="images/prodcompare.svg"
                      alt="prodcompare"
                      className="w-7 h-7"
                    />
                  </Link>
                  <Link>
                    <img src="images/view.svg" alt="view" className="w-7 h-7" />
                  </Link>
                  <Link>
                    <img
                      src="images/add-cart.svg"
                      alt="add-cart"
                      className="w-7 h-7"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-3 md:col-span-6 sm:col-span-12">
            <div className="product-cart relative overflow-hidden group-hover:">
              <div className="absolute top-[5%] right-5 duration-300">
                <Link>
                  <img
                    src="images/wish.svg"
                    alt="prodcompare"
                    className="w-6 h-6"
                  />
                </Link>
              </div>
              <div className="cart-image flex flex-col justify-center items-center">
                <div className="flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-red-500 font-semibold text-xs left-2 top-2">
                  12%
                </div>
                <img
                  src="images/watch.jpg"
                  alt="watch"
                  className="watch w-full h-full"
                />
                {/* <img
              src="images/watch-1.jpeg"
              alt="watch"
              className="w-[230px] h-[230px] object-fill"
            /> */}
              </div>
              <div className="product-detail px-2">
                <h6 className="brand text-red-500">Apple</h6>
                <h5 className="product-title my-3 text-black font-semibold text-lg">
                  Lorem ipsum dolor sit amet.
                </h5>
                <ReactStars count={5} size={24} activeColor="#ffd700" />
                <p className="price text-blue-500 text-lg">$100.00</p>
              </div>

              <div className="action-bar group absolute top-[15%] right-[-30px] duration-300">
                <div className="flex flex-col gap-5">
                  <Link>
                    <img
                      src="images/prodcompare.svg"
                      alt="prodcompare"
                      className="w-7 h-7"
                    />
                  </Link>
                  <Link>
                    <img src="images/view.svg" alt="view" className="w-7 h-7" />
                  </Link>
                  <Link>
                    <img
                      src="images/add-cart.svg"
                      alt="add-cart"
                      className="w-7 h-7"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-3 md:col-span-6 sm:col-span-12">
            <div className="product-cart relative overflow-hidden group-hover:">
              <div className="absolute top-[5%] right-5 duration-300">
                <Link>
                  <img
                    src="images/wish.svg"
                    alt="prodcompare"
                    className="w-6 h-6"
                  />
                </Link>
              </div>
              <div className="cart-image flex flex-col justify-center items-center">
                <div className="flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-red-500 font-semibold text-xs left-2 top-2">
                  12%
                </div>
                <img
                  src="images/watch.jpg"
                  alt="watch"
                  className="watch w-full h-full"
                />
                {/* <img
              src="images/watch-1.jpeg"
              alt="watch"
              className="w-[230px] h-[230px] object-fill"
            /> */}
              </div>
              <div className="product-detail px-2">
                <h6 className="brand text-red-500">Apple</h6>
                <h5 className="product-title my-3 text-black font-semibold text-lg">
                  Lorem ipsum dolor sit amet.
                </h5>
                <ReactStars count={5} size={24} activeColor="#ffd700" />
                <p className="price text-blue-500 text-lg">$100.00</p>
              </div>

              <div className="action-bar group absolute top-[15%] right-[-30px] duration-300">
                <div className="flex flex-col gap-5">
                  <Link>
                    <img
                      src="images/prodcompare.svg"
                      alt="prodcompare"
                      className="w-7 h-7"
                    />
                  </Link>
                  <Link>
                    <img src="images/view.svg" alt="view" className="w-7 h-7" />
                  </Link>
                  <Link>
                    <img
                      src="images/add-cart.svg"
                      alt="add-cart"
                      className="w-7 h-7"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-3 md:col-span-6 sm:col-span-12">
            <div className="product-cart relative overflow-hidden group-hover:">
              <div className="absolute top-[5%] right-5 duration-300">
                <Link>
                  <img
                    src="images/wish.svg"
                    alt="prodcompare"
                    className="w-6 h-6"
                  />
                </Link>
              </div>
              <div className="cart-image flex flex-col justify-center items-center">
                <div className="flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-red-500 font-semibold text-xs left-2 top-2">
                  12%
                </div>
                <img
                  src="images/watch.jpg"
                  alt="watch"
                  className="watch w-full h-full"
                />
                {/* <img
              src="images/watch-1.jpeg"
              alt="watch"
              className="w-[230px] h-[230px] object-fill"
            /> */}
              </div>
              <div className="product-detail px-2">
                <h6 className="brand text-red-500">Apple</h6>
                <h5 className="product-title my-3 text-black font-semibold text-lg">
                  Lorem ipsum dolor sit amet.
                </h5>
                <ReactStars count={5} size={24} activeColor="#ffd700" />
                <p className="price text-blue-500 text-lg">$100.00</p>
              </div>

              <div className="action-bar group absolute top-[15%] right-[-30px] duration-300">
                <div className="flex flex-col gap-5">
                  <Link>
                    <img
                      src="images/prodcompare.svg"
                      alt="prodcompare"
                      className="w-7 h-7"
                    />
                  </Link>
                  <Link>
                    <img src="images/view.svg" alt="view" className="w-7 h-7" />
                  </Link>
                  <Link>
                    <img
                      src="images/add-cart.svg"
                      alt="add-cart"
                      className="w-7 h-7"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-3 md:col-span-6 sm:col-span-12">
            <div className="product-cart relative overflow-hidden group-hover:">
              <div className="absolute top-[5%] right-5 duration-300">
                <Link>
                  <img
                    src="images/wish.svg"
                    alt="prodcompare"
                    className="w-6 h-6"
                  />
                </Link>
              </div>
              <div className="cart-image flex flex-col justify-center items-center">
                <div className="flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-red-500 font-semibold text-xs left-2 top-2">
                  12%
                </div>
                <img
                  src="images/watch.jpg"
                  alt="watch"
                  className="watch w-full h-full"
                />
                {/* <img
              src="images/watch-1.jpeg"
              alt="watch"
              className="w-[230px] h-[230px] object-fill"
            /> */}
              </div>
              <div className="product-detail px-2">
                <h6 className="brand text-red-500">Apple</h6>
                <h5 className="product-title my-3 text-black font-semibold text-lg">
                  Lorem ipsum dolor sit amet.
                </h5>
                <ReactStars count={5} size={24} activeColor="#ffd700" />
                <p className="price text-blue-500 text-lg">$100.00</p>
              </div>

              <div className="action-bar group absolute top-[15%] right-[-30px] duration-300">
                <div className="flex flex-col gap-5">
                  <Link>
                    <img
                      src="images/prodcompare.svg"
                      alt="prodcompare"
                      className="w-7 h-7"
                    />
                  </Link>
                  <Link>
                    <img src="images/view.svg" alt="view" className="w-7 h-7" />
                  </Link>
                  <Link>
                    <img
                      src="images/add-cart.svg"
                      alt="add-cart"
                      className="w-7 h-7"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeProduct;
