// import { Link } from "react-router-dom";
import { Menubar } from "primereact/menubar";

export default function Header() {
  const start = <img alt="logo" src="/public/images/image 1logo.png" className="h-10 mt-[7px]"></img>;

  const items = [
    {
      label: "Home",
      url: "/home",
      icon: 'pi pi-home'
    },
    {
      label: "Administrasi",
      items: [
        {
          label: "Pinjam Ruangan",
          url: "/pinjam-ruangan",
          icon: 'pi pi-pencil'
        },
      ],
      icon: 'pi pi-star'
    },
    {
      label: "Informasi",
      items: [
        {
          label: "Ruangan",
          url: "/jadwal-ruangan",
          icon: 'pi pi-bolt'
        },
      ],
      icon: 'pi pi-server'
    },
    {
      label: "Profil",
      url: "/home",
      icon: 'pi pi-home'
    },
    {
      label: "Media",
      url: "/home",
      icon: 'pi pi-home'
    },{
      label: "Kontak",
      url: "/home",
      icon: 'pi pi-home'
    },
  ];
  return (
    <>
      <Menubar model={items} start={start}/>
    </>
  );
}