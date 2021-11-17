import { useParams } from "react-router";
import { useSelector } from "react-redux";

export const SortPriceRating = (id, product) => {
  const params = useParams();

  if (params.price === "1") {
    if (product.price >= 0 && product.price <= 10) {
      return SortPriceRating2(id, product);
    }
  } else if (params.price === "2") {
    if (product.price >= 10 && product.price <= 25) {
      return SortPriceRating2(id, product);
    }
  } else if (params.price === "3") {
    if (product.price >= 50 && product.price <= 75) {
      return SortPriceRating2(id, product);
    }
  } else if (params.price === "4") {
    if (product.price >= 75 && product.price <= 100) {
      return SortPriceRating2(id, product);
    }
  } else if (params.price === "5") {
    if (product.price >= 100 && product.price <= 200) {
      return SortPriceRating2(id, product);
    }
  } else if (params.price === "6") {
    if (product.price >= 200 && product.price <= 300) {
      return SortPriceRating2(id, product);
    }
  } else if (params.price === "7") {
    if (product.price >= 300) {
      return SortPriceRating2(id, product);
    }
  } else if (params.price === "0") {
    return SortPriceRating2(id, product);
  }
};

export const SortPriceRating2 = (id, product) => {
  const params = useParams();

  const reviews = useSelector((state) => state.reviews);

  let productReviews = [];

  reviews?.forEach((review) => {
    if (review?.productId === product?.id) {
      productReviews.push({
        ...review,
      });
    }
  });

  let sum = 0;

  productReviews?.forEach((review) => {
    if (review === undefined) {
      return;
    }

    sum += +review.rating;
  });

  const avgRating = sum / productReviews.length;

  if (params.rating === "1") {
    if (+avgRating > 1) {
      return product.Category.id === id;
    }
  } else if (params.rating === "2") {
    if (+avgRating > 2) {
      return product.Category.id === id;
    }
  } else if (params.rating === "3") {
    if (+avgRating > 3) {
      return product.Category.id === id;
    }
  } else if (params.rating === "4") {
    if (+avgRating >= 4) {
      return product.Category.id === id;
    }
  } else if (params.rating === "0") {
    return product.Category.id === id;
  }
};
