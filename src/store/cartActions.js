import { uiSliceActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

const fetchCartData = () => {
  return async dispatch => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-course-42099-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response) {
        throw new Error("Could not fetch card data");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCArt({
          items: cartData.items || [],
          totalQty: cartData.totalQty
        })
      );
    } catch (error) {
      dispatch(
        uiSliceActions.showNotification({
          status: "error",
          title: "Error",
          message: "Fetching Cart Data Failed"
        })
      );
    }
  };
};

export default fetchCartData;
