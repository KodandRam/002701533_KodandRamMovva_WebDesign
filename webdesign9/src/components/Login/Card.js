import React from "react";
import burger1 from '../../pics/burger1.jpg';
import '../../components/Card.css';

const Card = (props) => {
  return (
    <>
    {props.details.map((value,index) => (
        <div className="card" key={index}>
        <div className="card-image">
            <img src ={value.img}/>
        </div>
        <div>
            <p className="card-title">{value.title}</p>
            <p className="description">{value.description}</p></div>
    </div>

    ))};
    
    </>
  );
};

export default Card;