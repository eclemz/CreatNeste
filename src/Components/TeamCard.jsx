import React from 'react'
import { teamCard } from '../Data/Data'

function TeamCard() {
  return (
    <main className='flex flex-col items-center self-stretch gap-4 pt-10 pb-5 px-4'>
        <h3 className='font-inter text-2xl text-[#242424] font-semibold'>Meet The Team</h3>
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-start self-stretch gap-8'>
            {teamCard.map((item,index) =>(
                <article key={index} className='flex flex-col items-start self-stretch gap-2 shadow-md'>
                    <picture className='flex-1 self-stretch'>
                        <img src={item.image} alt="" className='w-full' />
                    </picture>
                    <div className='flex flex-col items-start self-stretch gap-[2px]'>
                        <span className='font-inter text-sm font-semibold text-[#242424]'>{item.name}
                        </span>
                        <span className='font-inter text-sm text-[#565656] self-stretch'>{item.title}</span>
                    </div>
                </article>
            ))}
        </section>
    </main>
  )
}

export default TeamCard