import Image from "next/image";
import React from "react";

const AboutPageTwo = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Column: Introduction */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Our Story
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Our journey began with a simple idea: to make online sales and delivery more accessible and efficient for everyone. We saw how many customers faced challenges when ordering products online—delays, lack of trust, and limited service. That’s when we decided to act.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Fusce at maximus mi. Aliquam bibendum magna sit amet nisi efficitur,
            ut viverra nisi lacinia. Mauris sed mi a turpis blandit facilisis.
            Nunc id ex a nibh cursus convallis.
          </p>
        </div>

        {/* Right Column: Team */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Team Member Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-[16rem]">
                <Image
                  src="/images/people/group-image.avif"
                  alt="Team Member 1"
                  className="w-full h-64 object-cover"
                  fill
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  NDIHOKUBWAYO Eric
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Co-Founder & CEO
                </p>
              </div>
            </div>

            {/* Team Member Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-[16rem]">
                <Image
                  src="/images/people/group-image.avif"
                  alt="Team Member 1"
                  className="w-full h-64 object-cover"
                  fill
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  BUTOYI Pascal
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Co-Founder & CTO
                </p>
              </div>
            </div>

            {/* Add more team member cards as needed */}
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Mission */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Our mission is to empower our customers by making online sales and delivery easier, faster, and more reliable. We are committed to providing a seamless shopping experience, ensuring customer satisfaction through efficient service, trusted partnerships, and innovative solutions tailored to their needs
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Customer Focus</li>
              <li>Reliability </li>
              <li>Innovation </li>
              <li>Integrity</li>
              <li>Collaboration</li>
            </ul>
          </div>
        </div>

        {/* Vision */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Our vision is to become a leading force in transforming online commerce and delivery services across the region. We aim to build a digital ecosystem where every customer, regardless of location, can access quality products and dependable delivery with just a few clicks
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageTwo;
