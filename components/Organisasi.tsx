'use client'
import React from "react";
import Image from "next/image";

const Organisasi = () => {
  const organisasiList = [
    {
      imgSrc: "/hmif.png",
      jabatan: "Ketua Divisi Riset dan Pengembangan Teknologi",
      organisasi: "Himpunan Mahasiswa Informatika",
      tahun: "Maret 2024 - Desember 2024",
      deskripsi:
        "Bertanggung jawab atas pengembangan teknologi di Jurusan Informatika",
      capaian:
        "Berhasil menyelenggarakan program kerja berskala nasional yaitu perlombaan IT dan seminar nasional yang disebut ICONIC IT serta meningkatkan SDM Informatika dengan mengadakan agenda pelatihan penulisan karya tulis ilmiah.",
    },
    {
      imgSrc: "/bootcamp.png",
      jabatan: "Sekretaris Program Kerja IT Bootcamp",
      organisasi: "Himpunan Mahasiswa Informatika",
      tahun: "Juni 2024",
      deskripsi:
        "Membantu Ketua Pelaksana dalam mengelola program kerja IT Bootcamp serta dalam mengelola administrasi perizinan",
      capaian:
        "Berhasil menyusun segala bentuk administrasi perizinan ke lembaga fakultas Teknik dalam program kerja IT Bootcamp.",
    },
    {
      imgSrc: "/iconic.png",
      jabatan: "Ketua Pelaksana ICONIC IT",
      organisasi: "Himpunan Mahasiswa Informatika",
      tahun: "September 2024",
      deskripsi:
        "Bertanggung jawab atas pelaksanaan acara ICONIC IT yang diselenggarakan oleh Himpunan Mahasiswa Informatika",
      capaian:
        "Berhasil menyelenggarakan acara berskala nasional yang diikuti oleh lebih dari 140 tim dari 60 universitas di Indonesia.",
    },
    {
      imgSrc: "/kkn.png",
      jabatan: "Sekretaris KKN 70 Desa Sukapada",
      organisasi: "KKN 70 Desa Sukapada",
      tahun: "Desember 2024 - Januari 2025",
      deskripsi:
        "Membantu Ketua KKN dalam mengelola administrasi dan dokumentasi kegiatan KKN",
      capaian:
        "Berhasil menyusun laporan kegiatan KKN dan mengelola administrasi kegiatan KKN.",
    },
    {
      imgSrc: "/hmif.png",
      jabatan: "Kepala Departemen Pendidikan",
      organisasi: "Himpunan Mahasiswa Informatika",
      tahun: "Januari 2025 - sekarang",
      deskripsi:
        "Bertanggung jawab dalam mengelola program kerja yang berkaitan dengan pendidikan di Jurusan Informatika serta menjadi penghubung komunikasi antara SC dan setiap divisi.",
      capaian: "Belum ada capaian yang bisa dijabarkan karena masih menjabat.",
    },
  ];

  return (
    <div className="pt-20">
      <div className="h-16 flex justify-center items-center ">
        <p className="uppercase text-md xl:text-3xl tracking-wider">
          -- Organisasi & Kepanitiaan--
        </p>
      </div>
      <div className=" h-fit w-full pt-20 px-20">
        <div className="flex flex-col gap-10">
          {organisasiList.map((organisasi, index) => (
            <div
              key={index}
              className="flex flex-col xl:flex-row gap-5 xl:gap-10 xl:items-center"
            >
              <div className="flex justify-center xl:w-2/12 mr-20 w-full">
              <Image
                src={organisasi.imgSrc}
                alt="organisasi"
                width={200}
                height={200}
                className="object-cover rounded-full aspect-square"
              />
                {/* <img
                  src={organisasi.imgSrc}
                  alt="organisasi"
                /> */}
              </div>
              <div className="w-full xl:w-2/3">
                <div className="flex flex-col gap-3 px-5">
                  <h1 className="text-xl xl:text-3xl font-bold">
                    {organisasi.jabatan}
                  </h1>
                  <p className="text-sm xl:text-lg">
                    {organisasi.organisasi} - {organisasi.tahun}
                  </p>
                  <p className="text-sm xl:text-lg font-sans text-justify">Jobdesk: {organisasi.deskripsi}</p>
                  <p className="text-sm xl:text-lg font-sans text-justify">Capaian: {organisasi.capaian}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Organisasi;
