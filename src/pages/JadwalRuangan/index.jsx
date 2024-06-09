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
      document.getElementById('qrCode').src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAYAAAB1PADUAAAAAklEQVR4AewaftIAAATTSURBVO3BQY4bSRAEwfAC//9l3znmqYBGJ2clIczwR6qWnFQtOqladFK16KRq0UnVopOqRSdVi06qFp1ULTqpWnRSteikatFJ1aKTqkUnVYs+eQnIb1JzA+QJNROQSc0NkBs1bwD5TWreOKladFK16KRq0SfL1GwCcgPkRs0TaiYgm4DcqLlRswnIppOqRSdVi06qFn3yZUCeUPOEmhsgk5oJyBNqJiCTmhs1E5A3gDyh5ptOqhadVC06qVr0ST0CZFIzAblR8y87qVp0UrXopGrRJ385IDdqJiA3aiYgk5o3gPzLTqoWnVQtOqla9MmXqfkmNROQGzU3QCY1b6iZgExq3lDzJzmpWnRSteikatEny4D8JiCTmgnIpGYCMqmZgExqJiCTmgnIpGYCMqm5AfInO6ladFK16KRqEf7IPwTIpGYC8oaaCciNmgnIjZq/2UnVopOqRSdVi/BHXgAyqZmATGomIJOaCcik5g0gk5obIDdqJiA3ajYBmdTcAJnUbDqpWnRSteikatEny4BMaiYgk5oJyKTmBsikZgLyJwHyhJobNROQGzUTkEnNGydVi06qFp1ULfpkmZongExqJiCTmhsgTwC5UfOEmjeATEBu1DwB5JtOqhadVC06qVr0yTIgk5pJzQ2QSc0Tar4JyKRmAjKpmYDcqJmATGpu1PyfTqoWnVQtOqlahD/yi4BMaiYgm9RMQG7UPAHkRs0NkDfUPAFkUrPppGrRSdWik6pFn7wEZFLzBJAbNZvUTEAmIJOaCcgbQJ5QMwF5AsgNkEnNGydVi06qFp1ULfpkGZAbNROQGyCb1NyomYBsUjMBuQEyqZmA/ElOqhadVC06qVr0yTI1E5A31NwAmdRMQJ4AcqNmAvIEkE1q/iQnVYtOqhadVC3CH3kByI2aJ4DcqJmAvKHmBsiNmk1AbtRMQG7UTEBu1LxxUrXopGrRSdWiT15ScwPkRs2k5gbIjZongExq3gAyqZmAbFLzhJoJyKaTqkUnVYtOqhZ98hKQSc0TQJ5QMwG5AfIEkEnNG0AmNROQTUAmNROQbzqpWnRSteikatEnL6mZgExqboBMap5Q84aaJ4BMam7U/CY1N2q+6aRq0UnVopOqRZ+8BGRSMwG5UXMD5EbNBOSb1ExAJjXfBOQJNROQGzVvnFQtOqladFK1CH/kLwZkUvMGkEnNBOSb1DwB5EbNbzqpWnRSteikatEnLwH5TWomNU8AmdRMaiYg/ycgk5ongDyh5o2TqkUnVYtOqhZ9skzNJiBPAJnUTGomIE+omYDcqLkBcqPmCTU3QL7ppGrRSdWik6pFn3wZkCfUPAFkUjMBuVFzA2QCcqPmDSCbgNyo2XRSteikatFJ1aJP/nJqnlBzA+QJNU8AmdS8AeRGzW86qVp0UrXopGrRJ385IDdqboDcqLkBMqmZgExqJiCTmgnIE0Bu1ExAJjVvnFQtOqladFK16JMvU/NNaiYgE5BJzRNAbtRMQN4AcqPmDSCTmk0nVYtOqhadVC36ZBmQ3wRkUjMBuVEzAZnUTEAmIDdqnlBzA+RGzRNAJjVvnFQtOqladFK1CH+kaslJ1aKTqkUnVYtOqhadVC06qVp0UrXopGrRSdWik6pFJ1WLTqoWnVQtOqladFK16D/Y3jBOjwrmLAAAAABJRU5ErkJggg=='
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
        <img id="qrCode" />
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
