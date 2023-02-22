const ServiceCard = ({ iconUrl, title, body }) => {
  return (
    <div className="bg-[#1F2127] p-6 rounded-[30px] lg:w-[290px] md:w-full w-full">
      <img className="mb-3" src={iconUrl} alt="icon" />
      <p className="text-newWhite mb-2">{title}</p>
      <p className="text-[#E3E0E0] font-light text-sm">{body}</p>
    </div>
  );
};

export default ServiceCard;
