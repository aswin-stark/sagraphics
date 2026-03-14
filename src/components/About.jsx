import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/sa.png";
export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen text-white px-6 py-20">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="px-4 py-1 text-sm bg-white/10 rounded-full text-orange-400">
          About Us
        </span>

        <h1 className="text-4xl md:text-6xl font-bold mt-6">
          Who We <span className="text-orange-500">Are</span>
        </h1>

        <p className="text-gray-400 mt-4">
          Your trusted partner for all DTP and graphic design needs
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        {/* Left Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 w-72 h-80 flex flex-col items-center justify-center transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,115,0,0.6)]">

     <img
  src={logo}
  alt="Shri Abirami Graphics Logo"
  className="w-24 h-24 object-contain mb-4"
/>

<h2 className="text-xl font-semibold text-orange-400 text-center">
  SHRI ABIRAMI GRAPHICS
</h2>
            <p className="text-gray-400 text-sm">Since 2003</p>

            {/* Floating Tags */}
            <span className="absolute -top-4 right-4 bg-white/10 px-3 py-1 text-sm rounded-full text-orange-300 backdrop-blur">
              Creative Design
            </span>

            <span className="absolute -bottom-4 left-4 bg-white/10 px-3 py-1 text-sm rounded-full text-orange-300 backdrop-blur">
              Quality Print
            </span>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            SHRI ABIRAMI GRAPHICS
          </h2>

          <p className="text-gray-400 mb-4 leading-relaxed text-justify ">
            We are a professional Desktop Publishing (DTP) and graphic design
            studio based in Tamil Nadu. With over 25 years of experience, we
            specialize in delivering high-quality print and digital design
            solutions.
          </p>

          <p className="text-gray-400 mb-6 leading-relaxed text-justify">
            Our team of skilled designers and DTP professionals are dedicated to
            bringing your creative vision to life. We handle everything from
            typesetting and page layout to complete print production management.
          </p>

          {/* Points */}
          <ul className="space-y-4">
            {[
              "Professional DTP services since 2003",
              "Expert in Tamil, English, Hindi & Sanskrit typesetting",
              "State-of-the-art printing equipment",
              "Quick turnaround time guaranteed",
              "Affordable pricing for all budgets",
              "100% customer satisfaction focus",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-gray-300"
              >
                <CheckCircle className="text-orange-500 w-5 h-5" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
