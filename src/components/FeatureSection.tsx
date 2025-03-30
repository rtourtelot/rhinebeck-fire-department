import React from 'react';
import Link from 'next/link';
import { FaUsers, FaFire, FaHandsHelping } from 'react-icons/fa';
import WebflowImage from './WebflowImage';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

const FeatureCard = ({ icon, title, description, link, linkText }: FeatureCardProps) => (
  <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl">
    <div className="text-fire-red text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-700 mb-4">{description}</p>
    <Link 
      href={link} 
      className="text-fire-red font-medium hover:text-red-700 flex items-center"
    >
      {linkText} <span className="ml-1">→</span>
    </Link>
  </div>
);

const FeatureSection = () => {
  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Serving Our Community</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FaUsers />}
            title="Join Our Team"
            description="We're always looking for dedicated volunteers to join our ranks. No experience necessary - we provide all the training."
            link="/join"
            linkText="Learn About Joining"
          />
          
          <FeatureCard
            icon={<FaFire />}
            title="Fire Safety"
            description="Protect your home and family with our fire safety resources, tips, and educational materials."
            link="/safety"
            linkText="Fire Safety Tips"
          />
          
          <FeatureCard
            icon={<FaHandsHelping />}
            title="Community Support"
            description="Beyond emergency response, we're committed to community outreach programs and public education."
            link="/about"
            linkText="Our Programs"
          />
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 relative h-[300px] md:h-auto">
              <WebflowImage
                src="/images/station-image.jpg"
                alt="Rhinebeck Fire Department Station"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-bold mb-4">About Rhinebeck Fire Department</h3>
              <p className="text-gray-700 mb-6">
                Established in 1834, the Rhinebeck Fire Department has been serving the Rhinebeck community for nearly two centuries. 
                As a volunteer department, we're proud to uphold a tradition of service while embracing modern training and equipment.
              </p>
              <p className="text-gray-700 mb-6">
                Our members respond to fires, vehicle accidents, medical emergencies, hazardous materials incidents, and other emergencies 
                throughout our protection district.
              </p>
              <Link href="/about" className="btn btn-primary">
                About Our Department
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection; 