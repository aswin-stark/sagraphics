import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const form = useRef();
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ehh5ip1",
        "template_07je5hf",
        form.current,
        "-qD5ED2jlCdHFEuvt"
      )
      .then(() => {
        setStatus("success");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        setStatus("error");
      });
  };

  return (
    <section id="contact" className="min-h-screen text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <button className="px-4 py-1 text-sm rounded-full border border-orange-500 text-orange-400 mb-4">
            Contact Us
          </button>
          <h1 className="text-4xl md:text-5xl font-bold">
            Get In <span className="text-orange-500">Touch</span>
          </h1>
          <p className="text-gray-400 mt-4">
            Have a project in mind? Let's discuss it!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT SECTION (FORM) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 p-8 rounded-2xl border border-white/10"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-5">

              <div>
              <h2 class="text-center text-3xl font-bold text-white">
  Contact <span class="text-orange-500">Us</span>
</h2>
                <label className="text-sm text-gray-400">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your full name"
                  className="w-full mt-2 p-3 rounded-lg bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="your@email.com"
                  className="w-full mt-2 p-3 rounded-lg bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="e.g. Brochure design inquiry"
                  className="w-full mt-2 p-3 rounded-lg bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Message</label>
                <textarea
                  rows="4"
                  name="message"
                  required
                  placeholder="Tell us about your project..."
                  className="w-full mt-2 p-3 rounded-lg bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>

              {/* Status Message */}
              {status === "success" && (
                <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm text-center animate-pulse">
                  ✅ Message sent successfully!
                </div>
              )}

              {status === "error" && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center animate-pulse">
                  ❌ Failed to send message. Please try again.
                </div>
              )}

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:opacity-90 transition p-3 rounded-lg font-semibold"
              >
                <Send size={18} /> Send Message
              </button>

            </form>
          </motion.div>

          {/* RIGHT SECTION (CONTACT INFO) */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Visit Our Office</h2>
            <p className="text-gray-400 mb-8">
              We're always ready to help you with your DTP and graphic design needs.
              Reach out to us through any of the channels below.
            </p>

            <div className="space-y-4">

              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="p-3 bg-orange-500/20 rounded-lg">
                  <MapPin className="text-orange-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Address</p>
                  <p>Tamil Nadu, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition">
                <div className="p-3 bg-yellow-500/20 rounded-lg">
                  <Phone className="text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:+919940304572" className="hover:text-orange-400 transition">
                    +91 99403 04572
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition">
                <div className="p-3 bg-red-500/20 rounded-lg">
                  <Mail className="text-red-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a
                    href="mailto:sagraphics1976@gmail.com"
                    className="hover:text-orange-400 transition break-all"
                  >
                    sagraphics1976@gmail.com
                  </a>
                </div>
              </div>

              <div className="bg-white/5 p-10 rounded-xl border border-white/10 text-center">
                <MapPin className="mx-auto mb-3 text-orange-400" />
                <p className="text-gray-300">Tamil Nadu, India</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}