import React from "react";

export const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          About ShadowX
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Welcome to <span className="font-semibold">ShadowX</span> — a modern
          web application designed to simplify your workflow and deliver
          top-tier performance and user experience.
        </p>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Our mission is to empower developers and businesses by providing
          intuitive, scalable, and elegant solutions. Built with modern tools
          like React and Tailwind CSS, ShadowX ensures a responsive and
          accessible interface across all devices.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-12">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          What We Do
        </h3>
        <ul className="space-y-4 text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li>Develop responsive, mobile-first web applications</li>
          <li>Ensure accessibility and performance best practices</li>
          <li>Build scalable front-end architectures</li>
          <li>Offer dark mode support out of the box</li>
        </ul>
      </div>

      <div className="max-w-4xl mx-auto mt-12">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Meet the Team
        </h3>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We're a small, passionate team of developers and designers who love
          creating impactful products. Our goal is to bring simplicity and
          efficiency to every user interface we touch.
        </p>
      </div>
    </section>
  );
};
