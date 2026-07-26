import { Truck, Star, ShieldCheck, Users, Zap } from "lucide-react";
import AboutHero from "../component/AboutHero";
import AboutStats from "../component/AboutStats";
import AboutTeam from "../component/AboutTeam";
import Navbar from "../component/Navbar";

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-10 py-6 space-y-20">
      <Navbar/>
      <AboutHero/>
     <AboutStats/>
     <AboutTeam/>

    </div>
  );
}