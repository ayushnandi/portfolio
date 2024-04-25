import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaLinkedin,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="">
      <footer className="px-4 divide-y bg-[#323232] bg-black text-[#b6b6b6] bold Poppinsemibold">
        <div className="container pb-[15rem] flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex justify-center space-x-3 lg:justify-start"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400"></div>
              <span className="self-center text-2xl font-semibold">
                Brand name
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase dark:text-gray-50">
                Product
              </h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Features
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase dark:text-gray-50">
                Company
              </h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Privacy
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="uppercase dark:text-gray-50">Developers</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div class="space-y-3">
  <div class="uppercase dark:text-gray-50">Social media</div>
  <div class="flex flex-col space-y-[2px]">
    <a
      rel="noopener noreferrer"
      href="https://www.facebook.com/profile.php?id=100090067813454"
      title="Facebook"
      class="flex gap-[10px] items-center p-1"
    >
      <FaFacebookSquare size={30} />
      Facebook
    </a>
    <a
      rel="noopener noreferrer"
      href="https://twitter.com/AyushNandi11"
      title="Twitter"
      class="flex gap-[10px] items-center p-1"
    >
      <FaSquareXTwitter size={30} />
      Twitter
    </a>
    <a
      rel="noopener noreferrer"
      href="https://www.instagram.com/hulfer.18x/"
      title="Instagram"
      class="flex gap-[10px] items-center p-1"
    >
      <FaSquareInstagram size={30} />
      Instagram
    </a>
    <a
      rel="noopener noreferrer"
      href="https://www.linkedin.com/in/ayush-nandi-583231230/"
      title="Linkedin"
      class="flex gap-[10px] items-center p-1"
    >
      <FaLinkedin size={30} />
      Linkedin
    </a>
  </div>
</div>

          </div>
        </div>
        <div className="py-6 text-sm text-center dark:text-gray-400">
          © 2024 Your Portfolio. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
