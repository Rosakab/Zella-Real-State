import axios from "axios";
import ProductItem from "./ProductItem";
import useQuery from "../hook/useQuery";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductData = () => {
  const { cart, setCart } = useContext(CartContext);

  const handleGetProducts = async () => {
    const { data } = await axios.get(
      "https://fakestoreapi.com/products"
    );
    return data;
  };

  const { data: products = [], loading, error } = useQuery(handleGetProducts);

  const handleAddToCart = (id) => {
    const copy = [...cart];
    copy.push(id);
    setCart(copy);
  };

  //shorter version to make a copy:
  // setCart([...cart,id])

  return (
    <div className=" grid md:grid-cols-2  lg:grid-cols-4  gap-4 ">
      {products.map((item) => (
        <ProductItem
          key={item.id}
          {...item}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductData;