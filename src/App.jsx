import { useEffect, useState } from "react";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [Term, setTerm] = useState("  ");

  return (
    <main>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          src="https://source.unsplash.com/random"
          alt="image"
          className=" w-full"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
            photo by emmanuel
          </div>
          <ul>
            <li>
              <strong>Views: 300</strong>
            </li>
            <li>
              <strong>Downloads: 450</strong>
            </li>
            <li>
              <strong>Likes: 520</strong>
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-500 mr-2">
            #tag1
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-500 mr-2">
            #tag1
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-500 mr-2 ">
            #tag1
          </span>
        </div>
      </div>
    </main>
  );
}

export default App;
