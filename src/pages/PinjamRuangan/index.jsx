import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";

import { useContext, useEffect, useState } from "react";

import moment from "moment";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { ContextToast } from "../../App";

export default function PinjamRuangan() {
  const toast = useContext(ContextToast);

  const [ruangan, setRuangan] = useState([]);
  const [date, setDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [namaPeminjam, setNamaPeminjam] = useState();
  const [namaOrganisasi, setNamaOrganisasi] = useState();
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [keperluan, setKeperluan] = useState();
  const [isLoaded, setIsloaded] = useState(false);

  useEffect(() => {
    if (isLoaded == false) {
      loadRuangan();
    }
  }, []);

  const loadRuangan = async () => {
    try {
      setIsloaded(true);
      const response = await axios.get("http://localhost:3000/list-ruangan");
      setRuangan(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    const data = {
      tanggalPinjam: moment(date).format("YYYY-MM-DD"),
      jamMulai: moment(startTime).format("HH:mm"),
      jamSelesai: moment(endTime).format("HH:mm"),
      namaPeminjam: namaPeminjam,
      namaOrganisasi: namaOrganisasi,
      ruangan: selectedRoom,
      keperluan: keperluan,
    };

    const maxDate = moment().add(30, "days");
    try {
      if (moment(data.tanggalPinjam) < maxDate) {
        const response = await axios.post(
          "http://localhost:3000/pinjam-ruangan",
          data
        );

        if (response.status == 200) {
          toast?.current?.show({
            severity: "success",
            summary: "Data Saved",
            detail: "Ruangan berhasil disimpan",
          });
          navigate("/home");
        }
      } else {
        toast?.current?.show({
          severity: "error",
          summary: "Failed to Save",
          detail: "Tanggal pinjam max 30 hari",
        });
      }
    } catch (error) {
      toast?.current?.show({
        severity: "error",
        summary: "Data Already Booked",
        detail: "Ruangan sudah dipinjam",
      });
    }
  };

  return (
    <>
      <form
        action=""
        onSubmit={submitForm}
        className="w-2/6 flex flex-col items-center mx-auto"
      >
        <h1>Ini Page pinjam ruangan</h1>
        <div className="flex flex-row gap-4 my-2 items-center w-full">
          <p className="w-1/2">Tanggal</p>
          <Calendar
            className="w-1/2"
            value={date}
            onChange={(e) => setDate(e.value)}
            required
          />
        </div>
        <div className="flex flex-row gap-4 my-2 items-center w-full">
          <p className="w-1/2">Jam Mulai</p>
          <Calendar
            className="w-1/2"
            value={startTime}
            onChange={(e) => setStartTime(e.value)}
            timeOnly
            required
          />
        </div>
        <div className="flex flex-row gap-4 my-2 items-center w-full">
          <p className="w-1/2">Jam Selesai</p>
          <Calendar
            className="w-1/2"
            value={endTime}
            onChange={(e) => setEndTime(e.value)}
            timeOnly
            required
          />
        </div>
        <div className="flex flex-row gap-4 my-2 items-center w-full">
          <p className="w-1/2">Nama Peminjam</p>
          <InputText
            className="w-1/2"
            value={namaPeminjam || ""}
            onChange={(e) => setNamaPeminjam(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-row gap-4 my-2 items-center w-full">
          <p className="w-1/2">Nama Organisasi</p>
          <InputText
            className="w-1/2"
            value={namaOrganisasi || ""}
            onChange={(e) => setNamaOrganisasi(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-row gap-4 my-2 items-center w-full">
          <p className="w-1/2">Ruangan</p>
          <Dropdown
            value={selectedRoom}
            onChange={(e) => setSelectedRoom(e.value)}
            options={ruangan}
            optionLabel="name"
            showClear
            placeholder="Pilih Ruangan"
            className="w-1/2"
          />
        </div>
        <div className="flex flex-row gap-4 my-2 items-center w-full">
          <p className="w-1/2">Keperluan</p>
          <InputText
            className="w-1/2"
            value={keperluan || ""}
            onChange={(e) => setKeperluan(e.target.value)}
            required
          />
        </div>

        <Button label="Submit" />
      </form>
    </>
  );
}
