import { IoChevronBackOutline } from "react-icons/io5";
import { useLoaderData, useNavigate } from "react-router-dom";

export const MoviesDetail = () => {
  const movie = useLoaderData();
  const navigate = useNavigate();

  // Handle case where movie data is not available
  if (!movie || movie.Response === "False") {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-100 py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center cursor-pointer text-blue-400 hover:text-blue-300 mb-8 transition-colors"
          >
            <IoChevronBackOutline size={25}/>
            Back to movies
          </button>

          <div className="text-center py-20">
            <div className="text-6xl mb-4">❌</div>
            <h2 className="text-2xl font-semibold mb-2">Movie not found</h2>
            <p className="text-gray-400">
              The requested movie could not be loaded.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center cursor-pointer  text-blue-400 hover:text-blue-300 mb-8 transition-colors"
        >
           <IoChevronBackOutline size={25}/>
          Back to movies
        </button>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Poster */}
          <div className="flex justify-center">
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/300x445/1f2937/9ca3af?text=No+Image"
              }
              alt={movie.Title}
              className="w-full max-w-sm rounded-xl shadow-2xl"
            />
          </div>

          {/* Movie Details */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{movie.Title}</h1>
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mb-6">
              <span>{movie.Year}</span>
              <span>•</span>
              <span>{movie.Runtime}</span>
              <span>•</span>
              <span className="px-2 py-1 bg-gray-800 rounded-md">
                {movie.Rated}
              </span>
              <span>•</span>
              <span>{movie.Genre}</span>
            </div>

            {/* Ratings */}
            <div className="flex gap-6 mb-6">
              {movie.imdbRating && movie.imdbRating !== "N/A" && (
                <div className="flex items-center">
                  <svg
                    className="w-8 h-8 text-yellow-400 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <div>
                    <div className="font-bold">{movie.imdbRating}/10</div>
                    <div className="text-xs text-gray-500">IMDb</div>
                  </div>
                </div>
              )}

              {movie.Metascore && movie.Metascore !== "N/A" && (
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-600 flex items-center justify-center rounded-md mr-2">
                    <span className="font-bold text-white">M</span>
                  </div>
                  <div>
                    <div className="font-bold">{movie.Metascore}/100</div>
                    <div className="text-xs text-gray-500">Metascore</div>
                  </div>
                </div>
              )}

              {/* Display additional ratings if available */}
              {movie.Ratings &&
                movie.Ratings.length > 0 &&
                movie.Ratings.slice(0, 2).map((rating, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-8 h-8 bg-purple-600 flex items-center justify-center rounded-md mr-2">
                      <span className="font-bold text-white text-xs">
                        {rating.Source[0]}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold">{rating.Value}</div>
                      <div className="text-xs text-gray-500">
                        {rating.Source.length > 10
                          ? `${rating.Source.substring(0, 10)}...`
                          : rating.Source}
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">{movie.Plot}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                  Director
                </h3>
                <p className="mb-4">{movie.Director}</p>
              </div>

              <div>
                <h3 className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                  Writer
                </h3>
                <p className="mb-4">{movie.Writer}</p>
              </div>

              <div>
                <h3 className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                  Actors
                </h3>
                <p className="mb-4">{movie.Actors}</p>
              </div>

              <div>
                <h3 className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                  Language
                </h3>
                <p className="mb-4">{movie.Language}</p>
              </div>

              {movie.BoxOffice && movie.BoxOffice !== "N/A" && (
                <div>
                  <h3 className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                    Box Office
                  </h3>
                  <p className="mb-4">{movie.BoxOffice}</p>
                </div>
              )}

              {movie.Awards && movie.Awards !== "N/A" && (
                <div>
                  <h3 className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                    Awards
                  </h3>
                  <p className="mb-4">{movie.Awards}</p>
                </div>
              )}

              {movie.Country && movie.Country !== "N/A" && (
                <div>
                  <h3 className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                    Country
                  </h3>
                  <p className="mb-4">{movie.Country}</p>
                </div>
              )}

              {movie.DVD && movie.DVD !== "N/A" && (
                <div>
                  <h3 className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                    DVD Release
                  </h3>
                  <p className="mb-4">{movie.DVD}</p>
                </div>
              )}

              {movie.Production && movie.Production !== "N/A" && (
                <div>
                  <h3 className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                    Production
                  </h3>
                  <p className="mb-4">{movie.Production}</p>
                </div>
              )}

              {movie.Website && movie.Website !== "N/A" && (
                <div>
                  <h3 className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                    Website
                  </h3>
                  <a
                    href={movie.Website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Visit Website
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
