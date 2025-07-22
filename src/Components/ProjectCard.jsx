import { projectCard } from "../Data/Data"

function ProjectCard() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center py-4 gap-4'>
        {projectCard.map((item, index) => (
            <article key={index} className='flex flex-col justify-center items-center gap-1 pb-4'>
                <picture className='self-stretch h-[17rem]'>
                    <img src={item.image} alt="" />
                </picture>
                <div className='flex flex-col items-start self-stretch gap-2'>
                    <div className='flex flex-col items-start self-stretch gap-1'>
                        <span className='font-inter text-xs font-semibold'>
                            {item.title}
                        </span>
                        <span className='font-inter text-base font-semibold'>
                            {item.name}
                        </span>
                    </div>
                    <button className='flex py-2 pl-0 pr-4 text-sm font-inter'>
                        View Project
                    </button>
                </div>
            </article>
        ))}
    </section>
  )
}

export default ProjectCard