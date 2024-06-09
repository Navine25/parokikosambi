export default function Card(dummyData) {
  return (
    <>
      <div className="w-2/3 shadow-lg h-full flex flex-col gap-4 p-4 my-6">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <span className="pi pi-building-columns text-xl"></span>
            <p className="ml-4 text-l">{dummyData.namaRuangan}</p>
          </div>
          <div className="flex flex-row">
            <span className="pi pi-calendar"></span>
            <p className="ml-4 text-l">{dummyData.tanggalPinjam}</p>
          </div>
        </div>
        <div className="flex flex-row">
          <span className="pi pi-clock"></span>
          <p className="ml-4 text-l">
            {dummyData.jamMulai} - {dummyData.jamSelesai}
          </p>
        </div>
        <div className="flex flex-row">
          <span className="pi pi-users"></span>
          <p className="ml-4 text-l">{dummyData.namaOrganisasi}</p>
        </div>
        <div className="flex flex-row">
          <span className="pi pi-user"></span>
          <p className="ml-4 text-l">{dummyData.namaPeminjam}</p>
        </div>
        <div className="flex flex-row">
          <span className="pi pi-briefcase"></span>
          <p className="ml-4 text-l">{dummyData.keperluan}</p>
        </div>
      </div>
    </>
  );
}
