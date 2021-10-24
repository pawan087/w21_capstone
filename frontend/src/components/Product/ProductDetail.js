import styles from "./ProductPage.module.css";

function ProductDetail({ num, product, avgRating }) {
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  let rating = formatter.format(avgRating)

  return (
    <>
      <h2 className={styles.title}>Product Page</h2>

      <h4>{product[0]?.name}</h4>

      {num !== 0 && <li>
        {rating} Stars ({num} reviews)
      </li>}

      <li>${product[0]?.price}</li>

      <br></br>
      
      <li>{product[0]?.description}</li>



      <br />

      <img
        className={styles.image}
        alt="productImage"
        src={product[0]?.images[0]}
      ></img>
    </>
  );
}

export default ProductDetail;
