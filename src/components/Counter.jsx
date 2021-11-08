// a React component can be written as a function or as a class
// the class "way" of writing a react component is by far the most powerful
// you can do EVERYTHING you can do in a function, and more...
// a class component can use the STATE

import { Component } from "react";

class Counter extends Component {
    // the render method is the only mandatory method in a class component!

    state = {
        // the state object is a place for storing and remembering things...
        // one thing to remember: the state in a react component is READ-ONLY
        // you cannot just do --> this.state.count = 1
        // in order to modify it you have to use a method called setState
        count: 0
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>{this.props.title}</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
                <p>The count value in the state is: {this.state.count}</p>
                <button onClick={() => this.setState({ count: this.state.count - 1 })}>-</button>
            </div>
        )
    }
}

export default Counter