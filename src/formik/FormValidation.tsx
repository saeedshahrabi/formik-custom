import * as React from "react";
import { Component } from "react";
import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup";
import { MyInput } from "../testInput/MyInput";
import Slider from "rc-slider";
// import { Regex } from '../AppInput/UserSave';
import "rc-slider/assets/index.css";
import Dropzone from "react-dropzone";
import Checkbox from "rc-checkbox";
import TextareaAutosize from "react-textarea-autosize";
import Select from "react-select";
export interface FormValidationProps {}

export interface FormValidationState {}

export const Regex = {
  mobile_iran: /^(\+98|0)?9\d{9}$/,
  number: /^-?\d*(\.\d+)?$/,
  mobile: /^((\+|00)?\d{1,3})?[1-9][0-9]{9}$/,
  phone: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,
  email: /^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>().,;\s@"]+.{0,1})+[^<>().,;:\s@"]{2,})$/,
  name: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
  password: /^(?=.*[a-z])(?=.*[0-9])/,
};
// const SignupSchema = Yup.object().shape({
//   firstName: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
//   lastName: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
//   email: Yup.string().email("Invalid email").required("Required"),
//   password: Yup.string()
//     .required("Please Enter your password")
//     .matches(
//       /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
//       "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
//     ),
// });
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
class FormValidation extends React.Component<
  FormValidationProps,
  FormValidationState
