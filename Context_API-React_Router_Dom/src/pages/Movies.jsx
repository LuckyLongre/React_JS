import React from "react";
import { useLoaderData, Link, useNavigation } from "react-router-dom";

export const Movies = () => {
  const data = useLoaderData();
  if (
    !data ||
    data.Response === "False" ||
    !data.Search ||
    data.Search.length === 0
  ) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-100 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Movie Explorer
          </h1>

          <div className="text-center py-20">
            <div className="text-6xl mb-4">🎬</div>
            <h2 className="text-2xl font-semibold mb-2">
              {data && data.Error ? data.Error : "No movies found"}
            </h2>
            <p className="text-gray-400">Try refreshing the page</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Popular Movies</h1>
        {/* Movie Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.Search.map((movie) => (
            <Link
              key={movie.imdbID}
              to={`/movies/${movie.imdbID}`}
              className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : "https://via.placeholder.com/300x445/1f2937/9ca3af?text=No+Image"
                  }
                  alt={movie.Title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0  group-hover:bg-opacity-30 transition-all duration-300"></div>
              </div>
              <div className="p-4">
                <h2 className="font-semibold text-lg mb-1 line-clamp-1 group-hover:text-blue-300 transition-colors">
                  {movie.Title}
                </h2>
                <p className="text-sm text-gray-400">
                  {movie.Year} • {movie.Type}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
