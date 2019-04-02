import React, { Component } from 'react'
import CharacterCard from "./components/CharacterCard/index";
import Wrapper from "./components/Wrapper";
import NavBar from './components/NavBar/NavBar'
import "./App.css";



class App extends Component {

  state = {
    count: 0
  }
  
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
      <NavBar score={this.state.count} />
      <main className="container">
      <Wrapper>
      <CharacterCard handleIncrement={this.handleIncrement}/>
      </Wrapper>
      </main>
      </div>
    )
  }
}

export default App;
