import { CartContext } from "../context/CartContext";
import { useContext, useState, useEffect } from "react";
import axios from "axios";

const ShoppingCart = () => {
  const { cart } = useContext(CartContext);
  const [list, setList] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleGetData = async () => {
    let totalPriceValue = 0;

    for (let id of cart) {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setList((prevList) => [...prevList, data]);
      totalPriceValue += data.price;
    }

    setTotalPrice(totalPriceValue);
    setTotalItems(cart.length);
  };

  useEffect(() => {
    handleGetData();
  }, [cart]);

  return (
    <section>
      <h1 className="text-3xl text-center mt-8 font-bold">Shopping Cart</h1>
      <div className="flex justify-center  items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="  md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <p className="     w-full animate-pulse bg-gray-100 mb-4 p-12 text-center font-bold rounded-2xl shadow-xl ">
            Celebrate with a{" "}
            <span className="text-red-600 text-lg ">Zellashop</span> Gift Cart
          </p>

          <img
            src="https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Shopping"
            className="w-full rounded-2xl shadow-xl "
          />
          <p className="  w-full animate-pulse bg-gray-100 mt-4 p-12 text-center font-bold rounded-2xl shadow-xl">
            FREE STANDARD SHIPPING & 60-DAY RETURNS
          </p>
        </div>

        <div class="flex flex-col p-6 ">
          {list.map((item) => (
            <div className="flex items-center">
              <div
                key={item.id}
                className="flex flex-none w-24 mb-4  z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full "
              >
                <img src={item.image} alt="" />
              </div>
              <form className="flex-auto pl-6">
                <div className=" flex  items-baseline pb-6  before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6">
                  <h1 className=" w-full flex-none mb-1 text-sm font-bold text-black">
                    {item.title}{" "}
                  </h1>
                  <h2 className=" ml-3 font-bold text-lg text-black">
                    ${item.price}
                  </h2>
                </div>

                <div className="flex space-x-2 mb-4 text-sm font-medium">
                  <div class="flex space-x-4">
                    <button
                      className="px-4 h-10  text-sm text-gray-700 bg-white border border-gray-300  hover:bg-red-500  rounded"
                      type="button"
                    >
                      Save for later
                    </button>
                    <button
                      className="px-4 h-10  text-sm text-gray-700 bg-white border border-gray-300  hover:bg-red-500 rounded"
                      type="button"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </form>
            </div>
          ))}
          ;
          <div className="text-center mt-6">
            <p className="font-bold text-md text-center">
              Total Items: {totalItems}
            </p>
            <p className="font-bold text-md text-center">
              Total Price: ${totalPrice.toFixed(2)}
            </p>
          </div>
          <button className="px-4 h-10 mt-2 font-bold text-sm text-black bg-white border border-gray-300  hover:bg-red-500 rounded">
            Check out{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
