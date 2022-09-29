
import React, { useState } from "react";
import "./header.css";
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns"
const Header = ({type}) => {
    const [openDate, setOpenDate] = useState(false)

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,

    });

    const handleOption = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            }
        })
    }

    return (
      <div className="header">
        <div className={type === "list"  ? "headerContainer listMode":"headerContainer"}>
          <div className="headerList">
            <div className="headerListItem active">
              <i className="fa fa-bed"></i>
              <span>Stays</span>
            </div>
            <div className="headerListItem">
              <i className="fa fa-plane"></i>
              <span>Flight</span>
            </div>
            <div className="headerListItem">
              <i className="fa fa-car"></i>
              <span>Car rentals</span>
            </div>
            <div className="headerListItem">
              <i className="fa fa-bed"></i>
              <span>Attractions</span>
            </div>
            <div className="headerListItem">
              <i className="fa fa-taxi"></i>
              <span>Airport taxis</span>
            </div>
          </div>
          { type !=="list" &&
          
            <>
              <h1 className="headerTitle">
                A lifetime of discount ? It's Genius.
              </h1>
              <p className="headerDesc">
                Get rewarded for your travels unlock instant savings of 10% or
                more with a free order booking account
              </p>
              <button className="headerBtn">sign in / Register</button>
              <div className="headerSearch">
                <div className="headerSearchItem">
                  <i className="fa fa-bed headerIcon"></i>
                  <input
                    type="text"
                    placeholder="where are you going ?"
                    className="headerSearchInput"
                  />
                </div>
                <div className="headerSearchItem">
                  <i className="fa fa-calendar headerIcon"></i>
                  <span
                    onClick={() => setOpenDate(!openDate)}
                    className="headerSearchText"
                  >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )} `}</span>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className="date"
                    />
                  )}
                </div>
                <div className="headerSearchItem">
                  <i className="fa fa-person headerIcon"></i>
                  <i className="fa fa-star headerIcon"></i>
                  <span
                    onClick={() => setOpenOptions(!openOptions)}
                    className="headerSearchText"
                  >{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                  {openOptions && (
                    <div className="options">
                      <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.adult <= 1}
                            className="optionCounterButton"
                            onClick={() => handleOption("adult", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.adult}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("adult", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Children</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.children <= 0}
                            className="optionCounterButton"
                            onClick={() => handleOption("children", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.children}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("children", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Room</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.room <= 1}
                            className="optionCounterButton"
                            onClick={() => handleOption("room", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.room}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("room", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="headerSearchItem">
                  <button className="headerBtn">Search</button>
                </div>
              </div>
            </>
          }
        </div>
      </div>
    );
};

export default Header;
