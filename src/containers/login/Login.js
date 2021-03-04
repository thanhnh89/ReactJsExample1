import React , { Component } from 'react';
import {
    Wrapper, PopupLoginWrapper, Text, Row,
    Input, Button, Blank,
} from "./loginStyle";
import api from "../../services/api";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: 0,
    }
  }

  login() {
    const params = {
        userName: this.state.userName,
        password: this.state.password,
    };
    api.create().login(params)
    .then(response => {
        console.log('response = ', response);
    })
    .catch((error) => {
      const { message } = error;
      console.log('error: ', message);
    });
  }

  getUserInfo() {
    api.create().getUserInfo(16)
    .then(response => {
        console.log('response = ', response);
    })
    .catch((error) => {
      const { message } = error;
      console.log('error: ', message);
    });
  }



  render() {
    return (
      <Wrapper>
        <PopupLoginWrapper>
          <Text color="#d3c8c8" fontSize={20}>LOGIN</Text>
          <Row>
            <Text color="#d3c8c8" fontSize={20}>User name</Text>
            <Input />
          </Row>
          <Blank height={0.2} />
          <Row>
            <Text color="#d3c8c8" fontSize={20}>Password</Text>
            <Input />
          </Row>
          <Button onClick={() => this.login()}>Login</Button>
        </PopupLoginWrapper>
      </Wrapper>
    )
  }
}

export default Login;
