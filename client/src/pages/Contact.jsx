import React from "react";
import Headers from "../components/Headers";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
const Contact = () => {
  return (
    <>
      <Headers />

      <div className="w-[95%] m-auto  mt-[50px]">
        <div className="flex px-3 items-center text-base mb-4">
          {" "}
          <Link className="text-base">Home</Link> <RiArrowRightSLine />{" "}
          <span className="text-sm">Contact us</span>
        </div>
        <hr />

        <div className="grid grid-cols-12 gap-[15px] mt-5">
          <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 ">
            <h2 className="heading-h2">How Can We Help You?</h2>
            <p>
              When an unknown printer took a galley of type and scrambled it to
              make type pecimen book. It has survived not only five areafact
              types remaining essentially unchang edIt.
            </p>

            <ul className="mt-5">
              <li className="flex items-center mb-5">
                <div className="bg-slate-100 p-3 rounded-full flex items-center justify-center mr-2">
                  <GrLocation className="text-lime-500 text-4xl" />
                </div>
                <div>
                  <h5 className="heading-h5">Address</h5>
                  <p>Awamileaug Drive, Kensington London, UK</p>
                </div>
              </li>
              <li className="flex items-center mb-5">
                <div className="bg-slate-100 p-3 rounded-full flex items-center justify-center mr-2">
                  <FiPhoneCall className="text-lime-300 text-4xl" />
                </div>
                <div>
                  <h5 className="heading-h5">Phone</h5>
                  <p>
                    <a href="" className="hover:text-lime-300">
                      +48-500-130-0001
                    </a>
                  </p>
                  <p>
                    <a href="" className="hover:text-lime-300">
                      +48-500-130-0001
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex items-center mb-5 ">
                <div className="bg-slate-100 p-3 rounded-full flex items-center justify-center mr-2">
                  <MdOutlineMailOutline className="text-lime-300 text-4xl" />
                </div>
                <div>
                  <h5 className="heading-h5">E-mail</h5>
                  <p>
                    <Link className="hover:text-lime-300">info1@gmail.com</Link>
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d55559613.167613834!2d4.028919!3d31.795306000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sus!4v1715889186038!5m2!1sen!2sus"
              className="w-[100%]"
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <div className="bg-white mat-50 mb-20 w-[95%] m-auto ">
        <div className="container-section py-5">
          <section className="bg-white py-20 lg:py-[50px] overflow-hidden relative z-10">
            <div className="">
              <div className="flex flex-wrap lg:justify-between -mx-4">
                <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
                  <div className="max-w-[570px] mb-12 lg:mb-0">
                    <span className="block mb-4 text-base text-primary font-semibold">
                      Contact Us
                    </span>
                    <h2
                      className="
            text-dark
            mb-6
            uppercase
            font-bold
            text-[32px]
            sm:text-[40px]
            lg:text-[36px]
            xl:text-[40px]
            "
                    >
                      GET IN TOUCH WITH US
                    </h2>
                    <p className="text-base text-body-color leading-relaxed mb-9">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eius tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim adiqua minim veniam quis nostrud
                      exercitation ullamco
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
                  <div className="bg-white relative  w-[94%] rounded-lg p-8 sm:p-12 shadow-lg">
                    <form>
                      <div className="mb-6">
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="
                  w-full
                  rounded
                  py-3
                  px-[14px]
                  text-body-color text-base
                  border border-[f0f0f0]
                  outline-none
                  focus-visible:shadow-none
                  focus:border-primary
                  "
                        />
                      </div>
                      <div className="mb-6">
                        <input
                          type="email"
                          placeholder="Your Email"
                          className="
                  w-full
                  rounded
                  py-3
                  px-[14px]
                  text-body-color text-base
                  border border-[f0f0f0]
                  outline-none
                  focus-visible:shadow-none
                  focus:border-primary
                  "
                        />
                      </div>
                      <div className="mb-6">
                        <input
                          type="text"
                          placeholder="Your Phone"
                          className="
                  w-full
                  rounded
                  py-3
                  px-[14px]
                  text-body-color text-base
                  border border-[f0f0f0]
                  outline-none
                  focus-visible:shadow-none
                  focus:border-primary
                  "
                        />
                      </div>
                      <div className="mb-6">
                        <textarea
                          rows={6}
                          placeholder="Your Message"
                          className="
                  w-full
                  rounded
                  py-3
                  px-[14px]
                  text-body-color text-base
                  border border-[f0f0f0]
                  resize-none
                  outline-none
                  focus-visible:shadow-none
                  focus:border-primary
                  "
                          defaultValue={""}
                        />
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="
                  w-full
               bg-black
                 text-white
                  rounded
                  border border-primary
                  p-3
                  transition
                  hover:bg-opacity-90
                  "
                        >
                          Send Message
                        </button>
                      </div>
                    </form>
                    <div>
                      <span className="absolute -top-10 -right-9 z-[-1]">
                        <svg
                          width={100}
                          height={100}
                          viewBox="0 0 100 100"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                            fill="#3056D3"
                          />
                        </svg>
                      </span>
                      <span className="absolute -right-10 top-[90px] z-[-1]">
                        <svg
                          width={34}
                          height={134}
                          viewBox="0 0 34 134"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="31.9993"
                            cy={132}
                            r="1.66667"
                            transform="rotate(180 31.9993 132)"
                            fill="#13C296"
                          />
                          <circle
                            cx="31.9993"
                            cy="117.333"
                            r="1.66667"
                            transform="rotate(180 31.9993 117.333)"
                            fill="#13C296"
                          />
                          <circle
                            cx="31.9993"
                            cy="102.667"
                            r="1.66667"
                            transform="rotate(180 31.9993 102.667)"
                            fill="#13C296"
                          />
                          <circle
                            cx="31.9993"
                            cy={88}
                            r="1.66667"
                            transform="rotate(180 31.9993 88)"
                            fill="#13C296"
                          />
                          <circle
                            cx="31.9993"
                            cy="73.3333"
                            r="1.66667"
                            transform="rotate(180 31.9993 73.3333)"
                            fill="#13C296"
                          />
                          <circle
                            cx="31.9993"
                            cy={45}
                            r="1.66667"
                            transform="rotate(180 31.9993 45)"
                            fill="#13C296"
                          />
                          <circle
                            cx="31.9993"
                            cy={16}
                            r="1.66667"
                            transform="rotate(180 31.9993 16)"
                            fill="#13C296"
                          />
                          <circle
                            cx="31.9993"
                            cy={59}
                            r="1.66667"
                            transform="rotate(180 31.9993 59)"
                            fill="#13C296"
                          />
                          <circle
                            cx="31.9993"
                            cy="30.6666"
                            r="1.66667"
                            transform="rotate(180 31.9993 30.6666)"
                            fill="#13C296"
                          />
                          <circle
                            cx="31.9993"
                            cy="1.66665"
                            r="1.66667"
                            transform="rotate(180 31.9993 1.66665)"
                            fill="#13C296"
                          />
                          <circle
                            cx="17.3333"
                            cy={132}
                            r="1.66667"
                            transform="rotate(180 17.3333 132)"
                            fill="#13C296"
                          />
                          <circle
                            cx="17.3333"
                            cy="117.333"
                            r="1.66667"
                            transform="rotate(180 17.3333 117.333)"
                            fill="#13C296"
                          />
                          <circle
                            cx="17.3333"
                            cy="102.667"
                            r="1.66667"
                            transform="rotate(180 17.3333 102.667)"
                            fill="#13C296"
                          />
                          <circle
                            cx="17.3333"
                            cy={88}
                            r="1.66667"
                            transform="rotate(180 17.3333 88)"
                            fill="#13C296"
                          />
                          <circle
                            cx="17.3333"
                            cy="73.3333"
                            r="1.66667"
                            transform="rotate(180 17.3333 73.3333)"
                            fill="#13C296"
                          />
                          <circle
                            cx="17.3333"
                            cy={45}
                            r="1.66667"
                            transform="rotate(180 17.3333 45)"
                            fill="#13C296"
                          />
                          <circle
                            cx="17.3333"
                            cy={16}
                            r="1.66667"
                            transform="rotate(180 17.3333 16)"
                            fill="#13C296"
                          />
                          <circle
                            cx="17.3333"
                            cy={59}
                            r="1.66667"
                            transform="rotate(180 17.3333 59)"
                            fill="#13C296"
                          />
                          <circle
                            cx="17.3333"
                            cy="30.6666"
                            r="1.66667"
                            transform="rotate(180 17.3333 30.6666)"
                            fill="#13C296"
                          />
                          <circle
                            cx="17.3333"
                            cy="1.66665"
                            r="1.66667"
                            transform="rotate(180 17.3333 1.66665)"
                            fill="#13C296"
                          />
                          <circle
                            cx="2.66536"
                            cy={132}
                            r="1.66667"
                            transform="rotate(180 2.66536 132)"
                            fill="#13C296"
                          />
                          <circle
                            cx="2.66536"
                            cy="117.333"
                            r="1.66667"
                            transform="rotate(180 2.66536 117.333)"
                            fill="#13C296"
                          />
                          <circle
                            cx="2.66536"
                            cy="102.667"
                            r="1.66667"
                            transform="rotate(180 2.66536 102.667)"
                            fill="#13C296"
                          />
                          <circle
                            cx="2.66536"
                            cy={88}
                            r="1.66667"
                            transform="rotate(180 2.66536 88)"
                            fill="#13C296"
                          />
                          <circle
                            cx="2.66536"
                            cy="73.3333"
                            r="1.66667"
                            transform="rotate(180 2.66536 73.3333)"
                            fill="#13C296"
                          />
                          <circle
                            cx="2.66536"
                            cy={45}
                            r="1.66667"
                            transform="rotate(180 2.66536 45)"
                            fill="#13C296"
                          />
                          <circle
                            cx="2.66536"
                            cy={16}
                            r="1.66667"
                            transform="rotate(180 2.66536 16)"
                            fill="#13C296"
                          />
                          <circle
                            cx="2.66536"
                            cy={59}
                            r="1.66667"
                            transform="rotate(180 2.66536 59)"
                            fill="#13C296"
                          />
                          <circle
                            cx="2.66536"
                            cy="30.6666"
                            r="1.66667"
                            transform="rotate(180 2.66536 30.6666)"
                            fill="#13C296"
                          />
                          <circle
                            cx="2.66536"
                            cy="1.66665"
                            r="1.66667"
                            transform="rotate(180 2.66536 1.66665)"
                            fill="#13C296"
                          />
                        </svg>
                      </span>
                      <span className="absolute -left-7 -bottom-7 z-[-1]">
                        <svg
                          width={107}
                          height={134}
                          viewBox="0 0 107 134"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="104.999"
                            cy={132}
                            r="1.66667"
                            transform="rotate(180 104.999 132)"
                            fill="#13C296"
                          />
                          <circle
                            cx="104.999"
                            cy="117.333"
                            r="1.66667"
                            transform="rotate(180 104.999 117.333)"
                            fill="#13C296"
                          />
                          <circle
                            cx="104.999"
                            cy="102.667"
                            r="1.66667"
                            transform="rotate(180 104.999 102.667)"
                            fill="#13C296"
                          />
                          <circle
                            cx="104.999"
                            cy={88}
                            r="1.66667"
                            transform="rotate(180 104.999 88)"
                            fill="#13C296"
                          />
                          <circle
                            cx="104.999"
                            cy="73.3333"
                            r="1.66667"
                            transform="rotate(180 104.999 73.3333)"
                            fill="#13C296"
                          />
                          <circle
                            cx="104.999"
                            cy={45}
                            r="1.66667"
                            transform="rotate(180 104.999 45)"
                            fill="#13C296"
                          />
                          <circle
                            cx="104.999"
                            cy={16}
                            r="1.66667"
                            transform="rotate(180 104.999 16)"
                            fill="#13C296"
                          />
                          <circle
                            cx="104.999"
                            cy={59}
                            r="1.66667"
                            transform="rotate(180 104.999 59)"
                            fill="#13C296"
                          />
                          <circle
                            cx="104.999"
                            cy="30.6666"
                            r="1.66667"
                            transform="rotate(180 104.999 30.6666)"
                            fill="#13C296"
                          />
                          <circle
                            cx="104.999"
                            cy="1.66665"
                            r="1.66667"
                            transform="rotate(180 104.999 1.66665)"
                            fill="#13C296"
                          />
                          <circle
                            cx="90.3333"
                            cy={132}
                            r="1.66667"
                            transform="rotate(180 90.3333 132)"
                            fill="#13C296"
                          />
                          <circle
                            cx="90.3333"
                            cy="117.333"
                            r="1.66667"
                            transform="rotate(180 90.3333 117.333)"
                            fill="#13C296"
                          />
                          <circle
                            cx="90.3333"
                            cy="102.667"
                            r="1.66667"
                            transform="rotate(180 90.3333 102.667)"
                            fill="#13C296"
                          />
                          <circle
                            cx="90.3333"
                            cy={88}
                            r="1.66667"
                            transform="rotate(180 90.3333 88)"
                            fill="#13C296"
                          />
                          <circle
                            cx="90.3333"
                            cy="73.3333"
                            r="1.66667"
                            transform="rotate(180 90.3333 73.3333)"
                            fill="#13C296"
                          />
                          <circle
                            cx="90.3333"
                            cy={45}
                            r="1.66667"
                            transform="rotate(180 90.3333 45)"
                            fill="#13C296"
                          />
                          <circle
                            cx="90.3333"
                            cy={16}
                            r="1.66667"
                            transform="rotate(180 90.3333 16)"
                            fill="#13C296"
                          />
                          <circle
                            cx="90.3333"
                            cy={59}
                            r="1.66667"
                            transform="rotate(180 90.3333 59)"
                            fill="#13C296"
                          />
                          <circle
                            cx="90.3333"
                            cy="30.6666"
                            r="1.66667"
                            transform="rotate(180 90.3333 30.6666)"
                            fill="#13C296"
                          />
                          <circle
                            cx="90.3333"
                            cy="1.66665"
                            r="1.66667"
                            transform="rotate(180 90.3333 1.66665)"
                            fill="#13C296"
                          />
                          <circle
                            cx="75.6654"
                            cy={132}
                            r="1.66667"
                            transform="rotate(180 75.6654 132)"
                            fill="#13C296"
                          />
                          <circle
                            cx="31.9993"
                            cy={132}
                            r="1.66667"
                            transform="rotate(180 31.9993 132)"
                            fill="#13C296"
                          />
                          <circle
                            cx="75.6654"
                            cy="117.333"
                            r="1.66667"
                            transform="rotate(180 75.6654 117.333)"
                            fill="#13C296"
                          />
                          <circle
                            cx="31.9993"
                            cy="117.333"
                            r="1.66667"
                            transform="rotate(180 31.9993 117.333)"
                            fill="#13C296"
                          />
                          <circle
                            cx="75.6654"
                            cy="102.667"
                            r="1.66667"
                            transform="rotate(180 75.6654 102.667)"
                            fill="#13C296"
                          />
                          <circle
                            cx="31.9993"
                            cy="102.667"
                            r="1.66667"
                            transform="rotate(180 31.9993 102.667)"
                            fill="#13C296"
                          />
                          <circle
                            cx="75.6654"
                            cy={88}
                            r="1.66667"
                            transform="rotate(180 75.6654 88)"
                            fill="#13C296"
                          />
                          <circle
                            cx="31.9993"
                            cy={88}
                            r="1.66667"
                            transform="rotate(180 31.9993 88)"
                            fill="#13C296"
                          />
                          <circle
                            cx="75.6654"
                            cy="73.3333"
                            r="1.66667"
                            transform="rotate(180 75.6654 73.3333)"
                            fill="#13C296"
                          />
                          <circle
                            cx="31.9993"
                            cy="73.3333"
                            r="1.66667"
                            transform="rotate(180 31.9993 73.3333)"
                            fill="#13C296"
                          />
                          <circle
                            cx="75.6654"
                            cy={45}
                            r="1.66667"
                            transform="rotate(180 75.6654 45)"
                            fill="#13C296"
                          />
                          <circle
                            cx="31.9993"
                            cy={45}
                            r="1.66667"
                            transform="rotate(180 31.9993 45)"
                            fill="#13C296"
                          />
                          <circle
                            cx="75.6654"
                            cy={16}
                            r="1.66667"
                            transform="rotate(180 75.6654 16)"
                            fill="#13C296"
                          />
                          <circle
                            cx="31.9993"
                            cy={16}
                            r="1.66667"
                            transform="rotate(180 31.9993 16)"
                            fill="#13C296"
                          />
                          <circle
                            cx="75.6654"
                            cy={59}
                            r="1.66667"
                            transform="rotate(180 75.6654 59)"
                            fill="#13C296"
                          />
                          <circle
                            cx="31.9993"
                            cy={59}
                            r="1.66667"
                            transform="rotate(180 31.9993 59)"
                            fill="#13C296"
                          />
                          <circle
                            cx="75.6654"
                            cy="30.6666"
                            r="1.66667"
                            transform="rotate(180 75.6654 30.6666)"
                            fill="#13C296"
                          />
                          <circle
                            cx="31.9993"
                            cy="30.6666"
                            r="1.66667"
                            transform="rotate(180 31.9993 30.6666)"
                            fill="#13C296"
                          />
                          <circle
                            cx="75.6654"
                            cy="1.66665"
                            r="1.66667"
                            transform="rotate(180 75.6654 1.66665)"
                            fill="#13C296"
                          />
                          <circle
                            cx="31.9993"
                            cy="1.66665"
                            r="1.66667"
                            transform="rotate(180 31.9993 1.66665)"
                            fill="#13C296"
                          />
                          <circle
                            cx="60.9993"
                            cy={132}
                            r="1.66667"
                            transform="rotate(180 60.9993 132)"
                            fill="#13C296"
                          />
                          <circle
                            cx="17.3333"
                            cy={132}
                            r="1.66667"
                            transform="rotate(180 17.3333 132)"
                            fill="#13C296"
                          />
                          <circle
                            cx="60.9993"
                            cy="117.333"
                            r="1.66667"
                            transform="rotate(180 60.9993 117.333)"
                            fill="#13C296"
                          />
                          <circle
                            cx="17.3333"
                            cy="117.333"
                            r="1.66667"
                            transform="rotate(180 17.3333 117.333)"
                            fill="#13C296"
                          />
                          <circle
                            cx="60.9993"
                            cy="102.667"
                            r="1.66667"
                            transform="rotate(180 60.9993 102.667)"
                            fill="#13C296"
                          />
                          <circle
                            cx="17.3333"
                            cy="102.667"
                            r="1.66667"
                            transform="rotate(180 17.3333 102.667)"
                            fill="#13C296"
                          />
                          <circle
                            cx="60.9993"
                            cy={88}
                            r="1.66667"
                            transform="rotate(180 60.9993 88)"
                            fill="#13C296"
                          />
                          <circle
                            cx="17.3333"
                            cy={88}
                            r="1.66667"
                            transform="rotate(180 17.3333 88)"
                            fill="#13C296"
                          />
                          <circle
                            cx="60.9993"
                            cy="73.3333"
                            r="1.66667"
                            transform="rotate(180 60.9993 73.3333)"
                            fill="#13C296"
                          />
                          <circle
                            cx="17.3333"
                            cy="73.3333"
                            r="1.66667"
                            transform="rotate(180 17.3333 73.3333)"
                            fill="#13C296"
                          />
                          <circle
                            cx="60.9993"
                            cy={45}
                            r="1.66667"
                            transform="rotate(180 60.9993 45)"
                            fill="#13C296"
                          />
                          <circle
                            cx="17.3333"
                            cy={45}
                            r="1.66667"
                            transform="rotate(180 17.3333 45)"
                            fill="#13C296"
                          />
                          <circle
                            cx="60.9993"
                            cy={16}
                            r="1.66667"
                            transform="rotate(180 60.9993 16)"
                            fill="#13C296"
                          />
                          <circle
                            cx="17.3333"
                            cy={16}
                            r="1.66667"
                            transform="rotate(180 17.3333 16)"
                            fill="#13C296"
                          />
                          <circle
                            cx="60.9993"
                            cy={59}
                            r="1.66667"
                            transform="rotate(180 60.9993 59)"
                            fill="#13C296"
                          />
                          <circle
                            cx="17.3333"
                            cy={59}
                            r="1.66667"
                            transform="rotate(180 17.3333 59)"
                            fill="#13C296"
                          />
                          <circle
                            cx="60.9993"
                            cy="30.6666"
                            r="1.66667"
                            transform="rotate(180 60.9993 30.6666)"
                            fill="#13C296"
                          />
                          <circle
                            cx="17.3333"
                            cy="30.6666"
                            r="1.66667"
                            transform="rotate(180 17.3333 30.6666)"
                            fill="#13C296"
                          />
                          <circle
                            cx="60.9993"
                            cy="1.66665"
                            r="1.66667"
                            transform="rotate(180 60.9993 1.66665)"
                            fill="#13C296"
                          />
                          <circle
                            cx="17.3333"
                            cy="1.66665"
                            r="1.66667"
                            transform="rotate(180 17.3333 1.66665)"
                            fill="#13C296"
                          />
                          <circle
                            cx="46.3333"
                            cy={132}
                            r="1.66667"
                            transform="rotate(180 46.3333 132)"
                            fill="#13C296"
                          />
                          <circle
                            cx="2.66536"
                            cy={132}
                            r="1.66667"
                            transform="rotate(180 2.66536 132)"
                            fill="#13C296"
                          />
                          <circle
                            cx="46.3333"
                            cy="117.333"
                            r="1.66667"
                            transform="rotate(180 46.3333 117.333)"
                            fill="#13C296"
                          />
                          <circle
                            cx="2.66536"
                            cy="117.333"
                            r="1.66667"
                            transform="rotate(180 2.66536 117.333)"
                            fill="#13C296"
                          />
                          <circle
                            cx="46.3333"
                            cy="102.667"
                            r="1.66667"
                            transform="rotate(180 46.3333 102.667)"
                            fill="#13C296"
                          />
                          <circle
                            cx="2.66536"
                            cy="102.667"
                            r="1.66667"
                            transform="rotate(180 2.66536 102.667)"
                            fill="#13C296"
                          />
                          <circle
                            cx="46.3333"
                            cy={88}
                            r="1.66667"
                            transform="rotate(180 46.3333 88)"
                            fill="#13C296"
                          />
                          <circle
                            cx="2.66536"
                            cy={88}
                            r="1.66667"
                            transform="rotate(180 2.66536 88)"
                            fill="#13C296"
                          />
                          <circle
                            cx="46.3333"
                            cy="73.3333"
                            r="1.66667"
                            transform="rotate(180 46.3333 73.3333)"
                            fill="#13C296"
                          />
                          <circle
                            cx="2.66536"
                            cy="73.3333"
                            r="1.66667"
                            transform="rotate(180 2.66536 73.3333)"
                            fill="#13C296"
                          />
                          <circle
                            cx="46.3333"
                            cy={45}
                            r="1.66667"
                            transform="rotate(180 46.3333 45)"
                            fill="#13C296"
                          />
                          <circle
                            cx="2.66536"
                            cy={45}
                            r="1.66667"
                            transform="rotate(180 2.66536 45)"
                            fill="#13C296"
                          />
                          <circle
                            cx="46.3333"
                            cy={16}
                            r="1.66667"
                            transform="rotate(180 46.3333 16)"
                            fill="#13C296"
                          />
                          <circle
                            cx="2.66536"
                            cy={16}
                            r="1.66667"
                            transform="rotate(180 2.66536 16)"
                            fill="#13C296"
                          />
                          <circle
                            cx="46.3333"
                            cy={59}
                            r="1.66667"
                            transform="rotate(180 46.3333 59)"
                            fill="#13C296"
                          />
                          <circle
                            cx="2.66536"
                            cy={59}
                            r="1.66667"
                            transform="rotate(180 2.66536 59)"
                            fill="#13C296"
                          />
                          <circle
                            cx="46.3333"
                            cy="30.6666"
                            r="1.66667"
                            transform="rotate(180 46.3333 30.6666)"
                            fill="#13C296"
                          />
                          <circle
                            cx="2.66536"
                            cy="30.6666"
                            r="1.66667"
                            transform="rotate(180 2.66536 30.6666)"
                            fill="#13C296"
                          />
                          <circle
                            cx="46.3333"
                            cy="1.66665"
                            r="1.66667"
                            transform="rotate(180 46.3333 1.66665)"
                            fill="#13C296"
                          />
                          <circle
                            cx="2.66536"
                            cy="1.66665"
                            r="1.66667"
                            transform="rotate(180 2.66536 1.66665)"
                            fill="#13C296"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
