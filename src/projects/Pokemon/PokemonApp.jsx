import { useEffect, useState, useCallback } from "react";
import PokemonCard from "./PokemonCard";

const PokemonApp = () => {
  const [apiData, setApiData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(24);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [customLimitInput, setCustomLimitInput] = useState("");

  const fetchData = useCallback(async (loadMore = false) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const currentOffset = loadMore ? offset : 0;
      const API = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${currentOffset}`;
      
      const res = await fetch(API);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      
      const data = await res.json();
      
      // Check if there are more Pokémon to load
      setHasMore(data.next !== null);
      
      const detailedDataPromise = data.results.map(async (cur) => {
        const res = await fetch(cur.url);
        const data = await res.json();
        return data;
      });
      
      const detailedData = await Promise.all(detailedDataPromise);
      
      if (loadMore) {
        setApiData(prevData => [...prevData, ...detailedData]);
        setOffset(currentOffset + limit);
      } else {
        setApiData(detailedData);
        setOffset(limit);
      }
    } catch (error) {
      setError(error.message);
      console.error("Failed to fetch Pokémon:", error);
    } finally {
      setIsLoading(false);
    }
  }, [limit, offset]);

  useEffect(() => {
    fetchData(false);
  }, [limit]);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      // Filter logic remains the same
    }, 300);
    
    return () => clearTimeout(timer);
  }, [searchTerm, apiData]);

  // Filter Pokemon based on search term
  const filteredPokemon = apiData.filter(
    (pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pokemon.id.toString().includes(searchTerm)
  );

  const handleLoadMore = () => {
    if (hasMore && !isLoading) {
      fetchData(true);
    }
  };

  const handleLimitChange = (e) => {
    e.preventDefault(); 
    const newLimit = parseInt(customLimitInput);
    if (newLimit > 0 && newLimit <= 100) {
      setLimit(newLimit);
    } else {
      setError("Please enter a number between 1 and 100");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
            Let's Catch the Pokémon
          </h1>
          <p className="text-gray-400">Browse through your favorite Pokémon</p>
        </div>

        {/* Controls Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          {/* Search Input */}
          <div className="w-full md:max-w-md">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="search"
                placeholder="Search Pokémon by name or ID..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg bg-gray-800 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Limit Input */}
          <form onSubmit={handleLimitChange} className="flex items-center gap-2 w-full md:w-auto">
            <label htmlFor="limit" className="text-gray-400 text-sm whitespace-nowrap">
              Pokémons per page:
            </label>
            <input
              id="limit"
              type="number"
              min="1"
              max="100"
              className="w-16 px-2 py-1 border border-gray-700 rounded bg-gray-800 text-gray-100 focus:outline-none focus:ring-1 focus:ring-purple-500"
              value={customLimitInput}
              onChange={(e) => setCustomLimitInput(e.target.value)}
              placeholder={limit.toString()}
            />
            <button
              type="submit"
              className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded transition-colors"
            >
              Apply
            </button>
          </form>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-3 bg-red-900/30 border border-red-700 rounded text-red-200 text-center">
            {error}
          </div>
        )}

        {/* Loading State */}
        {isLoading && apiData.length === 0 && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        )}

        {/* Results Count */}
        {!isLoading && (
          <div className="mb-6 text-center">
            <p className="text-gray-400">
              Showing {filteredPokemon.length} of {apiData.length} Pokémon
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          </div>
        )}

        {/* Pokemon Grid */}
        {!isLoading && (
          <>
            <ul className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-5 lg:gap-6 justify-items-center">
              {filteredPokemon.map((curEL) => (
                <PokemonCard key={curEL.id} curEL={curEL} />
              ))}
            </ul>

            {/* Load More Button */}
            {hasMore && !searchTerm && (
              <div className="mt-10 text-center">
                <button
                  onClick={handleLoadMore}
                  disabled={isLoading}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Loading...
                    </span>
                  ) : (
                    "Load More Pokémon"
                  )}
                </button>
              </div>
            )}
          </>
        )}

        {/* No Results Message */}
        {!isLoading && filteredPokemon.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-6xl mb-4">😢</div>
            <h3 className="text-xl font-medium text-gray-300 mb-2">
              No Pokémon found
            </h3>
            <p className="text-gray-500">Try a different search term</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonApp;