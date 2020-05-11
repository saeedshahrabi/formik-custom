import React from "react";
import "moment/locale/fa";
import 'moment/locale/ar';
import moment from "moment-jalaali";

interface IProps {
  value: number | undefined;
  jalali?: boolean;
  shamsi :any
}

interface IState {
  year: string | number;
  month: string | number;
  day: string | number;
  min: string | number;
  hour: string | number;
  sec: string | number;
  whichDay: string | number;
  SalShamsi: string | number;
  MahShamsi: string | number;
  RoozShamsi: string | number;
}
class Gregorian extends React.Component<IProps, IState> {
  static defaultProps: IProps = {
    value: undefined,
    jalali: false,
    shamsi:""
  };
  state = {
    year: "",
    month: "",
    day: "",
    hour: "",
    min: "",
    sec: "",
    whichDay: "",
    RoozShamsi:"",
    MahShamsi:"",
    SalShamsi:"",
  };
  componentDidMount = () => {
    let Dates = new Date();

    let Hour = Dates.getHours();
    let Min = Dates.getMinutes();
    let Sec = Dates.getSeconds();
    let Year = Dates.getFullYear();
    let Month = Dates.getMonth();
    let Day = Dates.getDay();
    let getDate = Dates.getDate();
    let nameDay = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let nameMonths = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mey",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
 
      this.setState({
        year: Year,
        month: nameMonths[Month],
        day: nameDay[Day],
        hour: Hour,
        min: Min,
        sec: Sec,
        whichDay: getDate,
      });

      
  };

  componentDidUpdate=(t:any)=>{

    // 	setInterval(() => {	this.setState({
    // 		jalali:true
    // 	})
    // },1000)
    
      }
  render() {
    return (
      <>
        <table className="table table-striped">
          <thead className="text-center">
            <tr>
              <th colSpan={2}>Gregorian</th>
          
            </tr>
          </thead>

          <tbody className="text-center">
            <tr>
              <td>Year</td>
              <td>{this.state.year} </td>
            </tr>
            <tr>
              <td>Month</td>
              <td>{this.state.month}</td>
            </tr>
            <tr>
              <td>Day</td>
              <td>
                {this.state.day} {this.state.whichDay}
              </td>
            </tr>
            <tr>
              <td>Hour</td>
              <td>{this.state.hour}</td>
            </tr>
            <tr>
              <td>Minuet</td>
              <td>{this.state.min}</td>
            </tr>
            <tr>
              <td>second</td>
              <td>{this.state.sec}</td>
            </tr>
          </tbody>
        </table>
       
      </>
    );
  }
}

export default  Gregorian;



export class Jalali extends React.Component<any>{
  state = {
    year: "",
    month: "",
    day: "",
    hour: "",
    min: "",
    sec: "",
    whichDay: "",
    RoozShamsi:"",
    MahShamsi:"",
    SalShamsi:"",
  };
componentDidMount=()=>{
  let m =moment()
  m = moment('1399/02/15', 'jYYYY/jM/jD') // Parse a Jalaali date


let years= m.jYear() // 1360
let monthShamsi=m.jMonth() // 4
let RoozShamsi =m.jDate() // 26
this.setState({
  RoozShamsi:RoozShamsi,
  MahShamsi:monthShamsi,
  SalShamsi:years,
})
}
  render(){
    return(
      <table className="table table-striped">
      <thead className="text-center">
        <tr>
          <th colSpan={2}>شمسی</th>
      
        </tr>
      </thead>

      <tbody className="text-center">
        <tr>
          <td>سال</td>
          <td>{this.state.SalShamsi}</td>
        </tr>
        <tr>
          <td>ماه</td>
          
        </tr>
        <tr>
          <td>روز</td>
        
        </tr>
        <tr>
          <td>ساعت</td>
        </tr>
        <tr>
          <td>دقیقه</td>
        </tr>
        <tr>
          <td>ثانیه</td>
        </tr>
      </tbody>
    </table>
    )
  }
}
export class Dataconverter extends React.Component<any>{

  render(){
    return(
    <div>
      {
          this.props.shamsi === false
          ?
         <Gregorian />
          :
          <Jalali />
        }
      
    </div>
    )
  }
}