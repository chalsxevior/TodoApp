import React, { Component } from "react";
import "./App.css";
import List from "./List";

class App extends Component {
  constructor() {
    super();
    this.state = {
      term: "",
      items: []
    };
  }
  onSubmit = event => {
    event.preventDefault();
    this.setState({
      term: "",
      items: [...this.state.items, this.state.term]
    });
  };
  onChange = event => {
    this.setState({ term: event.target.value });
  };
  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <label>
            Add list:
            <input value={this.state.term} onChange={this.onChange} />
          </label>
          <button>Submit</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}

export default App;
