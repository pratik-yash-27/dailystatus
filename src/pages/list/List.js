import React ,{useState}from "react";
import "./list.css";
import { format } from "date-fns";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
const List = () => {
  const location=useLocation()
  const [destination,setDestination]=useState(location.state.destination)
  const [date,setDate]=useState(location.state.date)
  const [options, setOptions] = useState(location.state.options);
  return (

    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination}/>
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
         <span
               
                  >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )} `}</span>

         
            </div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  );
};

export default List;
