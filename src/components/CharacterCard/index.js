import React from "react";
import "./style.css";
import Characters from '../CharacterCard/characters.json'
import OnePiece from './OnePiece'


class CharacterCard extends React.Component {

  render(){
  const CharacterComponent = Characters.map(person => 
  <OnePiece key={person.id} person={person} handleIncrement={this.props.handleIncrement} />)
  
  return (
    <div>
      <div className="container">
        {CharacterComponent}
      </div>
      </div>
  );
}
}

export default CharacterCard;
