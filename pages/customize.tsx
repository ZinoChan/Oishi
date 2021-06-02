import Ingredient from "@components/customize order/Ingredient";
import SumTotal from "@components/customize order/SumTotal";
import Navbar from "@components/Navbar";
import React, { useState } from "react";
import { makeNew } from "../data/data";

const Customize = () => {
  const [currentFoodType, setCurrentFoodType] = useState("pizza");
  const [currentIngredient, setCurrentIngredient] = useState("veggies");

  const current_food = makeNew.find((types) => types.type === currentFoodType);

  const ingredient = current_food?.ingredients.find(
    (item) => item.ingredient_name === currentIngredient
  );

  const food_types = ["pizza", "burger"];

  return (
    <section className="min-h-screen flex items-center py-20 bg-light_gray">
      <Navbar />
      <div className="max-w-screen-md w-full px-2 mx-auto">
        <div className="flex items-center justify-center space-x-4 flex-wrap">
          {food_types.map((food_type, index) => (
            <button
              onClick={() => setCurrentFoodType(food_type)}
              key={`${food_type}-${index}`}
              className={`${
                currentFoodType !== food_type && "opacity-70"
              } focus:outline-none bg-primary font-main rounded hover:opacity-100 capitalize mb-6 font-bold text-md text-white px-4 py-1`}
            >
              {food_type}
            </button>
          ))}
        </div>
        <div className="max-w-screen-md w-full mx-auto sm:p-6 p-2 bg-white border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            {!current_food && (
              <h2 className="font-poppins font-bold text-center my-4 text-lg">
                Food type Not Found Please try another
              </h2>
            )}
            {current_food &&
              current_food?.ingredients.map((item, index) => (
                <h4
                  key={`${item.ingredient_name}-${index}`}
                  className={`${
                    currentIngredient === item.ingredient_name &&
                    "text-primary font-bold"
                  } font-poppins capitalize cursor-pointer hover:text-primary`}
                  onClick={() => setCurrentIngredient(item.ingredient_name)}
                >
                  {item.ingredient_name}
                </h4>
              ))}
          </div>
          {ingredient?.ingredients_collection.map(
            ({ id, name, price, price_per, quantity, img }) => (
              <Ingredient
                key={id}
                name={name}
                img={img}
                price={price}
                price_per={price_per}
                quantity={quantity}
              />
            )
          )}
        </div>
        <SumTotal />
      </div>
    </section>
  );
};

export default Customize;
