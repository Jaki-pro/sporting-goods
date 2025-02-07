// src/components/AboutUs.tsx
import React from "react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 p-24">
      <div className="max-w-7xl mx-auto">
        {/* Company Information Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-serif text-center mb-8 text-[#06233E]">
            About Our Company
          </h2>
          <p className="text-lg text-gray-700 text-center leading-relaxed">
            For over 20 years, we have been dedicated to providing quality
            products and services while ensuring customer satisfaction at the
            heart of everything we do.
          </p>
        </section>

        {/* Mission and Vision Section */}
        <section className="mb-12 bg-[#06233E] text-white p-8 rounded-lg shadow-xl">
          <h2 className="text-4xl font-serif text-center mb-6">
            Mission & Vision
          </h2>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
            <p className="text-lg mb-4 leading-relaxed">
              To deliver exceptional products and services with quality and
              excellence, ensuring complete customer satisfaction.
            </p>
            <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
            <p className="text-lg leading-relaxed">
              To emerge as the most trusted and respected name in our industry,
              characterized by innovation and a customer-centric approach.
            </p>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-serif text-center mb-6 text-[#001529]">
            Contact Us
          </h2>
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">Email:</span> mdjak8980@gmail.com
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">Phone:</span> (123) 456-7890
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Address:</span> Cumilla,
              Bangladesh
            </p>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-serif text-center mb-6 text-[#001529]">
            Our Team
          </h2>
          <div className="flex flex-wrap justify-center">
            {/* Example Team Member */}
            {["Jakaria Hossain", "Arafat Hossain"].map((name, index) => (
              <div className="w-full sm:w-1/2 md:w-1/3 p-4" key={index}>
                <div className="bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out p-6 text-center">
                  <img
                    src="https://res.cloudinary.com/dv0u3li3j/image/upload/v1718882342/2030010023twentythree.jpg"
                    alt={`${name} image`}
                    className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-gray-300"
                  />
                  <h3 className="text-xl font-semibold text-blue-800">
                    {name}
                  </h3>
                  <p className="text-[#001529]">{index === 0 ? "CEO" : "MD"}</p>
                </div>
              </div>
            ))}
            {/* Add more team members here */}
          </div>
        </section>

        {/* Our Store Location Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-serif text-center mb-6 text-[#001529]">
            Our Store Location
          </h2>
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6">
              Visit our flagship store, located in the heart of downtown.
            </p>
            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.4296513244675!2d91.17751481539303!3d23.46567638471261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753b8d4a027e7a7%3A0xc0b4b72c7d9230f2!2sCumilla%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1626141359485!5m2!1sen!2sus"
                width="600"
                height="450"
                className="w-full rounded-lg shadow-lg"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
