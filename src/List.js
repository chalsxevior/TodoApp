import React, { Component } from "react";
import { List, Checkbox, Alert } from "antd";
import styled from "styled-components";

const ListStyled = styled(List)`
  max-width: 373px;
  margin: 10px auto !important;
`;
const CheckboxStyled = styled(Checkbox)`
  padding-right: 10px !important;
`;

let flag = false;
class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flagClick: false,
      type: ""
    };
  }
  demo = e => {
    console.log(e);
    this.setState({ flagClick: true });
    setTimeout(() => {
      this.setState({ flagClick: false });
    }, 3000);
  };

  render() {
    return (
      <div>
        {this.props.items != 0 ? (
          <ListStyled
            size="small"
            header={<div>ToDo List</div>}
            bordered
            dataSource={this.props.items}
            renderItem={item => (
              <List.Item>
                <CheckboxStyled
                  onChange={() => {
                    this.demo(item);
                  }}
                />
                {item}
              </List.Item>
            )}
          />
        ) : (
          <div />
        )}
        {this.state.flagClick && (
          <Alert message="Task Completed" type="success" />
        )}
      </div>
    );
  }
}

export default ListItem;
