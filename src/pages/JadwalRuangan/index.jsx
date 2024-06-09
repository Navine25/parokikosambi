import { useEffect, useState } from "react";
import { SelectButton } from "primereact/selectbutton";
import Card from "../../components/Card";

import moment from "moment";
import axios from "axios";

export default function JadwalRuangan() {
  const items = [
    { name: "Hari Ini", value: 1 },
    { name: "Minggu Ini", value: 2 },
    { name: "Bulan Ini", value: 3 },
    { name: "Bulan Depan", value: 4 },
  ];
  const [value, setValue] = useState(items[0].value);
  const [isLoaded, setIsloaded] = useState(false);
  const [jadwal, setJadwal] = useState([]);
  const [listJadwal, setListJadwal] = useState([]);

  const filterJadwal = () => {
    if (value == 1) {
      const hariIni = [];
      jadwal.forEach((data) => {
        if (
          moment(data.tanggal).format("DD-MM-YYYY") ==
          moment().format("DD-MM-YYYY")
        ) {
          hariIni.push(data);
        }
      });
      setListJadwal(hariIni);
    } else if (value == 2) {
      const mingguIni = [];
      jadwal.forEach((data) => {
        if (moment(data.tanggal).week() == moment().week()) {
          mingguIni.push(data);
        }
      });
      setListJadwal(mingguIni);
    } else if (value == 3) {
      const bulanIni = []
      jadwal.forEach((data) => {
        if(moment(data.tanggal).month() == moment().month()) {
          bulanIni.push(data)
        }
      })
      setListJadwal(bulanIni)
    } else if (value == 4) {
      const bulanDepan = []
      jadwal.forEach((data) => {
        if(moment(data.tanggal).month() == moment().month() + 1) {
          bulanDepan.push(data)
        }
      })
      setListJadwal(bulanDepan)
    }
  };

  const loadJadwal = async () => {
    try {
      setIsloaded(true);
      await axios.get("http://localhost:3000/jadwal-ruangan").then((res) => {
        setJadwal(res.data);
      });
      } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isLoaded == false) {
      loadJadwal();
    }
    filterJadwal();
  }, [jadwal, value]);

  // useEffect(() => {
  //   filterJadwal();
  // }, [value]);

  const justifyTemplate = (option) => {
    return <p>{option.name}</p>;
  };
  return (
    <>
      <div className="w-1/2 flex flex-col items-center mx-auto">
        <h1 className="my-4">Jadwal Ruangan</h1>
        <div className="card flex justify-content-center">
          <SelectButton
            value={value}
            onChange={(e) => setValue(e.value)}
            itemTemplate={justifyTemplate}
            optionLabel="name"
            options={items}
            allowEmpty={false}
          />
        </div>
        {listJadwal.map((data, index) => {
          return (
            <Card
              key={index}
              namaRuangan={data.nama_ruangan}
              tanggalPinjam={moment(data.tanggal).format("D MMM YYYY")}
              jamMulai={data.jam_awal}
              jamSelesai={data.jam_akhir}
              namaOrganisasi={data.organisasi}
              namaPeminjam={data.peminjam}
              keperluan={data.keperluan}
            />
          );
        })}
      </div>
    </>
  );
}
