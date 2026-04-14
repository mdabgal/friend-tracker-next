import React from 'react';

const loading = () => {
    return (
         <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        
        <div className="w-10 h-10 border-4 border-gray-300 border-t-[#244D3f] rounded-full animate-spin mx-auto mb-4"></div>
        
        <p className="text-gray-500">Loading...</p>
      </div>
    </div>
    );
};

export default loading;