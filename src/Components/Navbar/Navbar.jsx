import React, { useState, useEffect } from "react";
import logo from "../../assets/Images/logo.png";
import Dropdown from "./Dropdown";
import Mobile from "./Mobile";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };
    window.addEventListener("scroll", handleScroll);

  }, []); 

  const handlePhoneNumberClick = () => {
    window.location.href = 'tel:+977 9852057242';
  };

  return (
    <>
      <div className={`container mx-auto max-md:hidden ${isScrolled ? 'hidden' : ''}`}>
        <div className="flex justify-between">
          <div className="pl-24 max-sm:w-96 max-sm:hidden">
            <Link to="/">
              <img src={logo} alt="logo" title="Logo" width="300px" />
            </Link>
          </div>
          <div className="hs_header_logo_right pr-24 pt-5">
            <div className="hs_header_add_wrapper max-sm:hidden">
              <div className="hs_header_add_icon">
                <FaHome size={25} className="iconss"/>
              </div>
              <div className="hs_header_add_icon_cont">
                <h5>Reach Us</h5>
                <p>Itahari-4, Sunsari</p>
              </div>
            </div>
            <div className="hs_header_add_wrapper max-sm:hidden">
              <div className="hs_header_add_icon">
              <FaPhoneAlt size={25} className="iconss cursor-pointer" onClick={handlePhoneNumberClick}/>
              </div>
              <div className="hs_header_add_icon_cont">
                <h5>Call Us directly</h5>
                <p>+977-9852057242</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header
        className={`w-full pb-2 bg-white  z-50 ${
          isScrolled ? 'fixed  py-4 bg-[#EAF2F8] z-50' : ''
        }`}
      >
        <div className="container flex lg:pl-[42rem] md:pl-[9.125rem] pl-12 text-center items-center justify-center">
          <Dropdown />
        </div>
        <Mobile/>
      </header>
    </>
  );
};
export default Navbar;
