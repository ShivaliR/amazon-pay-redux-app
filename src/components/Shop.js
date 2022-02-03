import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
import { depositMoney } from "../state/action-creators";

const Shop = () => {
    const dispatch = useDispatch();
    const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);
  return (
    <>
      <div
        className="card my-3 position-absolute top-50 start-50 translate-middle"
        style={{ width: "18rem"}}>
        <img src="https://entrackr.com/wp-content/uploads/2017/10/axis-bank-money-image-2-1200x600.jpg" className="card-img-top" alt="..."></img>
        {/* <div className="card-body">
          <h5 className="card-title">Deposit/Withdraw money</h5>
          <button className="btn btn-secondary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
          Update balance
          <button className="btn btn-secondary mx-2" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button>
        </div> */}
        <div className="card-body">
          <h5 className="card-title">Deposit/Withdraw money</h5>
          <button className="btn btn-secondary mx-2" onClick={()=>{withdrawMoney(100)}}>-</button>
          Update balance
          <button className="btn btn-secondary mx-2" onClick={()=>{depositMoney(100)}}>+</button>
        </div>
      </div>
    </>
  );
};

export default Shop;
