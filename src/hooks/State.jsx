// Import useState hook for state management in functional components
import { useState } from "react";
// Import our users data from constants
import { users } from "../constants/user";

// State component demonstrates basic usage of the useState hook
// This is a simple example showing how to manage and display data using React state
export const State = () => {
  // Initialize state with users data
  // userData: current state containing user information
  // setUserData: function to update the state (not used in this example but available)
  const [userData, setUserData] = useState(users);
  return (
    <ul>
      {userData.map((curEl, i) => (
        <li key={i}>
          <h1>
            {curEl.name} - {curEl.age}
          </h1>
        </li>
      ))}
    </ul>
  );
};
