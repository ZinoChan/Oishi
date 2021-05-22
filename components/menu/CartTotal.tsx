import Link from "next/link";

const CartTotal = ({ cart }) => {
  const subTotal = () => {
    if (cart.length !== 0) {
      return cart
        .reduce((sum, i) => {
          return sum + i.price * i.quantity;
        }, 0)
        .toFixed(2);
    }
  };

  const total = Number(subTotal()) + 5;

  return (
    <div className="bg-white rounded-lg px-2 py-4 grid grid-cols-2 gap-2 ">
      <span className="text-poppins font-bold text-md text-gray-800">
        Subtotal :
      </span>
      <span className="text-poppins font-bold text-md text-gray-800 justify-self-end">
        {subTotal()}$
      </span>
      <span className="text-poppins font-bold text-md text-gray-800">
        Shipping :
      </span>
      <span className="text-poppins font-bold text-md text-gray-800 justify-self-end">
        5$
      </span>
      <span className="text-poppins font-bold text-md text-gray-800">
        Total :
      </span>
      <span className="text-poppins font-bold text-md text-gray-800 justify-self-end">
        {total}$
      </span>
      <Link href="/checkout/billing">
        <a>
          <button className="bg-primary  px-4 col-span-2 py-2 text-white font-main font-bold">
            Process To Checkout
          </button>
        </a>
      </Link>
    </div>
  );
};

export default CartTotal;
