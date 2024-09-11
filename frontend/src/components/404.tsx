import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md">
        <div className="space-y-1 flex flex-col items-center mb-6">
          <img
            src="/logo.png"
            alt="IkiGoo Logo"
            width={200}
            height={100}
            className="mb-4"
          />
        </div>
        <div className="space-y-6 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">404</h1>
            <h2 className="text-2xl font-semibold tracking-tight">Page Not Found</h2>
            <p className="text-gray-500">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          <div className="flex justify-center">
            <Link to="/">
              <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
                Return to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}