import React, { useState } from "react";

const Stats: React.FC = () => {
  const [link, setLink] = useState("");
  const [stats, setStats] = useState<string | null>(null);

  const handleFetchStats = () => {
    // Aquí puedes agregar la lógica para obtener las estadísticas del enlace
    // Por ahora, simularemos las estadísticas con un ejemplo
    setStats(`Statistics for: ${link}`);
  };

  return (
    <section className="flex flex-col items-center justify-start h-screen ">
      <div className="mb-6 flex flex-col items-center justify-center ">
        <h1 className="text-2xl font-semibold mb-10">
          Get shortened link stats
        </h1>
        <div>
          <input
            type="text"
            placeholder="Enter your shortened link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-80"
          />
          <button
            onClick={handleFetchStats}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Get Stats
          </button>
        </div>
      </div>
      <div className="w-96 p-4 border border-gray-300 rounded-md bg-white shadow-md">
        {stats ? (
          <p>{stats}</p>
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
