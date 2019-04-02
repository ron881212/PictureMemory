import React from 'react'
// import OnePiece from '../CharacterCard/OnePiece'
import "./style.css";

class NavBar extends React.Component {

    
render(){
    // console.log(OnePiece);
    
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top mb-5 p-3">
            <ul className="navbar-nav">
                <li className="navbar-brand">
                Memory Game
                </li>
                <li className="" id="instructions">
                Click an image to begain { }
                </li>
                <li className="" id="score">
                Score: {this.props.score} | Top Score: {} 
                </li>
            </ul>
        </nav>
    )
}
}

export default NavBar