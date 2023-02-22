import MovieCard from "./MovieCard";
import peakyBlinders from "../assets/illustration/peaky-blinders.png";
import spiderman from "../assets/illustration/spiderman.png";
import lol from "../assets/illustration/lol.png";
import joker from "../assets/illustration/joker.png";
import Button from "./Button";

const movies = [
  {
    title: "Peaky Blinders",
    imageUrl: peakyBlinders,
    categories: "Crime, Drama",
    rating: "8.8/10 IMDb",
  },
  {
    title: "Spiderman: No Way Home",
    imageUrl: spiderman,
    categories: "Action, Adventure, Fantasy",
    rating: "8.8/10 IMDb",
  },
  {
    title: "Arcane: League of Legends",
    imageUrl: lol,
    categories: "Animation, Action, Adventure",
    rating: "9.2/10 IMDb",
  },
  {
    title: "Joker",
    imageUrl: joker,
    categories: "Crime, Drama, Thriller",
    rating: "8.4/10 IMDb",
  },
];

const Popular = () => {
  const renderMovieCards = () => {
    return movies.map((movie, index) => {
      return (
        <MovieCard
          key={index}
          title={movie.title}
          imageUrl={movie.imageUrl}
          categories={movie.categories}
          rating={movie.rating}
        />
      );
    });
  };

  return (
    <div className="pb-16 md:pb-24 lg:pb-32">
      <div className="mb-8 flex items-end justify-center lg:justify-between">
        <h1 className="font-title text-4xl text-white">
          Film dan Acara TV
          <br />
          Populer Bulan Ini
        </h1>
        <div className="hidden lg:block">
        <Button>Lihat Semua</Button>
        </div>
      </div>
      <div className="flex flex-col gap-y-5 justify-center items-center lg:items-start lg:flex-row gap-x-10">{renderMovieCards()}</div>
      <div className="mt-8 lg:hidden flex items-center justify-center">
        <Button>Lihat Semua</Button>
      </div>
    </div>
  );
};

export default Popular;
