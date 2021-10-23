import styles from "./Orders.module.css";

export default function NewOrderItems({ item, i }) {
  return (
    <div key={i}>
      <h4>{item?.product?.name}</h4>

      <img
        alt="productImage"
        className={styles.image}
        src={item?.product?.images[0]}
      ></img>

      <h5>Order Status: Processing</h5>

      <h5>Quantity: item.quantity</h5>
    </div>
  );
}
