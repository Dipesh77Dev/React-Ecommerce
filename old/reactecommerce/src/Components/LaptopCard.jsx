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
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.img}  alt={item.name}/>
      <Card.Body>
        <Card.Title> {item.name}</Card.Title>
        <Card.Text>
        {item.price}
        </Card.Text>
        <Card.Text>
        {item.desc}
        </Card.Text>
        {cart.some((p) => p.id === item.id) ? (
        <Button variant="primary" onClick={removeFromCart}>Remove item</Button>
        ) : (
            <Button variant="primary" onClick={addToCart}>Add to Cart</Button>
          )}
      </Card.Body>
    </Card>
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

