"use client";
import React from "react";
import {
  GitHub,
  Instagram,
  Linkedin,
  Mail,
} from "react-feather";

import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className=" h-screen flex justify-center items-center">
      <div className="h-4/5 w-[90%] rounded-3xl shimmer-bg xl:flex">
        <div className="absolute xl:relative bottom-48 xl:bottom-0 w-[90%] flex xl:ml-10 xl:min-h-full xl:w-1/5 xl:text-3xl xl:flex justify-center items-center">
          <ul className="flex xl:flex-col gap-5">
            <li>C</li>
            <li>O</li>
            <li>N</li>
            <li>N</li>
            <li>E</li>
            <li>C</li>
            <li>T</li>
          </ul>
        </div>
        <div className=" h-4/5 flex gap-16 flex-col justify-center items-center xl:h-full xl:w-full">
          <ul className="flex flex-col text-center w-full h-fit justify-center gap-5 text-xl xl:text-3xl">
            <li>
              <TypeAnimation
                sequence={["Halo, Selamat Datang", 1000]}
                wrapper="span"
                speed={50}
                repeat={1}
                cursor={false}
              />
            </li>
            <li>
              <TypeAnimation
                sequence={["di Website Yuldan", 1000]}
                wrapper="span"
                speed={50}
                repeat={1}
                cursor={false}
              />
            </li>
          </ul>
          <div className="  h-fit flex justify-center items-center">
            <button className="px-5 py-2 rounded-3xl bg-black text-white hover:scale-105 transition-transform duration-300" >
              Mari Berkenalan
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center xl:w-1/5 ">
          {/* Media Sosial */}
          <ul className=" absolute bottom-24 flex w-[80%] xl:justify-around justify-between xl:flex-col xl:relative xl:bottom-0 xl:w-fit">
            <li className="bg-black px-3 py-3 rounded-full w-fit">
              <a href="">
                <Instagram className="" />
              </a>
            </li>
            <li className="bg-black px-3 py-3 rounded-full w-fit">
              <a href="">
                <Linkedin />
              </a>
            </li>
            <li className="bg-black px-3 py-3 rounded-full w-fit">
              <a href="">
                <Mail />
              </a>
            </li>
            <li className="bg-black px-3 py-3 rounded-full w-fit ">
              <a href="">
                <GitHub />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
