import React from "react";
import ReactImageMagnify from "react-image-magnify";

import ReactImageZoom from 'react-image-zoom';

export default function ImageZoom() {
  return (
    <div className="fluid">
      <div className="fluid__image-container">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              width: 10,
              height: 10,
              isFluidWidth: true,
              src: 'https://i.etsystatic.com/22145649/r/il/4d52e5/2524896116/il_1140xN.2524896116_sctg.jpg',
            },
            largeImage: {
              src: 'https://i.etsystatic.com/22145649/r/il/4d52e5/2524896116/il_1140xN.2524896116_sctg.jpg',
              width: 1200,
              height: 1800,
            },
          }}
        />
      </div>
    </div>
  );
}
