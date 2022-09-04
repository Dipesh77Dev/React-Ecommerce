import React from "react";
import { add, remove } from "../Redux/CartSlice.jsx";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const LaptopCard = ({ item }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const addToCart = () => {
    dispatch(add(item));
    enqueueSnackbar(`Item added to your cart successfully`, {
      variant: "success",
      autoHideDuration: 3000,
    });
  };

  const removeFromCart = () => {
    dispatch(remove(item.id));
    enqueueSnackbar(`Item removed from your cart!`, {
      variant: "warning",
      autoHideDuration: 3000,
    });
  };

  return (
    <>
    <div className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <div className ="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8">

<div className="group hover:scale-110 transition duration-300 ease-in flex flex-col items-center border-2 border-purple-400 gap-3 p-4 h-[350px] w-[300px] mt-10 ml-5  rounded-xl">

        <div className="h-[150px]">
          <img
            src={item.img}
            alt={item.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <span className="truncate w-40 mt-3 text-gray-700 font-semibold text-lg">
            {item.name}
          </span>
        </div>
        <div className="flex items-center justify-between w-full mt-3">
          {cart.some((p) => p.id === item.id) ? (
            <button
              className="group-hover:bg-purple-700 group-hover:text-white transition duration-300 ease-in text-purple-700 border-2 border-purple-700 rounded-lg font-semibold p-3"
              onClick={removeFromCart}
            >
              Remove item
            </button>
          ) : (
            <button
              className="group-hover:bg-purple-700 group-hover:text-white transition duration-300 ease-in text-purple-700 border-2 border-purple-700 rounded-lg font-semibold p-3"
              onClick={addToCart}
            >
              Add to cart
            </button>
          )}
          <span>${item.price}</span>
        </div>
      </div>
     
     </div>
      </div>
      </div>
    </>
)
}

export default LaptopCard;

/*
<div className="group hover:scale-110 transition duration-300 ease-in flex flex-col items-center border-2 border-purple-400 gap-3 p-4 h-[350px] mt-10 ml-5  rounded-xl">
        <div className="h-[180px]">
          
          <img
            src={item.img}
            alt={item.name}
            className="h-full w-full object-cover"
          />
        </div> 
        
        <div>

          <h1 className="truncate w-40 mt-3 text-gray-700 font-semibold text-lg">
             {item.title}
            {item.name}
          </h1>
        </div>
        <div className="flex items-center justify-between w-full mt-5">
          {cart.some((p) => p.id === item.id) ? (
            <button
              className="group-hover:bg-purple-700 group-hover:text-white transition duration-300 ease-in text-purple-700 border-2 border-purple-700 rounded-lg font-semibold p-3"
              onClick={removeFromCart}
            >
              Remove item
            </button>
          ) : (
            <button
              className="group-hover:bg-purple-700 group-hover:text-white transition duration-300 ease-in text-purple-700 border-2 border-purple-700 rounded-lg font-semibold p-3"
              onClick={addToCart}
            >
              Add to cart
            </button>
          )}
          <p>${item.price}</p>
          <p>${item.price}</p>
        </div>
       </div>
    </>
  );
};
*/

