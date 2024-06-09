export default function Homepage() {
  return (
    <>
      <div className="w-full h-[94vh] bg-[url('/public/images/Imagemainpage.png')] bg-cover">
        <h1 className="absolute top-[250px] left-[110px] w-[80vh] font-bold text-7xl text-white leading-normal">
          JADWAL PETUGAS TATA TERTIB
        </h1>
        <div className="flex absolute top-[570px] left-[110px] gap-2">
          <p className="text-[#FFD2A4]">-</p>
          <p className="text-white">Paroki Kosambi Baru</p>
        </div>
      </div>

      {/* JADWAL */}
      <div className="my-32 mx-40 flex flex-col items-center">
        <h1 className="text-black text-3xl font-bold mb-12">JADWAL MISA</h1>
        <div className="flex flex-row gap-4">
          <div className="w-[411px] h-[380px] bg-[#FFF5EB] border-b-[16px] border-[#FFD2A4] p-16 text-center flex-col flex gap-4">
            <p className="text-3xl font-bold">MISA HARIAN</p>
            <div className="flex flex-col text-center justify-center items-center gap-4 h-full">
              <p className="text-xl">SELASA, KAMIS, DAN SABTU</p>
              <p className="text-xl font-bold text-[#183883]">
                PUKUL 06.00 (PAGI) WIB
              </p>
              <p className="text-xl">SENIN, RABU, DAN JUMAT</p>
              <p className="text-xl font-bold text-[#183883]">
                PUKUL 19.00 WIB
              </p>
            </div>
          </div>
          <div className="w-[411px] h-[380px] bg-[#FFF5EB] border-b-[16px] border-[#FFD2A4] p-16 text-center flex-col flex gap-4">
            <p className="text-3xl font-bold">MISA MINGGUAN</p>
            <div className="flex flex-col text-center justify-center items-center gap-4 h-full">
              <p className="text-xl">SABTU SORE</p>
              <p className="text-xl font-bold text-[#183883]">
                PUKUL 17.00 WIB
              </p>
              <p className="text-xl">MINGGU</p>
              <p className="text-xl font-bold text-[#183883]">
                PUKUL 06.00, 08.30, dan 17.00 WIB
              </p>
            </div>
          </div>
          <div className="w-[411px] h-[380px] bg-[#FFF5EB] border-b-[16px] border-[#FFD2A4] p-16 text-center flex-col flex gap-4">
            <p className="text-3xl font-bold">JUMAT PERTAMA</p>
            <div className="flex flex-col text-center justify-center items-center gap-4 h-full">
              <p className="text-xl">JUMAT MINGGU PERTAMA</p>
              <p className="text-xl font-bold text-[#183883]">
                PUKUL 19.00 wib
              </p>
            </div>
          </div>
        </div>
        <div className="w-[650px] h-[127px] bg-[#F62727] text-center items-center justify-center flex rounded-3xl mt-20">
          <p className="text-white font-bold text-4xl">
            MISA ONLINE SUDAH DITIADAKAN
          </p>
        </div>
      </div>

      {/* PENGUMUMAN */}
      <div className="my-32 mx-40 flex flex-col items-center">
        <p className="text-black text-3xl font-bold mb-12">PENGUMUMAN GEREJA</p>
        <div className="flex flex-row gap-4">
          {[...Array(3)].map((x, i) => (
            <div
              key={i}
              className="w-[411px] h-[380px] bg-[#FFF5EB] border-b-[16px] border-[#FFD2A4] p-16 text-center flex-col flex gap-4"
            >
              <p className="text-3xl font-bold">PENGUMUMAN #{i}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ACARA MENDATANG */}
      <div className="my-32 mx-40 flex flex-col items-center">
        <p>Acara Mendatang</p>
        <p className="text-black text-3xl font-bold mb-12">PEMBARUAN JANJI PERKAWINAN</p>
      </div>

      {/* GALLERY */}
      <div className="my-32 mx-40 flex flex-col items-center">
        <p className="text-black text-3xl font-bold mb-12">GALLERY</p>
      </div>
    </>
  );
}
