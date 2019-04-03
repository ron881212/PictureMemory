import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image}
         onClick={()=> props.shuffle(props.deck, props.id)} />
      </div>
      <div className="content">
      </div>
      {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span>
      <p>Shuffle</p> */}
    </div>
  );
}

export default FriendCard;
