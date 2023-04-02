import React from 'react';
import { useState,useEffect } from 'react';
import { Link } from "react-router-dom";

const Products = () => {

  const [data,setData]=useState([]);
  const[loading,setLoading]=useState(false);
  const [filter,setFilter]=useState(data);

//   let componentMounted=true;

  useEffect(() => {
    const getProducts=async()=>{

        setLoading(true);
      
        const response=await fetch('https://fakestoreapi.com/products');

    //    if(componentMounted)
    //    {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(data);
        console.log(filter[0]);
    //    }

    //    return () => {
        // componentMounted=false;
    //    }
    }
    getProducts();
  }, []);

  const Loading=()=>{
   return (
   <h1>
    Loading....
   </h1>
   )}

   const filterData=(category)=>{
    setFilter(data.filter((x)=>x.category===category))
   }

   const ShowProducts=()=>{
    return (
    <>
        <div className="buttons d-flex justify-content-center mb-5">
            <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>filterData("men's clothing")}>Men's Clothing</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>filterData("women's clothing")}>Women's Clothing</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>filterData("jewelery")}>Jewellery</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>filterData("electronics")}>Electronics</button>
        </div>

        {filter.map((product)=>{
            return(
                <>
                <div className='col-md-3 mb-3'>
                    <div className="card h-80 text-center p-5">
                 
                   <img src={product.image} className="card-img-top" height='250px'/>
                 
                    <div className="card-body">
                    <h5 className="card-title">{product.title.substring(0,12)}</h5>
                    <p className="card-text fw-bold">$ {product.price}</p>

                    <Link className="nav-link" to={`/${product.id}`}>
                        <div className="btn btn-primary">
                        Buy Now
                        </div>
                    </Link>
                 
                    </div>
                    </div>
                </div>
                </>
                )
        })}    
    </>
    )}
  
  return (

    <div className="container my-5 py-5">

        <div className="row mb-5 col-12">
            <h1 className='text-center fw-bold display-6'>Latest Products</h1>
            <hr />
        </div>

        <div className="row justify-content-center">
            {loading?<Loading/>:<ShowProducts/>}
        </div>
    </div>
  )
}

export default Products