import React from "react";

export default function ReviewLikeComponent({ review }) {
  return (
    <div>
      {review.likeCount === 0 && <button>Like</button>}

      {"     "}

      {review.likeCount === 1 && <button>{review.likeCount} Like</button>}

      {"     "}

      {review.likeCount > 1 && <button>{review.likeCount} Likes</button>}

      {"     "}

      {review.dislikeCount === 0 && <button>Dislike</button>}

      {"     "}

      {review.dislikeCount === 1 && (
        <button>{review.dislikeCount} Dislike</button>
      )}

      {"     "}

      {review.dislikeCount > 1 && (
        <button>{review.dislikeCount} Dislikes</button>
      )}
    </div>
  );
}

// {review.likeCount > 0 && (
//   <div>
//     {review.likeCount === 1 ? (
//       <button>{review.likeCount} Like</button>
//     ) : (
//       <button>{review.likeCount} Likes</button>
//     )}
//   </div>
// )}

// {"     "}

// {review.dislikeCount > 0 && (
//   <div>
//     {review.dislikeCount === 1 ? (
//       <button>{review.dislikeCount} Dislike</button>
//     ) : (
//       <button>{review.dislikeCount} Dilikes</button>
//     )}
//   </div>
// )}

// {review.likeCount === 0 && <button>Like</button>}

// {review.dislikeCount === 0 && <button>Dislike</button>}

// {"     "}

// {review.dislikeCount > 0 && (
//   <div>
//     {review.dislikeCount === 1 ? (
//       <button>{review.dislikeCount} Dislike</button>
//     ) : (
//       <button>{review.dislikeCount} Dislikes</button>
//     )}
//   </div>
// )}
