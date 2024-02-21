import React, { useState} from "react";
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
import DeviceType from "./Components/DeviceType";



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
      <DeviceType/>
      <Footer />
    </div>
  );
}

export default App;




// <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//     <div class="flex justify-end px-4 pt-4">
//         <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
//             <span class="sr-only">Open dropdown</span>
//             <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
//                 <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
//             </svg>
//         </button>
//         <!-- Dropdown menu -->
//         <div id="dropdown" class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
//             <ul class="py-2" aria-labelledby="dropdownButton">
//             <li>
//                 <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
//             </li>
//             <li>
//                 <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
//             </li>
//             <li>
//                 <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
//             </li>
//             </ul>
//         </div>
//     </div>
//     <div class="flex flex-col items-center pb-10">
//         <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
//         <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
//         <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
//         <div class="flex mt-4 md:mt-6">
//             <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
//             <a href="#" class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a>
//         </div>
//     </div>
// </div>
