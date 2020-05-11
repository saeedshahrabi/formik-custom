import React, { Component } from "react";

interface IProps {
  value?: string;
  onChange: (value: string) => void;
  required: boolean;
  placeholder: string;
  pattern?: RegExp;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  label: string;
  errormsg?: string;
  type?: string;
  /* TODO remove me */


  validationFunction?: (value?: string) => boolean;
}

interface IState {
  isValid: boolean;
}

export class MyInput extends Component<IProps> {
  state = {
    valueHandling: "",
    clickInput: false,
    // confirmPassword:""
    isValid: this.checkValidate(this.props.value),
  };

  handleChange = (value: string) => {
    this.props.onChange(value);
    this.setState({
      inputHandling: value,
      valueHandling: value,
    });
  };

  inputId = Math.random() + "";

  componentDidMount() {
    const thisEl = document.getElementById(this.inputId); // TODO: change to ref
    const htmlInput = thisEl?.querySelector("input");
    htmlInput &&
      htmlInput.addEventListener("blur", () => {
        this.setState({ clickInput: true });
      });
  }

  checkValidate(value?: string): boolean {
  

    let parentValid = true;
    if (this.props.validationFunction)
      parentValid = this.props.validationFunction(value);

    if (!!value && this.props.pattern!) {
      if (!this.props.pattern?.test(value)) {
        return false;
      }
    } else {
      if (this.props.required === true && !value) {
        return false;
      }
    }
    return true && parentValid;
  }
  renderErrors = (): React.ReactNode => {
    if (this.checkValidate(this.props.value) === false) {
      if (!!this.props.pattern) {
        return <em className="text-danger">{this.props.errormsg}</em>;
      }
      if (this.props.required === true) {
        return <em className="text-danger">{this.props.required}</em>;
      } else return "";
    }
  };
  handlePass = (e: any) => {};

  render() {
    return (
      <>
        <div className="form-group myform" id={this.inputId}>
          <label htmlFor="NameInput">
            {this.props.label}
            <span className="text-danger">
              {this.props.required === true ? "*" : null}
            </span>
          </label>
          <input
            className={"form-control "}
            id="inputId"
            placeholder={this.props.placeholder}
            required={this.props.required}
            onKeyDown={this.props.onKeyDown}
            value={this.props.value}
            onChange={(e) => this.handleChange(e.target.value)}
            type={this.props.type}
            onKeyUp={this.handlePass}
          />
          <div
            className={
              " text-danger " + (this.props.required === false ? "d-none" : "")
            }
          >
            {this.state.clickInput ? this.renderErrors() : ""}
      
          </div>
        </div>
      </>
    );
  }
}
