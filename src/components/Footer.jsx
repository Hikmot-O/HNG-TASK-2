import React from "react";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";
import youtube from "../assets/icons/youtube.svg";

const Footer = () => {
  return (
    <section className="px-5 pt-[147px] pb-[74px] font-bold text-sm md:text-lg flex flex-col items-center">
      <div className="flex items-center gap-12">
        <img src={facebook} alt="Facebook Svg" />
        <img src={instagram} alt="Instagram Svg" />
        <img src={twitter} alt="Twitter Svg" />
        <img src={youtube} alt="Youtube Svg" />
      </div>
      <div className="my-9 md:flex items-center gap-12  text-[#111827]">
        <p>Conditions of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
      </div>
      <p className="text-[#6B7280]">© 2021 MovieBox by Adriana Eka Prayudha  </p>
    </section>
  );
};

export default Footer;
