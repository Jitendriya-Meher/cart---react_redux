import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardsData from "../Components/CardsData";
import "./style.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";
import toast from "react-hot-toast";

const Home = () => {

  const dispatch = useDispatch();

  const send = (element) => {
    dispatch(addToCart(element));
    toast.success("Item added In Your Cart");
  }

  return (
    <>
      <section className="iteam_section mt-4 container">
        <h2 className="px-4 my-4" style={{ fontWeight: 400 }}>
          Restaurants in Khariar Open now
        </h2>
        <div className=" mt-2 flex justify-between items-center flex-wrap">
          {CardsData.map((element, index) => {
            return (
              <div key={index}>
                <Card
                  style={{ width: "22rem", border: "none" }}
                  className="hove mb-4 p-2 px-3"
                >
                  <Card.Img
                    variant="top"
                    className="cd"
                    src={element.imgdata}
                  />

                  <div className="card_body">
                    <div className="upper_data d-flex justify-content-between align-items-center">
                      <h4 className="mt-2">{element.dish}</h4>
                      <span>{element.rating}&nbsp;★</span>
                    </div>

                    <div className="lower_data d-flex justify-content-between ">
                      <h5>{element.address}</h5>
                      <span>₹ {element.price}</span>
                    </div>
                    <div className="extra my-2"></div>

                    <div className="last_data d-flex justify-content-between align-items-center">
                      <img src={element.arrimg} className="limg" alt="" />
                      <Button
                        style={{
                          width: "150px",
                          background: "#ff3054db",
                          border: "none",
                        }}
                        variant="outline-light"
                        className="mt-2 mb-2"
                        onClick={() => send(element)}
                      >
                        Add To Cart
                      </Button>
                      <img src={element.delimg} className="laimg" alt="" />
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
