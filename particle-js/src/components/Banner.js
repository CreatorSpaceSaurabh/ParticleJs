import React from "react";
import logo from "../assets/logo-hq.png";
import "../components/component.css";

const Banner = () => {
  const handleWorkFilter = (e, url) => {
    console.log("Url ==", url);
    e.preventDefault();
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex flex-col gap-6">
        <h3 className="text-xl text-cyan-400 font-semibold">
          {/* SPREADING WINGS OF TECHNOLOGY */}
          Welcome to my digital playground!
        </h3>
        <h1 className="text-6xl text-gray-300 leading-tight">
          {/* We make you <br />{" "}
          <span className="font-bold text-white">"Go Digital"</span> */}
          I believe in <br />{" "}
          <span className="font-bold text-white">"Code the dreams!"</span>
        </h1>
        <p className="text-sm text-gray-300 font-semibold">
          {/* Creativity is our Passion & We Transform you Digitally. */}I
          thrive on transforming concepts into reality. Take a journey through
          my portfolio and let's embark on a digital adventure together!
        </p>
        <button
          className="w-44 bg-cyan-400 px-6 py-4 text-xl font-bold uppercase rounded-full mt-5"
          onClick={(e) =>
            handleWorkFilter(e, "https://creatorspacesaurabh.netlify.app/")
          }
        >
          Take a look
        </button>
      </div>
      <div className="background">
        {/* <img src={bannerRight} alt="banner" /> */}
        <img src={logo} alt="logo" width="500" height="500" />
      </div>
    </div>
  );
};

export default Banner;
