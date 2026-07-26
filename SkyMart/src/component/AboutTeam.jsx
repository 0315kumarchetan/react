import React from "react";
import { Truck, Star, ShieldCheck, Users, Zap } from "lucide-react";
import { getCntxt } from "../hooks/cntxtHook";

const team = [
            { name: "Chetan Kumar", role: "Founder & CEO", color: "bg-lime-400", letter: "CK" },
            { name: "C. Kumar", role: "Head of Product", color: "bg-blue-500", letter: "C" },
            { name: "K. Chetan", role: "Lead Engineer", color: "bg-purple-500", letter: "K" },
            { name: "C K", role: "Design Director", color: "bg-red-500", letter: "C" },
];

const AboutTeam = () => {
    let {navigate} = getCntxt();
  return (
    <div className="mb-16">
      {/* OUR STORY */}
      <div className="border border-gray-700 rounded-2xl p-8 md:p-10 space-y-4">
        <h2 className="text-2xl font-semibold">Our Story</h2>

        <p className="text-gray-400">
          SkyMart started in 2022 as a small side project — two engineers tired
          of bloated, slow e-commerce experiences. We asked ourselves: what if
          shopping online was actually enjoyable?
        </p>

        <p className="text-gray-400">
          Three years later, SkyMart serves over 50,000 customers across the
          country. We stock electronics, fashion, jewelry, and everyday
          essentials — all at prices that don't require a second mortgage.
        </p>

        <p className="text-gray-400">
          We're still the same team at heart: obsessed with speed, transparency,
          and making you feel good about every purchase you make here.
        </p>
      </div>

      {/* VALUES */}
      <div className="space-y-10 mt-10">
        <h2 className="text-center text-3xl font-semibold">
          What We Stand For
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          
          {[
            {
              title: "Trust",
              desc: "Every product is verified for quality and authenticity before listing.",
              icon: <ShieldCheck />,
            },
            {
              title: "Speed",
              desc: "We obsess over delivery times so your orders arrive when promised.",
              icon: <Truck />,
            },
            {
              title: "Community",
              desc: "Built around real customer feedback, not just business metrics.",
              icon: <Users />,
            },
            {
              title: "Quality",
              desc: "We curate the best — no filler, no junk, just great products.",
              icon: <Star />,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border border-gray-700 rounded-2xl p-6 flex gap-4 items-start hover:border-lime-400 transition"
            >
              <div className="bg-lime-400/10 text-lime-400 p-3 rounded-lg">
                {item.icon}
              </div>

              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TEAM */}
      <div className="space-y-10 mt-10">
        <h2 className="text-center text-3xl font-semibold">
          Meet the Team
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((person, i) => (
            <div
              key={i}
              className="border border-gray-700 rounded-2xl p-6 text-center hover:border-lime-400 transition"
            >
              <div
                className={`w-14 h-14 mx-auto flex items-center justify-center text-black font-bold rounded-xl ${person.color}`}
              >
                {person.letter}
              </div>

              <h3 className="mt-4 font-semibold">{person.name}</h3>
              <p className="text-gray-400 text-sm">{person.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="border border-lime-400/30 rounded-2xl p-10 text-center space-y-6 mt-10">
        <h2 className="text-2xl font-semibold">Ready to shop?</h2>
        <p className="text-gray-400">
          Explore thousands of products at unbeatable prices.
        </p>

        <button onClick={()=>navigate("/main/shop")} className="bg-lime-400 text-black px-8 py-3 rounded-xl font-semibold hover:opacity-90">
          Browse Products →
        </button>
      </div>


    </div>
  );
};

export default AboutTeam;