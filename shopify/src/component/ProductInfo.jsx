import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import {useDispatch,useSelector } from "react-redux";
import {addCart} from "../redux/actions";

const ProductInfo = () => {

  const dispatch = useDispatch();
  const myState = useSelector((state) => state.handleCart);


  const {id}=useParams();
  const [product,setProduct]=useState([]);
  const[loading,setLoading]=useState(false);

  useEffect(() => {
    const getProduct=async()=>{

        setLoading(true);
      
        const response=await fetch(`https://fakestoreapi.com/products/${id}`);

        setProduct(await response.json());
        setLoading(false);
       }
       getProduct()
    },[]);

  const Loading=()=>{
   return (
   <h1>
    Loading....
   </h1>
   )}

   const ShowProduct=()=>{
    return (
    <>
      <div className="col-md-6 h-100 w-30">
        <img src={product.image} alt="" srcset=""  style={{width:'400px',height:'400px'}}/>
      </div>         

      <div className="col-md-6">

        <h4 className='text-uppercase text-black-50'>{product.category}</h4>
        <h1 className='display-5'>{product.title}</h1>

        <p>Rating {product.rating && product.rating.rate} <i className='fa fa-star'></i></p>

        <h3 className='display-6 fw-bold my-4'>
                    ${product.price}
                </h3>

                <p className="lead">
                    {product.description}
                </p>

                <button className="btn btn-outline-dark"
                 onClick={() => {
                  if(!myState.some(el=>el.id === product.id))
                  dispatch(addCart(product));
                  }}>
                    Add to Cart
                </button>

                <NavLink to='/cart'>
                <button className="btn btn-dark mx-2">
                    Go to Cart
                </button>
                </NavLink>
      </div>
    </>
    )}

  return (
   
    <div className="container  py-5">

        <div className="row">
            {loading?<Loading/>:<ShowProduct/>}
        </div>
    </div>
  )
}

export default ProductInfo