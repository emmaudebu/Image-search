import { useEffect, useState } from "react";
import ImageCard from "./Components/ImageCard";
import ImageSearch from "./Components/ImageSearch";

function App() {
  const [Images, setImages] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [Term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${
        import.meta.env.VITE_API_KEY
      }&q=${Term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        // console.log(Images);

        setisLoading(false);
      })
      .catch((err) => console.log(err));
  }, [Term]);

  return (
    <section className=" container mx-auto px-5">
      <h1 className=" text-center mx-auto text-5xl text-emerald-600 ">
        {" "}
        Image Searching
      </h1>
      <ImageSearch searchText={(text) => setTerm(text)} />
      {!isLoading && Images.length === 0 && (
        <h1 className="text-6xl text-center mx-aut o mt-[300px]">
          {" "}
          No image found ...
        </h1>
      )}
      {isLoading ? (
        <h1 className="text-6xl text-center mx-aut o mt-[300px]">
          {" "}
          Loading...
        </h1>
      ) : (
        <div className=" md:grid flex flex-col items-center justify-center  md:grid-cols-3 gap-4">
          {Images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </section>
  );
}

export default App;
