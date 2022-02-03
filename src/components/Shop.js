import React from "react";

const Shop = () => {
  return (
    <>
      <div
        className="card my-3"
        style={{ width: "18rem"}}>
            <img src="https://entrackr.com/wp-content/uploads/2017/10/axis-bank-money-image-2-1200x600.jpg" class="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Deposit/Withdraw money</h5>
          <div className="btn btn-secondary mx-2">-</div>
          Update balance
          <div className="btn btn-secondary mx-2">+</div>
        </div>
      </div>
    </>
  );
};

export default Shop;
