//Typically we would store in {process.env.API_KEY}
const API_KEY = "270cb0e21ca5a7410e6920d23a7cea78"

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
};

// const requests {
//     fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
//     fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}with_networks=213`,
//     fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//     fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//     fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//     fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//     fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//     fetchDocumentariesMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
// };

export default requests;