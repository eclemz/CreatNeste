import { missionCard } from '../Data/Data'

function MissionCard() {
  return (
    <main className='flex flex-col justify-center items-center self-stretch gap-4 pt-10 pb-5 px-4 '>
        <section className='flex flex-col justify-center items-start slef-stretch py-5 gap-4'>
            <div className='flex flex-col items-start justify-center gap-2'>
                <span className='font-inter text-xs font-semibold text-[#1D5ADD]'>
                    ABOUT US
                </span>
                <h3 className='font-inter text-2xl font-semibold text-[#242424]'>
                    Meet the Team
                </h3>
            </div>
            <p className='font-inter text-base text-gray-600'>
                Our team of diverse, passionate people that foster a culture that empowers you to do your best work.
            </p>
        </section>
        {missionCard.map((item, index) =>{
            const Icon = item.icon; 
            return (
            <article key={index} className='flex flex-col justify-center items-start self-stretch rounded-lg border border-[#F0F0F0] gap-2 py-4 px-2' style={item.style}>
                <div className='flex items-center gap-2'>
                    <div className='flex h-7 w-7 justify-center items-center gap-[0.375rem] rounded-full bg-white text-[#1D5ADD]'>
                        <Icon className='h-4 w-4 shrink-0'/>
                    </div>
                    <span className='font-inter text-base font-semibold text-[#242424]'>
                        {item.title}
                    </span>
                </div>
                <p className='font-inter text-xs text-[#565656] self-stretch'>
                    {item.desc}
                </p>
            </article>
        )})};
    </main>
  )
}

export default MissionCard