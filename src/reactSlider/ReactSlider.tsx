import React, { Component } from "react";
import ReactSlider from "react-slider";
import Checkbox from "rc-checkbox";
import TextareaAutosize from "react-textarea-autosize";
import Dropzone from "react-dropzone";
import Select from "react-select";
import Async from "react-select/async";
import styled from "styled-components";
import { RadioGroup, Radio } from "react-radio-group";
function onChange(e: any) {
 
}
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
class Ranges extends React.Component<any> {
  state = {
    selectedOption: null,
    disabled: false,
    selectedValue: "",
  };
  handleChange = (selectedOption: any) => {
    this.setState({ selectedOption });
   
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <>
        <div className="m-5 p-5">
          <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            defaultValue={[0, 50, 100]}
            ariaLabel={["Leftmost thumb", "Middle thumb", "Rightmost thumb"]}
            renderThumb={(props, state) => (
              <div {...props}>{state.valueNow}</div>
            )}
            pearling
            minDistance={10}
          />
        </div>

        <div>
          <p>
            <label>
              <Checkbox
                defaultChecked
                onChange={onChange}
                disabled={this.state.disabled}
              />
              &nbsp; defaultChecked rc-checkbox
            </label>
            &nbsp;&nbsp;
          </p>
          <p>
            <label>
              <Checkbox
                defaultChecked
                onChange={onChange}
                disabled={this.state.disabled}
              />
              &nbsp; defaultChecked native
            </label>
            &nbsp;&nbsp;
          </p>
        </div>

        <div className="my-textArea">
          <TextareaAutosize
            autoFocus
            maxRows={5}
            defaultValue="Just a single line..."
          />
        </div>

        <div className="drops">
          <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
              </section>
            )}
          </Dropzone>
        </div>

        <div>
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
          />
        </div>
        <br />
        <br />
        <br />

        <div className="my-radio">
          <RadioGroup
            name="fruit"
            selectedValue={this.state.selectedValue}
            onChange={this.handleChange}
          >
            <Radio value="apple" />
            Apple
            <Radio value="orange" />
            Orange
            <Radio value="watermelon" />
            Watermelon
          </RadioGroup>
        </div>
        <br />
        <br />
     
      </>
    );
  }
}

export default Ranges;
