import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default function Test() {
  const params = useParams();

  let search = params?.criteria?.trim().split("_").join("");
  const products = useSelector((state) => state.products);

  let searchResults = [];

  products?.forEach((product) => {
    let toSearch = product.name.trim().toLowerCase().split(" ").join("");

    if (toSearch.includes(search)) {
      searchResults.push(product);
    }
  });

  console.log(searchResults);

  return (
    <div>
      <h2>
        {searchResults.length} Search {searchResults.length === 1 && "Result"}{" "}
        {searchResults.length === 0 && "Results"}{" "}
        {searchResults.length > 1 && "Results"}:
      </h2>

      {searchResults?.map((product, i) => (
        <div key={i}>
          <a href={`/products/${product.id}`}>{product?.name}</a>

          <br />
        </div>
      ))}

      {searchResults.length === 0 && (
        <h3>
          <br />
          Sorry.
        </h3>
      )}
    </div>
  );
}
