import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";

import NewOrderItems from "./NewOrderItems";
import { setAllOrders, updateOrderAddress } from "../../store/orders.js";
import { setAllOrderItems } from "../../store/orderItems.js";
import styles from "./Orders.module.css";

export default function EditOrderPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const orders = useSelector((state) => state.orders);
  const params = useParams();

  const user = useSelector((state) => state.session.user);

  const orderItems = useSelector((state) => state.orderItems);
  const products = useSelector((state) => state.products);

  const [bool, setBool] = useState(false);
  const [address1, setAddress1] = useState(params.address1);
  const [address2, setAddress2] = useState(params.address2);

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

  const handleSubmit = async () => {
    setBool(false);

    if (
      (address1 === params.address1 && address2 === params.address2) ||
      !!!address1 ||
      !!!address2
    ) {
      setBool(false);
      return;
    } else {
      const data = { id: +params.id, address1, address2 };

      await dispatch(updateOrderAddress(data));

      await dispatch(setAllOrders());

      history.push("/orders");

      return;
    }
  };

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

      {!bool && <h4>Shipping Address: </h4>}

      {bool && <h4>Enter Shipping Address: </h4>}

      {!bool && (
        <p>
          {thisPagesOrder[0]?.address1}, {thisPagesOrder[0]?.address2}
        </p>
      )}

      {bool && (
        <div>
          <div>
            <input
              onChange={(e) => setAddress1(e.target.value)}
              type="text"
              defaultValue={address1}
            ></input>
          </div>

          <br />

          <div>
            <input
              onChange={(e) => setAddress2(e.target.value)}
              type="text"
              defaultValue={address2}
            ></input>
          </div>
        </div>
      )}

      <br />

      {!bool && (
        <button onClick={() => setBool(true)}>Change Shipping Address</button>
      )}

      {bool && <button onClick={handleSubmit}>Update</button>}

      {"     "}

      {bool && <button onClick={() => setBool(false)}>Cancel</button>}

      <br />
      <br />

      <button onClick={() => history.push("/orders")}>Go Back</button>
    </div>
  );
}
