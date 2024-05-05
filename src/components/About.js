import React from "react";
import logo from "../assets/logo"; // Assuming logo import

const DEFAULT_IMAGE = "https://via.placeholder.com/215";

const About = ({ image = DEFAULT_IMAGE, about = "About this blog" }) => {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
};

export default About;
