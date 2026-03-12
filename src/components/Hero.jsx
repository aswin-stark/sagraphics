import { motion, useInView } from "framer-motion";
import { Star, Users, Clock, Phone, Image as ImageIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroBg from "../assets/bg.png";

export default function Hero() {

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 100;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-start sm:items-center justify-center pt-24 sm:pt-0 pb-20 overflow-hidden"
    >

      {/* Background Image */}
      <img
        src={heroBg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-orange-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-purple-600/20 rounded-full blur-[130px]" />
      </div>

      {/* Content */}
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

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto"
        >
          Professional DTP & Graphic Solutions
        </motion.p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

          <button
            onClick={() => handleScroll("services")}
            className="inline-flex items-center justify-center gap-2 px-6 py-3
            rounded-full bg-orange-500 text-white font-medium
            hover:bg-orange-600 transition shadow-lg"
          >
            <ImageIcon size={18} />
            Services
          </button>

          <button
            onClick={() => handleScroll("contact")}
            className="inline-flex items-center justify-center gap-2 px-6 py-3
            rounded-full bg-white/5 border border-white/10 text-white
            hover:bg-white/10 transition"
          >
            <Phone size={18} />
            Contact Us
          </button>

        </div>

        {/* Stats */}
<div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto">

  <Stat icon={<Star />} value={10000} label="Projects Completed" />

  <Stat icon={<Users />} value={5000} label="Happy Clients" />

  <Stat icon={<Clock />} value={25} label="Years Experience" />

  <Stat icon={<ImageIcon />} value={1000000} label="Designs Created" />

  <Stat icon={<Star />} value={98.7} label="Client Retention" isPercent />

</div>

      </div>
    </section>
  );
}


/* Stat Component */
function Stat({ icon, value, label, isPercent }) {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {

    if (!isInView) return;

    let start = 0;
    const duration = 1500;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {

      start += increment;

      if (start >= value) {
        start = value;
        clearInterval(counter);
      }

      setCount(start);

    }, 16);

    return () => clearInterval(counter);

  }, [isInView, value]);

  return (
    <div ref={ref} className="relative group">

      {/* Glow */}
      <div className="absolute inset-0 rounded-xl
      shadow-[0_0_25px_rgba(255,115,0,0.45)]
      opacity-70 group-hover:opacity-100 transition"></div>

      {/* Card */}
      <div
        className="relative flex flex-col items-center justify-center
        p-4 sm:p-6 rounded-xl
        bg-white/5 border border-orange-500/30
        backdrop-blur-xl transition-all duration-500
        hover:-translate-y-2 hover:border-orange-400"
      >

        <div className="text-orange-400 mb-2">
          {icon}
        </div>

        {/* Number */}
        <h3 className="text-xl sm:text-2xl font-bold text-white">

          {isPercent
            ? `${count.toFixed(1)}%`
            : `${Math.floor(count).toLocaleString()}+`
          }

        </h3>

        <p className="text-[11px] sm:text-xs text-gray-400 text-center mt-1">
          {label}
        </p>

      </div>

    </div>
  );
}
