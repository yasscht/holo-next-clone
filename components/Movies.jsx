import MovieCard from "./kit/MovieCard";

const Movies = ({ results }) => {
  return (
    <div>
      {results.map((result) => (
        <MovieCard key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Movies;
