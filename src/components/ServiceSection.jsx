import ServiceCard from "./ServiceCard";
import tvIcon from "../assets/icon/tv.svg";
import phoneIcon from "../assets/icon/phone.svg";
import screenIcon from "../assets/icon/screen.svg";
import childIcon from "../assets/icon/child.svg";

const services = [
  {
    title: "Tonton langsung di TV",
    iconUrl: tvIcon,
    body: "Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple TV, pemutar Blu-ray, dan banyak lagi",
  },
  {
    title: "Download untuk offline",
    iconUrl: phoneIcon,
    body: "Simpan dengan mudah agar selalu ada acara TV dan film yang bisa ditonton",
  },
  {
    title: "Akses berbagai perangkat",
    iconUrl: screenIcon,
    body: "Streaming film dan acara TV tak terbatas di ponsel, tablet, laptop, dan TV-mu",
  },
  {
    title: "Buat profil untuk anak",
    iconUrl: childIcon,
    body: "Profil anak dilengkapi kontrol orang tua yang dilindungi PIN sehingga kamu bisa membatasi rating usia konten yang bisa ditonton anak",
  },
];

const ServiceSection = () => {
  return (
    <div className="mb-[180px]">
      <h1 className="font-title text-newWhite text-[40px] mb-4 text-center">
        Layanan Terbaik yang
        <br className="hidden lg:block"/> Tidak Mengecewakan
      </h1>
      <div className="font-body flex md:gap-x-10 gap-y-6 items-center justify-center md:flex-col lg:flex-row flex-col">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            iconUrl={service.iconUrl}
            body={service.body}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
