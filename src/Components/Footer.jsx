import SocialIcons from "./SocialIcons";

function Footer() {
  return (
    <main className='flex flex-col py-6 items-start md:self-stretch bg-[#1D5ADD]'>
        <section className='flex flex-col md:flex-row md:justify-between md:items-center items-start self-stretch gap-3 px-4 md:px-10 '>
            <div className='flex flex-col items-start self-stretch md:gap-4 gap-3 py-4 md:px-2'>
            <picture>
                <img src="/logolight.svg" alt="" />
            </picture>
            <span className='font-inter text-sm md:text-base text-white self-stretch'>
                We are a software development <br className="hidden md:block"/> company specialised in providing <br className="hidden md:block"/>  digital solutions to Businesses <br className="hidden md:block"/>  and SMEs in Nigeria.
            </span>
            <SocialIcons />
            </div>
            <ul className="footer flex flex-col md:flex-row md:gap-10 justify-center items-center md:self-center self-stretch gap-2">
                <li className="md:flex md:p-2 md:justify-center md:items-center md:gap-2">
                    <span className="font-inter text-sm md:text-base text-white">AboutUs</span>
                </li>
                <li className="md:flex md:p-2 md:justify-center md:items-center md:gap-2">
                    <span className="font-inter text-sm md:text-base text-white">Services</span>
                </li>
                <li className="md:flex md:p-2 md:justify-center md:items-center md:gap-2">
                    <span className="font-inter text-sm md:text-base text-white">Portfolio</span>
                </li>
                <li className="md:flex md:p-2 md:justify-center md:items-center md:gap-2">
                    <span className="font-inter text-sm md:text-base text-white">FAQ's</span>
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