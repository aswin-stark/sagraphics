
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const services = [
  {
    title: "Brochure Design",
    image: "/sagraphics/images/brochure.jpeg",
    description:
      "Transform your ideas into visually compelling brochures that communicate your brand story with clarity and style. Our brochure designs combine modern typography, structured layouts, and eye-catching visuals to create powerful marketing materials that captivate your audience and leave a lasting impression.",
  },
  {
    title: "Poster & Banner Design",
    image: "/sagraphics/images/poster.jpeg",
    description:
      "Capture attention instantly with bold and creative poster and banner designs using vibrant colors, impactful typography, and strong visual hierarchy.",
  },
  {
    title: "Business Card Design",
    image: "/sagraphics/images/businesscard.jpeg",
    description:
      "Make a powerful first impression with professionally crafted business cards that reflect your brand identity and creativity.",
  },
  {
    title: "Magazine & Book Layout",
    image: "/sagraphics/images/magazine.jpeg",
    description:
      "Beautifully structured magazine and book layouts with balanced typography and professional editorial design.",
  },
  {
    title: "Invitation Design",
    image: "/sagraphics/images/invitation.jpeg",
    description:
      "Elegant and personalized invitation designs for weddings, events, and special occasions.",
  },
  {
    title: "Product Catalogue Design",
    image: "/sagraphics/images/catalogue.jpeg",
    description:
      "Professional catalogue layouts that showcase your products clearly and effectively.",
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-20 px-6 lg:px-16">

      {/* Header */}
      <div className="text-center mb-16">
        <span className="inline-block text-orange-500 px-3 py-1 text-xs uppercase tracking-wider">
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
            transition duration-500 hover:-translate-y-3"
          >

            {/* Image */}
            <div className="overflow-hidden rounded-xl">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            {/* Title */}
            <div className="p-4 text-center">
              <h3 className="text-white text-lg font-semibold">
                {service.title}
              </h3>
            </div>

          </div>
        ))}

      </div>
{/* Popup Modal */}
{selectedService && (
  <div className="fixed inset-0 flex items-center justify-center z-50 px-4 py-8 bg-black/40 backdrop-blur-md">

    <div className="max-w-2xl w-full rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto bg-gray-900">

      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-6">
        <h3 className="text-xl sm:text-2xl font-bold text-white">
          {selectedService.title}
        </h3>

        <button
          onClick={() => setSelectedService(null)}
          className="text-gray-400 hover:text-white text-lg p-2"
        >
          <FaTimes />
        </button>
      </div>

      {/* Image */}
      <div className="px-6 mt-4">
        <img
          src={selectedService.image}
          alt={selectedService.title}
          className="w-full h-56 sm:h-64 object-cover rounded-xl"
        />
      </div>

      {/* Description */}
      <div className="px-6 pb-8 mt-6">
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-justify">
          {selectedService.description}
        </p>
      </div>

    </div>

  </div>
)}
    </section>
  );
}

