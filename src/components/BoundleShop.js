import React from "react";

const BundleShop = () => {
  return (
    <div className="max-w-[1100px] h-[540px] bg-gray-600 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-6 grid lg:grid-cols-3 gap-4 shadow-2xl border-t-2 border-rose-800 ">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="text-2xl font-bold text-gray-200">
          {" "}
          Finds Worth Celebrating
        </h3>
        <p className="pt-4 text-gray-200">
          {" "}
          Bundle up in our best selection for the season.
        </p>

        <div>
          <button className="bg-gray-500 text-gray-200 border-black hover:shadow-xl mr-4 mt-4 p-2 rounded-xl">
            Shop All
          </button>
        </div>
    


      </div>

      <div className="grid grid-cols-2 col-span-2 gap-2 ">
        <img
          className=" shadow-lg object-cover w-full h-full  "
          src="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="#"
        ></img>

        <img
          className=" shadow-lg row-span-2 object-cover w-full h-full mt-6"
          src="https://images.pexels.com/photos/852860/pexels-photo-852860.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="#"
        ></img>

        <img
          className="shadow-lg object-cover w-full h-full"
          src="https://images.pexels.com/photos/3208627/pexels-photo-3208627.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="#"
        ></img>







      </div>
    </div>
  );
};

export default BundleShop;