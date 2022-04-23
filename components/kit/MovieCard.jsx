import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/Image";
import { forwardRef } from "react";
const MovieCard = forwardRef(({ result }, ref) => {
  console.log(result);
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div
      ref={ref}
      className="group cursor-pointer transition transform duration-200 ease-in sm:hover:scale-105 hover:z-50 p-3"
    >
      <Image
        src={
          `${BASE_URL}${result?.backdrop_path || result?.poster_path}` ||
          `${BASE_URL}${result?.poster_path}`
        }
        layout="responsive"
        height={1000}
        width={1920}
      />
      <div className="p-2 space-y-1">
        <p className="truncate max-w-md">
          {result.overview && result.overview}
        </p>
        <h3 className="font-bold max-w-md text-xl">
          {result.title || result.original_name}
        </h3>
        <div className="flex items-center space-x-3 opacity-0 group-hover:opacity-100 group-hover:text-white">
          {result.media_type && result.media_type}
          {result.release_date && result.release_date}
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </div>
      </div>
    </div>
  );
});

export default MovieCard;
