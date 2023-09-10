import React from "react";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <main>
      <div className="max-w-sm rounded overflow-hidden shadow-lg md:max-w-md h-[500px] w-[100%]">
        <img
          src={image.webformatURL}
          alt="image"
          className=" w-full object-cover h-[300px] "
        />
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
            Photo by {image.user}
          </div>
          <ul>
            <li>
              <strong>Views: {image.views}</strong>
            </li>
            <li>
              <strong>Downloads: {image.downloads}</strong>
            </li>
            <li>
              <strong>Likes: {image.likes}</strong>
            </li>
          </ul>
        </div>
        <div className="px-2 py-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-500 mr-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ImageCard;
