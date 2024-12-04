import React from "react";
import img1 from "./assets/1.jpeg";
import img2 from "./assets/2.jpeg";
import img4 from "./assets/4.png";
import ImageLoader from "./components/ImageLoader";
import Image from "./components/Image";

const App = () => {
  const images = [img1, img2];
  const MAX_IMAGES = 4;
  const errorImage = img4;

  const presentImages = [...images];
  while (presentImages.length < MAX_IMAGES) {
    presentImages.push(null); 
  }

  const { isReady, error } = ImageLoader(presentImages);

  return (
    <div className="img-container">
      {presentImages.map((img, index) => (
        <Image
          key={index}
          img={img}
          isReady={isReady[index]}
          error={error[index]}
          index={index}
          errorImage={errorImage}
        />
      ))}
    </div>
  );
};

export default App;
