import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import MobileData from "../Data/MobileData.jsx";

const MobileCard = () => {
  const [mobileData, setMobileData] = useState(MobileData);
  console.log(mobileData);
  return (
    <>
      <h2 className="text-center"> Mobile Page</h2>

      <div className = "container mt-3">

      <div className="row d-flex justify-content-center align-items-center">

      {
        mobileData.map((mob, id) => {
        return (
          <>
            <Card style={{ width: "20rem"}}
            className="mx-2 mt-4 pr-5 card_style" >
              {/* <Card.Img variant="top" src={mob.img} style = {{height: 300, width: 200, margin: 30}}/> */}
              <Card.Img variant="top" src={mob.img}  style = {{height: "18rem", width: "10rem", margin: 20, textAlign: "right"}}
                className = "mt-3"
              />
              <Card.Body>
                <Card.Title style = {{textAlign: "center"}}>{mob.name}</Card.Title>
                {/* <Card.Text>{mob.desc}</Card.Text> */}
                <div className="button_div d-flex justify-content-center">
                <Button variant="primary"  
                // onClick={()=> send(mob)}
                className='col-lg-12'>
                Add to Cart</Button>
                </div>
              </Card.Body>
            </Card>
          </>
        );
      })}

      {/* <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}
      
        </div>
      </div>
    </>
  );
};

export default MobileCard;
