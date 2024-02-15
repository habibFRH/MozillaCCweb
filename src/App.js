import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Newsletter from "./Components/Newsletter";
import Cards from "./Components/TeamCard";
import GroupCard from "./Components/GroupCard";
import Footer from "./Components/Footer";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Web from "./assets/webdev.jpg";
import Mobile from "./assets/mobiledev.jpg";
import Security from "./assets/security.jpg";
import AI from "./assets/AI2.jpg";

AOS.init();
function App() {
  const [light, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(!light);
  };

  return (
    <div className={`App max-w-full overflow-hidden ${light ? "light-theme" : "dark-theme"}`}>
      <Navbar light={light} theme={toggleTheme} />
      <Hero light={light} />
      <About/>
      {/* TEAMS */}
      <div className="w-full py-[10rem] px-4 bg-white text-center" id="groups">
        <h2 className="text-3xl font-bold mb-8">TEAMS</h2>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 items-center">
          <GroupCard
          animation={"fade-right"}
            name={"Project Management"}
            description={
              "Our Project Management team spearheads project execution from start to finish. We excel in brainstorming, planning, and ensuring timely task completion. With meticulous reporting and risk management, we guarantee successful project delivery."
            }
          />
          <GroupCard
          animation={"fade-left"}
            name={"Education"}
            description={
              "Our Education group facilitates learning by connecting members with mentors, assisting in session initiation, and tracking member progress."
            }
          />
          <GroupCard
          animation={"fade-right"}
            name={"Marketing"}
            description={
              "Our Marketing team handles both online and offline presence, managing social media, content creation, graphic design, video editing, and physical marketing efforts including event organization and promotional material design."
            }
          />
          <GroupCard
            animation={"fade-left"}
            name={"External Relations"}
            description={
              "Our External Relationships team cultivates partnerships, manages legal procedures with partners and the university, and ensures seamless collaborations during events and activities."
            }
          />
        </div>
      </div>

      <Newsletter light={light} />

      {/* GROUPS */}
      <div className="w-full py-[10rem] px-4 bg-white text-center" id="teams">
        <h2 className="text-3xl font-bold mb-8">DEV GROUPS</h2>
        <div className="max-w-[900px] mx-auto grid md:grid-cols-2 gap-8 items-center">
          <Cards animation={"flip-left"} team={"Web Development"} img={Web} />
          <Cards animation={"flip-left"} team={"Mobile Development"} img={Mobile} />
          <Cards animation={"flip-left"} team={"Network / Security"} img={Security} />
          <Cards animation={"flip-left"} team={"Artificial Intelligence / ML"} img={AI} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
