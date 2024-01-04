
import React from 'react';
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutubeSquare,
  } from "react-icons/fa";
  import { FaTiktok } from "react-icons/fa";
  

const Footer = () => {
   
  return (
    <div className="w-full mt-24 bg-gray-800 text-gray-300 px-2 py-2">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b border-gray-400 py-8 px-4">
        <div>
          <h6 className="font-bold pt-4 uppercase underline decoration-rose-700"> Home </h6>
          <ul>
            <li className="py-1 text-xs md:text-sm">About</li>
            <li className="py-1 text-xs md:text-sm">Sale</li>
            <li className="py-1 text-xs md:text-sm">Clearance</li>
            <li className="py-1 text-xs md:text-sm">Contact</li>
          </ul>
        </div>


        <div>
          <h6 className="font-bold pt-4 uppercase underline decoration-rose-700"> Services </h6>
          <ul>
            <li className="py-1 text-xs md:text-sm">Returns</li>
            <li className="py-1 text-xs md:text-sm">FAQ</li>
            <li className="py-1 text-xs md:text-sm">Shipping and Delivery</li>
            <li className="py-1 text-xs md:text-sm">Order Tracking</li>
          </ul>
        </div>


        <div>
          <h6 className="font-bold pt-4 uppercase underline decoration-rose-700 "> Shop </h6>
          <ul>
            <li className="py-1 text-xs md:text-sm">Women</li>
            <li className="py-1 text-xs md:text-sm">Men</li>
            <li className="py-1 text-xs md:text-sm">Kids</li>
            <li className="py-1 text-xs md:text-sm">Baby</li>
            <li className="py-1 text-xs md:text-sm">Beauty</li>
            <li className="py-1 text-xs md:text-sm">Sport</li>
           

          </ul>
        </div>


        <div>
          <h6 className="font-bold pt-4 uppercase underline decoration-rose-700"> ShopMe Inc. </h6>
          <ul>
            <li className="py-1 text-xs md:text-sm">About ShopMe...</li>
            <li className="py-1 text-xs md:text-sm">News Room</li>
            <li className="py-1 text-xs md:text-sm">Career</li>
           
          </ul>
        </div>


        <div className="col-span-2 py-8 md:pt-2">
          <p className="font-bold uppercase "> Subscribe to our newsletters</p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4 outline-none text-black "
              type="email"
              placeholder="Enter your emil"
            ></input>
            <button className="p-2 mb-4 rounded-md underline decoration-rose-700">Subscribe</button>
          </form>
        </div>
      </div>


      <div className="flex flex-col max-w-[1400px] py-4 px-24 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4"> 2023 ShopMe.Com, All Rights Reserved.</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl px-20">
        <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaYoutubeSquare />
          <FaTiktok/>
        </div>
      </div>
    </div>
  );

}

export default Footer;