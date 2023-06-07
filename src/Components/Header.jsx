import "../Styling/Header.css";
import HotelIcon from "@mui/icons-material/Hotel";
import FlightIcon from "@mui/icons-material/Flight";
import AttractionsIcon from "@mui/icons-material/Attractions";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import { DateRange } from "react-date-range";
import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const Header = ({type}) => {
  const [dateOfJourney, setDateOfJourney] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [showDate, setShowDate] = useState(false);
  const [showNoOfPeople, setShowNoOfPeople] = useState(false);
  const [noOfPeople, setNoOfPeople] = useState({
    adults: 1,
    children: 1,
    room: 1,
  });
  const handleNoOfPeopleChange = (countOf, countType) => {
    setNoOfPeople((prev) => {
      return {
        ...prev,
        [countOf]:
          countType === "i" ? noOfPeople[countOf] + 1 : noOfPeople[countOf] - 1,
      };
    });
  };
  return (
    <div className="header">
      <div className={type === 'lists'? "headerContainer listmode":"headerContainer"}>
        <div className="headerList">
          <div className="headerListItems">
            <HotelIcon />
            <span>Stays</span>
          </div>
          <div className="headerListItems">
            <FlightIcon />
            <span>Flights</span>
          </div>
          <div className="headerListItems">
            <DirectionsCarIcon />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItems">
            <AttractionsIcon />
            <span>Attractions</span>
          </div>
          <div className="headerListItems">
            <LocalTaxiIcon />
            <span>Airport Taxi</span>
          </div>
        </div>
        {
type!=="lists" && <React.Fragment>
    <h1 className="headerTitle">
          Want to freeze a moment? Roam Reserve takes you there.
        </h1>
        <p className="headerDescription">
          Where seamless bookings meet unforgettable adventures, letting you
          seize the moment and go.
        </p>
        <button className="headerBtn">Sign In / Register</button>
        <div className="headerSearchBar">
          <div className="headerSearchItem">
            <HotelIcon className="headerIcon" />
            <input
              type="text"
              placeholder="Where you want to go?"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <CalendarMonthIcon className="headerIcon" />
            <span
              onClick={() => {
                setShowDate(!showDate)
                setShowNoOfPeople(false)
            }}
              className="headerSearchText"
            >{`${format(dateOfJourney[0].startDate, "dd/mm/yyyy")} to ${format(
              dateOfJourney[0].endDate,
              "dd/mm/yyyy"
            )} `}</span>
            {showDate && (
              <DateRange
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                onChange={(date) => setDateOfJourney([date.selection])}
                ranges={dateOfJourney}
                className="date"
              />
            )}
          </div>
          <div className="headerSearchItem">
            <PersonIcon className="headerIcon" />
            <span
              onClick={() => {
                setShowNoOfPeople(!showNoOfPeople);
                setShowDate(false)
              }}
              className="headerSearchText"
            >{`${noOfPeople.adults} adults . ${noOfPeople.children} children . ${noOfPeople.room} room`}</span>
            {showNoOfPeople && (
              <div className="noOfPeople">
                <div className="noOfPeopleItems">
                  <span className="noOfPeopleText">Adults</span>
                  <div className="counter">
                    <button
                      disabled={noOfPeople.adults <= 1}
                      className="noOfPeopleBtn"
                      onClick={() => handleNoOfPeopleChange("adults", "d")}
                    >
                      -
                    </button>
                    <span className="noOfPeopleCounter">
                      {noOfPeople.adults}
                    </span>
                    <button
                      className="noOfPeopleBtn"
                      onClick={() => handleNoOfPeopleChange("adults", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="noOfPeopleItems">
                  <span className="noOfPeopleText">Children</span>
                  <div className="counter">
                    <button
                      disabled={noOfPeople.children <= 0}
                      className="noOfPeopleBtn"
                      onClick={() => handleNoOfPeopleChange("children", "d")}
                    >
                      -
                    </button>
                    <span className="noOfPeopleCounter">
                      {noOfPeople.children}
                    </span>
                    <button
                      className="noOfPeopleBtn"
                      onClick={() => handleNoOfPeopleChange("children", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="noOfPeopleItems">
                  <span className="noOfPeopleText">Room</span>
                  <div className="counter">
                    <button
                      disabled={noOfPeople.room <= 1}
                      className="noOfPeopleBtn"
                      onClick={() => handleNoOfPeopleChange("room", "d")}
                    >
                      -
                    </button>
                    <span className="noOfPeopleCounter">{noOfPeople.room}</span>
                    <button
                      className="noOfPeopleBtn"
                      onClick={() => handleNoOfPeopleChange("room", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="headerSearchItem">
            <button className="headerSearchBtn">Search</button>{" "}
          </div>
        </div>
</React.Fragment>
        }
      </div>
    </div>
  );
};

export default Header;
