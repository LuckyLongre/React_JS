// This is the main entry component of our React application
// We import the SeriesCards component which will display our series/shows catalog
// import { SeriesCards } from "./components/SeriesCards";

import PokemonApp from "./projects/Pokemon/PokemonApp";

// App component is the root component of our application
// It's a simple component that just renders the SeriesCards component
// Using arrow function syntax for the component definition
const App = () => {
  // The component returns JSX (JavaScript XML) which renders the SeriesCards component
  return (
    <>
      {/* <SeriesCards />; */}
      <PokemonApp />
    </>
  );
};

// We export the App component as the default export so it can be imported in other files
// This is typically used in main.jsx to render the root component
export default App;
