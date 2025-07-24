import React from "react";
import HeroSection from "./_component/hero";
import FeaturedCourses from "./_component/FeaturedCourses";
import Categories from "./_component/categories";
import Instructor from "./_component/instructor";
import LearningJourney from "./_component/learningJourney";

async function Page() {
  return (
    <div className="mt-24  font-spaceGrotesk text-xl font-bold">
      <HeroSection />
      <FeaturedCourses />
      <Categories />
      <Instructor />
      <LearningJourney />
      
    </div>
  );
}

export default Page;
