// Import useState hook from React for state management
import { useState } from "react";

// LiftingStateUp component demonstrates the concept of lifting state up in React
// This pattern is used when multiple components need to share and update the same state
const LiftingStateUp = () => {
  // Initialize state for the input value
  // value: current state value (the input text)
  // setvalue: function to update the state
  const [value, setvalue] = useState("");

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700">
        <h2 className="text-2xl font-bold text-center text-gray-100 mb-8">Name Input Example</h2>
        <Input value={value} setvalue={setvalue} />
        <Display value={value} />
      </div>
    </div>
  );
};

// Input component receives value and setvalue as props from parent
// This is a controlled component where React controls the input value
const Input = ({ value, setvalue }) => {
  return (
    <div className="mb-6">
      {/* Label for accessibility */}
      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
        Enter Your Name
      </label>
      {/* Controlled input element */}
      <input
        id="name"
        type="text"
        placeholder="Enter your name"
        value={value}
        onChange={(e) => setvalue(e.target.value)}
        className="w-full px-4 py-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none transition duration-150 ease-in-out"
      />
    </div>
  );
};

// Display component shows the current value from the input
// It receives the value prop from the parent component
const Display = ({value}) => {
  return (
    <div className="mt-6 pt-4 border-t border-gray-700">
      <h3 className="text-lg font-medium text-gray-200">Your Name:</h3>
      <p className="mt-2 text-xl font-semibold text-purple-400">
        {/* Conditional rendering: show the value if it exists, otherwise show a placeholder */}
        {value ? value : <span className="text-gray-500 italic">Type something above...</span>}
      </p>
    </div>
  );
};

export default LiftingStateUp;
