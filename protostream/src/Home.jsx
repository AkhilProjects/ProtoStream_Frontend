import React from "react";
import Footer from './components/Footer'
import Asection from "./components/Home/Asection";
import Section from "./components/Home/Section";
import Startups from "./components/Home/Startups";
import landing from "./assets/images/landing.svg";
import prototyping from "./assets/images/prototyping.svg";
import resources from "./assets/images/resources.svg";
import internships from "./assets/images/internship.svg";
import hackathon from "./assets/images/hackathon.svg";

const Home = () => {
  return (
    <div>
      <Section
        heading="Building the Future, One Idea at a time."
        subHeading="Ideas and Dreams are what makes Entrepreneurs different , but those dreams turned into reality is what makes the world different."
        span="You know what valuable company is nobody building ?"
        btnText="Register"
        imageSrc={landing}
        classname="section"
        link="signup"
      />
      <Asection
        imageSrc={internships}
        heading="Seek New Opportunities"
        subHeading="Seek the best opportunities for learning and developing your skills on real projects  and grow with teams and be part of something unique."
        span="Be Whatever you desire to be."
        btnText="Internships"
        classname="section"
        link="internships"
      />
      <Section
        heading="Prototyping to Product"
        subHeading="Register your startup Idea and create complete product timelines with custom comments and messages that define your project state and stage and get mentorship in the journey of creating the final product and build your startup with efficiency."
        span="From Business Plan to Prototypes to Product , we got your back."
        btnText="Learn More"
        imageSrc={prototyping}
        classname="section"
        link=""
      />
      <Section
        heading="Resource Box"
        subHeading="Didn’t we told you we had a bag full of resources for you to prepare, learn and create new techologies and Learn Business and Entrepreneurship"
        btnText="Resources"
        imageSrc={resources}
        classname="resources section"
        link="resources"
      />
      <Section
        heading="Participations just got easier"
        subHeading="Let us do the tedious task of going through emails  or searching for contests, online coding competitions and hackathons . All you need to care about is acing them."
        btnText="Hackathons"
        imageSrc={hackathon}
        classname="section"
        link="projects/hackathons"
      />
      <Startups />
      <Footer />
    </div>
  );
};

export default Home;
