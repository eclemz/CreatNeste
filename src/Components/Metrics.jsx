
function Metrics() {
  return (
    <main className='flex flex-col justify-center items-center gap-4 bg-white py-6 px-4'>
        <section className='flex flex-col justify-center items-center gap-1'>
            <h2 className='font-inter text-xs font-semibold text-[#1D5ADD]'>
                OUR SOFTWARE SOLUTIONS
            </h2>
            <h3 className='font-inter text-xl font-semibold text-black'>
                Our Impact  
            </h3>
        </section>

            <ul className='flex flex-col items-start gap-3 p-6 self-stretch rounded-xl bg-[#1D5ADD]'>
                <li className='flex flex-col justify-center items-center self-stretch gap-1'>
                   <h3 className='text-white align-middle font-inter text-2xl font-semibold'>10+</h3>
                     <p className='text-white font-inter text-base align-middle'>
                        Completed Projects
                     </p>
                </li>
                <li className='flex flex-col justify-center items-center self-stretch gap-1'>
                    <h3 className='text-white align-middle font-inter text-2xl font-semibold'>15</h3>
                     <p className='text-white font-inter text-base align-middle'>
                        Happy Clients
                     </p>
                </li>
                <li className='flex flex-col justify-center items-center self-stretch gap-1'>
                    <h3 className='text-white align-middle font-inter text-2xl font-semibold'>6</h3>
                     <p className='text-white font-inter text-base align-middle'>
                        Industry Experts
                     </p>
                </li>
                <li className='flex flex-col justify-center items-center self-stretch gap-1'>
                    <h3 className='text-white align-middle font-inter text-2xl font-semibold'>12+</h3>
                     <p className='text-white font-inter text-base align-middle'>
                        Happy Clients
                     </p>
                </li>
            </ul>
    </main>
  )
}

export default Metrics