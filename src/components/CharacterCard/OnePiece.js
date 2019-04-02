import React from "react";


class OnePiece extends React.Component {

    // state = {
    //     count: 0
    // }
    
    // handleIncrement = () => {
    //     // We always use the setState method to update a component's state
    //     this.setState({ count: this.state.count + 1 });
    // };

    render(){
    return (
        <div className="card">
            <div className="img-container">
                <img src={this.props.person.image} alt={this.props.person.name} onClick={()=>this.props.handleIncrement()}/>
            </div>
            {/* <p>Count: {this.state.count}</p> */}
        </div>
    )
    }
}

export default OnePiece
