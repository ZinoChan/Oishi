const CartItem = ({ item_name, item_image, price, quantity }) => {
  return (
    <div className="bg-white rounded-lg px-2 py-4 flex justify-between mb-6">
      <img src={item_image} className="w-20 h-auto" alt="pizza" />
      <div>
        <h3 className="font-main capitalize text-xl mb-1">
          {item_name} x {quantity}
        </h3>
        <span className="text-poppins font-bold text-md text-red-500">
          {price}$
        </span>
      </div>
      <div className="flex flex-col items-center justify-between">
        <span>icon</span>
        <div className="flex space-x-2">
          <span className="rounded-full w-6 h-6 flex items-center bg-primary text-white justify-center text-md font-poppins font-bold">
            +
          </span>
          <span className="rounded-full w-6 h-6 flex items-center bg-primary text-white  justify-center text-md font-poppins font-bold">
            -
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
