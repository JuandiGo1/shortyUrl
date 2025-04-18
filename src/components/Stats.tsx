import React, { useState } from "react";
import { StatsProps } from "../types/types";



const Stats: React.FC<StatsProps> = ({ stats, error, handleFetchStats }) => {
  const [link, setLink] = useState("");

  return (
    <section className="flex flex-col items-center justify-start w-full h-auto  py-10">
      <div className="mb-6 flex flex-col items-center justify-center w-full ">
        <h1 className="text-3xl lg:text-4xl font-semibold mb-6">
          Get shortened link stats
        </h1>
        <div className="flex flex-col lg:flex-row gap-2 items-center justify-center   mb-6 w-full lg:w-2xl">
          <input
            type="text" 
            placeholder="Enter your shortened link"
            value={link}
            onChange={(e) => setLink(e.target.value)} 
            className="px-4 py-2 border items-center border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full lg:w-2xl"
          />
          <button
            onClick={() => handleFetchStats(link)}
            className="cursor-pointer flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full lg:w-1/4"
          >
            Get Stats
          </button>
        </div>
      </div>
      <div className="w-full max-w-2xl md:w-2xl p-4 border border-gray-300 rounded-md bg-white shadow-md">
        {error ? (
          <p className="text-red-500">{error}</p> // Mostrar el mensaje de error
        ) : stats ? (
          <div className="grid grid-cols-2 gap-4">
            <span className="font-semibold text-gray-700">Original URL:</span>
            <a
              href={stats.original_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline truncate"
            >
              {stats.original_url}
            </a>

            <span className="font-semibold text-gray-700">Short ID:</span>
            <span className="text-gray-700">{stats.short_id}</span>

            <span className="font-semibold text-gray-700">Access Count:</span>
            <span className="text-gray-700">{stats.access_count}</span>

            <span className="font-semibold text-gray-700">Created At:</span>
            <span className="text-gray-700">
              {new Date(stats.created_at).toLocaleString()}
            </span>
          </div>
        ) : (
          <p className="text-gray-500">
            No statistics available. Enter a link to see stats.
          </p>
        )}
      </div>
    </section>
  );
};

export default Stats;
