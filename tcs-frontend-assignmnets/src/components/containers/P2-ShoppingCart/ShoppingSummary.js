import React from 'react';
import { Link } from 'react-router-dom';

const ShoppingSummary = ({cartItems}) => {
    // cartItems&& console.log(cartItems[0])
    // console.log(cartItems)
    return (
      <div className="row m-30">
        <div className="card card-body bg-dark text-center h-100">
            
            <ul className="text-light card-title">
                {cartItems.map((item) => <div className="container"><li className="row justify-content-space-between"><span className="col-md-6">{item[0].title}</span> <span className="col-md-6">{item[0].price}</span></li><br/></div>)}
            </ul>
          <h5 className="text-light card-title">
          </h5>
          <button className="btn btn-primary" >  {/* to={'/movie/' + movie.imdbID} */}
            Checkout {cartItems.reduce((acc, item) => acc + item[0].price,0)}
          </button>
        </div>
      </div>
    );
}

export default ShoppingSummary