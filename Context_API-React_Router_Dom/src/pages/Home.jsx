import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context";

export const Home = () => {
  const { name } = useAuth();
  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          Welcome to{" "}
          <span className="text-blue-600 dark:text-blue-500">{name}</span>
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Build fast, modern, and accessible web applications with ease. ShadowX
          helps developers move faster with beautiful UIs, dark mode support,
          and fully responsive design.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <NavLink
            to="/about"
            className="inline-block px-6 py-3 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-md transition dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Learn More
          </NavLink>
          <NavLink
            to="/contact"
            className="inline-block px-6 py-3 text-blue-700 border border-blue-700 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-800 font-medium rounded-md transition"
          >
            Contact Us
          </NavLink>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mt-20 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Fast Development
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Use Tailwind and React to build your UI in record time with
            reusable, scalable components.
          </p>
        </div>
        <div className="p-6 rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Dark Mode Ready
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            All components and pages support dark mode, enhancing user
            experience and accessibility.
          </p>
        </div>
        <div className="p-6 rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Developer Friendly
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            ShadowX is built with developers in mind — clean code, comments, and
            modern tooling.
          </p>
        </div>
      </div>
    </section>
  );
};
