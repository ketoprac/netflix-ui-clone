import PackageCard from "./PackageCard";
import PackageCardMain from "./PackageCardMain";

const Package = () => {
  return (
    <div className="pb-[180px]">
      <h1 className="text-newWhite text-[40px] font-title text-center mb-6">
        Pilih Paket yang Cocok <br /> Untukmu
      </h1>
      <div className="flex justify-center items-center gap-x-10 flex-col lg:flex-row gap-y-5">
        <PackageCard title="Basic" price={120000} />
        <PackageCardMain title="Standart" price={153000} />
        <PackageCard title="Premium" price={186000} />
      </div>
    </div>
  );
};

export default Package;
