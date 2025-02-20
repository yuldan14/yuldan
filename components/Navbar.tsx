"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

function Navbar() {
  // State untuk toggle menu
  const [isOpen, setIsOpen] = useState(false);

  // Ref untuk menyimpan referensi ke elemen ul dan menu burger dengan tipe yang benar
  const menuRef = useRef<HTMLUListElement | null>(null); // Menentukan tipe untuk menuRef
  const burgerRef = useRef<HTMLDivElement | null>(null); // Menentukan tipe untuk burgerRef

  // Fungsi untuk toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Fungsi untuk menangani klik di luar
  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      burgerRef.current &&
      !burgerRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false); // Menutup menu jika klik di luar
    }
  };

  // Menambahkan event listener saat komponen dimount
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full flex justify-center py-3 text-black sticky top-0 z-50">
      <div className="bg-slate-100 h-14 flex w-[90%] rounded-3xl">
        <div className=" xl:justify-start border-black pl-3 w-[50%] h-full flex justify-center items-center font-extrabold ">
          <Image src={"/logo.png"} height={70} width={70} alt="Yuldan" />
          <p className="uppercase ">Yuldan</p>
        </div>
        {/* Bagian Kanan Navbar */}
        <div className="w-4/5 h-screen">
          <ul
            ref={menuRef} // Menambahkan ref ke elemen ul
            className={`top-20 gap-10 flex flex-col transition-all duration-500 w-[5rem] float-end ${
              isOpen ? "right-10 sm:-right-20" : "-right-[999px]"
            } xl:flex-row xl:top-0 xl:left-0 xl:h-14 xl:gap-0 xl:justify-around xl:float-right xl:w-4/5 text-white xl:text-black absolute xl:relative`}
          >
            <li className="w-24 xl:flex xl:justify-center xl:items-center">
              <a
                href="#profil"
                className="bg-white text-black h-10 rounded-2xl xl:bg-transparent w-full flex justify-center items-center text-center text-sm"
              >
                Profil
              </a>
            </li>
            <li className="w-24 xl:flex xl:justify-center xl:items-center">
              <a
                href="#organisasi"
                className="bg-white text-black h-10 rounded-2xl xl:bg-transparent w-full flex justify-center items-center text-center text-sm"
              >
                Organisasi
              </a>
            </li>
            <li className="w-24 xl:flex xl:justify-center xl:items-center">
              <a
                href="#proyek"
                className="bg-white text-black h-10 rounded-2xl xl:bg-transparent w-full flex justify-center items-center text-center text-sm"
              >
                Proyek
              </a>
            </li>
            <li className="w-24 xl:flex xl:justify-center xl:items-center">
              <a
                href="#sertifikat"
                className="bg-white text-black h-10 rounded-2xl xl:bg-transparent w-full flex justify-center items-center text-center text-sm"
              >
                Sertifikat
              </a>
            </li>
          </ul>
        </div>
        {/* Menu Burger */}
        <div
          ref={burgerRef} // Menambahkan ref ke elemen menu burger
          className="relative w-1/5 flex justify-center items-center cursor-pointer xl:hidden right-5"
          onClick={toggleMenu}
        >
          {/* Menu Burger atau X */}
          <div className="relative w-5 h-5 flex justify-center items-center transition-all duration-300 ease-in-out">
            {/* Garis pertama */}
            <div
              className={`h-1 w-full bg-black absolute transition-all duration-300 ease-in-out ${
                isOpen ? "rotate-45 " : "rotate-0 top-0"
              }`}
            ></div>
            {/* Garis kedua */}
            <div
              className={`h-1 w-full bg-black absolute top-1/2 transform -translate-y-1/2 transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            {/* Garis ketiga */}
            <div
              className={`h-1 w-full bg-black absolute transition-all duration-300 ease-in-out ${
                isOpen ? "-rotate-45 " : "rotate-0 bottom-0"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
