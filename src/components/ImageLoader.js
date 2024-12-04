import React from "react";
import { useState, useEffect } from "react";

const ImageLoader = (images) => {
  const [isReady, setIsReady] = useState(Array(images.length).fill(false));
  const [error, setError] = useState(Array(images.length).fill(false));

  useEffect(() => {
    images.forEach((img, index) => {
      if (!img) return;

      const image = new Image();
      image.src = img;
      image.onload = () => {
        setIsReady((prev) => {
          const updated = [...prev];
          updated[index] = true;
          return updated;
        });
      };
      image.onerror = () => {
        setError((prev) => {
          const updated = [...prev];
          updated[index] = true;
          return updated;
        });
      };
    });
  }, [images]);

  return { isReady, error };
};

export default ImageLoader;
