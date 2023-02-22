import star from "../assets/icon/star.svg";

const MovieCard = ({ imageUrl, title, categories, rating }) => {
  return (
    <div className="text-newWhite font-body flex flex-col justify-between gap-y-1 rounded-3xl border border-[#FEF4F499] p-6 w-[290px] h-[350px]">
      <img className="mb-4 " src={imageUrl} alt={title} />
      <a href="#" className="text-lg font-medium mb-1">
        {title}
      </a>
      <p className="mb-2">{categories}</p>
      <div className="flex items-center gap-x-2">
        <img src={star} alt="star" />
        <p className="font-light text-sm">{rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
