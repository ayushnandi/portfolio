import React from "react";

export default function About() {
  return (
    <div className="h-[100vh] relative">
      <div className="">
        <img
          src="../../public/svg/VanGosh.svg"
          alt=""
          className="absolute right-[1.6rem] h-[12.6rem] top-[-1rem]"
        />
      </div>
      <div className="about-bg">
        <div>
          <div className="flex justify-center items-center">
            <h1 className="text-black text-[2.3rem] PoppinsBold pt-[7.3rem] ">
              ABOUT ME
            </h1>
          </div>
          <div className="flex justify-around text-[1rem] items-start PoppinsRegular h-[70vh] mx-[20%] gap-[10%]">
            <div className="my-[1rem] gap-[2rem] font-bold">
              {/* <img
                src="../../public/svg/einstein.svg"
                alt=""
                className="float-left px-[10px] h-[5rem] my-[1rem]"
              /> */}
              <p className="my-[1rem]">
                Hi ! My name is Ayush Nandi and I am a B.tech student at Vellore
                Institute of Technology, pursuing computer science and
                engineering. As known to be a versatile web developer, I’m
                skilled in Java development, UI/UX design, react development
              . I also believe in solving problems one
                line of code at a time while delivering captivating
                presentations.
              </p>
              <p className="">
                Working with designers and realizing their ideas is what I enjoy
                doing the best. I also think that performance optimization and
                accessibility are quite important. Outside of work, I take joy
                in chess, badminton, photography, nature, athletics, film making
                and soccer.
              </p>
            </div>
            {/* <img src="../../public/img/ayush_ref1.png" alt="" className="h-[80%]" /> */}
          </div>
        </div>
        <div>
          <img
            src="../../public/img/books.png"
            alt=""
            className="absolute h-[19.6rem] left-[1%] bottom-[0rem]"
          />
          {/* <img
            src="../../public/img/clock.jpg"
            alt=""
            className="absolute h-[6.2rem] rotate-[-30deg] left-[6%] top-[3rem]"
          /> */}
          {/* <img
            src="../../public/img/sun.png"
            alt=""
            className="absolute h-[13rem] right-[8%] bottom-[-2rem]"
          /> */}
        </div>
      </div>
    </div>
  );
}
