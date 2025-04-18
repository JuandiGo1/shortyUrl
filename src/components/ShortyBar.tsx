import { useEffect, useState } from "react";
import { Link } from "../types/types";
import LinkList from "./LinksList";


const ShortyBar: React.FC<{ handleFetchStats: (link: string) => void }> = ({ handleFetchStats }) => {
  const [link, setLink] = useState("");
  const [shortenedLinks, setShortenedLinks] = useState<Link[]>(() => {
    // Cargar los enlaces desde localStorage al inicializar el estado
    const storedLinks = localStorage.getItem("shortenedLinks");
    return storedLinks ? JSON.parse(storedLinks) : [];
  });



  // Guardar los enlaces en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("shortenedLinks", JSON.stringify(shortenedLinks));
  }, [shortenedLinks]);

  const handleShortenLink = async () => {
    if (link.trim() !== "") {
      try {

        const response = await fetch('https://shtly.vercel.app/shorten', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ original_url: link }),
        })

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to shorten link");
        }
        const data = await response.json()
        setShortenedLinks((prevLinks) => [
          { original: link, short: data.shortUrl },
          ...prevLinks,
        ]);
        setLink(""); // Limpiar el campo de entrada
      } catch (error) {
        console.error('Error shortening URL:', error);
      }

    }
  };

  const handleCopyLink = (link: string) => {
    navigator.clipboard.writeText(link);
    alert("Link copied to clipboard!");
  };

  const handleRemoveLink = (index: number) => {
    setShortenedLinks((prevLinks) => prevLinks.filter((_, i) => i !== index));
  }

  return (
    <section className="flex flex-col items-center  justify-center w-full h-auto  py-4 px-2">
      <h1 className="text-4xl lg:text-5xl font-semibold mb-10">ShortyUrl</h1>
      <div className="flex flex-col lg:flex-row gap-2 items-center justify-center  mb-6 w-full lg:w-4xl">
        <input
          type="text"
          placeholder="Enter your link to shorten"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="px-4 py-2 border items-center border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full lg:w-2xl"
        />
        <button
          onClick={handleShortenLink}
          className="cursor-pointer flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full lg:w-1/4"
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
      <ul className="w-full max-w-3xl">
        {shortenedLinks.map((linkObj, index) => (
          <li
            key={index}
            className="flex "
          >
            <LinkList
              linkObj={linkObj}
              handleCopyLink={handleCopyLink}
              handleRemoveLink={handleRemoveLink}
              index={index}
              handleFetchStats={handleFetchStats}></LinkList>

          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShortyBar;