import React from "react";
import Image from "next/image";

const Profil = () => {
  return (
    <div className="h-full w-full">
      <div className="h-16 flex justify-center items-center  ">
        <p className="uppercase text-3xl tracking-wider">-- Profil --</p>
      </div>
      <div className="mt-10 h-4/5">
        <div className=" w-full flex justify-center">
          <Image
            src={"/yuldan.jpg"}
            width={200}
            height={100}
            alt="yuldan"
            className="object-cover aspect-square rounded-full"
          />
        </div>
        <div className=" w-full font-sans px-10 mt-10 text-justify leading-relaxed">
          <p className="mb-2">Hai, saya Yuldan!</p>
          <p className="mb-2">
            Saya seorang{" "}
            <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
              Mahasiswa Informatika
            </span>{" "}
            yang sangat antusias tentang teknologi dan bagaimana ia dapat
            mengubah cara kita hidup dan bekerja. Dari Data Science hingga Web
            Development, saya senang menciptakan sesuatu yang bermanfaat dan
            memecahkan masalah dunia nyata dengan data dan kode. Setiap proyek
            baru adalah peluang untuk belajar bsesuatu yang baru dan menerapkan
            kreativitas.
          </p>
          <h1 className="text-lg mb-2">Apa yang saya sudah lakukan?</h1>

          <div className="flex flex-wrap xl:gap-10 gap-3 justify-center">
            <div className="max-w-40 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg h-[8rem] object-cover" src="/analisis_data.jpg" alt="" />
              <div className="p-2">
                  <h5 className="mb-2 text-sm text-left tracking-tight text-gray-900 dark:text-white font-extralight  cursor-default">
                    {" "}
                    <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent font-bold">
                      Menganalisis Data
                    </span>{" "}
                    : Menggunakan Python dan Machine Learning untuk menemukan
                    pola dan wawasan tersembunyi.
                  </h5>
              </div>
            </div>
            <div className="max-w-40 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg h-[8rem] object-cover w-full" src="/web.jpg" alt="" />
              <div className="p-2">
                  <h5 className="mb-2 text-sm text-left tracking-tight text-gray-900 dark:text-white font-extralight cursor-default">
                    {" "}
                    <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent font-bold">
                      Membangun Web
                    </span>{" "}
                    : Menggunakan React dan Tailwind CSS untuk menciptakan
                    aplikasi web yang cepat dan responsif.
                  </h5>
              </div>
            </div>
            <div className="max-w-40 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg h-[8rem] object-cover w-full" src="/best.jpg" alt="" />
              <div className="p-2">
                  <h5 className="mb-2 text-sm text-left tracking-tight text-gray-900 dark:text-white font-extralight  cursor-default">
                    {" "}
                    <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent font-bold">
                      Top Participant
                    </span>{" "}
                    di Talentclass Data Science Fundamental Class.
                  </h5>
              </div>
            </div>
            <div className="max-w-40 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg h-[8rem] object-cover w-full" src="/leader.jpg" alt="" />
              <div className="p-2">
                  <h5 className="mb-2 text-sm text-left tracking-tight text-gray-900 dark:text-white font-extralight cursor-default">
                    {" "}
                    <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent font-bold">
                      Ketua Pelaksana
                    </span>{" "}
                    untuk acara ICONIC IT yang diikuti oleh lebih dari 140 tim
                    dari 60 universitas di Indonesia.
                  </h5>
              </div>
            </div>
          </div>
          <div className="w-full justify-center flex mt-5 flex-col items-center">
            <h4 className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent  nunito uppercase">
              Motto
            </h4>
            <p>
              &quot;Sic Parvis Magna: Setiap perjalanan besar dimulai dengan
              langkah kecil. Tidak ada yang mustahil jika kita berani memulai
              dari yang sederhana.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
