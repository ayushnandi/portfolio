import { useState } from "react";
import Home from "./Components/Home";
import Gridlayout from "./Components/Gridlayout";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Footer from './Components/Footer'
import "../src/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="bg-bgHome">
        <div className="flex pl-[8rem] bg-[#212121] justify-between items-center pr-[3rem] w-full h-[5rem] sticky top-0 z-[999] ">
          <div className=" text-4xl MDPrimer text-sk1 cursor-pointer [text-shadow:1px_1px_8px_var(--tw-shadow-color)] shadow-black">
            AYUSH NANDI
          </div>
          <div className="flex justify-between bg-[#212121] MDPrimer py-[3px] px-[3px] rounded-3xl text-[1rem] font-semibold text-sk1 cursor-pointer ">

            <div className="button" href="about">
                <h6>About</h6>
            </div>
            <div className="button" href="skills"> 
              <h6>Skills</h6>
            </div>
            <div className="button" href="projects">
              <h6>Projects</h6>
            </div>
            <div className="button" href="footer">
              <h6>Contact</h6>
            </div>
            <div></div>
          </div>
        </div>
        <div className="bg-bgHome h-[100vh]">
          <Home />
          <Gridlayout />
        </div>
        <div>
          <div id="about">
          <About />
          </div>
          <dir id="skills"></dir>
          <Skills />
          <div className="bg-[#161616] h-[115vh] " id="projects"><Projects /></div>
          <div id="footer">
          <Footer/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
