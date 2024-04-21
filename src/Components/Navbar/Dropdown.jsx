import { FaCaretDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

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
const Dropdown = () => {
  return (
    <div className="relative flex flex-row max-md:hidden">
              <ul className="flex-row cursor-pointer sm:flex">
                {MenuLinks.map((data, index) => (
                  <li key={index} className="mt-2">
                    <a
                      href={data.link}
                      className="pl-10 font-semibold text-brandPrimary"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
                {/* Dropdown  */}
                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="mt-2 pl-10  text-brandPrimary flex justify-between font-semibold"
                  >
                    Services 
                    <FaCaretDown className="ml-2" />                 
                  </a>
                  
                  {/* Dropdown Links */}
                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white mt-2">
                    <ul className="space-y-2">
                      {DropdownLinks.map((data) => (
                        // eslint-disable-next-line react/jsx-key
                        <li>
                          <a
                            className="text-gray-500 hover:text-white duration-200 inline-block w-full p-2 hover:bg-brandPrimary rounded-md font-semibold"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
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
  );
};

export default Dropdown;


