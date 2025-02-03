import React from "react";
import Image from "next/image";

const Profil = () => {
  return (
    <div className="h-screen w-full">
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
            baru adalah peluang untuk belajar sesuatu yang baru dan menerapkan
            kreativitas.
          </p>
          <p>Apa yang saya sudah lakukan?</p>
          <ol type="1" className="list-decimal pl-5">
            <li>
              {" "}
              <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent font-bold">
                Menganalisis Data
              </span>{" "}
              : Menggunakan Python dan Machine Learning untuk menemukan pola dan
              wawasan tersembunyi.
            </li>
            <li>
              {" "}
              <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent font-bold">
                Membangun Web
              </span>{" "}
              : Menggunakan React dan Tailwind CSS untuk menciptakan aplikasi
              web yang cepat dan responsif.
            </li>
            <li>
              {" "}
              <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent font-bold">
                Top Participant
              </span>{" "}
              di Talentclass Data Science Fundamental Class.
            </li>
            <li>
              {" "}
              <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent font-bold">
                    Ketua Pelaksana
              </span>{" "}
              untuk acara ICONIC IT yang diikuti oleh lebih dari 140 tim dari 60 universitas di Indonesia.
            </li>
          </ol>
          <div className="w-full justify-center flex mt-5 flex-col items-center">
            <h4 className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent  nunito uppercase">Motto</h4>
            <p>"Sic Parvis Magna: Setiap perjalanan besar dimulai dengan langkah kecil. Tidak ada yang mustahil jika kita berani memulai dari yang sederhana."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
