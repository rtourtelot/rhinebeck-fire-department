import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import Head from 'next/head';
import { FaCalendarAlt, FaBullhorn } from 'react-icons/fa';

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
        <section className="py-16 container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Latest News */}
            <div>
              <div className="flex items-center mb-8">
                <FaBullhorn className="text-fire-red text-3xl mr-4" />
                <h2 className="text-3xl font-bold">Latest News</h2>
              </div>
              
              <div className="space-y-8">
                {latestNews.map(item => (
                  <div key={item.id} className="border-b border-gray-200 pb-6">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-500 mb-3">{item.date}</p>
                    <p className="mb-3">{item.excerpt}</p>
                    <a 
                      href={item.link} 
                      className="text-fire-red font-medium hover:text-red-700 flex items-center"
                    >
                      Read More <span className="ml-1">→</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Upcoming Events */}
            <div>
              <div className="flex items-center mb-8">
                <FaCalendarAlt className="text-fire-red text-3xl mr-4" />
                <h2 className="text-3xl font-bold">Upcoming Events</h2>
              </div>
              
              <div className="space-y-6">
                {upcomingEvents.map(event => (
                  <div key={event.id} className="bg-light-gray p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <div className="space-y-2 mb-3">
                      <p className="flex items-center">
                        <span className="font-medium mr-2">Date:</span> {event.date}
                      </p>
                      <p className="flex items-center">
                        <span className="font-medium mr-2">Time:</span> {event.time}
                      </p>
                      <p className="flex items-center">
                        <span className="font-medium mr-2">Location:</span> {event.location}
                      </p>
                    </div>
                    <a 
                      href={event.link} 
                      className="text-fire-red font-medium hover:text-red-700 flex items-center"
                    >
                      Event Details <span className="ml-1">→</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Call-to-Action Section */}
        <section className="bg-navy-blue text-white py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Join the Rhinebeck Fire Department and become part of a team dedicated to protecting our community.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="/join" className="btn btn-primary">Apply Today</a>
              <a href="/about" className="btn bg-white text-navy-blue hover:bg-gray-100">Learn More</a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default HomePage; 