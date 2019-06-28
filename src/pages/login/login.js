import React, { Component } from "react";
import { Input, Button, Select, Divider, message } from "antd";
// import PropTypes from 'prop-types';
import api from "../../api/index";
import "./login.scss";

const Option = Select.Option;
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      custPhone: "",
      password: ""
    };
  }
  handleSubmit = () => {
    // this.props.history.push("/logined");
    api
      .employeeLogin({
        username: this.state.custPhone,
        password: this.state.password
      })
      .then(res => {
        localStorage.setItem("eid", res.data.employee.eid);
        localStorage.setItem("username", res.data.employee.username);
        this.props.history.push("/logined");
      })
      .catch(() => {
        message.error("登陆失败");
      });
  };
  render() {
    return (
      <div className="login">
        <div className="cover" />
        <div className="card">
          <div className="title">
            <div>管理员登陆</div>
          </div>

          <div className="table">
            <div className="inputItem">
              <Input
                size="large"
                placeholder="员工账号"
                value={this.state.custPhone}
                onChange={e => {
                  this.setState({
                    custPhone: e.target.value
                  });
                }}
              />
            </div>
            <div className="inputItem">
              <Input.Password
                size="large"
                placeholder="请输入密码"
                value={this.state.password}
                onChange={e => {
                  this.setState({ password: e.target.value });
                }}
              />
            </div>
            <Button type="primary" onClick={this.handleSubmit}>
              登录
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
