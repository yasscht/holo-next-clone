import Image from "next/Image";
const MovieCard = ({ result }) => {
  console.log(result);
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div>
      <Image
        src={
          `${BASE_URL}${result?.backdrop_path || result?.poster_path}` ||
          `${BASE_URL}${result?.poster_path}`
        }
        layout="responsive"
        height={1000}
        width={1920}
      />
    </div>
  );
};

export default MovieCard;
