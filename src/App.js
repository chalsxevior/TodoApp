import React, { Component } from "react";
import "./App.css";
import ListItem from "./List";
import { Button, Input, Row, Col } from "antd";
import styled from "styled-components";
const InputStyled = styled(Input)`
  max-width: 373px;
`;
class App extends Component {
  constructor() {
    super();
    this.state = {
      term: "",
      items: [],
      type: ""
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
            <ListItem items={this.state.items} type={this.state.type} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
