import React from "react";
import Image from "next/image";

const cardData = [
  {
    imgSrc: "/analisis_data.jpg",
    title: "Menganalisis Data",
    description:
      "Menggunakan Python dan Machine Learning untuk menemukan pola dan wawasan tersembunyi.",
  },
  {
    imgSrc: "/web.jpg",
    title: "Membangun Web",
    description:
      "Menggunakan React dan Tailwind CSS untuk menciptakan aplikasi web yang cepat dan responsif.",
  },
  {
    imgSrc: "/best.jpg",
    title: "Top Participant",
    description:
      "di Talentclass Data Science Fundamental Class.",
  },
  {
    imgSrc: "/leader.jpg",
    title: "Ketua Pelaksana",
    description:
      "untuk acara ICONIC IT yang diikuti oleh lebih dari 140 tim dari 60 universitas di Indonesia.",
  },
];

const Profil = () => {
  return (
    <div className="h-full w-full pt-14">
      <div className="h-16 flex justify-center items-center">
        <p className="uppercase text-3xl tracking-wider">-- Profil --</p>
      </div>
      <div className="mt-10 h-4/5">
        <div className="w-full flex justify-center">
          <Image
            src="/yuldan.jpg"
            width={200}
            height={200}
            alt="yuldan"
            className="object-cover aspect-square rounded-full"
          />
        </div>
        <div className="w-full font-sans px-10 mt-10 text-justify leading-relaxed">
          <p className="mb-2">Hai, saya Yuldan!</p>
          <p className="mb-2">
            Saya seorang {" "}
            <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
              Mahasiswa Informatika
            </span>{" "}
            yang sangat antusias tentang teknologi dan bagaimana ia dapat
            mengubah cara kita hidup dan bekerja. Dari Data Science hingga Web
            Development, saya senang menciptakan sesuatu yang bermanfaat dan
            memecahkan masalah dunia nyata dengan data dan kode.
          </p>
          <h1 className="text-xl xl:text-3xl italic underline mb-5 mt-5">
            Apa yang saya sudah lakukan?
          </h1>

          <div className="flex flex-wrap xl:gap-10 gap-3 justify-center -mx-10">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="xl:max-w-40 max-w-36 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
              >
                <img
                  className="rounded-t-lg h-[8rem] object-cover w-full"
                  src={card.imgSrc}
                  alt={card.title}
                />
                <div className="p-2">
                  <h5 className="mb-2 text-sm text-left tracking-tight text-gray-900 dark:text-white font-extralight cursor-default">
                    <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent font-bold">
                      {card.title}
                    </span>{" "}
                    {card.description}
                  </h5>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full justify-center flex mt-5 flex-col items-center">
            <h4 className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent nunito uppercase">
              Motto
            </h4>
            <p>
              "Sic Parvis Magna: Setiap perjalanan besar dimulai dengan langkah kecil. Tidak ada yang mustahil jika kita berani memulai dari yang sederhana."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
