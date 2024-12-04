import React from "react";

const Image = ({ img, isReady, error, index, errorImage }) => {
  return (
    <div className="img-wrapper">
      {img ? (
        isReady ? (
          <img className="img" src={img} alt="Image" />
        ) : error ? (
          <img className="img" src={errorImage} alt="error image" />
        ) : (
          <div className="placeholder">Loading...</div>
        )
      ) : (
        <div className="placeholder">Placeholder</div>
      )}
    </div>
  );
};

export default Image;
