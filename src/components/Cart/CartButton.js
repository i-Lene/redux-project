import classes from "./CartButton.module.css";
import { uiSliceActions } from "../../store/ui-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const CartButton = props => {
  const dispatch = useDispatch();
  const totalQty = useSelector(state => state.cart.totalQty);

  const toogleCartHandle = () => {
    dispatch(uiSliceActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toogleCartHandle}>
      <span>My Cart</span>
      <span className={classes.badge}>
        {totalQty}
      </span>
    </button>
  );
};

export default CartButton;
