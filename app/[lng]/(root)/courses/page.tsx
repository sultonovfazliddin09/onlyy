import TopBar from "@/components/shared/top-bar";
import React from "react";
import AllCourses from "./_component/all-course";

const Page = () => {
  return (
    <>
      <TopBar label="allCourses" description="allCoursesDesCription" />
      <AllCourses />
    </>
  );
};

export default Page;
