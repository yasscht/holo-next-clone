import MovieCard from "./kit/MovieCard";

const Movies = ({ results }) => {
  return (
    <div className="flex items-center justify-center flex-wrap w-screen">
      {results.map((result) => (
        <MovieCard key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Movies;
