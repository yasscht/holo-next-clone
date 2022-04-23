import Header from "../components/Header";
import Movies from "../components/Movies";
import Navbar from "../components/Navbar";
import request from "../utils/request";

export default function Home({ results, g }) {
  console.log(results, g);
  return (
    <div>
      <Header />
      <Navbar />
      <Movies />
    </div>
  );
}
export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const req = await fetch(
    `https://api.themoviedb.org/3${
      request[genre]?.url || request?.fetchTrendingMovies?.url
    }`
  ).then((res) => res.json());
  return {
    props: {
      results: req,
      g: request[genre].url,
    },
  };
}
