import { motion } from "framer-motion";
import {
  Star,
  Users,
  Clock,
  Phone,
  Image as ImageIcon,
} from "lucide-react";

export default function Hero() {

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 100;
    const top =
      el.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-start sm:items-center justify-center
                 pt-24 sm:pt-0 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-96 h-96
                        bg-orange-500/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96
                        bg-purple-600/20 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                     bg-white/5 border border-white/10 backdrop-blur
                     text-gray-300 text-xs mb-6"
        >
          <span className="text-orange-400">●</span>
          Professional DTP & Printing Services
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl xl:text-7xl font-extrabold leading-tight"
        >
          <span className="text-orange-500">SHRI ABIRAMI</span>
          <br />
          <span className="text-white">GRAPHICS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto"
        >
          Professional DTP & Graphic Solutions
        </motion.p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => handleScroll("services")}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full
                       bg-orange-500 text-white font-medium hover:bg-orange-600
                       transition shadow-lg"
          >
            <ImageIcon size={18} />
            Services
          </button>

          <button
            onClick={() => handleScroll("contact")}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full
                       bg-white/5 border border-white/10 text-white
                       hover:bg-white/10 transition"
          >
            <Phone size={18} />
            Contact Us
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <Stat icon={<Star />} value="500+" label="Projects Completed" />
          <Stat icon={<Users />} value="200+" label="Happy Clients" />
          <Stat icon={<Clock />} value="20+" label="Years Experience" />
          <Stat icon={<ImageIcon />} value="1000+" label="Designs Created" />
        </div>

      </div>
    </section>
  );
}

/* 🔥 Ultra Premium Breathing Glow Card */
/* 🔥 Ultra Premium Orange + Black Glow Card */
function Stat({ icon, value, label }) {
  return (
    <div className="relative group">

      {/* BLACK Deep Glow */}
      <div className="absolute inset-0 rounded-2xl 
                      shadow-[0_0_50px_rgba(0,0,0,0.85)]
                      pointer-events-none"></div>

      {/* ORANGE Glow Layer */}
      <div className="absolute inset-0 rounded-2xl 
                      shadow-[0_0_40px_rgba(255,115,0,0.7)]
                      pointer-events-none animate-breath"></div>

      {/* Card */}
      <div
        className="relative flex flex-col items-center justify-center
                   p-6 rounded-2xl
                   bg-white/5 border border-orange-500/30
                   backdrop-blur-xl
                   transition-all duration-500
                   hover:-translate-y-3
                   hover:border-orange-400"
      >
        <div className="text-orange-400 mb-3
                        drop-shadow-[0_0_15px_rgba(255,115,0,0.9)]">
          {icon}
        </div>

        <h3 className="text-2xl font-bold text-white tracking-wide">
          {value}
        </h3>

        <p className="text-xs text-gray-400 text-center mt-1">
          {label}
        </p>
      </div>

      {/* Breathing Animation */}
      <style>
        {`
        @keyframes breath {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0.6;
          }
        }

        .animate-breath {
          animation: breath 3.5s ease-in-out infinite;
        }
        `}
      </style>

    </div>
  );
}