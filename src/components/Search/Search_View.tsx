import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
type Props = {};
const Search: React.FC<Props> = props => {
  return (
    <>
      <div className="">
        <div className="bg-white flex items-center rounded-full shadow-xl border-2 border-solid border-gray-100 ">
          <input
            className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
            id="search"
            type="text"
            placeholder="Search"
          ></input>

          <div className="p-4">
            <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
              <FontAwesomeIcon
                icon={faSearch}
                size="lg"
                className="ml-1 text-lg text-center text-white mr-2"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Search;
