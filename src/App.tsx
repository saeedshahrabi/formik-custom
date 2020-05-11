import React, { Component } from "react";
import "./style/style.scss";
import Header from "./header/Header";
import ConvertToDate from "./calender/ConverterCalender";
import { UserSave } from "./AppInput/UserSave";
import { Apps } from "./testInput/Apps";
import { BrowserRouter , Route } from "react-router-dom";
import Ranges from "./reactSlider/ReactSlider";
import FormValidation from "./formik/FormValidation";

interface IState {
  timestamp: number;
  shamsi: boolean;
}
 class App extends Component<any, IState> {
  state = {
    timestamp: 15251544515,
    shamsi: false,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        timestamp: 1588659217,
        shamsi: true,
      });
    }, 5000);
  }
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div className="container">
        <Route path="/calender" exact>
          <ConvertToDate
            shamsi={this.state.shamsi}
            timestamp={Number(this.state.timestamp)}
          />
          </Route>
          <Route path="/form" component={Apps} exact />
          <Route path="/forms" component={Ranges} exact />
          <Route path="/" component={FormValidation} exact />
        </div>
      </BrowserRouter>
   
    );
  }
}
export default App