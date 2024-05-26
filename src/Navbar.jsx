import React, { useState } from "react";
import todo from "./assets/icon-todo.svg";
import calendar from "./assets/icon-calendar.svg";
import reminder from "./assets/icon-reminders.svg";
import planning from "./assets/icon-planning.svg";
import uparrow from "./assets/icon-arrow-up.svg";
import downarrow from "./assets/icon-arrow-down.svg";
import menu from "./assets/icon-menu.svg";
import closeMenu from "./assets/icon-close-menu.svg";

export function Navbar() {
  const [isArrow, setArrow] = useState(false);
  const [isAarrow, setAarrow] = useState(false);
  const [isSlider, setSlider] = useState(false);

  const toggle = () => {
    setArrow(!isArrow);
  };

  const tooggle = () => {
    setAarrow(!isAarrow);
  };

  const toggleSlider = () => {
    setSlider(!isSlider);
  };

  return (
    <div className="nav-bar">
      <div className="nav-bar1">
        <div className="nav-span">
          <p>snap</p>
        </div>
        <div className="menu-icon" onClick={toggleSlider}>
          <img src={isSlider ? closeMenu : menu} alt="menu" />
        </div>
        <div className={`nav-element ${isSlider ? "active" : ""}`}>
          <div className="nav-ele1">
            <div onClick={toggle} className="nav-item">
              <p>
                Features
                <img src={isArrow ? uparrow : downarrow} alt="arrow" />
              </p>
              {isArrow && (
                <div className="slider">
                  <div className="slider-content">
                    <span key="todo">
                      <img src={todo} alt="todo icon" />
                      Todo List
                    </span>
                    <span key="calendar">
                      <img src={calendar} alt="calendar icon" />
                      Calendar
                    </span>
                    <span key="reminder">
                      <img src={reminder} alt="reminder icon" />
                      Reminders
                    </span>
                    <span key="planning">
                      <img src={planning} alt="planning icon" />
                      Planning
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div onClick={tooggle} className="nav-item">
              <p>
                Company
                <img src={isAarrow ? uparrow : downarrow} alt="arrow" />
              </p>
              {isAarrow && (
                <div className="slider-1">
                  <div className="slider-content">
                    <span key="history">History</span>
                    <span key="our-team">Our Team</span>
                    <span key="blog">Blog</span>
                  </div>
                </div>
              )}
            </div>
            <div key="careers">Careers</div>
            <div key="about">About</div>
          </div>
          <div className="nav-log">
            <button className="btn-1">Login</button>
            <button className="btn-2">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}