> {
  state = {
    inputVal: {
      password: "",
      ConfirmPass: "",
      firstPass: "",
    },
    sliderValue: 0,
  };
  // onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.keyCode === 13) alert("you press a key");
  // };
  handleChange = (
    value: string,
    elName: "firstPass" | "password" | "ConfirmPass"
  ) => {
    this.setState({
      ...this.state,
      inputVal: {
        ...this.state.inputVal,
        [elName]: value,
      },
    });
  };

  onSliderChange = (value: any) => {
    this.setState(
      {
        sliderValue: value,
      },
      () => {}
    );
  };

  render() {
    return (
      <>
        <Formik
          initialValues={{
            email: "",
            password: "",
            lastName: "",
            mobileNo: "",
            firstName: "",
            p2: "",
            confirmpass: "",
            RangeSlider: "",
            checkBox1:"checkbox1 was checked",
            checkBox2:"checkbox2",
            TextArea:"",
            selectBox:  [
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]
          }}
          validate={(values) => {
            const errors: any = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            if (!values.lastName) {
              errors.lastName = "Required";
            } else if (
              !/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i.test(
                values.lastName
              )
            ) {
              errors.lastName = "Invalid your name";
            }
            if (!values.mobileNo) {
              errors.mobileNo = "Required";
            } else if (!/^(\+98|0)?9\d{9}$/i.test(values.mobileNo)) {
              errors.mobileNo = "Invalid your MobileNumber";
            }
            if (!values.firstName) {
              errors.firstName = "Required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            handleReset,
            setFieldValue,
          }) => (
            <form
              onSubmit={handleSubmit}
              onChange={() => {
                console.log(values);
              }}
            >
              <label htmlFor="firstName" className={"mt-4"}>
                FirstName :{" "}
              </label>
              <input
                id="firstName"
                name="firstName"
                className="form-control mt-1"
                placeholder={"Enter your firstName"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />
              <div className="text-danger">{errors.firstName && touched.firstName && errors.firstName}</div>
          
              <label htmlFor="LastName" className={"mt-4"}>
                LastName :{" "}
              </label>
              <input
                id="LastName"
                name="lastName"
                className="form-control mt-1"
                placeholder={"Enter your Last name"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
              />
             <div className="text-danger"> {errors.lastName && touched.lastName && errors.lastName}</div>
     
              <label htmlFor="pass" className={"mt-4"}>
                password :{" "}
              </label>
              <input
                id="pass"
                className="form-control mt-1"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder={"this is input type pass "}
              />
                 <div className="text-danger">  {errors.password && touched.password && errors.password} </div>
            
              <div className=" mt-5">
                <MyInput
                  required={true}
                  label={"Enter Your password"}
                  placeholder={"this is my component Pass"}
                  onChange={(v) => {
                    // this.handleChange(e, "password");
                    this.handleChange(v, "password");
                    setFieldValue("p2", v);
                  }}
                  // values={this.state.inputVal.password}
                  value={values["p2"]}
                  errormsg={"Digit and Number"}
                  type={"password"}
                  pattern={Regex.password}
                />
              </div>
              <div className="mt-5">
                <MyInput
                  required={true}
                  label={"Confirm Your password"}
                  placeholder={"Confirm Your password"}
                  onChange={(v) => {
                    // this.handleChange(e, "password");
                    this.handleChange(v, "ConfirmPass");
                    setFieldValue("confirmpass", v);
                  }}
                  // values={this.state.inputVal.password}
                  value={values["confirmpass"]}
                  errormsg={"Digit and Number"}
                  type={"password"}
                  pattern={Regex.password}
                  validationFunction={(v) => {
                    if (this.state.inputVal.password === v) return true;
                    return false;
                  }}
                />
              </div>
              <br />
              <label htmlFor="email" className={"mt-4"}>
                Email :{" "}
              </label>
              <input
                className="form-control mt-1"
                placeholder="Enter Your mail"
                id="email"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
             <div className="text-danger">  {errors.email && touched.email && errors.email} </div> 
      
              <label htmlFor={"MobileNo"} className={"mt-4"}>
                MobileNumber :{" "}
              </label>
              <input
                name="mobileNo"
                id="MobileNo"
                className="form-control mt-1"
                placeholder={"Enter your mobileNumber"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.mobileNo}
              />
             <div className="text-danger">  {errors.mobileNo && touched.mobileNo && errors.mobileNo} </div>
           

              <div className="m-5 p-5">
                <p>{values.RangeSlider === "" ? 0 : values.RangeSlider}</p>
                <Slider
                  min={0}
                  max={120}
                  // value={this.state.sliderValue}
                  // onChange={this.onSliderChange}

                  onChange={(v) => {
                    setFieldValue("RangeSlider", v);
                  }}
                  // values={this.state.inputVal.password}
                  value={parseInt(values["RangeSlider"])}
                  railStyle={{
                    height: 2,
                  }}
                  handleStyle={{
                    height: 18,
                    width: 18,
                    marginLeft: -8,
                    marginTop: -8,
                    backgroundColor: "rgb(43, 226, 255)",
                  }}
                  trackStyle={{
                    background: "none",
                  }}
                />
              </div>


              {/* <div>
          <p>
            <label>
              <Checkbox
                // defaultChecked
                onChange={(v) => {
                  setFieldValue("checkBox1", v.target);
                }}
             value={values["checkBox1"]}
              />
               &nbsp;&nbsp; چک باکس اختیاری
            </label>
        
          </p>
          <p>
            <label>
              <Checkbox
                  required={true}
                onChange={(v) => {
                  setFieldValue("checkBox2", v.target.value);
                }}
                value={values["checkBox2"]}
              />
                &nbsp;&nbsp; چک باکس اجباری
            </label>
         
          </p>
        </div> */}

        <div className="my-textArea">
          <TextareaAutosize
            autoFocus
            maxRows={5}
            onChange={(v) => {
            
              setFieldValue("TextArea", v.target.value);
            }}
            value={values["TextArea"]}
            // defaultValue="Just a single line..."
          />
        </div>

        <Select
        onChange={(v) => {
            
          setFieldValue("selectBox", v);
        }}
        value={values["selectBox"]}
            options={options}
          />

              <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <p>
                        Drag 'n' drop some files here, or click to select files
                      </p>
                    </div>
                  </section>
                )}
              </Dropzone>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
              <button type="button" className="outline" onClick={handleReset}>
                Reset
              </button>
            </form>
          )}
        </Formik>
      </>
    );
  }
}

export default FormValidation;
