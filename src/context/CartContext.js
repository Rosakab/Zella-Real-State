
import { createContext, useState } from "react";

export const CartContext = createContext({
  cart:[],
  setCart:()=>{},
});

const Provider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default Provider;
