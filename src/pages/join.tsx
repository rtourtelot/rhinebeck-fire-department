import React from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { FaCheck, FaQuestion, FaClipboardList, FaUserPlus } from 'react-icons/fa';
import WebflowImage from '@/components/WebflowImage';

const JoinPage = () => {
  const benefits = [
    "Make a direct impact on your community",
    "Join a proud tradition of service",
    "Learn lifesaving skills and emergency response techniques",
    "Access to professional training opportunities",
    "Build lasting friendships with fellow volunteers",
    "Personal satisfaction from helping others"
  ];

  const roles = [
    {
      title: "Firefighter",
      description: "Respond to fire emergencies, perform search and rescue operations, and operate equipment.",
      requirements: "18+ years old, good physical condition, willingness to complete training."
    },
    {
      title: "EMT/Medical Responder",
      description: "Provide emergency medical care to those in need while awaiting transport to medical facilities.",
      requirements: "18+ years old, willingness to complete EMT certification (provided by the department)."
    },
    {
      title: "Support Personnel",
      description: "Assist with administrative tasks, maintenance, public education, and other non-emergency functions.",
      requirements: "16+ years old, interest in supporting the fire service without direct emergency response."
    },
    {
      title: "Junior Firefighter",
      description: "Learn about firefighting while assisting with non-hazardous tasks, preparing for future service.",
      requirements: "16-18 years old, parental permission, good academic standing."
    }
  ];

  const steps = [
    {
      step: 1,
      title: "Initial Contact",
      description: "Fill out our inquiry form or contact the department to express your interest in volunteering."
    },
    {
      step: 2,
      title: "Station Visit & Information Session",
      description: "Meet with members, tour the station, and learn about the roles, requirements, and expectations."
    },
    {
      step: 3,
      title: "Application Submission",
      description: "Complete and submit the official application form along with any required documentation."
    },
    {
      step: 4,
      title: "Interview & Background Check",
      description: "Meet with department leadership and complete a background check."
    },
    {
      step: 5,
      title: "Medical Examination",
      description: "Complete a medical evaluation to ensure you can safely perform the required duties."
    },
    {
      step: 6,
      title: "Welcome & Training",
      description: "If accepted, you'll be welcomed to the department and begin your training program."
    }
  ];

  return (
    <>
      <Head>
        <title>Join Our Team - Rhinebeck Fire Department</title>
        <meta name="description" content="Join the Rhinebeck Fire Department as a volunteer. We provide all training and equipment - no experience necessary." />
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <div className="relative h-[50vh] min-h-[300px]">
          <WebflowImage
            src="/images/join-hero.jpg"
            alt="Rhinebeck Fire Department Volunteers"
            className="absolute inset-0 z-0 object-cover brightness-75"
            isBackground
            priority
          />
          <div className="relative z-10 container mx-auto h-full flex flex-col justify-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Join Our Department</h1>
            <p className="text-xl max-w-2xl drop-shadow-md">
              No experience necessary — we provide all the training you need to become a volunteer firefighter.
            </p>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-fire-red text-white py-8">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-bold mb-2">Ready to Make a Difference?</h2>
            <p className="mb-6">Take the first step toward joining our volunteer team today.</p>
            <Link href="/contact" className="btn bg-white text-fire-red hover:bg-gray-100">
              Contact Us to Get Started
            </Link>
          </div>
        </div>
        
        {/* Introduction */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Volunteers Needed</h2>
            <p className="text-lg mb-6">
              The Rhinebeck Fire Department is actively recruiting dedicated individuals to join our team of volunteer 
              firefighters and support personnel. Volunteering with us is a rewarding way to serve your community and 
              develop valuable skills.
            </p>
            <p className="text-lg mb-6">
              We welcome people from all walks of life. Our members come from diverse backgrounds, including teachers, 
              mechanics, office workers, business owners, students, and retirees. What unites us is a commitment to 
              protecting our community.
            </p>
            <p className="text-lg font-medium">
              No prior experience is required – we provide comprehensive training and all necessary equipment to 
              ensure you're prepared for this important role.
            </p>
          </div>
        </section>
        
        {/* Benefits */}
        <section className="py-16 bg-light-gray">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Benefits of Volunteering</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="space-y-6">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 pt-1">
                      <FaCheck className="text-fire-red" />
                    </div>
                    <p className="ml-4 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
              
              <div className="space-y-6">
                {benefits.slice(3).map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 pt-1">
                      <FaCheck className="text-fire-red" />
                    </div>
                    <p className="ml-4 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Roles Available */}
        <section className="py-16 container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <FaUserPlus className="text-fire-red text-4xl mr-4" />
            <h2 className="text-3xl font-bold">Roles Available</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {roles.map((role, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-3">{role.title}</h3>
                <p className="mb-4">{role.description}</p>
                <div>
                  <h4 className="font-medium text-fire-red mb-1">Requirements:</h4>
                  <p>{role.requirements}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* FAQ */}
        <section className="py-16 bg-light-gray">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-12">
              <FaQuestion className="text-fire-red text-4xl mr-4" />
              <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2">How much time does volunteering require?</h3>
                <p>
                  The time commitment varies based on your role and availability. Most members average 8-12 hours per week, 
                  including training sessions and emergency responses. We understand that family and work obligations come 
                  first, and we offer flexible scheduling options.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Do I need to live in Rhinebeck?</h3>
                <p>
                  While it's helpful to live within our response area, we do accept members who live or work nearby. The key 
                  consideration is your ability to respond to the station in a reasonable amount of time for emergency calls.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">What training will I receive?</h3>
                <p>
                  New members receive extensive training, starting with a basic firefighting or support role course. You'll learn 
                  fire suppression techniques, emergency medical care, equipment operation, and safety protocols. Ongoing training 
                  continues throughout your service to keep skills sharp and learn new techniques.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Are there any costs involved?</h3>
                <p>
                  No, the department provides all necessary equipment, gear, and training at no cost to volunteers. We invest in 
                  our members to ensure they're well-prepared for their roles.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Can I volunteer if I have a full-time job?</h3>
                <p>
                  Absolutely! Most of our members have full-time jobs outside the department. We schedule training sessions 
                  during evening and weekend hours to accommodate work schedules, and we understand that not every member can 
                  respond to every call.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Application Process */}
        <section className="py-16 container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <FaClipboardList className="text-fire-red text-4xl mr-4" />
            <h2 className="text-3xl font-bold">Application Process</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {steps.map((item, index) => (
                <div key={index} className="mb-12 ml-8 relative">
                  <div className="absolute left-0 top-0 -ml-8 rounded-full bg-fire-red text-white w-8 h-8 flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p>{item.description}</p>
                  {index < steps.length - 1 && (
                    <div className="absolute h-full border-l-2 border-dashed border-gray-300 left-0 top-8 -ml-8 pl-4"></div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-lg mb-6">
                Ready to start your journey as a volunteer firefighter? We're excited to meet you!
              </p>
              <Link href="/contact" className="btn btn-primary">
                Start Application Process
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default JoinPage; 