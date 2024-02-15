import React from "react";

const Newsletter = ({ light }) => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("footer");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-full py-16 text-black px-4">
      <div
        className="max-w-[1240px] mx-auto grid lg:grid-cols-3"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="lg:col-span-2 my-4">
          <h1
            className={`${
              light
                ? "text-[#000300] md:text-4xl sm:text-3xl text-2xl font-bold py-2"
                : "text-[white] md:text-4xl sm:text-3xl text-2xl font-bold py-2"
            }`}
          >
            Stay Informed with the Latest News
          </h1>
          <p className={`${light ? "text-[#000300]" : "text-[white]"}`}>
            Subscribe to our newsletter and never miss an update.
          </p>
          <p className={`${light ? "text-[#000300]" : "text-[white]"}`}>
            Follow us{" "}
            <span
              onClick={scrollToAbout}
              className={`${
                light
                  ? "text-[#000300] underline hover:cursor-pointer"
                  : "text-[white] underline hover:cursor-pointer"
              }`}
            >
              on social media
            </span>{" "}
            on social media for more updates!
          </p>
        </div>
        <div className="my-4">
          <div>
            <form
              className="flex flex-col sm:flex-row items-center justify-between w-full"
              action="https://getform.io/f/699e43de-9962-40c0-be66-1fbc2e9d54eb"
              method="POST"
              encType="multipart/form-data"
            >
              <input
                name="email"
                className="p-3 flex w-full rounded-md text-black"
                type="email"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="bg-[#fcbf49] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3"
              >
                Notify Me
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
