import React from "react";
import { Accordion } from "flowbite-react";
import {  useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../assets/Styles/HomeSwiper.css';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Mousewheel, Keyboard, FreeMode ,Autoplay} from 'swiper/modules';
import { motion } from "framer-motion";
import { categories } from "./Data";
import Categories from "./Categories";

import image1 from "../../assets/Images/homepic1.jpeg";
import image2 from "../../assets/Images/homepic2.jpeg";
import image3 from "../../assets/Images/homepic3.jpeg";
import about from "../../assets/Images/astrology.png";
import company from "../../assets/Images/company.png";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";


function Home() {
  const [showNavigation, setShowNavigation] = useState(false);
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div
        className="pt-24 md:pt-2 sm:pt-2 w-full md:h-[36.188rem] max-sm:pt-0"
        onMouseEnter={() => setShowNavigation(true)}
        onMouseLeave={() => setShowNavigation(false)}
      >
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={showNavigation}
          centeredSlides={true}
          effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
          pagination={{ clickable: true }}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard,FreeMode,Autoplay]}
          style={
            {
              "--swiper-navigation-size": "2.523rem",
              "--swiper-navigation-color": "gray",
            } 
          }
          className="w-full lg:max-w-[70.688rem] md:max-h-[35.188rem]"
        >
     <SwiperSlide  className='w-full object-cover'>
        <img src={image1} />
      </SwiperSlide>
      <SwiperSlide  className='w-full object-cover'>
        <img src={image2} />
      </SwiperSlide>

        <SwiperSlide  className='w-full object-cover'>
        <img src={image3} />
      </SwiperSlide>

        </Swiper>
        <div className="grid md:grid-cols-2 gap-8 place-items-center p-12">
          <div>
            <img src={about} alt="" className="p-3 h-96" />
          </div>
          <div>
            <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5 text-hedingColor">
              We provide the best{" "}
              <span className="text-brandPrimary">Astrologer </span>
            </div>
            <p className="text-md text-justify text-gray leading-7 mb-4 font-sans font-thin">
              Welcome to Sunira, your cosmic compass for astrological guidance.
              Our expert astrologers offer personalized services to illuminate
              your path. From birth chart analyses to insightful consultations,
              we're here to empower you on your journey. Discover the wisdom of
              the stars with us.
            </p>
            <Link to='/astrology'>
            <button className="py-3 px-6 text-sm border border-solid border-borderColor rounded-lg  font-bold">
              Know More
            </button>
            </Link>
          </div>
        </div>
      
      <Accordion collapseAll className="font-mono font-semibold text-[16px]">
        <Accordion.Panel>
          <Accordion.Title>What are your services?</Accordion.Title>
          <Accordion.Content className="ml-4">
            <ul className="text-sm list-disc">
              <li className="mb-2 text-gray-500 dark:text-gray-400">
                Birth Chart Analysis
              </li>
              <li className="mb-2 text-gray-500 dark:text-gray-400">
                Astrological Consultations
              </li>
              <li className="mb-2 text-gray-500 dark:text-gray-400">
                Compatibility Readings
              </li>
              <li className="mb-2 text-gray-500 dark:text-gray-400">
                Predictive Astrology
              </li>
              <li className="mb-2 text-gray-500 dark:text-gray-400">
                Astrological Remedies
              </li>
              <li className="mb-2 text-gray-500 dark:text-gray-400">
                Career Guidance
              </li>
              <li className="mb-2 text-gray-500 dark:text-gray-400">
                Love and Relationship Guidance
              </li>
              <li className=" text-gray-500 dark:text-gray-400">
                Karmic and Spiritual Astrology
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Is there astrologer available?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is first conceptualized and designed using the Figma
              software so everything you see in the library has a design
              equivalent in our Figma file.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out the
              <a
                href="https://flowbite.com/figma/"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Figma design system
              </a>
              based on the utility classes from Tailwind CSS and components from
              Flowbite.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            What are the differences between Astrology and jyotishi?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core components from Flowbite are
              open source under the MIT license, whereas Tailwind UI is a paid
              product. Another difference is that Flowbite relies on smaller and
              standalone components, whereas Tailwind UI offers sections of
              pages.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              However, we actually recommend using both Flowbite, Flowbite Pro,
              and even Tailwind UI as there is no technical reason stopping you
              from using the best of two worlds.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Learn more about these technologies:
            </p>
            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
              <li>
                <a
                  href="https://flowbite.com/pro/"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
      <div className="grid md:grid-cols-2 gap-8 place-items-center p-12">
        <div>
          <div className="font-bold font-sans sm:text-[1.875rem] text-[1.5rem] mb-5 text-hedingColor">
            Revolutionizing Company Registration in Nepal:{" "}
            <span className="text-brandPrimary">
              Smarter, Simpler, and Seamless!
            </span>
          </div>
          <p className="text-md text-justify text-gray leading-7 mb-4 font-sans font-thin">
            Welcome to our innovative platform dedicated to streamlining the
            company registration process in Nepal. Say goodbye to the tedious
            paperwork and lengthy procedures associated with registering your
            company. But we don't stop there. Our services extend beyond just
            company registration. We offer a wide range of additional services
            related to company setup and compliance, including tax registration,
            obtaining necessary permits and licenses, drafting legal documents,
            and more.
          </p>
          <Link to='/company'>
          <button className="py-3 px-6 text-sm border border-solid border-borderColor rounded-lg font-bold">
            Know More
          </button>
          </Link>
        </div>

        <div>
          <img src={company} alt="" className="p-3 h-96" />
        </div>
      </div>
      <div className="section text-center" id="courses">
          <div className="sm:text-3xl text-2xl font-bold mb-5 text-hedingColor">
            Our Top <span className="text-brandPrimary">Services</span>
          </div>
          <p className="text-sm text-gray text-justify mx-2 lg:w-2/5 lg:ml-[30%] md:w-2/5 md:ml-[30%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            tempora illo laborum ex cupiditate tenetur doloribus non velit atque
            amet repudiandae ipsa modi numquam quas odit optio, totam voluptate
            sit! Lorem ipsum dolor sit amet.
          </p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-4 sm:grid-cols-2 max-sm:grid-cols-2 mt-10 gap-8"
        >
          {categories.map((category) => {
            return <Categories key={category.id} {...category} />;
          })}
        </motion.div>
      <Footer/>
    </div>
   
  );
}

export default Home;
