import React, { Component } from "react";
import "./App.css";
import ListItem from "./List";
import { Button, Input, Row, Col } from "antd";
import styled from "styled-components";
import { bake_cookie, read_cookie } from "sfcookies";
const InputStyled = styled(Input)`
  max-width: 373px;
`;
let todoList = {};
class App extends Component {
  constructor() {
    super();
    this.state = {
      term: "",
      items: []
    };
  }

  componentWillMount() {
    console.log("Component Will mount called");
    todoList = read_cookie("tasksCookie");
    if (Object.keys(todoList).length > 0) {
      console.log(
        "Todo Call" +
          JSON.stringify(todoList) +
          " " +
          Object.keys(todoList).length
      );
      this.state = todoList;
      console.log(this.state);
      this.myfn();
    }
  }
  myfn = () => {
    //this.setState(todoList);
    var p = read_cookie("tasksCookie");
    console.log("Cookie Read ", p);
    console.log("State ", this.state);
  };
  onSubmit = event => {
    event.preventDefault();
    this.setState({
      term: "",
      items: [...this.state.items, this.state.term]
    });
    console.log("set state on submit ", this.state);
    bake_cookie("tasksCookie", this.state);
  };
  onChange = event => {
    this.setState({ term: event.target.value });
  };
  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col>
            <form className="App" onSubmit={this.onSubmit}>
              <label>Add list:</label>
              <br />
              <InputStyled value={this.state.term} onChange={this.onChange} />
              <Button onClick={this.onSubmit}>Submit</Button>
            </form>
          </Col>
          <Col>
            <ListItem items={this.state.items} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
