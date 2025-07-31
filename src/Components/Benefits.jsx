import { benefits } from "../Data/Data";
import { Buttons1 } from "./Buttons";

function Benefits({ showAll = false, showSection = false }) {
  return (
    <>
      <main className="flex flex-col md:flex-row lg:py-[3.75rem] lg:px-14 md:p-10 py-6 px-4 md:justify-between justify-center items-start md:items-center lg:gap-6 md:gap-5 gap-6 lg:self-stretch">
        <div className="flex flex-col md:flex-1 md:gap-6">
          {showSection && (
            <>
              <section className="flex flex-col justify-center items-start gap-4 py-2">
                <div className="flex flex-col justify-center items-center self-stretch lg:gap-4 gap-3 md:gap-1">
                  <span className="font-inter text-xs md:text-sm md:font-bold font-semibold text-[#1D5ADD]">
                    Benefits
                  </span>
                  <h4 className="font-inter text-xl md:text-[28px] lg:text-[2rem] font-semibold text-[#242424]">
                    A digital agency with added value.
                  </h4>
                </div>
              </section>

              <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-2 md:gap-5 lg:gap-6 self-stretch">
                {(showAll ? benefits : benefits.slice(0, 3)).map(
                  (item, index) => {
                    const Icon = item.icon;
                    return (
                      <article
                        key={index}
                        className="flex md:flex-1 md:flex-col flex-row w-full md:items-center items-start self-stretch md:gap-4 gap-2 md:py-6 md:px-4 py-3 px-2 md:self-stretch rounded-lg border-[0.4px] md:border border-[#F0F0F0] bg-[#FFF]"
                      >
                        <i className="flex self-stretch md:self-center justify-center p-2 lg:h-14 lg:w-14 md:h-10 md:w-10 h-8 w-8 lg:p-4 bg-[#E8EFFC] items-center lg:gap-[0.41rem] md:gap-1 gap-1 rounded-full">
                        <Icon className="z-20 flex text-[#1D5ADD] lg:h-6 lg:w-8 md:h-5 md:w-4 w-6 h-6"/>
                        </i>
                        <div className="flex flex-1 gap-1 md:gap-0 flex-col md:items-center items-start self-stretch">
                        <h1 className="font-inter text-start text-base md:text-lg lg:text-xl font-semibold md:text-center text-[#242424]">
                          {item.title}
                        </h1>
                        <p className="font-inter text-sm md:text-base md:self-stretch md:text-center text-[#565656] ">
                          {item.desc}
                        </p>
                        </div>
                      </article>
                    );
                  }
                )}
              </section>
            </>
          )}
        </div>
      </main>

      {/* Section For Home page */}
      {!showSection && (
        <section className="flex items-center self-stretch lg:gap-0 gap-5 py-2 px-4 md:p-10 lg:py-16 lg:px-14">
          <div className="flex flex-1 flex-col justify-center items-start gap-4 py-3 lg:py-6">
            <div className="flex flex-col items-start self-stretch gap-2 lg:gap-1">
              <div className="flex flex-col items-start justify-center self-stretch gap-1">
                <div className="flex flex-col justify-center items-center lg:items-start self-stretch gap-2 ">
                  <span className="font-inter text-xs lg:text-sm font-bold text-[#1D5ADD] self-stretch">
                    BENEFITS
                  </span>
                </div>
                <h3 className="font-inter text-3xl text-[#242424] font-semibold self-stretch">
                  A digital agency with added value.
                </h3>
              </div>
            </div>

            <div className="flex flex-col items-start self-stretch gap-2">
              {(showAll ? benefits : benefits.slice(0, 3)).map(
                (item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start self-stretch rounded-lg md:py-3 gap-2 "
                  >
                    <h3 className="font-inter text-base md:text-lg lg:text-xl font-semibold text-[#313131]">
                      {item.title}
                    </h3>
                    <p className="font-inter text-sm lg:text-base md:self-stretch text-[#565656] ">
                      {item.desc}
                    </p>
                  </div>
                )
              )}
            </div>
            <Buttons1 className="flex bg-white shadow-md hover:shadow-lg border-[0.5px] border-[#1D5ADD] md:px-4 py-2 lg:py-3 px-3  md:self-start self-stretch gap-2">
              Learn More
            </Buttons1>
          </div>
          <picture className="hidden md:flex flex- md:h-[29.8rem] lg:h-[34.75rem] lg:w-[50%] items-center">
            <img
              src="/Subtract1.svg"
              alt=""
              className="flex self-center justify-center lg:h-[34.75rem] lg:w-[45rem] md:h-[29.8rem] md:w-[23rem] h-[25rem] w-[24rem]"
            />
          </picture>
        </section>
      )}
    </>
  );
}

export default Benefits;
