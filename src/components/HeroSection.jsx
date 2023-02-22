import spiderman from "../assets/illustration/img-hero.png";
import Button from "./Button";

const HeroSection = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-x-10 mb-[180px] md:flex-col-reverse lg:flex-row flex-col-reverse">
        <div>
          <h1 className="font-title text-newWhite md:text-[56px] text-5xl mb-4 mt-4 md:mt-4">
            Nikmati Tontonan Dimana Saja, dan Kapan Saja
          </h1>
          <p className="text-[#E3E1E1] font-body text-base mb-6">
            Tonton apa saja secara online dari komputer pribadi atau di
            perangkat yang terhubung ke Internet dan mendukung aplikasi Netflix,
            dan gunakan download untuk menonton saat kamu di perjalanan dan
            tidak punya koneksi Internet.
          </p>
          <Button>Daftar Sekarang</Button>
        </div>
        <img src={spiderman} alt="hero" />
      </div>
    </div>
  );
};

export default HeroSection;
