import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { FaCaretDown } from 'react-icons/fa'; 
import logo from '../../assets/Images/logo.png'
import { Link } from 'react-router-dom';

const Mobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); 
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false); 
  };

  const MenuLinks = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "AboutUs",
      link: "/about",
    },
  ];

  const DropdownLinks = [
    {
      id: 1,
      name: "Astrology",
      link: "/astrology",
    },
    {
      id: 2,
      name: "Company",
      link: "/company",
    },
    {
      id: 3,
      name: "Law",
      link: "/law",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 767) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      setIsScrolled(scrollTop > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 
  return (
    <div>
      <div className={` md:hidden  ${isScrolled ? 'pt-2 container ' : ''} `}>
        <img src={logo} className='sm:flex max-sm:flex max-md:hidden w-36 '/>
        <button
          onClick={toggleMenu}
          className="md:hidden cursor-pointer absolute top-7 right-10"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <IoMdClose size={25}/>
          ) : (
            <GiHamburgerMenu size={25}/>
          )}
        </button>
        <div
          className={` shadow-4xl ease-in text-black text-start ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          aria-controls="mobile-menu"
        >
          {isMenuOpen && (
            <div>
              <div className="flex flex-col py-2 px-2 bg-white h-full w-full">
                <ul className="flex-col cursor-pointer sm:flex">
                  {MenuLinks.map((data, index) => (
                    <li key={index} className='w-full'>
                      <a
                        href={data.link}
                        className="pl-10 text-xl leading-10 tracking-normal"
                        onClick={closeMenu} // Close menu when a menu item is clicked
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                  {/* Dropdown  */}
                  <li className="relative cursor-pointer text-start flex justify-start items-start  w-full ">
                    <a
                      href="#"
                      className="pl-10 text-xl leading-10 tracking-normal flex"
                      onClick={toggleDropdown} 
                    >
                      Services
                      <FaCaretDown className="ml-4 mt-2" />
                    </a>

                    {/* Dropdown Links */}
                    <div className={`relative justify-start mt-2 text-left ${isDropdownOpen ? 'block' : 'hidden'} rounded-md bg-white dark:bg-gray-900 p-2 dark:text-white`}>
                      <ul className=" text-left flex justify-start flex-col">
                        {DropdownLinks.map((data, index) => (
                          <li key={index}>
                            <a
                              className=" text-gray-500 dark:hover:text-white duration-200 inline-block p-2 hover:bg-primary/20 rounded-md font-semibold"
                              href={data.link}
                              onClick={closeMenu} 
                            >
                              {data.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                </ul>
                
              </div>
              <div className="mr-10 ml-10">
              <button 
              type="button"
              className="text-white bg-hedingColor
                   rounded-md  px-4 py-2
                    text-center "
            >
              <Link to='/contact'>
              ContactUs
              </Link> 
            </button>
            </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Mobile;
