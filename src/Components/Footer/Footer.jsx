import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";
import logo1 from '../../assets/Images/logo1.png'


const Footer = () => {
  const FooterLinks = [
    {
      title: "Home",
      link: "/#",
    },
    {
      title: "About",
      link: "/#about",
    },
    {
      title: "Contact",
      link: "/#contact",
    },
    {
      title: "Services",
      link: "/#blog",
    },
  ];
  return (
    <div className=" bg-neutralSilver w-full">
        <div className="grid md:grid-cols-3 pt-5">
          {/* company details */}
          <div className="py-8 px-10">
            <a
              href="#"
              className="flex text-brandPrimary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            ><img src={logo1} className="pr-2" width={40}/>
              Sunira
            </a>
            <p className="text-gray-600 dark:text-white/70  lg:pr-24 pt-3 text-justify">
            Welcome to Sunira, your one-stop destination for holistic solutions. 
            From expert astrological insights to legal expertise and seamless company registration services, 
            we're here to guide you every step of the way. 
            Explore our tailored services and embark on a journey of empowerment and success with Sunira
            </p>
            <a
              href="/"
              target="_blank"
              className="inline-block bg-hedingColor text-white py-2 px-4 mt-4 text-sm rounded-full"
            >
              Visit our Facebook Page
            </a>
          </div>

          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3 text-brandPrimary">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* second col links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3 text-brandPrimary">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3 text-brandPrimary">Address</h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Itahari , Sunsari Nepal</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>+977 9852057242</p>
                </div>

                {/* social links */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl hover:text-hedingColor duration-300" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl hover:text-hedingColor duration-200" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl hover:text-hedingColor duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Footer;
