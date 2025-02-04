"use client";
import React from "react";
import {
  GitHub,
  Instagram,
  Linkedin,
  Mail,
} from "react-feather";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className=" h-screen flex justify-center items-center">
      <div className="h-4/5 w-[90%] rounded-3xl shimmer-bg xl:flex">
        <div className="absolute xl:relative bottom-48 xl:bottom-0 w-[90%] flex xl:min-h-full xl:w-1/5 xl:text-3xl xl:flex justify-center items-center">
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
        <div className=" h-4/5 flex gap-16 flex-col justify-center items-center xl:h-full xl:w-full pt-32 xl:pt-0 xl:ml-48">
          <ul className="flex flex-col w-4/5 h-fit text-center justify-center gap-5 text-xl xl:text-3xl">
            <li className="text-sm">
              <TypeAnimation
                sequence={["Hello, I'm", 1000]}
                wrapper="span"
                speed={50}
                repeat={1}
                cursor={false}
              />
            </li>
            <li>
              <TypeAnimation
                sequence={["Yuldan Nur Addinsyah", 1000]}
                wrapper="span"
                speed={50}
                repeat={1}
                cursor={false}
              />
            </li>
          </ul>
          <div className="  h-fit flex justify-center items-center ">
            <button className="px-5 py-2 rounded-3xl bg-black text-white hover:scale-105 transition-transform duration-300 text-sm" >
              Mari Berkenalan
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center xl:w-1/5 ">
          {/* Media Sosial */}
          <ul className="xl:left-[17rem] absolute bottom-24 flex w-[80%] xl:justify-around justify-between xl:flex-col xl:absolute xl:h-4/5 xl:bottom-[3rem] xl:w-fit z-50">
            <li className="bg-black px-3 py-3 rounded-full w-fit">
              <a href="https://www.instagram.com/yuldaan" target='_blank'>
                <Instagram />
              </a>
            </li>
            <li className="bg-black px-3 py-3 rounded-full w-fit">
              <a href="https://www.linkedin.com/in/yuldan-nur-addinsyah-642b64255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                <Linkedin />
              </a>
            </li>
            <li className="bg-black px-3 py-3 rounded-full w-fit">
              <a href="mailto:yuldann6@gmail.com" target="_blank">
                <Mail />
              </a>
            </li>
            <li className="bg-black px-3 py-3 rounded-full w-fit ">
              <a href="https://github.com/yuldan14" target="_blank">
                <GitHub />
              </a>
            </li>
          </ul>
        </div>
        <div className="xl:flex xl:justify-center xl:items-center xl:mr-5 xl:relative absolute xl:top-0 top-32 w-11/12 xl:w-fit justify-center flex">
          <Image
             src={'/yuldan-1.jpg'}
             alt="yuldan1"
             width={500}
             height={500}
             className="rounded-full w-[150px] xl:w-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
