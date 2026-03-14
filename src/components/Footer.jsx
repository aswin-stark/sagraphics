import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import footBg from "../assets/sa.png";
export default function Footer() {
  return (
    <footer className="text-white px-6 py-14 relative overflow-hidden bg-gradient-to-br from-black via-[#0a0a0a] to-orange-950">
      
      {/* Orange Neon Glow */}
      <div className="absolute inset-0 opacity-30 blur-3xl bg-gradient-to-r from-orange-500/20 via-transparent to-orange-400/20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-4">
                      <img
                  src={footBg}
                  alt="Shri Abirami Graphics"
                  className="h-10 w-auto object-contain"
                />
              <div>
                <h2 className="font-semibold">SHRI ABIRAMI</h2>
                <p className="text-orange-400 text-sm">GRAPHICS</p>
              </div>
            </div>

            <p className="text-gray-400 mb-4">
              Professional DTP & graphic design services since 2003.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              {[
                { name: "Home", id: "hero" },
                { name: "Services", id: "services" },
                { name: "About", id: "about" },
                { name: "Contact Us", id: "contact" },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.id}`}
                    className="hover:text-orange-400 transition cursor-pointer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              {[
                "Desktop Publishing",
                "Page Layout Design",
                "Typesetting",
                "Brochure Design",
                "Graphic Design",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-orange-400 transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">

              {/* Address */}
              <div className="flex gap-3 items-center hover:text-orange-400 transition">
                <MapPin size={18} /> Tamil Nadu, India
              </div>

              {/* Clickable Phone */}
              <div className="flex gap-3 items-center hover:text-orange-400 transition">
                <Phone size={18} />
                <a href="tel:+919940304572" className="hover:text-orange-400">
                  +91 99403 04572
                </a>
              </div>

              {/* Clickable Email */}
              <div className="flex gap-3 items-center hover:text-orange-400 transition break-all">
                <Mail size={18} />
                <a
                  href="mailto:sagraphics1976@gmail.com"
                  className="hover:text-orange-400"
                >
                  sagraphics1976@gmail.com
                </a>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-10"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
          <p>© {new Date().getFullYear()} SHRI ABIRAMI GRAPHICS. All rights reserved.</p>
          <p className="text-orange-400">
            Professional DTP & Graphic Design Services
          </p>
        </div>

      </div>
    </footer>
  );
}