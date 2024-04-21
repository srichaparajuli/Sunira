import mm from '../../assets/Images/people02.png'
import about from '../../assets/Images/abouts.png'
import Footer from '../Footer/Footer'
function AboutUs() {
  return (
    <div className=''>
        <div className="bg-green pt-8">
    <div className="items-center  flex flex-col justify-center ">
  <div className="text-center flex flex-col ">
  <div className="text-center">
    <p className="mt-1 mb-4 text-white inline-block bg-brandPrimary px-3 rounded-xl text-bold">Know Our Business</p>
  </div>
    <p className="my-4 sm:text-sm md:text-xl lg:text-2xl text-center font-bold text-hedingColor">Empowering Your Ventures: Where <span className="text-brandPrimary"> Company Registration, </span>Astrology, and Legal Expertise <span className="text-brandPrimary"> Converge</span></p>
  </div>
  </div>


  <div className="w-full  pb-16 px-4">
   <div className="max-w[1240px] mx-auto grid md:grid-cols-2 w-4/5">
   <img className="w-[500px] mx-auto h-56  my-4" src={about} alt=''/>
   <div className='flex flex-col justify-left'>
   <p className="md:text-base text-base text-justify pt-3"> At <span className='text-brandPrimary font-semibold'>Sunira</span>, we are your comprehensive solution hub, 
   merging expertise in company registration, astrology, and legal affairs. From laying the 
   foundation of your business through seamless company registration processes to navigating
   the complexities of astrological insights, and delving into legal intricacies concerning 
   land businesses and laws, we stand as your trusted partner. Our tailored services ensure your 
   ventures are not only established with precision but also guided by astrological foresight and fortified with 
   legal expertise, ensuring a solid framework for your success journey.</p>
   </div>
  </div>
  </div>
  </div>
      <div className="w-full ">
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 ">
        <div className="text-center pb-8">
            
            <span className="flex-grow block border-t border-primary" aria-hidden="true" role="presentation"></span>
                <span className="flex-none block mx-4   px-4 py-2.5  text-3xl md:text-3xl lg:text-3xl leading-none font-medium uppercase bg-hedingColor text-white">
                    Meet the team
                </span>
                <span className="flex-grow block border-t border-primary" aria-hidden="true" role="presentation"></span>
        </div>
        <div className="grid grid-cols-1 p-2 bg-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="w-full bg-white rounded-lg sahdow-lg p-4 flex flex-col justify-center items-center">
                <div className="mb-8">
                    <img className="object-center object-cover rounded-full h-36 w-36 border-2 border-brandPrimary" src={mm} alt="photo"/>
                </div>
                <div className="text-center">
                    <p className="text-md text-gray-900 font-bold mb-2">Raju Babu Dhakal</p>
                    <p className="text-base text-gray-400 font-normal">Software Engineer</p>
                </div>
            </div>


            <div className="w-full bg-white rounded-lg sahdow-lg p-4 flex flex-col justify-center items-center">
                <div className="mb-8">
                    <img className="object-center object-cover rounded-full h-36 w-36 border-2 border-brandPrimary" src={mm} alt="photo"/>
                </div>
                <div className="text-center">
                    <p className="text-md text-gray-900 font-bold mb-2">Raju Babu Dhakal</p>
                    <p className="text-base text-gray-400 font-normal">Software Engineer</p>
                </div>
            </div>


            <div className="w-full bg-white rounded-lg sahdow-lg p-4 flex flex-col justify-center items-center">
                <div className="mb-8">
                    <img className="object-center object-cover rounded-full h-36 w-36 border-2 border-brandPrimary" src={mm} alt="photo"/>
                </div>
                <div className="text-center">
                    <p className="text-md text-gray-900 font-bold mb-2">Raju Babu Dhakal</p>
                    <p className="text-base text-gray-400 font-normal">Software Engineer</p>
                </div>
            </div>

            <div className="w-full bg-white rounded-lg sahdow-lg p-4 flex flex-col justify-center items-center">
                <div className="mb-8">
                    <img className="object-center object-cover rounded-full h-36 w-36 border-2 border-brandPrimary" src={mm} alt="photo"/>
                </div>
                <div className="text-center">
                    <p className="text-md text-gray-900 font-bold mb-2">Raju Babu Dhakal</p>
                    <p className="text-base text-gray-400 font-normal">Software Engineer</p>
                </div>
            </div>
          

            <div className="w-full bg-white rounded-lg sahdow-lg p-4 flex flex-col justify-center items-center">
                <div className="mb-8">
                    <img className="object-center object-cover rounded-full h-36 w-36 border-2 border-brandPrimary" src={mm} alt="photo"/>
                </div>
                <div className="text-center">
                    <p className="text-md text-gray-900 font-bold mb-2">Raju Babu Dhakal</p>
                    <p className="text-base text-gray-400 font-normal">Software Engineer</p>
                </div>
            </div>

        </div>
    </section>
</div>
<Footer/>
    </div>
  )
}

export default AboutUs
