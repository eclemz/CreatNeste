import SocialIcons from "./SocialIcons";
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <main className='flex flex-col py-6 lg:py-7 items-start md:self-stretch bg-[#1D5ADD]'>
        <section className='flex flex-col md:flex-row md:justify-between md:items-center items-start self-stretch gap-3 px-4 md:px-10 lg:px-14 '>
            <div className='flex flex-col items-start self-stretch md:gap-4 gap-3 py-4 lg:py-5 md:px-2'>
            <picture>
                <img src="/logolight1.svg" alt="" 
                     className="hidden md:block lg:w-[11rem] lg:h-[1.5rem] md:w-[7.44519rem] md:h-[1rem] "/>
                <img src="/logolight.svg" alt="" 
                     className="md:hidden block"/>
            </picture>
            <span className='font-inter text-sm md:text-base font-light text-white self-stretch'>
                We are a software development <br className="hidden md:block"/> company specialised in providing <br className="hidden md:block"/>  digital solutions to Businesses <br className="hidden md:block"/>  and SMEs in Nigeria.
            </span>
            <SocialIcons />
            </div>
            <ul className="footer flex flex-col md:flex-row md:gap-10 justify-center items-center md:self-center self-stretch gap-2">
                <li className="md:flex md:p-2 md:justify-center md:items-center md:gap-2">
                    <Link to="/about" className="font-inter text-sm md:text-base text-white hover:underline">
                    About Us
                    </Link>
                </li>
                <li className="md:flex md:p-2 md:justify-center md:items-center md:gap-2">
                    <Link to="/services" className="font-inter text-sm md:text-base text-white hover:underline">
                    Services
                    </Link>
                </li>
                <li className="md:flex md:p-2 md:justify-center md:items-center md:gap-2">
                    <Link to="/portfolio" className="font-inter text-sm md:text-base text-white hover:underline">
                    Portfolio
                    </Link>
                </li>
                <li className="md:flex md:p-2 md:justify-center md:items-center md:gap-2">
                    <Link to="/faq" className="font-inter text-sm md:text-base text-white hover:underline">
                    FAQs
                    </Link>
                </li>
            </ul>
        </section>

        <section className="flex p-4 md:py-4 md:px-14 items-center gap-8 md:self-center self-stretch">
            <div className="flex flex-col md:flex-row justify-center  md:items-center items-start md:gap-8 gap-4">
                <span className="font-inter text-xs md:text-sm font-semibold text-white">Privacy Policy</span>
                <span className="font-inter text-xs md:text-sm font-semibold text-white">All rights reserved</span>
            </div>
        </section>
    </main>
  )
}

export default Footer