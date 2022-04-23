import Header from "../components/Header";
import Movies from "../components/Movies";
import Navbar from "../components/Navbar";
import request from "../utils/request";

export default function Home({ results }) {
  console.log(results);
  return (
    <div>
      <Header />
      <Navbar />
      <Movies results={results} />
    </div>
  );
}
export async function getServerSideProps(context) {
  let genre = context.query.genre;

  const req = await fetch(
    `https://api.themoviedb.org/3${
      request[genre]?.url || request?.fetchTrendingMovies?.url
    }`
  ).then((res) => res.json());
  return {
    props: {
      results: req.results,
    },
  };
}
