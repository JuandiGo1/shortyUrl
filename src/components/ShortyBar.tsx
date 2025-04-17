import { useEffect, useState } from "react";

const ShortyBar: React.FC = () => {
  const [link, setLink] = useState("");
  const [shortenedLinks, setShortenedLinks] = useState<string[]>(() => {
    // Cargar los enlaces desde localStorage al inicializar el estado
    const storedLinks = localStorage.getItem("shortenedLinks");
    return storedLinks ? JSON.parse(storedLinks) : [];
  });



    // Guardar los enlaces en localStorage cada vez que cambien
    useEffect(() => {
      localStorage.setItem("shortenedLinks", JSON.stringify(shortenedLinks));
    }, [shortenedLinks]);

  const handleShortenLink = () => {
    if (link.trim() !== "") {
      setShortenedLinks((prevLinks) => [...prevLinks, link]);
      setLink(""); // Limpiar el campo de entrada
    }
  };

  const handleCopyLink = (link: string) => {
    navigator.clipboard.writeText(link);
    alert("Link copied to clipboard!");
  };

  return (
    <section className="flex flex-col items-center justify-center w-4xl h-auto py-10">
      <h1 className="text-4xl font-semibold mb-10">ShortyUrl</h1>
      <div className="flex items-center space-x-2 mb-6">
        <input
          type="text"
          placeholder="Enter your link to shorten"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-2xl"
        />
        <button
          onClick={handleShortenLink}
          className="cursor-pointer flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <span className="mr-2">Shorten URL</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.121 14.121a3 3 0 000-4.242L9.88 5.636a3 3 0 00-4.242 4.242l4.242 4.243a3 3 0 004.242 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.242 16.242a3 3 0 01-4.242 0l-4.243-4.242a3 3 0 010-4.242"
            />
          </svg>
        </button>
      </div>
      <ul className="w-full max-w-2xl">
        {shortenedLinks.map((shortenedLink, index) => (
          <li
            key={index}
            className="flex items-center justify-between px-4 py-2 "
          >
            <div className="flex flex-1/2  px-4 py-2 items-center justify-between  border border-gray-300 rounded-md mb-2 bg-white shadow-sm mr-3">
              <span className="text-gray-700 truncate">{shortenedLink}</span>
              <div className="flex space-x-2">
                <button 
                  title="Copy link"
                  onClick={() => handleCopyLink(shortenedLink)}
                  className="text-blue-500 hover:text-blue-700 cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-copy">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
                  </svg>
                </button>

                <button
                  title="View stats"
                  onClick={() => alert(`View stats for: ${shortenedLink}`)}
                  className="text-green-500 hover:text-green-700 cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chart-column">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 20h3" /><path d="M17 20h3" /><path d="M10.5 20h3" /><path d="M4 16h3" /><path d="M17 16h3" /><path d="M10.5 16h3" /><path d="M4 12h3" /><path d="M17 12h3" /><path d="M10.5 12h3" /><path d="M4 8h3" /><path d="M17 8h3" /><path d="M4 4h3" />
                  </svg>
                </button>
              </div>

            </div>
            <button
                  title="Remove link"
                  onClick={() => setShortenedLinks(shortenedLinks.filter((_, i) => i !== index))}
                  className="text-red-500 hover:text-red-600 cursor-pointer"
                >
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                </button>

          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShortyBar;