import React from "react";
import "../Product.css";

import MobileData from "../Data/MobileData.jsx";
import LaptopData from "../Data/LaptopData.jsx";

const Product = () => {
  return (
    <>
      <div id="product">
        {/* <h1 className="headerr1"> New Laptops </h1> */}
        {/* <br /> */}
        {LaptopData.map((item) => {
          return (
            <>
              <div className="card">
                <img src={item.img} alt="" />
                <div className="content">
                  <h3>{item.name}</h3>
                  {/* <span>${item.price}</span> */}
                </div>
              </div>
            </>
          );
        })}
        </div>

        <hr />
    </>
  );
};

export default Product;

/*
<div id="product1">
         <h1 className="headerr2"> New Laptops </h1> 
        <br />
        {LaptopData.map((item) => {
          return (
            <>
              <div className="card1">
                <img src={item.img} alt="" />
                <div className="content1">
                  <h3>{item.name}</h3>
                  <span>${item.price}</span>
                </div>
              </div>
            </>
          );
        })}
      </div> 


 <section style={{ backgroundColor: "#eee" }}>
              <div className="text-center container py-5">
                <div className="row">
                  <div className="col-md-12 col-lg-4 mb-4 mb-lg-0">
                    <div className="card">
                      <div className="d-flex justify-content-between p-3">
                        <p className="lead mb-0">Today's Combo Offer</p>
                        <div
                          className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                          style={{ width: 25, height: 30 }}
                        >
                          <p className="text-white mb-0 small">x4</p>
                        </div>
                      </div>
                      <img
                        src={item.img}
                        className="card-img-top"
                        alt="Mobile"
                        style = {{width: 150, textAlign: "center"}}
                      />
                      <div className="card-body">
                        <div className="d-flex justify-content-between mb-3">
                          <h5 className="mb-0">{item.name}</h5>
                          <h5 className="text-dark mb-0">{item.price}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
*/
