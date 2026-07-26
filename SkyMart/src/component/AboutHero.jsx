import React from "react";
import { Truck, Star, ShieldCheck, Users, Zap } from "lucide-react";

const AboutHero = () => {
  return (
    <div className="text-center space-y-4">
        <div className="w-14 h-14 mx-auto flex items-center justify-center bg-lime-400 rounded-xl">
          <Zap className="text-black" />
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold">
          About <span className="text-lime-400">SkyMart</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto">
          SkyMart is a next-generation e-commerce platform built to make online
          shopping fast, fair, and enjoyable — for everyone.
        </p>
      </div>
  );
};

export default AboutHero;