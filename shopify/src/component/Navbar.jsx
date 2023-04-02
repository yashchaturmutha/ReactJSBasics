import React from 'react'
import { Link } from "react-router-dom";
import NotificationBadge from 'react-notification-badge';
import {Effect} from 'react-notification-badge';
import { useSelector } from "react-redux";

const Navbar = () => {

  const myState = useSelector((state) => state.handleCart);

  console.log(myState);
  console.log(myState.length);

  var totalQty=0;

  myState.map((product)=>{
      totalQty+=product.qty;
  });

  return (
    <nav className="navbar navbar-expand-lg bg-light py-3">
       
        <div className="container-fluid">
           
          <Link className="nav-link" to="/">
            <a className="navbar-brand fw-bold fs-4" href="#">Shopify</a>
            </Link>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            </ul>

            <div className="buttons btn btn-outline-dark" style={{width:'5em',position:'static'}} >
              
                <Link to="/cart" className='nav-link '>
                <NotificationBadge count={totalQty} effect={Effect.SCALE} style={{position:'relative',marginTop:'0'}}/>
                <i className="fa fa-shopping-cart me-1"></i>
                {/* Cart({myState.length}) */}
                Cart
                </Link>
            </div>

          </div>
                    
          </div>
    </nav>
  )
}

export default Navbar