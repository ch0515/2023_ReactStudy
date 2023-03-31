import { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    {
      this.setState({
        password: e.target.value,
      });
    }
  };

  handleChangeClick = (e) => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
      // 검증하기 버튼을 눌럿을 때 실행하는 메소드
      //만약에 handleChange 함수에서 0000을 입력했다고 가정하면
      // validated: "0000" === "0000", 에서 "0000" === "0000" --> true
    });
  };
  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleChangeClick}>검증</button>
      </div>
    );
  }
}

export default ValidationSample;
