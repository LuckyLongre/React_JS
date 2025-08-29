// Import the useState hook from React for managing state
import { useState } from "react";
// Import users data from our constants file
import { users } from "./constants/user";

// DerivedState component demonstrates the concept of derived state in React
// Derived state is when we calculate new values based on existing state
export const DerivedState = () => {
  // Initialize state with our users data
  // userData: current state value
  // setUserData: function to update the state
  const [userData, setUserData] = useState(users);

  // Derived state examples:
  // These values are calculated from our state and will automatically update when state changes
  let totalStudents = userData.length;  // Calculate total number of users
  
  // Calculate average age using reduce
  // acc: accumulator (running total)
  // cuV: current value (each user object)
  // 0: initial value of accumulator
  let avgAge = userData.reduce((acc, cuV) => acc + cuV.age, 0) / totalStudents;
  return (
    <section className="w-full max-w-2xl mx-auto mt-12 p-8 rounded-2xl bg-gradient-to-br from-gray-900 via-gray-950 to-gray-800 shadow-2xl border border-gray-800/60">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-cyan-400 tracking-wide drop-shadow-lg">Users List</h1>
      <ul className="grid gap-5 mb-8">
        {userData.map((curEl, i) => (
          <li
            key={i}
            className="flex items-center justify-between bg-gray-800/80 rounded-xl px-6 py-4 shadow-md hover:bg-gray-700/80 transition-colors border border-gray-700/60"
          >
            <span className="text-lg font-semibold text-gray-100 tracking-wide">{curEl.name}</span>
            <span className="text-base font-medium text-cyan-300">{curEl.age} yrs</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-6">
        <div className="bg-gray-800/80 rounded-lg px-6 py-3 shadow border border-gray-700/60 flex flex-col items-center">
          <span className="text-lg font-bold text-green-400">Total Users</span>
          <span className="text-2xl font-extrabold text-gray-100">{totalStudents}</span>
        </div>
        <div className="bg-gray-800/80 rounded-lg px-6 py-3 shadow border border-gray-700/60 flex flex-col items-center">
          <span className="text-lg font-bold text-purple-400">Average Age</span>
          <span className="text-2xl font-extrabold text-gray-100">{Math.floor(avgAge)}</span>
        </div>
      </div>
    </section>
  );
};
