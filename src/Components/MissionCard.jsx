import { missionCard } from '../Data/Data'

function MissionCard() {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center  items-center self-stretch md:gap-5 gap-4 pt-10 pb-5 md:px-10 px-4 '>
        <section className='flex min-h-[10rem] h-full flex-col justify-center items-start slef-stretch py-5 gap-4'>
            <div className='flex flex-col items-start md:justify-between justify-center gap-2'>
                <span className='font-inter text-xs md:font-bold font-semibold text-[#1D5ADD]'>
                    ABOUT US
                </span>
                <h3 className='font-inter text-2xl md:text-3xl font-semibold text-[#242424]'>
                    Meet the Team
                </h3>
            </div>
            <p className='font-inter text-base text-[#475467]'>
                Our team of diverse, passionate people that foster a culture that empowers you to do your best work.
            </p>
        </section>
        {missionCard.map((item, index) =>{
            const Icon = item.icon; 
            return (
            <article key={index} className='flex min-h-[14rem] flex-col h-full  justify-center items-start self-stretch rounded-lg border border-[#F0F0F0] md:gap-3 gap-2 md:py-5 md:px-3 py-4 px-2' style={item.style}>
                <div className='flex items-center gap-2'>
                    <div className='flex h-7 w-7 md:h-8 md:w-8 p-2 justify-center items-center gap-[0.375rem] rounded-full bg-white text-[#1D5ADD]'>
                        <Icon className='h-4 w-4 md:h-5 md:w-5 shrink-0'/>
                    </div>
                    <span className='font-inter text-base md:text-lg font-semibold text-[#242424]'>
                        {item.title}
                    </span>
                </div>
                <p className='font-inter text-xs md:text-base text-[#565656] self-stretch'>
                    {item.desc}
                </p>
            </article>
        )})};
    </main>
  )
}

export default MissionCard