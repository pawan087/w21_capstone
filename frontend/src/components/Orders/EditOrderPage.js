import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import NewOrderItems from "./NewOrderItems";
import { setAllOrders } from "../../store/orders.js";
import { setAllOrderItems } from "../../store/orderItems.js";
import styles from "./Orders.module.css";

export default function EditOrderPage() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);
  const params = useParams();
  const user = useSelector((state) => state.session.user);
  // const arr = useSelector((state) => state.orderItemToEditReducer);
  const orderItems = useSelector((state) => state.orderItems);
  const products = useSelector((state) => state.products);
  // const [bool, setBool] = useState(false);
  const bool = false;
  const usersOrders = orders?.filter((order) => {
    return order.userId === +user.id;
  });

  let usersOrdersAndItems = [];

  usersOrders?.forEach((order) => {
    const orderItemsArr = [];

    orderItems?.forEach((item) => {
      if (order.items.includes(item.id)) {
        orderItemsArr.push(item);
      }
    });

    let obj = {
      ...order,
      allItemsArr: [...orderItemsArr],
    };

    delete obj.userId;

    let itemsAndProducts = [];

    obj?.allItemsArr?.forEach((item) => {
      delete item.userId;

      let id1 = item.productId;

      products?.forEach((product) => {
        let id2 = product.id;

        if (+id1 === +id2) {
          itemsAndProducts.push({ product: product, quantity: item.quantity });
        }
      });

      obj.itemsArr = itemsAndProducts;

      obj.items = obj.itemsArr;
      delete obj.itemsArr;
    });

    usersOrdersAndItems.push(obj);
  });

  let thisPagesOrder = usersOrdersAndItems.filter((order) => {
    return order.id === +params.id;
  });


  useEffect(() => {
    dispatch(setAllOrderItems());
    dispatch(setAllOrders());
  }, [dispatch]);

  return (
    <div>
      <h2 className={styles.title}>Edit Order Page</h2>

      <div>
        <h4 className={styles.orderTitle}>Order # {params.num}</h4>
      </div>

      {thisPagesOrder[0]?.items.map((item, i) => {
        return (
          <NewOrderItems
            orderItemIds={params.items}
            orderId={+params.id}
            item={item}
            i={i}
            key={i}
          />
        );
      })}

      <h4>Shipping Address: </h4>

      {!bool && (
        <p>
          {thisPagesOrder[0]?.address1}, {thisPagesOrder[0]?.address2}
        </p>
      )}
    </div>
  );
}
