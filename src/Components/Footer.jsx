import SocialIcons from "./SocialIcons";

function Footer() {
  return (
    <main className='flex flex-col py-6 items-start bg-[#1D5ADD]'>
        <section className='flex flex-col items-start self-stretch gap-3 px-4 '>
            <div className='flex flex-col items-start self-stretch gap-3 py-4'>
            <picture>
                <img src="/logolight.svg" alt="" />
            </picture>
            <span className='font-inter text-sm text-white self-stretch'>
                We are a software development company specialised in providing digital solutions to Businesses and SMEs in Nigeria.
            </span>
            <SocialIcons />
            </div>
            <ul className="footer flex flex-col justify-center items-center self-stretch gap-2">
                <li>
                    <span className="font-inter text-sm text-white">About Us</span>
                </li>
                <li>
                    <span className="font-inter text-sm text-white">Services</span>
                </li>
                <li>
                    <span className="font-inter text-sm text-white">Portfolio</span>
                </li>
                <li>
                    <span className="font-inter text-sm text-white">FAQ's</span>
                </li>
            </ul>
        </section>

        <section className="flex p-4 items-center gap-8 self-stretch">
            <div className="flex flex-col justify-center items-start gap4">
                <span className="font-inter text-xs font-semibold text-white">Privacy Policy</span>
                <span className="font-inter text-xs font-semibold text-white">All rights reserved</span>
            </div>
        </section>
    </main>
  )
}

export default Footer