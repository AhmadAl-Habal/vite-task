import React from "react";
import Course from "./Course.jsx";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

const Courses = () => {
  return (
    <div className="courses">
      <header>
        <h1>Popular Courses</h1>
        <div className="second-row">
          <h5>
            Let’s join our best classess with our famous instructor and
            institutes
          </h5>

          <div className="courses-arrows">
            <FiChevronLeft className="swap-arrow" />
            <FiChevronRight className="swap-arrow" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Courses;
