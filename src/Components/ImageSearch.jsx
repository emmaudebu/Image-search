import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, settext] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
    console.log(text);
  };
  return (
    <div className=" max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmit} className=" w-ful l max-w-sm">
        <div className="flex items-center  border-b-2 border-teal-500 py-2">
          <input
            onChange={(e) => settext(e.target.value)}
            type="text"
            placeholder=" Search...."
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3py-1 px-2 leading-tight focus:outline-none"
          />
          <button
            className="flex-hrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
