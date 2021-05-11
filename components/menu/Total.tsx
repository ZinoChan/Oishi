const Total = () => {
  return (
    <div className="bg-white rounded-lg px-2 py-4 grid grid-cols-2 gap-2 ">
      <span className="text-poppins font-bold text-md text-gray-800">
        Subtotal :
      </span>
      <span className="text-poppins font-bold text-md text-gray-800 justify-self-end">
        80$
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
        85$
      </span>
      <button className="bg-primary  px-4 col-span-2 py-2 text-white font-main font-bold">
        Process To Checkout
      </button>
    </div>
  );
};

export default Total;
