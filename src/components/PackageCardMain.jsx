import CheckIcon from "../assets/icon/check.svg";
import Button from "./Button";
import ChecklistItem from "./CheckListItem";

const PackageCardMain = ({ title, price }) => {
  return (
    <div className="bg-[#1F2127] font-body rounded-[30px] py-9 px-6 w-[400px] flex flex-col items-center border border-newWhite bg-gradient-to-bl from-gray1 to-gray2">
      <h3 className="text-newWhite font-semibold text-center mb-6">{title}</h3>
      <h3 className="text-center font-semibold text-3xl text-[#DB202C] mb-6">
        Rp {price.toLocaleString()}
        <span className="text-base font-normal text-newWhite">/bulan</span>
      </h3>
      <div className="flex flex-col gap-y-2 mb-12 self-start">
        <ChecklistItem text="Ponsel, Tablet, Komputer, TV" />
        <ChecklistItem text="No Ads" />
        <ChecklistItem text="Batalkan Kapan Saja" />
        <ChecklistItem text="Kualitas Video Baik" />
        <ChecklistItem text="Resolusi 480p" />
        <ChecklistItem text="Resolusi 720p" />
        <ChecklistItem text="Resolusi 1080p" />
        <ChecklistItem hidden text="Resolusi 4K+HDR" />
      </div>
      <Button>Pilih Paket</Button>
      {/* <button className="border border-newWhite rounded-2xl py-2 px-7 text-newWhite font-semibold w-[150px]">
        Pilih Paket
      </button> */}
    </div>
  );
};

export default PackageCardMain;
