import React, { Fragment } from "react";
import image from "../../assets/tracker.jpg";
import athlete from "../../assets/athlete.jpg";
import calendar from "../../assets/calendar.jpg";
import food from "../../assets/food.jpg";
import alarm from "../../assets/alarm.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartPulse, faBurger, faCloudMoon, faCalendarDays } from "@fortawesome/free-solid-svg-icons"

import "./Home.css";

export default function Home() {
  return (
    <Fragment>
    <div className="all-home">
    <div className="home">
      <div className="home-about">
        <h1>LifeTracker </h1>
        <p> Helping you get your shit back together. </p>
      </div>
      <div className="home-img">
        <img src={image} alt="image of man looking at his watch" />
      </div>
    </div>

    <div style={{marginTop:"110px"}}className="tiles">
        <div className="tile"> 
            <span>Fitness <FontAwesomeIcon className="icons" icon={faHeartPulse} /></span>
            <img src={athlete} alt="image of athlete joggin in place" />
        </div>
        <div className="tile"> 
            <span>Food <FontAwesomeIcon className="icons" icon={faBurger} /></span>
            <img src={food} alt="image of food platter" />
        </div>
        <div className="tile"> 
            <span>Rest <FontAwesomeIcon className="icons" icon={faCloudMoon} /></span>
            <img src={alarm} alt="image of alarm clock" />
        </div>
        <div className="tile"> 
            <span>Planner <FontAwesomeIcon className="icons" icon={faCalendarDays} /></span>
            <img src={calendar} alt="image of calendar" />
        </div>
    </div>
    </div>
    </Fragment>
  );
}
