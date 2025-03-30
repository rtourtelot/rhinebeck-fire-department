import React, { useState } from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import { getGalleryImagePath } from '@/utils/imageUtils';
import WebflowImage from '@/components/WebflowImage';

// Gallery image data with categories
const galleryImages = [
  {
    id: 1,
    alt: 'Fire engine at community event',
    category: 'Community',
  },
  {
    id: 2,
    alt: 'Winter safety tips',
    category: 'Safety',
  },
  {
    id: 3,
    alt: 'Summer safety tips',
    category: 'Safety',
  },
  {
    id: 4,
    alt: 'Firefighters in parade',
    category: 'Community',
  },
  {
    id: 5,
    alt: 'Fire safety demonstration',
    category: 'Safety',
  },
  {
    id: 6,
    alt: 'Volunteer recruitment',
    category: 'Department',
  },
  {
    id: 7,
    alt: 'Equipment demonstration',
    category: 'Equipment',
  },
  {
    id: 8,
    alt: 'Fire chief',
    category: 'Personnel',
  },
  {
    id: 9,
    alt: 'Captain',
    category: 'Personnel',
  },
  {
    id: 10,
    alt: 'Assistant chief',
    category: 'Personnel',
  },
  {
    id: 11,
    alt: 'Rhinebeck Fire Department station',
    category: 'Facilities',
  },
  {
    id: 12,
    alt: 'Fire apparatus',
    category: 'Equipment',
  },
];

// Categories for filtering
const categories = [
  'All',
  'Community',
  'Safety',
  'Equipment',
  'Personnel',
  'Department',
  'Facilities',
];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalImage, setModalImage] = useState<null | {
    id: number;
    alt: string;
  }>(null);
  
  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);
  
  const openModal = (id: number, alt: string) => {
    setModalImage({ id, alt });
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  const closeModal = () => {
    setModalImage(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };
  
  return (
    <>
      <Head>
        <title>Photo Gallery - Rhinebeck Fire Department</title>
        <meta name="description" content="Browse photos of the Rhinebeck Fire Department in action, at community events, and during training exercises." />
      </Head>
      
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-12">Photo Gallery</h1>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-fire-red text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid - Using standard img tags via WebflowImage instead of Next.js Image */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map(image => (
              <div 
                key={image.id} 
                className="relative aspect-square cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
                onClick={() => openModal(image.id, image.alt)}
              >
                <div className="w-full h-full">
                  <WebflowImage
                    src={getGalleryImagePath(image.id)}
                    alt={image.alt}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-3 opacity-0 hover:opacity-100 transition-opacity">
                  <p>{image.alt}</p>
                  <span className="text-sm bg-fire-red rounded-full px-2 py-0.5 mt-1 inline-block">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* No Results Message */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No images found in this category.</p>
            </div>
          )}
          
          {/* Image Modal - Using WebflowImage instead of Next.js Image */}
          {modalImage && (
            <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeModal}>
              <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={e => e.stopPropagation()}>
                <div className="relative w-full h-auto max-h-[80vh] flex justify-center">
                  <WebflowImage
                    src={getGalleryImagePath(modalImage.id)}
                    alt={modalImage.alt}
                    className="object-contain max-h-[80vh]"
                  />
                </div>
                <div className="bg-white p-4">
                  <p className="text-lg">{modalImage.alt}</p>
                </div>
                <button
                  className="absolute -top-12 right-0 text-white text-2xl font-bold"
                  onClick={closeModal}
                >
                  &times; Close
                </button>
              </div>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default GalleryPage; 