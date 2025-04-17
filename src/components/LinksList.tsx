import { LinksListProps} from "../types/types";

const LinksList: React.FC<LinksListProps> = ({linkObj, handleCopyLink, handleRemoveLink, index, handleFetchStats }) => {


    return (
        <>
            <div className="flex flex-1/2  px-4 py-2 items-center justify-between  border border-gray-300 rounded-md mb-2 bg-white shadow-sm mr-3">
              <div className="flex justify-s  w-full">
                {/* Enlace original a la izquierda */}
                <span className="text-gray-500  w-1/2"  >
                  {linkObj.original.length > 30 ? `${linkObj.original.slice(0, 30)}...` : linkObj.original}
                </span>
                <a
                  href={linkObj.short}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline w-1/2 text-right mr-2"
                >
                  {linkObj.short}
                </a>
              </div>

              <div className="flex  space-x-2">
                <button
                  title="Copy link"
                  onClick={() => handleCopyLink(linkObj.short)}
                  className="text-blue-500 hover:text-blue-700 cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-copy">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
                  </svg>
                </button>

                <button
                  title="View stats"
                  onClick={() => handleFetchStats(linkObj.short)}
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
              onClick={()=>handleRemoveLink(index)}
              className="text-red-500 hover:text-red-600 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
            </button>

          </>
    )
}

export default LinksList