import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="h-screen bg-gradient-to-r from-blue-800 to-indigo-900 flex items-center justify-center">
      <div className="text-center">
        {/* Animated "404" */}
        <div className="relative">
          <h1 className="text-7xl font-bold text-white animate-pulse">{`${error.status} - ${error.statusText}`}</h1>
          {/* Floating animation */}
          <div className="absolute -top-10 -right-10 w-16 h-16 bg-indigo-700 rounded-full animate-bounce blur-lg opacity-50"></div>
          <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-blue-400 rounded-full animate-spin-slow blur-md opacity-40"></div>
        </div>

        {/* Error Message */}

        <p className="mt-4 text-2xl text-gray-100">
          Oops! The page you're looking for doesn't exist.
        </p>

        {/* Navigation Links */}
        <div className="mt-6">
          <a
            href="/"
            className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-md shadow-md hover:bg-gray-100 transition duration-300"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
