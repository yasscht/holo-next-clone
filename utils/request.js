const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/movie/trending/all/day?api_key=${API_KEY}`,
  },
  fetchTopRated: {
    title: "Top rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchMystryMovies: {
    title: "Mystry",
    url: `/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  fetchSciFiMovies: {
    title: "Sci-Fi",
    url: `/movie?api_key=${API_KEY}&with_genres=878`,
  },
  fetchWesternMovies: {
    title: "Western",
    url: `/movie?api_key=${API_KEY}&with_genres=37`,
  },
  fetchAnimationyMovies: {
    title: "Animation",
    url: `/movie?api_key=${API_KEY}&with_genres=16`,
  },
  fetchTVMovies: {
    title: "Tv",
    url: `/movie?api_key=${API_KEY}&with_genres=1770`,
  },
};
