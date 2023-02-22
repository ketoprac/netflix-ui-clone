import footerLogo from "../assets/logo/logos_netflix.png";
import twitterIcon from "../assets/icon/twitter.svg";
import facebookIcon from "../assets/icon/facebook.svg";
import instagramIcon from "../assets/icon/instagram.svg";
import appStoreIcon from "../assets/logo/appstore.png";
import playStoreIcon from "../assets/logo/playstore.png";
import { useState } from "react";

const Footer = () => {
  const [footerLinks] = useState([
    {
      title: "Perusahaan",
      links: [
        { text: "Tentang Kami", url: "#" },
        { text: "Hubungi Kami", url: "#" },
        { text: "Karir", url: "#" },
        { text: "Blog", url: "#" },
        { text: "Investor Relations", url: "#" },
      ],
    },
    {
      title: "Dapatkan Bantuan",
      links: [
        { text: "FAQ", url: "#" },
        { text: "Pusat Bantuan", url: "#" },
        { text: "Akun", url: "#" },
      ],
    },
    {
      title: "Lainnya",
      links: [
        { text: "Tukar Kartu Hadiah", url: "#" },
        { text: "Netflix Originals", url: "#" },
        { text: "Media Center", url: "#" },
      ],
    },
  ]);

  return (
    <footer className="font-body">
      <div className="flex flex-col lg:flex-row gap-y-5 text-center items-center lg:text-left lg:items-start justify-around mb-10">
        <div>
          <img src={footerLogo} alt="logo" className="mx-auto mb-6 lg:mx-0" />
          <p className="text-[#E3E0E0] text-sm font-light">
            Layanan streaming tanpa iklan dan harga
            <br /> bulanan yang murah
          </p>
        </div>
        {footerLinks.map((linkGroup) => (
          <div key={linkGroup.title}>
            <h3 className="text-newWhite font-semibold text-lg mb-3 lg:mb-6">
              {linkGroup.title}
            </h3>
            <div className="text-[#E3E0E0] flex flex-col gap-y-2">
              {linkGroup.links.map((link) => (
                <a key={link.text} href={link.url}>
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        ))}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-newWhite font-semibold text-lg mb-6">
            Dapatkan Aplikasi Kami
          </h3>
          <div className="flex gap-x-4 mb-10">
            <a href="#">
              <img src={appStoreIcon} alt="appstore" />
            </a>
            <a href="#">
              <img src={playStoreIcon} alt="playstore" />
            </a>
          </div>
          <div className="flex">
            <a href="#">
              <img src={facebookIcon} alt="facebook" />
            </a>
            <a href="#">
              <img src={instagramIcon} alt="instagram" />
            </a>
            <a href="#">
              <img src={twitterIcon} alt="twitter" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-col-reverse lg:flex-row text-center lg:text-left gap-y-3 font-light text-white text-sm pb-12">
        <div className="flex-1">
          © 2022 Hak Cipta Terpelihara oleh Netflix Indonesia<br/>
          Design by <a href="https://www.figma.com/@muhammadfauzana" target="_blank">Muhammad Fauzan Alkhairi</a> | Coded by <a href="https://linkedin.com/in/hafiedzmada" target="_blank">Hafiedz Mada</a>
        </div>
        <a href="#" className="mr-2">
          Persyaratan Pelayanan
        </a>
        <a href="#">Kebijakan Privasi</a>
      </div>
    </footer>
  );
};

export default Footer;
