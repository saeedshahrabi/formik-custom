import React, { Component } from "react";
import AppInput from "./AppInput";
interface Istate {
  required: boolean;
  inputVal: string;
}


export const Regex = {

  email:/^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>().,;\s@"]+.{0,1})+[^<>().,;:\s@"]{2,})$/,
}
export class UserSave extends Component<any, Istate> {
  state = {
    required: true,
    inputVal: "",
  };
  onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) alert("you press a key");
  };
  //   onChange=(e:any)=>{
  //     e.target.value
  //   }
  handleChange = (value: string) => {
    // debugger;
    this.setState({ inputVal: value });
  };

  async save() {
    await this.waitOnMe();
    this.setState({ inputVal: "" });
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

        <AppInput
          required={this.state.required}
          label={"email"}
          placeholder={"Enter Your Email"}
          onKeyDown={this.onKeyUp}
          // value={"saeed@50002000@gmail.com"}
          onChange={this.handleChange}
          //   defaultValue={'gholi'}
          value={this.state.inputVal}
          pattern={Regex.email}
        />
      </>
    );
  }
}
