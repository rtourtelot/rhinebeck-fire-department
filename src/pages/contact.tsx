import React, { useState } from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaExclamationTriangle } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This would typically be replaced with an actual form submission API call
    // For now, we're just simulating a successful submission
    setFormStatus({
      success: true,
      message: 'Thank you for your message. We will get back to you soon!'
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };
  
  return (
    <>
      <Head>
        <title>Contact Us - Rhinebeck Fire Department</title>
        <meta name="description" content="Contact the Rhinebeck Fire Department for non-emergency inquiries, tours, or information about joining our team." />
      </Head>
      
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
          
          <div className="bg-red-100 border-l-4 border-fire-red p-4 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <FaExclamationTriangle className="h-5 w-5 text-fire-red" />
              </div>
              <div className="ml-3">
                <p className="text-fire-red font-medium">
                  For emergencies, please call 911 immediately.
                </p>
                <p className="text-sm text-red-700 mt-1">
                  This contact form is for non-emergency inquiries only.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FaMapMarkerAlt className="h-6 w-6 text-fire-red" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold">Address</h3>
                    <p>76 East Market Street</p>
                    <p>Rhinebeck, NY 12572</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FaPhoneAlt className="h-6 w-6 text-fire-red" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold">Phone</h3>
                    <p>Non-Emergency: (845) 876-6008</p>
                    <p className="text-red-600 font-medium">Emergency: 911</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FaEnvelope className="h-6 w-6 text-fire-red" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold">Email</h3>
                    <a href="mailto:info@rhinebeckfd.com" className="hover:underline">
                      info@rhinebeckfd.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FaClock className="h-6 w-6 text-fire-red" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold">Office Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 4:00 PM</p>
                    <p>Saturday & Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Visit Us</h2>
                <div className="h-64 w-full bg-gray-300 rounded-lg">
                  {/* This would be replaced with an actual map component */}
                  <div className="h-full w-full flex items-center justify-center">
                    <p className="text-gray-600">Map Loading...</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {formStatus && (
                <div className={`p-4 mb-6 rounded-md ${formStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fire-red"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fire-red"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fire-red"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fire-red"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="join">Joining the Department</option>
                    <option value="tour">Station Tour Request</option>
                    <option value="education">Fire Safety Education</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fire-red"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary w-full"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ContactPage; 