import React, { Component } from "react";
import { MyInput } from "./MyInput";
interface Istate {
  inputVal: object;
}
export const Regex = {
  mobile_iran: /^(\+98|0)?9\d{9}$/,
  number: /^-?\d*(\.\d+)?$/,
  mobile: /^((\+|00)?\d{1,3})?[1-9][0-9]{9}$/,
  phone: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,
  email: /^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>().,;\s@"]+.{0,1})+[^<>().,;:\s@"]{2,})$/,
  name: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
  password: /^(?=.*[a-z])(?=.*[0-9])/,
};

export class Apps extends Component<any, Istate> {
  state = {
    inputVal: {
      email: "",
      phone: "",
      name: "",
      mobile: "",
      password: "",
      ConfirmPass: "",
    },
  };
  onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) alert("you press a key");
  };
  //   onChange=(e:any)=>{
  //     e.target.value
  //   }
  handleChange = (
    value: string,
    elName: "email" | "phone" | "name" | "mobile" | "password" | "ConfirmPass"
  ) => {
    this.setState({
      ...this.state,
      inputVal: {
        ...this.state.inputVal,
        [elName]: value,
      },
    });
  };
  //   handlepassword = (e:any) => {
  //     debugger
  //  if(this.state.inputVal.password!==this.state.inputVal.ConfirmPass)
  //  {
  //   alert();
  //  }

  //   }
  handlePass = () => {
    if (this.state.inputVal.password !== this.state.inputVal.ConfirmPass) {
      return "your password dosnt match ";
    }
  };
  async save() {
    await this.waitOnMe();
    this.setState({
      ...this.state,
      inputVal: {
        inputVal: "",
      },
    });
  }

  async waitOnMe(): Promise<boolean> {
    return new Promise((res) => {
      setTimeout(() => {
        res(true);
      }, 2000);
    });
  }

  render() {
    return (
      <>
        <div className="btn btn-success" onClick={() => this.save()}>
          save
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <MyInput
              required={true} /*true or false */
              label={"email"}
              placeholder={"Enter Your Email"}
              onKeyDown={this.onKeyDown}
              onChange={(e) => this.handleChange(e, "email")}
              value={this.state.inputVal.email}
              errormsg={"Item Required"}
              pattern={Regex.email}
            />
          </div>
          <div className="col-md-6">
            <MyInput
              required={true} /*true or false */
              label={"Phone Number"}
              placeholder={"Enter Your Phone Number"}
              onKeyDown={this.onKeyDown}
              onChange={(e) => this.handleChange(e, "phone")}
              value={this.state.inputVal.phone}
              pattern={Regex.phone}
              errormsg={"Item Required"}
            />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <MyInput
              required={true} /*true or false */
              label={"Your Name"}
              placeholder={"Enter Your Name"}
              onKeyDown={this.onKeyDown}
              onChange={(e) => this.handleChange(e, "name")}
              value={this.state.inputVal.name}
              pattern={Regex.name}
              errormsg={"Item Required"}
            />
          </div>
          <div className="col-md-6">
            <MyInput
              required={false} /*true or false */
              label={"Your Mobile Phone"}
              placeholder={"Enter Your mobile Phone"}
              onKeyDown={this.onKeyDown}
              onChange={(e) => this.handleChange(e, "mobile")}
              value={this.state.inputVal.mobile}
              pattern={Regex.mobile_iran}
              errormsg={"Item Required"}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <MyInput
              required={true}
              label={"Enter Your password"}
              placeholder={"Enter Your password"}
              onKeyDown={this.onKeyDown}
              onChange={(e) => this.handleChange(e, "password")}
              value={this.state.inputVal.password}
              errormsg={"Digit and Number"}
              type={"password"}
              pattern={Regex.password}
            />
          </div>
          <div className="col-md-6">
            <MyInput
              required={true}
              label={"Confirm Your password"}
              placeholder={"Confirm Your password"}
              onKeyDown={this.onKeyDown}
              onChange={(e) => this.handleChange(e, "ConfirmPass")}
              value={this.state.inputVal.ConfirmPass}
              errormsg={"Digit and Number"}
              type={"password"}
              pattern={Regex.password}
              // handlepassword={this.handlePass}
              validationFunction={(v) => {
                if (this.state.inputVal.password === v) return true;
                return false;
              }}
            />
          </div>
        </div>
      </>
    );
  }
}
