
import Banner from "./Banner";
import law from "../../assets/Images/pngegg (7).png";
import Footer from "../Footer/Footer";

const BannerData = {
  title: "Your Guide to Law and Justice",
  image: law,
  title2: "Your Source for Legal Wisdom",
  title3: "Law Master",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#E67E22",
};

const Law = () => {
  return (
    <>
      <div>
        <section className="bg-gray-100  pt-36 pb-11">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#E67E22]">
              Your Trusted Legal Partner
            </h2>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a href="#lawservices">
              <button className="bg-[#2980B9] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">
              Get Started 
              </button>
              </a> 
            
          </div>
        </section>
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden mx-6">
          <Banner data={BannerData} />
        </div>

        <section className="py-20 px-6" id="lawservices">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-[#2980B9]">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white shadow-md p-8">
                <h3 className="text-xl font-semibold mb-4 text-[#E67E22]">
                  Legal Consultation
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  et eleifend eros. Vivamus interdum mollis massa, ac malesuada
                  libero pulvinar et.
                </p>
              </div>
              <div className="bg-white shadow-md p-8">
                <h3 className="text-xl font-semibold mb-4  text-[#E67E22]">
                  Contract Drafting
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  et eleifend eros. Vivamus interdum mollis massa, ac malesuada
                  libero pulvinar et.
                </p>
              </div>
              <div className="bg-white shadow-md p-8">
                <h3 className="text-xl font-semibold mb-4 text-[#E67E22]">
                  Litigation Support
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  et eleifend eros. Vivamus interdum mollis massa, ac malesuada
                  libero pulvinar et.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-11 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-8 text-[#2980B9] ">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-8 bg-blue-100 rounded-lg shadow-md">
              <p className="text-lg text-gray-700">
                Ive never had such accurate readings before. Highly recommended!
              </p>
              <p className="text-lg text-gray-800 mt-4">- John Doe</p>
            </div>
            <div className="p-8 bg-blue-100 rounded-lg shadow-md">
              <p className="text-lg text-gray-700">
                Absolutely amazing service! The insights provided were
                life-changing.
              </p>
              <p className="text-lg text-gray-800 mt-4">- Jane Smith</p>
            </div>
         
          </div>
        </div>
      </section>
      </div>
      <Footer/>
    </>
  );
};
export default Law;
