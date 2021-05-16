import Image from "next/image";

const MenuItem = ({ item_img, price, item_name }) => {
  return (
    <div className="border border-gray-200  bg-white rounded-lg p-2 text-center">
      <Image
        src={item_img}
        alt="pizza"
        className="block mb-1 mx-auto"
        width={150}
        height={150}
      />
      <h3 className="font-main capitalize text-xl mb-1">{item_name}</h3>
      <div className="flex justify-between items-center">
        <span className="text-poppins font-bold text-md text-gray-500">
          Price:
        </span>
        <span className="text-poppins font-bold text-md text-gray-500">
          {price}$
        </span>
      </div>
    </div>
  );
};

export default MenuItem;
