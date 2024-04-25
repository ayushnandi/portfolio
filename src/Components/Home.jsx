import React from "react";

export default function Home() {
  const name = "Ayush Nandi";
  return (
    <div>
      <div className=" w-full justify-center  ">

        <div>
          
          <div className="flex justify-center items-center">
            <div className="text-sk1">
              <h1 className="text-[8rem] mt-[-1rem] flex loda">WEB DEVELOPER</h1>
            </div>
          </div>

          <div>
            <div className="text-sk1 pl-[10%] mt-[-1rem]">
              <div className="flex gap-x-[8rem] w-[70%]">
                <div className="">
                  <p className="text-[14px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce vel pretium orci, sit amet blandit libero. Etiam
                    imperdiet urna id neque commodo gravida. Nunc euismod non
                    magna eget tincidunt
                  </p>
                </div>
                <div>
                  <p className="text-[14px]">
                    Duis cursus vestibulum augue, sed ultrices augue tincidunt
                    eu. Aliquam viverra velit non sapien pulvinar, eu tristique
                    ante iaculis. Etiam accumsan facilisis maximus.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="m-10"></div>
        </div>
      </div>
    </div>
  );
}
