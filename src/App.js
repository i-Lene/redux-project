import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { uiSliceActions } from "./store/ui-slice";
import { Fragment } from "react";
import Notification from "./components/UI/Notification";
import fetchCartData from "./store/cartActions";
let isInitial = true;
function App() {
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(fetchCartData());
    },
    [dispatch]
  );
  useEffect(
    function() {
      const sendCartData = async () => {
        dispatch(
          uiSliceActions.showNotification({
            status: "pending",
            title: "Sending...",
            message: "Sending Cart Data"
          })
        );
        const response = await fetch(
          "https://react-course-42099-default-rtdb.firebaseio.com/cart.json",
          {
            method: "PUT",
            body: JSON.stringify({ items: cart.items, totalQty: cart.totalQty })
          }
        );

        if (!response.ok) {
          throw new Error("Faild");
        }

        dispatch(
          uiSliceActions.showNotification({
            status: "success",
            title: "Success",
            message: "Sending Cart Data Complete"
          })
        );
      };

      if (isInitial) {
        isInitial = false;
        return;
      }

      if (cart.changed) {
        sendCartData().catch(error => {
          dispatch(
            uiSliceActions.showNotification({
              status: "error",
              title: "Error",
              message: "Sending Cart Data Failed"
            })
          );
        });
      }
    },
    [cart, dispatch]
  );

  const showCart = useSelector(state => state.ui.cartIsVisible);
  return (
    <Fragment>
      {notification &&
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
