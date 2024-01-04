import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductData = () => {
  const [product, setProduct] = useState([]);

  const handleGetProduct = async () => {
    const { data } = await axios.get(" https://fakestoreapi.com/products ");
    setProduct(data);
  };

  useEffect(() => {
    handleGetProduct();
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-2 bg-gray-100">
      {product?.map((item) => (
        <div
          key={item.id}
          className="border rounded shadow-lg m-6 border-red-500 p-2 "
        >
          <img
            src={item.image}
            alt=""
            className="mx-auto w-24 h-24 mt-4  "
          ></img>
          <p className="font-bold p-2"> {item.title}</p>
          <p className="font-semibold my-2 px-2 underline ">${item.price}</p>

          <div className="flex justify-between items-center pb-1">
            <Link
              to="/basket"
              className=" text-center text-white rounded-r-full shadow-3xl  bg-gray-500 p-1 w-1/3 m-1 font-bold border-r-4 border-red-900"
            >
              Add to Cart
            </Link>

            <Link
              to="/read-more"
              className=" text-center text-white rounded-l-full shadow-3xl border-l-4 border-red-900 bg-gray-500 p-1 w-1/3 m-1 font-bold"
            >
              Read more
            </Link>
          </div>
          <div></div>
        </div>
      ))}
    </div>
  );
};

export default ProductData;
