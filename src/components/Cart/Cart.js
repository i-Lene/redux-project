import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = props => {
  const items = useSelector(state => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.length < 1 && <p>No items into this cart </p>}
        {items.map(item => {
          return (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                title: item.name,
                quantity: item.quanty,
                total: item.totalPrice,
                price: item.price
              }}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
