import React from 'react';
import { ChevronRight, Clock, Globe, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-16 border-t pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h2 className="font-bold mb-2 text-green-600">Service Hours</h2>
            <p className="text-gray-600">24 hours a day, 7 days a week</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center text-green-600">
            <Clock className="mr-2" />
            <span>Always Open</span>
          </div>
          <div className="mt-4 md:mt-0 flex items-center">
            <Phone className="mr-2 text-green-600" />
            <span className="text-gray-600">Emergency: 6205625081</span>
          </div>
          <div className="mt-4 md:mt-0 flex items-center">
            <Globe className="mr-2 text-green-600" />
            <select className="bg-white border-green-600 border text-gray-600 rounded">
              <option>English</option>
              <option>Punjabi</option>
              <option>Hindi</option>
            </select>
          </div>
        </div>
      </footer>
   
  )
}

export default Footer