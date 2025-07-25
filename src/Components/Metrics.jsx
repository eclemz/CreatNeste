
function Metrics() {
  return (
    <main className='flex flex-col justify-center items-center md:self-stretch gap-4 bg-white py-6 md:px-10 px-4'>
        <section className='flex flex-col justify-center items-center md:gap-2 gap-1'>
            <h2 className='font-inter text-xs md:font-bold font-semibold text-[#1D5ADD]'>
                OUR SOFTWARE SOLUTIONS
            </h2>
            <h3 className='font-inter text-xl md:text-3xl font-semibold text-black'>
                Our Impact  
            </h3>
        </section>

            <ul className='flex flex-col md:flex-row items-start md:justify-center md:item-center gap-3 md:gap-9 p-6 md:p-5 self-stretch rounded-xl md:rounded-2xl bg-[#1D5ADD]'>
                <li className='flex flex-col justify-center items-center self-stretch gap-1'>
                   <h3 className='text-white text-center font-inter text-2xl md:text-4xl font-semibold'>10+</h3>
                     <p className='text-white font-inter text-base text-center'>
                        Completed Projects
                     </p>
                </li>
                <li className='flex flex-col justify-center items-center self-stretch gap-1'>
                    <h3 className='text-white align-middle font-inter text-2xl md:text-4xl font-semibold'>15</h3>
                     <p className='text-white font-inter text-base text-center'>
                        Happy Clients
                     </p>
                </li>
                <li className='flex flex-col justify-center items-center self-stretch gap-1'>
                    <h3 className='text-white text-center font-inter text-2xl md:text-4xl font-semibold'>6</h3>
                     <p className='text-white font-inter text-base text-center'>
                        Industry Experts
                     </p>
                </li>
                <li className='flex flex-col justify-center items-center self-stretch gap-1'>
                    <h3 className='text-white text-center font-inter text-2xl md:text-4xl font-semibold'>12+</h3>
                     <p className='text-white font-inter text-base text-center'>
                        Happy Clients
                     </p>
                </li>
            </ul>
    </main>
  )
}

export default Metrics