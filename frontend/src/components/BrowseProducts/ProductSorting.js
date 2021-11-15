import { useParams } from "react-router";

export const SortPriceRating = (id, product) => {
  const params = useParams();

  if (params.price === "1") {
    if (product.price >= 0 && product.price <= 10) {
      return product.Category.id === id;
    }
  } else if (params.price === "2") {
    if (product.price >= 10 && product.price <= 25) {
      return product.Category.id === id;
    }
  } else if (params.price === "3") {
    if (product.price >= 50 && product.price <= 75) {
      return product.Category.id === id;
    }
  } else if (params.price === "4") {
    if (product.price >= 75 && product.price <= 100) {
      return product.Category.id === id;
    }
  } else if (params.price === "5") {
    if (product.price >= 100 && product.price <= 200) {
      return product.Category.id === id;
    }
  } else if (params.price === "6") {
    if (product.price >= 200 && product.price <= 300) {
      return product.Category.id === id;
    }
  } else if (params.price === "7") {
    if (product.price >= 300) {
      return product.Category.id === id;
    }
  } else if (params.price === "0") {
    return product.Category.id === id;
  }
};
