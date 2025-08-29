const PokemonCard = ({ curEL }) => {
  // Function to format the Pokemon ID with leading zeros
  const formatId = (id) => {
    return `#${id.toString().padStart(3, '0')}`;
  };

  // Function to capitalize the first letter of the Pokemon name
  const capitalizeName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  // Function to get type color classes
  const getTypeColor = (typeName) => {
    const typeColors = {
      normal: 'bg-gray-400 text-gray-900',
      fire: 'bg-red-500 text-white',
      water: 'bg-blue-500 text-white',
      electric: 'bg-yellow-400 text-gray-900',
      grass: 'bg-green-500 text-white',
      ice: 'bg-blue-200 text-gray-900',
      fighting: 'bg-red-700 text-white',
      poison: 'bg-purple-600 text-white',
      ground: 'bg-yellow-700 text-white',
      flying: 'bg-indigo-300 text-gray-900',
      psychic: 'bg-pink-500 text-white',
      bug: 'bg-green-600 text-white',
      rock: 'bg-yellow-600 text-white',
      ghost: 'bg-purple-700 text-white',
      dragon: 'bg-indigo-600 text-white',
      dark: 'bg-gray-800 text-white',
      steel: 'bg-gray-500 text-white',
      fairy: 'bg-pink-300 text-gray-900',
    };
    
    return typeColors[typeName] || 'bg-gray-400 text-gray-900';
  };

  // Function to get gradient background based on primary type
  const getCardGradient = (primaryType) => {
    const gradientColors = {
      normal: 'from-gray-400 to-gray-300',
      fire: 'from-red-500 to-orange-400',
      water: 'from-blue-500 to-blue-300',
      electric: 'from-yellow-400 to-yellow-200',
      grass: 'from-green-500 to-green-300',
      ice: 'from-blue-200 to-blue-100',
      fighting: 'from-red-700 to-red-500',
      poison: 'from-purple-600 to-purple-400',
      ground: 'from-yellow-700 to-yellow-500',
      flying: 'from-indigo-300 to-indigo-200',
      psychic: 'from-pink-500 to-pink-300',
      bug: 'from-green-600 to-green-400',
      rock: 'from-yellow-600 to-yellow-400',
      ghost: 'from-purple-700 to-purple-500',
      dragon: 'from-indigo-600 to-indigo-400',
      dark: 'from-gray-800 to-gray-600',
      steel: 'from-gray-500 to-gray-400',
      fairy: 'from-pink-300 to-pink-200',
    };
    
    return gradientColors[primaryType] || 'from-gray-500 to-gray-400';
  };

  const primaryType = curEL.types[0]?.type?.name || 'normal';
  const cardGradient = getCardGradient(primaryType);

  return (
    <li className={`rounded-2xl overflow-hidden shadow-xl border-2 border-gray-700 transition-all duration-300 hover:shadow-purple-500/30 hover:scale-[1.03] w-full max-w-sm mx-auto flex flex-col h-full bg-gradient-to-b ${cardGradient}`}>
      {/* Header section with ID and name */}
      <div className="p-4 bg-black/20 backdrop-blur-sm">
        <div className="flex justify-between items-center">
          <h2 className="text-xl md:text-2xl font-bold text-white truncate drop-shadow-md">{capitalizeName(curEL.name)}</h2>
          <span className="text-white font-bold text-sm md:text-base flex-shrink-0 ml-2 bg-black/30 px-2 py-1 rounded-full">{formatId(curEL.id)}</span>
        </div>
      </div>
      
      {/* Image section */}
      <div className="relative p-4 md:p-6 flex justify-center bg-gradient-to-b from-white/10 to-black/10">
        <div className="absolute top-3 right-3 flex flex-wrap justify-end gap-2 max-w-[60%]">
          {curEL.types.map((type, index) => (
            <span 
              key={index} 
              className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(type.type.name)} shadow-md`}
            >
              {type.type.name.toUpperCase()}
            </span>
          ))}
        </div>
        
        <div className="relative w-40 h-40 md:w-48 md:h-48">
          <div className="absolute inset-0 bg-white/30 rounded-full scale-90 blur-md"></div>
          <img 
            src={curEL.sprites.other['official-artwork']?.front_default || curEL.sprites.front_default} 
            alt={curEL.name}
            className="relative w-full h-full object-contain drop-shadow-2xl z-10"
          />
        </div>
      </div>
      
      {/* Stats and details section */}
      <div className="bg-gray-900/90 backdrop-blur-sm p-4 flex-grow">
        <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4">
          <div className="bg-black/30 p-3 rounded-xl border border-gray-700/50">
            <div className="flex items-center justify-center mb-1">
              <svg className="w-4 h-4 mr-1 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-300 text-xs md:text-sm">Height</p>
            </div>
            <p className="text-white font-medium text-center text-sm md:text-base">{(curEL.height / 10).toFixed(1)} m</p>
          </div>
          <div className="bg-black/30 p-3 rounded-xl border border-gray-700/50">
            <div className="flex items-center justify-center mb-1">
              <svg className="w-4 h-4 mr-1 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-300 text-xs md:text-sm">Weight</p>
            </div>
            <p className="text-white font-medium text-center text-sm md:text-base">{(curEL.weight / 10).toFixed(1)} kg</p>
          </div>
        </div>
        
        <div className="mb-4">
          <h3 className="text-base md:text-lg font-semibold text-white mb-3 border-b border-gray-700 pb-2 flex items-center">
            <svg className="w-4 h-4 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
            </svg>
            Base Stats
          </h3>
          <div className="space-y-2">
            {curEL.stats.map((stat, index) => (
              <div key={index}>
                <div className="flex justify-between text-xs md:text-sm mb-1">
                  <span className="text-gray-300 capitalize">{stat.stat.name.replace('-', ' ')}</span>
                  <span className="text-white font-bold">{stat.base_stat}</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${
                      stat.base_stat > 80 ? 'bg-gradient-to-r from-green-500 to-green-400' :
                      stat.base_stat > 50 ? 'bg-gradient-to-r from-yellow-500 to-yellow-400' :
                      'bg-gradient-to-r from-red-500 to-red-400'
                    }`}
                    style={{ width: `${Math.min(100, (stat.base_stat / 255) * 100)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-base md:text-lg font-semibold text-white mb-3 border-b border-gray-700 pb-2 flex items-center">
            <svg className="w-4 h-4 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            Abilities
          </h3>
          <div className="flex flex-wrap gap-2">
            {curEL.abilities.map((ability, index) => (
              <span 
                key={index} 
                className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                  ability.is_hidden 
                    ? 'bg-purple-700/80 text-purple-100 border border-purple-500' 
                    : 'bg-gray-700/80 text-gray-200 border border-gray-600'
                }`}
              >
                {ability.ability.name.replace('-', ' ')}
                {ability.is_hidden && (
                  <span className="ml-1 text-purple-200">
                    <svg className="w-3 h-3 inline" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
};

export default PokemonCard;