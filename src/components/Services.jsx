import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const services = [
  {
    title: "Brochure Design",
    image: "/sagraphics/images/brochure.jpeg",
    description:
      "Transform your ideas into visually compelling brochures that communicate your brand story with clarity and style. Our brochure designs combine modern typography, structured layouts, and eye-catching visuals to create powerful marketing materials that captivate your audience and leave a lasting impression. Perfect for businesses, events, and promotional campaigns.",
  },
  {
    title: "Poster & Banner Design",
    image: "/sagraphics/images/poster.jpeg",
    description:
      "Capture attention instantly with bold and creative poster and banner designs. We craft visually striking layouts with vibrant colors, impactful typography, and strong visual hierarchy to ensure your message stands out in any environment — from event promotions and advertisements to retail displays and digital campaigns.",
  },
  {
    title: "Business Card Design",
    image: "/sagraphics/images/businesscard.jpeg",
    description:
      "Make a powerful first impression with professionally crafted business cards that reflect your brand identity. Our designs combine elegance, creativity, and precision to deliver clean layouts, modern typography, and premium aesthetics that ensure your card stands out and remains memorable long after the first meeting.",
  },
  {
    title: "Magazine & Book Layout",
    image: "/sagraphics/images/magazine.jpeg",
    description:
      "Bring stories and information to life with beautifully structured magazine and book layouts. We focus on typography harmony, balanced spacing, and clean editorial design to create visually engaging pages that enhance readability while maintaining a sophisticated and professional publishing standard.",
  },
  {
    title: "Invitation Design",
    image: "/sagraphics/images/invitation.jpeg",
    description:
      "Celebrate special moments with elegant and personalized invitation designs. Whether it's weddings, corporate events, celebrations, or special gatherings, our designs blend artistic elements, refined typography, and graceful layouts to create invitations that reflect the emotion and importance of your occasion.",
  },
  {
    title: "Product Catalogue Design",
    image: "/sagraphics/images/catalogue.jpeg",
    description:
      "Showcase your products with clarity and professionalism through well-organized catalogue designs. Our layouts emphasize product presentation, visual hierarchy, and brand consistency to create catalogs that not only inform customers but also inspire them to explore and engage with your offerings.",
  },
];
export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-20 px-6 lg:px-16  ">

      {/* Header */}
      <div className="text-center mb-16">
        <span className="inline-block bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs uppercase tracking-wider">
          Our Services
        </span>

        <h2 className="mt-4 text-4xl font-bold text-white">
          Professional <span className="text-orange-500">Services</span>
        </h2>

        <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-sm">
          We provide complete DTP and graphic design solutions tailored to your business needs.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => setSelectedService(service)}
            className="group relative cursor-pointer rounded-xl overflow-hidden
            bg-white/5 border border-white/10 transition duration-500
            hover:-translate-y-3 hover:shadow-2xl hover:shadow-orange-500/20"
          >

            {/* Gradient Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
            bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 blur-xl"></div>

            <div className="relative z-10">

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Title */}
              <div className="p-6 text-center">
                <h3 className="text-white text-lg font-semibold">
                  {service.title}
                </h3>
              </div>

            </div>

          </div>
        ))}

      </div>

      {/* Popup Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">

          <div className="bg-gray-900 max-w-lg w-full rounded-xl p-6 relative">

            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <FaTimes />
            </button>

            <img
              src={selectedService.image}
              alt={selectedService.title}
              className="rounded-lg mb-4"
            />

            <h3 className="text-2xl font-bold text-white mb-2">
              {selectedService.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed text-justify ">
              {selectedService.description}
            </p>

          </div>

        </div>
      )}

    </section>
  );
}