import React from "react";
import ShowMoreText from "react-show-more-text";

export default function ImageZoom() {
  const executeOnClick = (isExpanded) => {
    console.log(isExpanded);
}
  return (
    <div>
      <ShowMoreText
        lines={3}
        more="View more"
        less="View less"
        className="content-css"
        expanded={false}
        width={1000}
        truncatedEndingComponent={" ... "}
      >
      </ShowMoreText>
    </div>
  );
}
