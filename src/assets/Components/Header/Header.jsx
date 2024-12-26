import React from "react";
import "./Header.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationPin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
const Header = () => {
  return (
    <>
      <div className="allHeader">
        <div className="upHeader">
          <div className="contact">
            <ul>
              <li>
                <FaPhoneAlt />
                <a href="">010-020-0340</a>
              </li>
              <li>
                <IoMdMail />
                <a href="">info@company.com</a>
              </li>
              <li>
                <FaLocationPin />
                <a href="">Sunny Isles Beach, FL 33160, USA</a>
              </li>
            </ul>
          </div>
          <div className="icons">
            <ul>
              <li>
                <a href="">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="downHeader">
          <div className="navbar">
            <div className="icon">
              <a href="">
                <img
                  src="https://templatemo.com/templates/templatemo_582_tale_seo_agency/assets/images/logo.png"
                  alt=""
                />
              </a>
            </div>
            <nav>
              <ul>
                <li className="navbar">
                  <a href="">Home</a>
                </li>
                <li className="navbar">
                  <a href="">Services</a>
                </li>
                <li className="navbar">
                  <a href="">Projects</a>
                </li>
                <li className="page ">
                  <a href="">
                    Pages
                    <IoIosArrowDown />
                  </a>
                  <div className="blogmenu">
                    <ul>
                      <li className="menuBlog">
                        <a href="">About us</a>
                      </li>
                      <li className="menuBlog">
                        <a href="">Faqs</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="navbar">
                  <a href="">Infos</a>
                </li>
                <li className="navbar">
                  <a href="">Contact</a>
                </li>
                <li className="navbar">
                  <a href="">
                    <FaHeart />
                  </a>
                </li>
                <li className="navbar">
                  <a href="">
                    <MdOutlineShoppingCart />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};


    

export default Header;
