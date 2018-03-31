import React, { Component } from "react";
import { List, Checkbox, Alert } from "antd";
import styled from "styled-components";
import { delete_cookie } from "sfcookies";
import { Button } from "antd";
const ListStyled = styled(List)`
  max-width: 373px;
  margin: 10px auto !important;
`;
const CheckboxStyled = styled(Checkbox)`
  padding-right: 10px !important;
`;
const Div = styled.div`
  text-align: center;
`;

let indexI = 0;
class ListItem extends Component {
  constructor(props) {
    indexI = indexI + 1;
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
        {console.log("this.props.state ", this.props)}
        {this.props.items !== 0 ? (
          <div>
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
          </div>
        ) : (
          <div />
        )}
        {this.state.flagClick && (
          <Alert message="Task Completed" type="success" />
        )}
        <Div>
          <Button
            onClick={() => {
              delete_cookie("tasksCookie");
            }}
          >
            Delete Cookies
          </Button>
        </Div>
      </div>
    );
  }
}

export default ListItem;
