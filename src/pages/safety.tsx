import React from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { FaDownload, FaExclamationTriangle, FaCheck, FaHome, FaCalendarAlt, FaDoorOpen } from 'react-icons/fa';
import WebflowImage from '@/components/WebflowImage';

const SafetyPage = () => {
  const homeSafetyTips = [
    {
      id: 1,
      title: "Install and Maintain Smoke Alarms",
      description: "Install smoke alarms in every sleeping room, outside each sleeping area, and on every level of your home. Test them monthly and replace batteries at least once a year.",
      icon: <FaHome />
    },
    {
      id: 2,
      title: "Create and Practice a Fire Escape Plan",
      description: "Develop a home fire escape plan with two ways out of each room. Practice the plan with everyone in your household, including children, at least twice a year.",
      icon: <FaDoorOpen />
    },
    {
      id: 3,
      title: "Stay in the Kitchen When Cooking",
      description: "Never leave cooking food unattended on the stove. Keep a lid nearby to smother small grease fires by sliding the lid over the pan.",
      icon: <FaCheck />
    },
    {
      id: 4,
      title: "Heat Your Home Safely",
      description: "Keep anything that can burn at least 3 feet away from heating equipment. Turn off portable heaters when leaving the room or going to bed.",
      icon: <FaExclamationTriangle />
    },
    {
      id: 5,
      title: "Check Electrical Cords",
      description: "Replace any electrical cords that are cracked, damaged, or have broken plugs. Don't overload electrical outlets or run cords under rugs.",
      icon: <FaCheck />
    },
    {
      id: 6,
      title: "Have a Plan for Children and Elderly",
      description: "Teach children about fire safety and practice what to do in case of a fire. Create special plans for family members with mobility challenges.",
      icon: <FaCalendarAlt />
    }
  ];

  const resources = [
    {
      id: 1,
      title: "Home Fire Safety Checklist",
      description: "A printable checklist to help you assess your home's fire safety status.",
      link: "/resources/home-fire-safety-checklist.pdf"
    },
    {
      id: 2,
      title: "Fire Escape Plan Template",
      description: "Create a customized escape plan for your home with this easy-to-use template.",
      link: "/resources/fire-escape-plan-template.pdf"
    },
    {
      id: 3,
      title: "Smoke Alarm Installation Guide",
      description: "Step-by-step instructions for properly installing smoke alarms in your home.",
      link: "/resources/smoke-alarm-installation-guide.pdf"
    },
    {
      id: 4,
      title: "Fire Extinguisher Guide",
      description: "Learn how to select, use, and maintain fire extinguishers for your home.",
      link: "/resources/fire-extinguisher-guide.pdf"
    }
  ];

  return (
    <>
      <Head>
        <title>Fire Safety - Rhinebeck Fire Department</title>
        <meta name="description" content="Learn about fire safety tips, prevention strategies, and find resources to keep your home and family safe from fire hazards." />
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <div className="relative h-[40vh] min-h-[300px]">
          <WebflowImage
            src="/images/safety-hero.jpg"
            alt="Fire Safety"
            className="absolute inset-0 z-0 brightness-75"
            isBackground
            priority
          />
          <div className="relative z-10 container mx-auto h-full flex flex-col justify-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Fire Safety & Prevention</h1>
            <p className="text-xl max-w-2xl drop-shadow-md">
              Protecting yourself, your loved ones, and your property through education and preparation.
            </p>
          </div>
        </div>
        
        {/* Introduction */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Fire Safety Begins with You</h2>
            <p className="text-lg mb-6">
              The Rhinebeck Fire Department is committed to helping our community prevent fires before they start. 
              Most home fires can be prevented with proper precautions, education, and preparation.
            </p>
            <p className="text-lg mb-6">
              We've compiled essential fire safety tips and resources to help keep you and your family safe. 
              Remember, the best way to fight a fire is to prevent it from happening in the first place.
            </p>
            <div className="bg-red-100 border-l-4 border-fire-red p-4 my-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <FaExclamationTriangle className="h-5 w-5 text-fire-red" />
                </div>
                <div className="ml-3">
                  <p className="text-fire-red font-medium">
                    In case of a fire, remember to:
                  </p>
                  <ul className="list-disc list-inside text-red-700 mt-1">
                    <li>Get out and stay out - never go back inside a burning building</li>
                    <li>Call 911 from a safe location</li>
                    <li>Meet at your designated meeting place</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Home Safety Tips */}
        <section className="py-16 bg-light-gray">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Home Fire Safety Tips</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {homeSafetyTips.map(tip => (
                <div key={tip.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="text-fire-red text-3xl mb-4">
                    {tip.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{tip.title}</h3>
                  <p>{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Season-Specific Safety */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Seasonal Fire Safety</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <WebflowImage
                  src="/images/winter-safety.jpg"
                  alt="Winter Fire Safety"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Winter Safety</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-fire-red mr-2">•</span>
                    <span>Have heating equipment and chimneys inspected annually</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fire-red mr-2">•</span>
                    <span>Keep space heaters at least 3 feet from anything flammable</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fire-red mr-2">•</span>
                    <span>Never use your oven to heat your home</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fire-red mr-2">•</span>
                    <span>Test smoke and carbon monoxide detectors monthly</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <WebflowImage
                  src="/images/summer-safety.jpg"
                  alt="Summer Fire Safety"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Summer Safety</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-fire-red mr-2">•</span>
                    <span>Keep grills at least 10 feet from structures and overhangs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fire-red mr-2">•</span>
                    <span>Let coals cool completely before disposing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fire-red mr-2">•</span>
                    <span>Store gas cylinders upright and outdoors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-fire-red mr-2">•</span>
                    <span>Follow local regulations for recreational fires and fireworks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Resources */}
        <section className="py-16 bg-light-gray">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Fire Safety Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {resources.map(resource => (
                <div key={resource.id} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                  <p className="mb-4">{resource.description}</p>
                  <a 
                    href={resource.link} 
                    className="inline-flex items-center text-fire-red hover:text-red-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaDownload className="mr-2" /> Download PDF
                  </a>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg mb-4">
                Need additional information or have fire safety questions?
              </p>
              <Link href="/contact" className="btn btn-primary">
                Contact Our Fire Safety Team
              </Link>
            </div>
          </div>
        </section>
        
        {/* Request a Presentation */}
        <section className="py-16 container mx-auto px-4">
          <div className="bg-navy-blue text-white rounded-lg max-w-4xl mx-auto p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">Request a Fire Safety Presentation</h2>
            <p className="text-lg mb-6">
              The Rhinebeck Fire Department offers free fire safety presentations for schools, community groups, 
              businesses, and organizations throughout our service area.
            </p>
            <p className="mb-8">
              Our firefighters can provide age-appropriate education on fire prevention, escape planning, 
              smoke alarm usage, and more. We also offer station tours and equipment demonstrations.
            </p>
            <Link href="/contact" className="btn bg-white text-navy-blue hover:bg-gray-100">
              Schedule a Presentation
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default SafetyPage; 