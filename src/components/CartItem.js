import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  // Destructure item
  const { id, title, image, price, amount } = item;

  return (
    <div className="flex gap-x-4 py-6 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      {/* image */}
      <div className="w-[80px]">
        <Link to={`/product/${id}`}>
          <img className="max-w-full" src={image} alt="" />
        </Link>
      </div>
      {/* Title and Remove Icons */}
      <div className="flex items-center w-full">
        <div className="w-full">
          {/* title */}
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            {/* remove icons */}
            <div
              onClick={() => removeFromCart(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[30px] text-sm">
            {/* Quantity */}
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              {/* Minus icons */}
              <div
                onClick={() => decreaseAmount(id)}
                className="flex-1 flex justify-center items-center cursor-pointer"
              >
                <IoMdRemove />
              </div>
              {/* Amount */}
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              {/* Plus icon */}
              <div
                onClick={() => increaseAmount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            {/* Item Price */}
            <div className="flex-1 flex items-center justify-around">
              $ {price}
            </div>
            {/* Final Price */}
            <div className="flex-1 flex justify-end items-center text-primary font-medium">{`$ ${parseFloat(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
