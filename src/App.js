import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import NavBar from "./components/NavBar/NavBar";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    count: 0,
    topScore: 0,
    winCondition: 0,
    choices: [1,2,3,4,5,6,7,8,9,10,11,12]
  };

  handleChange = () => {
    if(this.state.winCondition === 12){
      alert("You win")
      this.setState({
        choices: [1,2,3,4,5,6,7,8,9,10,11,12],
        winCondition: 0
      });
    }
  }

  points = id => {
    this.setState({ friends });

    // for(let i = 0; i < this.state.choices.length; i++){
      if(!this.state.choices.includes(id)){
        alert('Try Again')
        this.setState({
          choices: [1,2,3,4,5,6,7,8,9,10,11,12],
          winCondition: 0
        });
      } else if(this.state.choices.includes(id)){
        this.setState({ 
          winCondition: this.state.winCondition + 1,
          topScore: this.state.topScore + 1,
          choices: this.state.choices.filter(left => left !== id)
        });   
      }
    // }
  }

  shuffle = (array, id) => {

    let currentIndex = array.length;
    let temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    // this.setState({ friends: array, count: this.state.count + 1 });
    this.points(id)
    return array;
  
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
        <div>
        <NavBar
          score={this.state.winCondition} 
          topScore={this.state.topScore}
          onChange={this.handleChange()}/>
        <Wrapper>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            image={friend.image}
            handleIncrement={this.handleIncrement}
            shuffle={this.shuffle}
            deck={this.state.friends}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
