import React from 'react'
import Heading from './Heading';
import { TypeAnimation } from 'react-type-animation';
import pic from '../../assets/Images/register.png'
import Img1 from "../../assets/Images/costumer.png";
import Img2 from "../../assets/Images/trademark.jpg";
import Img3 from "../../assets/Images/tax.jpg";
import Footer from '../Footer/Footer';

function Company() {

  const BlogData = [
    {
      title: "Company Registration: Your Gateway to Success",
      subtitle: "At our company, we specialize in facilitating seamless company registration services in Nepal. Our expert team assists clients through every step of the registration process, ensuring compliance with all legal requirements and expedited establishment of their business entities.",
      published: "Choose a Business Structure",
      image: Img1,
      aosDelay: "0",
    },
    {
      title: "Trademark Registration: Your Trusted Partner in Nepal",
      subtitle: "Get your trademark registered hassle-free with our expert guidance. Protect your brand with ease at our company.",
      published: "Search for Existing Trademarks",
      image: Img2,
      aosDelay: "100",
    },
    {
      title: "Efficient Tax and Accounting Services in Nepal",
      subtitle:
        "Streamline your finances with our comprehensive tax and accounting services tailored to meet your business needs in Nepal. Let us handle your financial matters efficiently, so you can focus on growing your business.",
      published: "comprehensive tax and accounting ",
      image: Img3,
      aosDelay: "200",
    },
  ];
  return (
    <>
    <div className='pt-12 bg-orange-300 pl-4 pr-4 md:pl-28 md:pr-28'>
  <div className='flex flex-col md:flex-row md:justify-between items-center'>
    <TypeAnimation
      sequence={[
        'We Provide Company Registration',
        1000, 
        'We Provide TradeMark Registration',
        1000,
        'We Provide Accounting & Taxation',
        1000,
      ]}
      wrapper="span"
      speed={30}
      style={{ fontSize: '3em', display: 'inline-block', color:'#BA4A00' }}
      repeat={Infinity}
    />
    <div className="mt-8 md:mt-0">
      <img src={pic} width={300} className="mx-auto md:mx-0"/>
    </div>
  </div>
</div>

    <div className="my-12 px-10">
      <div className="container">
        {/* Header section */}
        <Heading title="" subtitle={"Explore Our Services"} />

        {/* Blog section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {/* Blog card */}
          {BlogData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.title}
              className="bg-white dark:bg-gray-900"
            >
              {/* image section */}
              <div className="overflow-hidden rounded-2xl mb-2">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                />
              </div>
              {/* content section */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{data.published}</p>
                <p className="font-bold line-clamp-1">{data.title}</p>
                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                  {data.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
   </> 
  )
}

export default Company
