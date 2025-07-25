import { benefits } from "../Data/Data";
import { Buttons1 } from "./Buttons";

function Benefits({ showAll = false, showSection = false }) {
  return (
    <>
      <main className="flex flex-col md:flex-row md:p-10 py-6 px-4 md:justify-between justify-center items-start md:items-center md:gap-5 gap-6">
        <div className="flex flex-col md:flex-1 md:gap-6 ">
          {/* {!showSection && (
            <picture className="md:hidden flex items-center w-full justify-center">
              <img
                src="/Subtract1.png"
                alt=""
                className="flex self-center h-[25rem] w-[24rem]"
              />
            </picture>
          )} */}
          {showSection && (
            <>
              <section className="flex flex-col justify-center items-start gap-4 py-2">
                <div className="flex flex-col justify-center items-start md:items-center self-stretch gap-3 md:gap-1">
                  <span className="font-inter text-sm md:font-bold font-semibold text-[#1D5ADD]">
                    Benefits
                  </span>
                  <h4 className="font-inter text-xl md:text-[28px] font-semibold text-[#242424]">
                    A digital agency with added value.
                  </h4>
                </div>
              </section>

              <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-2 md:gap-5 self-stretch">
                {(showAll ? benefits : benefits.slice(0, 3)).map(
                  (item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className="flex md:flex-1 flex-col md:items-center items-start self-stretch md:gap-4 gap-2 md:py-6 md:px-4 py-2 md:self-stretch rounded-lg border border-[#F0F0F0] shadow-sm"
                      >
                        <Icon className="h-8 w-8 text-[#1D5ADD] " />
                        <h1 className="font-inter text-base md:text-lg font-semibold md:text-center text-[#313131]">
                          {item.title}
                        </h1>
                        <p className="font-inter text-sm md:text-base md:self-stretch md:text-center ">
                          {item.desc}
                        </p>
                      </div>
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
        <section className="flex items-center self-stretch gap-5 py-2 px-4 md:p-10">
          <div className="flex flex-1 flex-col justify-center items-start gap-4 py-3">
            <div className="flex flex-col items-start self-stretch gap-2">
              <div className="flex flex-col items-start justify-center self-stretch gap-1">
                <div className="flex flex-col justify-center items-center self-stretch gap-2 py-2 px-4">
                  <span className="font-inter text-xs font-bold text-[#1D5ADD] self-stretch">
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
                    <h3 className="font-inter text-base md:text-lg font-semibold text-[#313131]">
                      {item.title}
                    </h3>
                    <p className="font-inter text-sm md:self-stretch ">
                      {item.desc}
                    </p>
                  </div>
                )
              )}
            </div>
            <Buttons1 className="flex bg-white shadow-md hover:shadow-lg border-[0.5px] border-[#1D5ADD] md:p-4 py-2 px-3  md:self-start self-stretch gap-2">
              Learn More
            </Buttons1>
          </div>
          <picture className="hidden md:flex flex-1 md:h-[29.8rem] items-center py-8">
            <img
              src="/Subtract1.png"
              alt=""
              className="flex self-center justify-center md:h-[29.8rem] md:w-[23rem] h-[25rem] w-[24rem]"
            />
          </picture>
        </section>
      )}
    </>
  );
}

export default Benefits;
