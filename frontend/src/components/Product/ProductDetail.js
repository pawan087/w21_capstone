import styles from "./ProductPage.module.css";

function ProductDetail({ num, product, avgRating }) {
  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  let rating = formatter.format(avgRating);

  return (
    <>
      <div className={styles.outerContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.imageContainer}>Photo</div>

          <div className={styles.descriptionContainer}>Description</div>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.productDetailContainer}>
            <div className={styles.productNameContainer}>Product Name</div>

            <div className={styles.productBrandContainer}>Product Brand</div>

            <div className={styles.ratingContainer}>
              <div className={styles.starRating}>Stars</div>

              <div className={styles.textRating}>4.3 (385) Ratings</div>
            </div>

            <div className={styles.addToCartButtonContainer}>
              <button className={styles.addToCartButton}>ADD TO CART</button>
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
