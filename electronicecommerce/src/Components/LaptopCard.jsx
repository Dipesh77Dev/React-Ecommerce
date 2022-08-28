import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import LaptopData from "../Data/LaptopData.jsx";

const LaptopCard = () => {
  const [laptopData, setLaptopData] = useState(LaptopData);
  console.log(LaptopData);

  return (
    <>
        <h2 className="text-center"> Laptop Page</h2>

      <div className = "container mt-3">

      <div className="row d-flex justify-content-center align-items-center">

      {
        laptopData.map((lap, id) => {
        return (
          <>
            <Card style={{ width: "20rem", border:"none", border: "1px solid red"}}
            className="mx-2 mt-4 card_style" >
              {/* <Card.Img variant="top" src={mob.img} style = {{height: 300, width: 200, margin: 30}}/> */}
              <Card.Img variant="top" src={lap.img}  style = {{height: "10rem", width: "15rem", margin: 20, border: "1px solid black", }}
                className = "mt-3"
              />
              <Card.Body>
                <Card.Title>{lap.name}</Card.Title>
                <Card.Text>{lap.desc}</Card.Text>
                <div className="button_div d-flex justify-content-center">
                <Button variant="primary">Add to Cart</Button>
                </div>
              </Card.Body>
            </Card>
          </>
        );
      })}

        </div>
      </div>
    </>
  )
}

export default LaptopCard;