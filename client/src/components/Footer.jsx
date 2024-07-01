import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { useSelector } from "react-redux";
import { AiFillShopping, AiFillHeart } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";
import logo from "../assets/logo1.webp";
import Amazon from "../assets/amazon.svg";
import Bigbasket from "../assets/bigbasket.svg";
import Visa from "../assets/visa.jpg";
import Credit from "../assets/credit-card.jpg";
import Paypal from "../assets/paypal.jpg";

import "./footer.css";
const Footer = () => {
  const { card_product_count, wishlist_count } = useSelector(
    (state) => state.card
  );
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <>
      <footer>
        <div className="container-section">
          <div className="grid grid-cols-12 gap-4 mat-25">
            <div className="lg:col-span-2 md:col-span-4 sm:col-span-12 xl:col-span-2">
              <ul className="footer-sec">
                <li>
                  <img src={logo} alt="" className="w-[100px]" />
                </li>
                <li className="mt-2">Also shop on</li>
                <li className="mt-2">
                  <img src={Amazon} alt="" />
                </li>
                <li className="mt-2">
                  <img src={Bigbasket} alt="" />
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2 md:col-span-4 sm:col-span-12 xl:col-span-2">
              <h5 className="heading-h5">Shop</h5>
              <ul className="footer-sec">
                <li>Careals for Little Ones</li>
                <li>Kids Careals</li>
                <li>Pancakes & Dosas</li>
                <li>Noodles & Pasta</li>
                <li>Natural Sweeteners</li>
                <li>Superfoods</li>
              </ul>
            </div>
            <div className="lg:col-span-2 md:col-span-4 sm:col-span-12 xl:col-span-2">
              <h5 className="heading-h5">Policies</h5>
              <ul className="footer-sec">
                <li>Privacy Policy</li>
                <li>Shipping & Refund</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div className="lg:col-span-3 md:col-span-4 sm:col-span-12 xl:col-span-3">
              <h5 className="heading-h5">About</h5>
              <ul className="footer-sec">
                <li>About Us</li>
                <li>Yes Moms Community Guidelines</li>
                <li>The Akshaya Pasta Foundation</li>
                <li>Slurrp Farm & Plastic Neutrality</li>
                <li>Wholsum Foods Impact Report 2022-23</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div className="lg:col-span-3 md:col-span-4 sm:col-span-12 xl:col-span-3">
              <h5 className="heading-h5">Subscribe to our emails</h5>
              <p className="mt-5">
                Be the first to know about our biggest and best sales.
              </p>
              <div className="f-email mt-6">
                <input type="email" placeholder="Enter e-mail id" />
                <span>
                  <MdArrowForwardIos />
                </span>
              </div>
              <p className="mt-[30px]">Payment methods</p>
              <ul className="payment-sec">
                <li>
                  {" "}
                  <img src={Visa} alt="" />{" "}
                </li>
                <li>
                  {" "}
                  <img src={Credit} alt="" />{" "}
                </li>
                <li>
                  {" "}
                  <img src={Paypal} alt="" />{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
