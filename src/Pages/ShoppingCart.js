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
    let arr = [];

    for (let id of cart) {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      arr.push(data);
      totalPriceValue += data.price;
    }
    setList(arr);
    setTotalPrice(totalPriceValue);
    setTotalItems(cart.length);
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <section className="container w-full ">
      <h1 className="text-3xl text-center mt-8 font-bold underline  decoration-red-600    ">
        Shopping Cart
      </h1>
      <div className="flex justify-center  items-center px-1 py-12 max-w-6xl mx-auto">
        {/* <div className="hidden md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
         

          <img
            src="https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Shopping"
            className="w-full rounded-2xl shadow-xl "
          />
        
        </div> */}

        <div class="flex flex-col p-4 ">
          {list.map((item) => (
            <div className="flex items-center">
              <div key={item.id} className="flex flex-none w-24 mb-4   ">
                <img src={item.image} alt="shop" />
              </div>
              <div className=" flex-auto pl-6">
                <div className="  flex  items-center  pb-6">
                  <h1 className=" w-full flex-none  text-sm font-bold text-black">
                    {item.title}{" "}
                  </h1>
                  <h2 className="  font-bold text-md text-black">
                    ${item.price}
                  </h2>
                </div>

                <div className="flex  mb-4 text-sm font-medium">
                  <div class="flex space-x-4">
                    <button
                      className="px-4 h-10  text-md text-gray-700  hover:text-white  bg-white border border-gray-300  hover:bg-red-600  rounded"
                      type="button"
                    >
                      Save for later
                    </button>
                    <button
                      className="px-4 h-10  text-sm text-gray-700 hover:text-white bg-white border border-gray-300  hover:bg-red-600 rounded"
                      type="button"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="text-center mt-6">
            <p className="font-bold text-md text-center">
              Total Items: {totalItems}
            </p>
            <p className="font-bold text-md text-center">
              Total Price: ${totalPrice.toFixed(2)}
            </p>
          </div>
          {list.length !== 0 && (
            <button className="px-8  w-full h-10 mt-4 font-bold text-lg text-black border border-gray-300 bg-red-400 rounded hover:bg-red-600">
              Check out
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
