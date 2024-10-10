import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({item}) => {
  const { name, image ,price, recipe, _id} = item;
  const {user} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [,refetch] = useCart();


  const handleAddToCart = () => {
    if(user && user.email){
      //send cart item to database
     // console.log(user.email, food);
      const cartItem = {
        menuId : _id,
        email: user.email,
        name,
        image,
        price
      }
      axiosSecure.post('/carts', cartItem)
      .then(res => {
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} Added to the cart`,
            showConfirmButton: false,
            timer: 2000
          });
          refetch();
        }
      })
    }
    else{
      Swal.fire({
        title: "you are not Logged in",
        text: "please login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!"
      }).then((result) => {
        if (result.isConfirmed) {
         navigate('/login', {state: {from: location}})
        }
      });
    }
  }
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
          <p className="absolute right-0 top-0 mr-4 mt-4 px-4 bg-slate-950 text-white">${price}</p>
        </figure>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button 
             onClick={handleAddToCart}
            className="btn bg-slate-100 btn-outline mt-4 
                 border-b-4 border-orange-300 border-0">
                  Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
