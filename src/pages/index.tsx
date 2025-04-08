import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import Head from 'next/head';
import { ArrowRight } from 'phosphor-react';
import { 
  Megaphone, 
  CalendarBlank, 
  Clock, 
  MapPin
} from 'phosphor-react';
import Link from 'next/link';

const HomePage = () => {
  // Sample latest news items
  const latestNews = [
    {
      id: 1,
      title: "Volunteer Recruitment Drive",
      date: "May 15, 2023",
      excerpt: "Join us for our upcoming recruitment event. Learn about becoming a volunteer firefighter and meet our team.",
      link: "/news/volunteer-recruitment"
    },
    {
      id: 2,
      title: "Annual Fire Prevention Week",
      date: "October 3, 2023",
      excerpt: "This year's Fire Prevention Week focuses on kitchen safety. Join us for demonstrations and safety tips.",
      link: "/news/fire-prevention-week"
    },
    {
      id: 3,
      title: "New Equipment Arrives",
      date: "August 22, 2023",
      excerpt: "Thanks to community support, we've acquired new life-saving equipment to better serve Rhinebeck.",
      link: "/news/new-equipment"
    }
  ];

  // Sample upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Community CPR Training",
      date: "June 10, 2023",
      time: "10:00 AM - 2:00 PM",
      location: "Fire Station",
      link: "/events/cpr-training"
    },
    {
      id: 2,
      title: "Open House",
      date: "July 4, 2023",
      time: "11:00 AM - 3:00 PM",
      location: "Fire Station",
      link: "/events/open-house"
    },
    {
      id: 3,
      title: "Fire Safety Workshop",
      date: "August 15, 2023",
      time: "6:00 PM - 8:00 PM",
      location: "Community Center",
      link: "/events/safety-workshop"
    }
  ];

  return (
    <>
      <Head>
        <title>Rhinebeck Fire Department - Serving Since 1834</title>
        <meta name="description" content="The Rhinebeck Fire Department has been protecting the village of Rhinebeck and surrounding areas since 1834." />
      </Head>
      
      <Layout>
        <Hero />
        <FeatureSection />
        
        {/* News & Events Section */}
        <section className="py-20 container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Latest News */}
            <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="bg-fire-red/10 p-4 rounded-full mr-4">
                  <Megaphone size={32} weight="duotone" className="text-fire-red" />
                </div>
                <h2 className="text-3xl font-bold text-navy-blue">Latest News</h2>
              </div>
              
              <div className="space-y-8">
                {latestNews.map(item => (
                  <div key={item.id} className="border-b border-gray-200 pb-6 group">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-fire-red transition-colors duration-300">{item.title}</h3>
                    <p className="text-gray-500 mb-3 text-sm">{item.date}</p>
                    <p className="mb-4 text-gray-700">{item.excerpt}</p>
                    <Link 
                      href={item.link} 
                      className="text-fire-red font-medium hover:text-red-700 flex items-center transition-all duration-300 group-hover:translate-x-1"
                    >
                      Read More <ArrowRight size={18} weight="bold" className="ml-2" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Upcoming Events */}
            <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="bg-fire-red/10 p-4 rounded-full mr-4">
                  <CalendarBlank size={32} weight="duotone" className="text-fire-red" />
                </div>
                <h2 className="text-3xl font-bold text-navy-blue">Upcoming Events</h2>
              </div>
              
              <div className="space-y-6">
                {upcomingEvents.map(event => (
                  <div key={event.id} className="bg-navy-blue/5 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                    <h3 className="text-xl font-bold mb-3 text-navy-blue">{event.title}</h3>
                    <div className="space-y-2 mb-4">
                      <p className="flex items-center text-gray-700">
                        <CalendarBlank size={20} weight="fill" className="text-navy-blue mr-2" />
                        <span className="font-medium mr-2 text-navy-blue">Date:</span> {event.date}
                      </p>
                      <p className="flex items-center text-gray-700">
                        <Clock size={20} weight="fill" className="text-navy-blue mr-2" />
                        <span className="font-medium mr-2 text-navy-blue">Time:</span> {event.time}
                      </p>
                      <p className="flex items-center text-gray-700">
                        <MapPin size={20} weight="fill" className="text-navy-blue mr-2" />
                        <span className="font-medium mr-2 text-navy-blue">Location:</span> {event.location}
                      </p>
                    </div>
                    <Link 
                      href={event.link} 
                      className="text-fire-red font-medium hover:text-red-700 flex items-center transition-all duration-300 group hover:translate-x-1"
                    >
                      Event Details <ArrowRight size={18} weight="bold" className="ml-2" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Call-to-Action Section */}
        <section className="bg-gradient-to-r from-navy-blue to-[#001F40] text-white py-20">
          <div className="container mx-auto text-center px-4 md:px-8">
            <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-10 text-white/90">
              Join the Rhinebeck Fire Department and become part of a team dedicated to protecting our community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/join" 
                className="bg-fire-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-md shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                Apply Today
              </Link>
              <Link 
                href="/about" 
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-md shadow-lg transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm border border-white/20"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default HomePage; 