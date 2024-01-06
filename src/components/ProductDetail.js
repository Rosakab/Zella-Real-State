import { useParams } from "react-router";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import useQuery from "../hook/useQuery";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const handleGetDetail = async (id) => {
  const { data } = await axios.get(
    `https://fakestoreapi.com/products/${id}`
  );
  return data;
};

const ProductDetail = () => {
  const { id } = useParams();
  const { cart, setCart } = useContext(CartContext);
  const { data: detail, loading, error } = useQuery (()=>handleGetDetail(id));


  
 

  const handleAddCart=()=>{
    setCart([...cart, id])
  };

  // const [detail, setDetail] = useState();

  // const handleGetDetail = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       `https://api.escuelajs.co/api/v1/products/${id}`
  //     );
  //     setDetail(data);
  //   } catch (error) {}
  // };

  // useEffect(() => {
  //   handleGetDetail();
  // }, []);

  return (
    <>
      <Header />
      <div className="flex justify-between ">
        <img
          src={detail?.image}
          alt="gallery"
          className="rounded w-1/3 my-5 mx-5 shadow-md  h-1/3"
        ></img>
        <div className="flex flex-col w-1/2">
          <h3 className=" pt-5 text-center font-bold text-lg">
            {detail?.title}
          </h3>
          <p className="px-5 text-md"> Description: {detail?.description}</p>
          <p className="px-5 text-md"> Price:${detail?.price}</p>
          <button onClick={handleAddCart}   className="m-8 p-2 w-40 bg-rose-500 rounded text-white font-bold">
            Add to Cart
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;