
import astrologyBackground from "../../assets/Images/unnamed.jpg";
import astrologer from "../../assets/Images/pandit.jpg";
import Footer from "../Footer/Footer";

const Astrology = () => {
  return (
    <div>
      <div className="relative h-[15rem] lg:h-auto pt-14">
        <img
          src={astrologyBackground}
          className="w-full h-full object-cover"
          alt="Astrology background"
        />
        <div className="absolute top-0 right-96 w-full h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-yellow-200  bg-transparent">
              <p>Discover Your Future With </p>
              <span className="mt-24 ">Our Astrologer</span>
            </h1>
            <p className="text-xl text-white">
              Unlock the secrets of the universe with our personalized astrology
              readings!
            </p>
          </div>
        </div>
      </div>

      <section className="py-12 px-4 md:pl-24">
        <div className="flex md:flex-row flex-col">
          <div className="">
            <img
              src={astrologer}
              className="object-cover lg:h-full lg:pt-0 md:h-52 md:w-96 md:pt-14 "
              alt="Astrology background"
            />
          </div>
          <div className="max-w-3xl mx-auto ">
            <h2 className="text-4xl font-semibold mt-11 pb-4 text-[#E67E22] md:pl-11 lg:pl-11 ">
              Make Your Dreams Come True
            </h2>
            <h1 className="text-xl font-semibold md:pl-11 lg:pl-11 pb-4 text-[#2980B9] italic">
              MEET OUR ASTROLOGER
            </h1>
            <p className="text-lg text-gray-700 text-start md:pl-11 lg:pl-11">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Morbi sit amet elit euismod, ultricies mi quis, lacinia
              justo. Vestibulum rhoncus, ex quis vestibulum commodo, nisi velit
              convallis eros, eu semper lorem est eu nunc. Cras sed arcu ac
              justo consectetur pharetra.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-8 text-[#E67E22] ">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#2980B9] rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Horoscope Readings
              </h3>
              <p className="text-lg text-gray-300">
                Unlock insights into your future with personalized horoscope
                readings.
              </p>
            </div>
            <div className="p-8 bg-[#2980B9] rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Birth Chart Analysis
              </h3>
              <p className="text-lg text-gray-300">
                Discover your strengths, weaknesses, and life path through
                detailed birth chart analysis.
              </p>
            </div>
            <div className="p-8 bg-[#2980B9] rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Zodiac Compatibility
              </h3>
              <p className="text-lg text-gray-300">
                Find out your compatibility with others based on zodiac signs
                and astrological insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-8 text-[#E67E22] ">
            Process of Kundali
          </h2>
          <div className="flex justify-between items-center md:flex-row flex-col">
            <div className="flex flex-col  items-center ">
              <div className="w-12 h-12 bg-[#2980B9] text-white rounded-full flex justify-center items-center mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <p className="text-lg font-semibold">Consultation</p>
            </div>
            <div className="w-px h-8 bg-[#2980B9]"></div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#2980B9] text-white rounded-full flex justify-center items-center mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <p className="text-lg font-semibold">Data Collection</p>
            </div>
            <div className="w-px h-8 bg-[#2980B9]"></div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#2980B9] text-white rounded-full flex justify-center items-center mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <p className="text-lg font-semibold">Analysis</p>
            </div>
            <div className="w-px h-8 bg-[#2980B9]"></div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#2980B9] text-white rounded-full flex justify-center items-center mb-4">
                <span className="text-xl font-bold">4</span>
              </div>
              <p className="text-lg font-semibold">Interpretation</p>
            </div>
            <div className="w-px h-8 bg-[#2980B9]"></div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#2980B9] text-white rounded-full flex justify-center items-center mb-4">
                <span className="text-xl font-bold">5</span>
              </div>
              <p className="text-lg font-semibold">Recommendations</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-8 text-[#E67E22] ">
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
      <Footer/>
    </div>
  );
};
export default Astrology;
