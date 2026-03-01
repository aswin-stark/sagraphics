import { motion } from "framer-motion";
import {
  FaRegFileAlt,
  FaPalette,
  FaBriefcase,
  FaNewspaper,
  FaRing,
  FaClipboard,
} from "react-icons/fa";

const services = [
  {
    icon: <FaRegFileAlt size={28} />,
    title: "Brochure Design",
    description:
      "Professional tri-fold and multi-page brochures with premium layout and typography.",
    tags: ["Print Design", "Corporate", "Layout"],
  },
  {
    icon: <FaPalette size={28} />,
    title: "Poster & Banner Design",
    description:
      "Eye-catching posters and banners designed for events, promotions, and advertising.",
    tags: ["Poster", "Event", "Branding"],
  },
  {
    icon: <FaBriefcase size={28} />,
    title: "Business Card Design",
    description:
      "Premium business cards with creative concepts and high-quality print finishes.",
    tags: ["Brand Identity", "Print", "Corporate"],
  },
  {
    icon: <FaNewspaper size={28} />,
    title: "Magazine & Book Layout",
    description:
      "Professional editorial layout design for magazines, books, and reports.",
    tags: ["Editorial", "Typography", "Publishing"],
  },
  {
    icon: <FaRing size={28} />,
    title: "Invitation Design",
    description:
      "Custom wedding and event invitations with elegant and traditional themes.",
    tags: ["Wedding", "Event", "Custom"],
  },
  {
    icon: <FaClipboard size={28} />,
    title: "Product Catalogue Design",
    description:
      "Clean, grid-based catalogues to showcase products effectively and professionally.",
    tags: ["Catalogue", "Product", "Print"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative min-h-[85vh] py-16 px-4 sm:px-6 lg:px-16 scroll-mt-28"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs uppercase tracking-wider"
        >
          Our Services
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white"
        >
          Professional <span className="text-orange-500">Services</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="mt-2 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base"
        >
          We provide complete DTP and graphic design solutions tailored to your business needs.
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-4
                       hover:bg-white/10 hover:scale-105 transition transform shadow-lg
                       backdrop-blur-md"
          >
            <div className="text-orange-400">{service.icon}</div>

            <h3 className="text-white font-semibold text-lg">
              {service.title}
            </h3>

            <p className="text-gray-400 text-sm">
              {service.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {service.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-gray-300 text-xs bg-white/5 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}