import SearchBar from "./components/SearchBar";
import { useState } from "react";
import unsplash from "./apis/unsplash";
import ImageList from "./components/ImageList";

const App = () => {
  const [images, setImages] = useState([]);
  const onSearchSubmit = async (term) => {
    const { data } = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });
    setImages(data.results);
  };

  return (
    <div className="ui container">
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
