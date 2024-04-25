import { useState } from "react";
import Home from "./components/Home";
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
        <div className="flex pl-[8rem] justify-between items-center pr-[3rem] w-full h-[5rem] sticky top-0 z-[999] ">
          <div className=" text-4xl MDPrimer text-sk1 cursor-pointer [text-shadow:1px_1px_8px_var(--tw-shadow-color)] shadow-black">
            AYUSH NANDI
          </div>
          <div className="flex justify-between bg-[#212121] MDPrimer py-[3px] px-[3px] rounded-3xl text-[1rem] font-semibold text-sk1 cursor-pointer ">

            <div className="button">
                <h6>About</h6>
            </div>
            <div className="button"> 
              <h6>Skills</h6>
            </div>
            <div className="button">
              <h6>Projects</h6>
            </div>
            <div className="button">
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
          <About />
          <Skills />
          <div className="bg-[#161616] h-[120vh] "><Projects /></div>
          
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
