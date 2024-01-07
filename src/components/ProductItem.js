import { useNavigate } from "react-router";

const ProductItem = ({ image, title, price, id, handleAddToCart }) => {
  const navigate = useNavigate();

  const handleAddCart = (e) => {
    e.stopPropagation();
    handleAddToCart(id);
  };

  return (
    <div className="border-2 flex flex-col justify-between  m-3 shadow-2xl hover:bg-gray-200  ">
      <div>
        <img
          src={image}
          alt="gallery"
          className="rounded mx-auto mt-3 shadow-md w-40 h-40  "
        />
        <h3 className="pl-3 pt-3 font-bold text-sm"> {title}</h3>
        <p className="pl-3 my-2 "> Price:${price}</p>
      </div>
      <div className="flex flex-row justify-between">
        <button
          onClick={() => navigate(`/products/${id}`)}
          className="mb-1 p-1 mr-1 ml-1 bg-gray-500 hover:bg-gray-700 w-full text-white rounded-r-full shadow-3xl font-semibold pb-2 border-r-4 border-red-900 "
        >
          Read More...
        </button>
        <button
          className="mb-1 p-1 mr-1 ml-1 bg-gray-500 hover:bg-gray-700 w-full text-white rounded-l-full shadow-3xl font-semibold pb-2 border-l-4 border-red-900"
          onClick={handleAddCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;