import React from 'react';
import Link from 'next/link';
import { ArrowRight, UsersThree, Flame, Handshake } from 'phosphor-react';
import WebflowImage from './WebflowImage';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

const FeatureCard = ({ icon, title, description, link, linkText }: FeatureCardProps) => (
  <div className="bg-white rounded-lg shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100 h-full">
    <div className="bg-fire-red/10 text-fire-red text-4xl mb-6 p-5 inline-block rounded-full">{icon}</div>
    <h3 className="text-xl font-bold mb-4 text-navy-blue">{title}</h3>
    <p className="text-gray-700 mb-6">{description}</p>
    <Link 
      href={link} 
      className="text-fire-red font-medium hover:text-red-700 flex items-center group transition-all duration-300"
    >
      {linkText} <ArrowRight size={18} weight="bold" className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  </div>
);

const FeatureSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-blue mb-4">Serving Our Community</h2>
          <div className="w-24 h-1 bg-fire-red mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<UsersThree size={48} weight="duotone" />}
            title="Join Our Team"
            description="We're always looking for dedicated volunteers to join our ranks. No experience necessary - we provide all the training."
            link="/join"
            linkText="Learn About Joining"
          />
          
          <FeatureCard
            icon={<Flame size={48} weight="duotone" />}
            title="Fire Safety"
            description="Protect your home and family with our fire safety resources, tips, and educational materials."
            link="/safety"
            linkText="Fire Safety Tips"
          />
          
          <FeatureCard
            icon={<Handshake size={48} weight="duotone" />}
            title="Community Support"
            description="Beyond emergency response, we're committed to community outreach programs and public education."
            link="/about"
            linkText="Our Programs"
          />
        </div>
        
        <div className="mt-20 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100">
          <div className="md:flex">
            <div className="md:w-1/2 relative h-[350px] md:h-auto">
              <WebflowImage
                src="/images/station-image.jpg"
                alt="Rhinebeck Fire Department Station"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent md:hidden"></div>
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6 text-navy-blue">About Rhinebeck Fire Department</h3>
              <div className="w-16 h-1 bg-fire-red mb-6"></div>
              <p className="text-gray-700 mb-6">
                Established in 1834, the Rhinebeck Fire Department has been serving the Rhinebeck community for nearly two centuries. 
                As a volunteer department, we're proud to uphold a tradition of service while embracing modern training and equipment.
              </p>
              <p className="text-gray-700 mb-8">
                Our members respond to fires, vehicle accidents, medical emergencies, hazardous materials incidents, and other emergencies 
                throughout our protection district.
              </p>
              <div>
                <Link 
                  href="/about" 
                  className="px-8 py-3 bg-navy-blue text-white rounded-md font-medium hover:bg-navy-blue/90 transition-all duration-300 inline-flex items-center shadow-lg hover:-translate-y-1"
                >
                  About Our Department <ArrowRight size={18} weight="bold" className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection; 