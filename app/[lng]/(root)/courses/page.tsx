import TopBar from "@/components/shared/top-bar";
import React from "react";
import AllCourses from "./_component/all-course";

const Course = () => {
  return (
    <>
      <TopBar label="allCourses" description="allCoursesDesCription" />
      <AllCourses />
    </>
  );
};

export default Course;
