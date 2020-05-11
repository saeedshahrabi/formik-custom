import React, { Component } from "react";
interface IProps {
  value: string | undefined;
  onChange: (value: string) => any;
  required: boolean;
  placeholder: string;
    pattern: RegExp;
  //   patternError: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  label: string;
}


class AppInput extends Component<IProps> {
  state = {
      valueHandling:"",
      clickInput:true
  };
  handleChange = (value: string) => {
    this.props.onChange(value);
    this.setState({
        inputHandling:value,
        valueHandling:value
    })
  };
  // onblur=(value:any)=>{
  //     // this.setState({
  //     //   clickInput:false
  //     // })
  //     // console.log(typeof(this.props.pattern))
  //     if (!!value && this.props.pattern!) {
  //       if (!this.props.pattern?.test(value)) {
  //         return false;
  //       }
  //     } else {
  //       if (this.props.required === true && !value) {
  //         return false;
  //       }
  //     }
  //     return true;
  // }
  // renderErrors(): React.ReactNode {
  //   if (this.onblur(this.props.value) === false) {
  //    if (!!this.props.pattern) {
  //      return (
  //        <em className="text-danger">ssss</em>
  //      );
  //    }	if (this.props.required === true) {
  //      return (
  //       <div
  //               className={
  //                 "invalid-feedback "
  //               }
  //             >
  //               item required
  //             </div>
  //      );
  //    } else return "";
  //  }
  // }
checkvalidation=(value:any)=>{
  let getID = document.getElementById("NameInput")
if(this.state.valueHandling===""){
getID?.classList.add("is-invalid")
}
}
checkvalidate=()=>{
  let getID = document.getElementById("NameInput")
  if(this.state.valueHandling!==""){
    getID?.classList.remove("is-invalid")
    
    }
    if(this.props.pattern.test(this.state.valueHandling)===false){
      getID?.classList.add("is-invalid")
    }

    // if(this.state.valueHandling!==this.props.pattern)
    // {
    //   alert()
    // }
}
  render() {
    return (
      <>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="NameInput">
                {this.props.label}
                <span className="text-danger">
                  {this.props.required === true ? "*" : null}
                </span>
              </label>
              <input
                type="email"

                className={"form-control" + (this.state.clickInput === true  ? " " : " is-invalid") }
                id="NameInput"
                placeholder={this.props.placeholder}
                required={this.props.required}
                onKeyDown={this.props.onKeyDown}
                // defaultValue
                onKeyUp={this.checkvalidate}
                value={this.props.value}
                onChange={(e) => this.handleChange(e.target.value)}
                onBlur={this.checkvalidation}
              />

              <div
              id={"error"}
                className={
                  "invalid-feedback " + (this.props.required ? "" : "d-none")
                }
              >
                item required
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AppInput;
