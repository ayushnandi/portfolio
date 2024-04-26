import React from "react";
import { DaVinciResolve1,adobeXD1, bootstrap1 ,figma1 ,git1  ,java1 ,tailwind1,react2
 , python1 ,nodejs3 ,mongoDB1 ,js1} from "../../public/assets/assetsManager";

export default function skills() {
  return (
    <div className=" w-[100%] pb-[3rem]">
      <div>
        <div className="m-10"></div>
        <div className="flex justify-center">
          <h1 className="text-sk1 text-[2.3rem] PoppinsBold">SKILLS AND TOOLS</h1>
        </div>
      </div>
      <div>
        <div className="text-sk1 flex justify-center mt-[1.2rem]">
          <div className="flex m-5 gap-x-[8rem] w-[80%]">
            <div className="flex items-center">
              <img
                src={java1}
                className="h-[4rem] mx-5"
                alt=""
              />
              <p className="text-[14px]">
              {/* I primarily focus on utilizing  */}
              Java as my primary programming language across various formats. 
              This includes tackling competitive coding challenges, particularly in Data Structures and Algorithms (DSA),
               {/* as well as undertaking  */}
               basic GUI (Graphical User Interface) development.
              </p>
            </div>
            <div className="flex items-center">
              <img
                src={python1}
                className="h-[4rem] mx-5"
                alt=""
              />
              <p className="text-[14px]">
              
I leverage Python as a supplementary language due to its extensive libraries, which enhance my efficiency and refine my machine learning endeavors.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="w-[100%] flex justify-end my-[3rem] PoppinsBold relative">
            <div className="text-white w-[32%] absolute start-[2rem] flex-col md:flex-row justify-center items-center">
              
              <div className="gap-[2rem] flex pt-[1.6rem] justify-center items-center">
                <img
                  src={adobeXD1}
                  alt=""
                  className="h-[5rem] w-[4rem]"
                />
                <h2 className="text-[2rem]">Adobe XD</h2>
              </div>
              <div className="gap-[2rem] pt-[1.8rem] flex justify-center items-center">
                <h2 className="text-[2rem]">Figma</h2>
                <img
                  src={figma1}
                  alt=""
                  className="h-[5rem] w-[2.5rem]"
                />
              </div>
              <div className="gap-[1rem] pt-[1.8rem] flex justify-center items-center">
              <img
                  src={DaVinciResolve1}
                  alt=""
                  className="h-[5rem] w-[4.5rem]"
                />
                <h2 className="text-[2rem]">DaVinci Resolve</h2>

              </div>
            </div>
            <div className="skills-bg">
              <div className="relative">
                <div className="absolute left-[12rem] top-[1.2rem] gap-[10px] flex justify-center items-center">
                  <img
                    src={react2}
                    alt=""
                    className="h-[5rem] w-[5rem]"
                  />
                  <h2 className="text-[2rem]">React</h2>
                </div>
                <div className="absolute left-[30rem] top-[1.2rem] gap-[10px] flex justify-center items-center">
                  <img
                    src={mongoDB1}
                    alt=""
                    className="h-[5rem] w-[5rem]"
                  />
                  <h2 className="text-[2rem]">MongoDB</h2>
                </div>
                <div className="absolute left-[3rem] top-[8.2rem] gap-[10px] flex justify-center items-center">
                  <img
                    src={nodejs3}
                    alt=""
                    className="h-[5rem] w-[5rem]"
                  />
                  <h2 className="text-[2rem]">Node JS</h2>
                </div>
                <div className="absolute left-[22rem] top-[8.2rem] gap-[10px] flex justify-center items-center">
                  <img
                    src={git1}
                    alt=""
                    className="h-[5rem] w-[5rem]"
                  />
                  <h2 className="text-[2rem]">Git-hub</h2>
                </div>
                <div className="absolute left-[40rem] top-[8.2rem] gap-[10px] flex justify-center items-center">
                  <img
                    src={bootstrap1}
                    alt=""
                    className="h-[5rem] w-[5rem]"
                  />
                  <h2 className="text-[2rem]">Bootstrap</h2>
                </div>
                <div className="absolute left-[11rem] top-[15.2rem] gap-[10px] flex justify-center items-center">
                  <img
                    src={tailwind1}
                    alt=""
                    className="h-[5rem] w-[5rem]"
                  />
                  <h2 className="text-[2rem]">Tailwind</h2>
                </div>
                <div className="absolute left-[31rem] top-[15.2rem] gap-[10px] flex justify-center items-center">
                  <img
                    src={js1}
                    alt=""
                    className="h-[5rem] w-[4rem]"
                  />
                  <h2 className="text-[2rem]">Javascript</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
