const MenuItem = () => {
  return (
    <div className="border border-gray-200  bg-white rounded-lg p-2 text-center">
      <img
        src="/images/pizza 1.png"
        alt="pizza"
        className="block mb-1 h-auto mx-auto"
        style={{ width: 150 }}
      />
      <h3 className="font-main capitalize text-xl mb-1">Margarita</h3>
      <div className="flex justify-between items-center">
        <span className="text-poppins font-bold text-md text-gray-500">
          Price:
        </span>
        <span className="text-poppins font-bold text-md text-gray-500">
          40$
        </span>
      </div>
    </div>
  );
};

export default MenuItem;
