import React, { useState } from "react";
import Headers from "../components/Headers";
import Footer from "../components/Footer";
import { GoCommentDiscussion } from "react-icons/go";
import serving from "../assets/serving-dish.png";
import { RiTimerLine } from "react-icons/ri";
import { VscCoffee } from "react-icons/vsc";
import "./MyComponent.css";
import RecipeProduct from "../components/RecipeProduct";
import ReactPlayer from "react-player";

const Recipes = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const items = [
    { id: 1, text: " cup quinoa, rinsed and drained" },
    { id: 2, text: " cups water" },
    { id: 2, text: " cups water" },
    { id: 2, text: " cups water" },
    { id: 2, text: " cups water" },
    // Add more items here as needed
  ];

  const handleChange = (id) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  return (
    <div>
      <Headers />

      <div>
        <div classname="top-section">
          <div className="header xl:mx-14 sm:mx-5 my-10 ">
            <div className="recipe-name text-[32px] font-[700] leading-[40px] text-[#212b36] roboto-bold-italic">
              <p>Quinoa Vegetable Pulao</p>
            </div>
            <div className="recipe-tage flex gap-5 mt-5">
              <div className="date gap-2 text-gray-500">
                <span>May</span> <span>10</span> <span>2024</span>
              </div>
              <div className="border-r-2 leading-[2px] flex gap-2"></div>
              <div className="categories">
                <span className="text-gray-500">Cotegories</span> <span>:</span>{" "}
                <span>Recipes</span>
              </div>
              <div className="border-r-2 leading-[2px]"></div>
              <div className="comment flex text-center align-middle gap-2">
                <span className="mt-1 text-xl text-gray-900">
                  <GoCommentDiscussion />
                </span>{" "}
                <span>0</span> <span>Comment</span>
              </div>
            </div>
          </div>
          <div classname="recipes-video-setion">
            <section className="bg-white dark:bg-gray-900">
              <div className="grid  xl:px-10 sm:px-5 py-8 mx-auto gap-[5%]  xl:py-16 grid-cols-12">
                <div className=" lg:mt-0 xl:col-span-6 md-lg:col-span-12 lg:flex border-">
                  <ReactPlayer
                    url="https://www.youtube.com/embed/QHhjE4-5TNI?si=yQtkBUSs-hjTCoHI"
                    playing
                    controls
                    width="100%"
                    // height="450px"
                    className="w-full h-full"
                  />
                  {/* <iframe
                    width="100%"
                    height="450px"
                    // style={{ height: "100%" }}
                    src="https://www.youtube.com/embed/QHhjE4-5TNI?si=yQtkBUSs-hjTCoHI"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe> */}
                </div>
                <div className="mr-auto xl:col-span-6 md-lg:col-span-12">
                  <h1 className="text-[32px] font-[500] leading-[40px] text-[#212b36] roboto-medium">
                    Quinoa Vegetable Pulao
                  </h1>
                  <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 sm:text-[15px] md:text-lg xl:text-xl dark:text-gray-400 mt-5 roboto-regular ml-5">
                    From checkout to global sales tax compliance, companies
                    around the world use Flowbite to simplify their payment
                    stack. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Aliquid exercitationem modi officia tenetur fugiat
                    voluptatem maiores maxime dignissimos reiciendis sint.
                  </p>

                  <div className="recipe-by-Vineeth ml-5">
                    <p className="py-1 text-gray-900 text-lg border-b-[1px] border-yellow-300 roboto-regular-italic">
                      Recipe by Vineeth
                    </p>
                    <div className="border-dotted w-full flex justify-between  my-5">
                      <div className="Servings border-[1px] xl:px-[9.6%] sm:px-[3%] flex flex-col py-3 hover:bg-yellow-200">
                        <div className="flex">
                          <img className="w-7" src={serving} alt="" />
                        </div>
                        <div className="xl:text-lg sm:text-sm xl:font-semibold sm:font-[400]">
                          <p>Servings</p>
                        </div>
                        <div>
                          <span>3</span> <span>servings</span>
                        </div>
                      </div>
                      <div className="Servings border-[1px] xl:px-[8.6%] sm:px-[3%] flex flex-col py-3 hover:bg-yellow-200">
                        <div className="flex justify-center text-2xl">
                          <RiTimerLine />
                        </div>
                        <div className="xl:text-lg sm:text-sm xl:font-semibold sm:font-[400]">
                          <p>Prep time</p>
                        </div>
                        <div>
                          <span>20</span> <span>minutes</span>
                        </div>
                      </div>
                      <div className="Servings border-[1px] xl:px-[9.6%] sm:px-[3%] flex flex-col py-3 hover:bg-yellow-200">
                        <div className="flex justify-center text-2xl">
                          <VscCoffee />
                        </div>
                        <div className="xl:text-lg sm:text-sm xl:font-semibold sm:font-[400]">
                          <p>Cooking time</p>
                        </div>
                        <div>
                          <span>30</span> <span>minutes</span>
                        </div>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                      Get started
                      <svg
                        className="w-5 h-5 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="Ingredients xl:w-[70%] sm:w-[90%] md:w-[90%] mx-auto xl:my-5 sm:my-10 shadow-lg ">
                <div className="bg-[#f9f4d2]  m-6 p-6">
                  <h3 className="recipe-name text-[32px] font-[700] leading-[40px] text-[#212b36] roboto-bold-italic">
                    Ingredients
                  </h3>
                  <div className="pont my-5">
                    <ul>
                      {items.map((item) => (
                        <li
                          key={item.id}
                          className="border-b-[1px] border-[#736458] py-4"
                        >
                          <div
                            className="flex items-center gap-3"
                            onClick={() => handleChange(item.id)}
                          >
                            <input
                              id={`radio-${item.id}`}
                              type="checkbox"
                              name="colored-radio"
                              className="custom-checkbox focus:ring-[#91c72e] dark:focus:ring-[#91c72e]"
                              checked={!!checkedItems[item.id]}
                              readOnly
                            />
                            <label
                              htmlFor={`radio-${item.id}`}
                              className={`ms-2 text-base font-[400] text-[#736458] dark:text-gray-300 ${
                                checkedItems[item.id] ? "line-through" : ""
                              }`}
                            >
                              {item.text}
                            </label>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="  m-6 p-6">
                  <h3 className="recipe-name text-[32px] font-[600] leading-[30px] text-[#212b36] roboto-medium-italic">
                    Instructions:
                  </h3>
                  <div className="pont my-5">
                    <ul>
                      <li className=" py-4">
                        <div className="flex items-center gap-3 ">
                          <div>
                            <ul className="ml-4">
                              <li className=" list-decimal my-2">
                                <span className="mt-1">
                                  In a saucepan, heat the ghee or oil over
                                  medium heat.
                                </span>
                              </li>
                              <li className=" list-decimal my-2">
                                <span className="mt-1">
                                  In a saucepan, heat the ghee or oil over
                                  medium heat.
                                </span>
                              </li>
                              <li className=" list-decimal my-2">
                                <span className="mt-1">
                                  In a saucepan, heat the ghee or oil over
                                  medium heat.
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* product */}

          <section className="home-wrapper-6 bg-gray-100 py-10">
            <div className="w-[90%] mx-auto">
              <RecipeProduct />
            </div>
          </section>
        </div>
        <div className="related-video bg-[#c3e684] py-10">
          <div className="w-[90%] mx-auto">
            <div className="heading">
              <h3 className="mb-10 text-xl font-medium text-center roboto-medium">
                Shop items used in the recipe
                <hr className="bg-yellow-300 h-2 rounded-full mt-2 w-20 mx-auto" />
              </h3>
            </div>
            <div className="video">
              <div className="grid grid-cols-12 gap-22px">
                <div className="xl:col-span-4 md-lg:col-span-6 sm:col-span-12 border-2 h-[250px]">
                  <div>
                    <iframe
                      width="100%"
                      height="250px"
                      // style={{ height: "100%" }}
                      src="https://www.youtube.com/embed/QHhjE4-5TNI?si=yQtkBUSs-hjTCoHI"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
                <div className="xl:col-span-4 md-lg:col-span-6 sm:col-span-12 border-2 h-[250px]">
                  <div>
                    <iframe
                      width="100%"
                      height="250px"
                      // style={{ height: "100%" }}
                      src="https://www.youtube.com/embed/QHhjE4-5TNI?si=yQtkBUSs-hjTCoHI"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
                <div className="xl:col-span-4 md-lg:col-span-6 sm:col-span-12 h-[250px]">
                  <div>
                    <iframe
                      width="100%"
                      height="250px"
                      // style={{ height: "100%" }}
                      src="https://www.youtube.com/embed/QHhjE4-5TNI?si=yQtkBUSs-hjTCoHI"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className="policy mt-10">
              <div className="heading">
                <h3 className="mb-5 text-xl font-medium text-center roboto-medium">
                  INDIA’S 1ST AND TOP COLD PRESSED OIL ONLINE STORE
                </h3>
              </div>
              <div className="point">
                <ul className="list-disc flex flex-col gap-5 text-gray-600 text-base font-[400]">
                  <li>
                    Chekku Oil means, during the extraction process the
                    temperature of nuts/seeds are maintained at the room
                    temperature. Temperature can be maintained low only if
                    traditional wooden churner (MaraChekku) is used and
                    extracted by a slow mechanical process. Since the oil is not
                    headed, it retains the natural nutrients, flavor, Color and
                    texture. Consuming this oil is good for our health and over
                    all wellbeing. It is also called as Mara Chekku Ennai in
                    Tamil Nadu.
                  </li>
                  <li>
                    Our online store established in January 2016 and we are
                    delivering to all locations of India. For Chennai orders
                    will be delivered in 2 working days. For Bangalore and
                    Hyderabad all orders will be delivered within 4 working
                    days. For all locations of Tamil Nadu, orders will be
                    delivered within 3 working days
                  </li>
                  <li>
                    Gramiyum oil is rated as one of the best cooking oil in
                    India in cold pressed oil category.
                  </li>
                  <li>
                    Visit our shop @ #23, 9th Street, B.V. Nagar, Nanganallur
                    Chennai, to meet the team and buy directly
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Recipes;
