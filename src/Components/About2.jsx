import React from "react";

export default function About() {
  return (
    <div className="">
      <div className="about-bg">
        <div className="flex items-center justify-center">
          <h1 className="white text-sk1 text-[40px] pt-[5.3rem] pb-[3rem] font-bold PoppinsBold">
            ABOUT AYUSH
          </h1>
        </div>
        <div className="h-[2rem] "></div>
        <div className="flex justify-between gap-[8rem] items-center ">
          <div className="flex flex-col text-sk1 PoppinsRegular text-[15px] pl-[15%] gap-y-[3rem]">
            <div className="">
              <span className="text-[30px]">H</span>
              <span className="text-[20px]">i</span> ! My name is Ayush Nandi
              and I am a B.tech student at Vellore Institute of Technology,
              pursuing computer science and engineering. As known to be a
              versatile web developer, I’m skilled in Java development, UI/UX
              design, react development, social media management. I also believe
              in solving problems one line of code at a time while delivering
              captivating presentations.
            </div>
            <div className="">
              Working with designers and realizing their ideas is what I enjoy
              doing the best. I also think that performance optimization and
              accessibility are quite important. Outside of work, I take joy in
              chess, badminton, photography, nature, athletics, film making and
              soccer.
            </div>
          </div>
          <img
            src="../../public/svg/pfp.svg"
            className="h-[23rem] pr-[12.3%]"
            alt="Ayush SVG"
          />
        </div>
      </div>
    </div>
  );
}
