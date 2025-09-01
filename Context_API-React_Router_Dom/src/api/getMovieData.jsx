export const getMovieData = async () => {
  try {
    const res = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=${
        import.meta.env.VITE_API_KEY
      }&s=titanic&page=1`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getMovieDataDetailed = async ({ params }) => {
  try {
    const res = await fetch(
      `https://www.omdbapi.com/?i=${params.movieId}&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
