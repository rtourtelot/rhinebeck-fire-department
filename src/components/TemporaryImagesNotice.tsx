import React from 'react';

const TemporaryImagesNotice = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-yellow-100 border-t border-yellow-400 p-4 z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-yellow-800 mb-2 md:mb-0">
            <p className="font-bold">Notice: Getting Started with Images</p>
            <p className="text-sm">
              You're seeing this notice because you need to add your images from Webflow. 
              Run <code className="bg-yellow-200 px-1 rounded">npm run import-images</code> or add them manually.
            </p>
          </div>
          <button 
            onClick={() => {
              if (window.dismissPlaceholderNotice) {
                window.dismissPlaceholderNotice();
              }
            }}
            className="text-yellow-800 hover:text-yellow-900 bg-yellow-200 hover:bg-yellow-300 px-4 py-2 rounded"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemporaryImagesNotice; 