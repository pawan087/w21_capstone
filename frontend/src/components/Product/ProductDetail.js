import styles from "./ProductPage.module.css";
import ReactImageZoom from "react-image-zoom";
import StarPicker from "react-star-picker";

function ProductDetail({ num, product, avgRating }) {
  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const props = {
    width: 470,
    zoomWidth: 825,
    zoomPosition: "original",
    img: `${product[0]?.images[0]}`,
  };

  let rating = formatter.format(avgRating);

  return (
    <>
      <div className={styles.outerContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.imageContainer}>
            <ReactImageZoom className={styles.pic} {...props} />
          </div>

          <div className={styles.descriptionContainer}>
            <div className={styles.descriptionLabel}>Product Description</div>

            <div className={styles.descriptionText}>
              {product[0]?.description}
            </div>
          </div>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.productDetailContainer}>
            <div className={styles.productNameContainer}>
              {product[0]?.name}
            </div>

            <div className={styles.productBrandContainer}>
              {product[0]?.Brand?.name}
            </div>

            <div className={styles.ratingContainer}>
              <div className={styles.starsContainer}>
                <div className={styles.starRating}>
                  <StarPicker
                    starDimension="10px"
                    disabled={true}
                    value={rating}
                    halfStars
                  />
                </div>
              </div>

              <div className={styles.textRating}>
                <span className={styles.bold}>{rating}</span>{" "}
                <span className={styles.underline}>({num})</span> Ratings
              </div>
            </div>

            <div className={styles.priceContainer}>
              <div className={styles.price}>${product[0]?.price}</div>
            </div>

            <div className={styles.buttonContainer}>
              <div className={styles.addToCartButtonContainer}>
                <button className={styles.addToCartButton}>ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>

        {"          "}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      {"          "}
      <div>
        <h2 className={styles.title}>Product Page</h2>

        <h4>{product[0]?.name}</h4>

        {num !== 0 && (
          <li>
            {rating} Stars ({num} reviews)
          </li>
        )}

        <br />

        <li>${product[0]?.price}</li>

        <br></br>

        <li>{product[0]?.description}</li>

        <br />
        <br />

        <img
          className={styles.image}
          alt="productImage"
          src={product[0]?.images[0]}
        ></img>

        <br />
        <br />
      </div>
    </>
  );
}

export default ProductDetail;

// <ReactImageMagnify
//   {...{ enlargedImagePosition: "over" }}
//   {...{
//     smallImage: {
//       alt: "productPic",
//       isFluidWidth: true,
//       src: product[0]?.images[0],
//     },
//     largeImage: {
//       src: product[0]?.images[0],
//       width: 1200,
//       height: 1800,
//     },
//   }}
// />;
