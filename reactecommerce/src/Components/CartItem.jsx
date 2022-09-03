import React from "react";
import { Delete } from "@mui/icons-material";
import { remove } from "../Redux/CartSlice.jsx";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";

const CartItem = ({ item }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();

  const removeItemFromCart = () => {
    dispatch(remove(item.id));
    enqueueSnackbar(`Item removed from your cart!`, {
      variant: "warning",
      autoHideDuration: 3000,
    });
  };

  return (
    <>
      <div className="flex items-center p-2 justify-between bg-violet-200 mt-2 mb-4 rounded-xl">
        <div className="flex p-3">
          {/* <img src={item.image} className="h-28 rounded-lg" alt="" /> */}
          <img src={item.img} className="h-60 py-5 rounded-lg" alt="" />
          <div className="ml-10 self-start space-y-5">
            <span className="text-xl text-purple-700 font-semibold">
              {/* {item.title} */}
              {item.name}
            </span>
            <br />
            <span> RS. {item.price}</span>
            <br />
            <span>{item.desc}</span>
          </div>
        </div>
        <div
          onClick={removeItemFromCart}
          className="bg-purple-300 hover:bg-purple-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
        >
          <Delete className="text-gray-800" />
        </div>
      </div>
    </>
  );
};

export default CartItem;
