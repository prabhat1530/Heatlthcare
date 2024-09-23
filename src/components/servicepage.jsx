import { useState } from 'react'
import { ArrowRight, ChevronRight, Star, X } from "lucide-react"

import Header from './Header';
import Footer from './Footer';

const services = [
  {
    name: "ICU Setup At Home",
    description: "Professional ICU-level care in the comfort of your home, equipped with advanced medical technology and 24/7 monitoring.",
    rating: 4.9
  },
  {
    name: "Patient Care Taker Services",
    description: "Compassionate and skilled caregivers providing personalized assistance for patients with various health conditions.",
    rating: 4.8
  },
  {
    name: "Baby Sitting At Home",
    description: "Experienced and trustworthy babysitters ensuring the safety and well-being of your little ones in your home environment.",
    rating: 4.7
  },
  {
    name: "Senior Citizen Care Taker Services",
    description: "Dedicated care for elderly individuals, offering companionship, assistance with daily activities, and medical support.",
    rating: 4.9
  },
  {
    name: "Home Nursing Services For Fistula Patients",
    description: "Specialized nursing care for fistula patients, providing expert wound management and personalized treatment plans.",
    rating: 4.8
  },
  {
    name: "Cancer Patients Care",
    description: "Comprehensive care for cancer patients, including pain management, emotional support, and assistance with treatment side effects.",
    rating: 4.9
  },
  {
    name: "Corona Patients Care",
    description: "Dedicated care for COVID-19 patients, ensuring proper isolation, symptom management, and monitoring of vital signs.",
    rating: 4.8
  },
  {
    name: "Physiotherapy Services",
    description: "Professional physiotherapy sessions at home, helping patients recover mobility and manage pain through targeted exercises.",
    rating: 4.7
  },
  {
    name: "Equipments on Rent",
    description: "Wide range of medical equipment available for rent, including hospital beds, oxygen concentrators, and mobility aids.",
    rating: 4.6
  },
  {
    name: "Wound Vacc Machine for wound Care",
    description: "Advanced wound care using Vacuum-Assisted Closure (VAC) therapy, promoting faster healing and reducing infection risks.",
    rating: 4.8
  },
  {
    name: "Sample Collection",
    description: "Convenient at-home sample collection for various medical tests, ensuring accurate results without the need to visit a lab.",
    rating: 4.7
  },
  {
    name: "Medicine at Home",
    description: "Timely delivery of prescribed medications to your doorstep, ensuring you never miss a dose.",
    rating: 4.8
  },
  {
    name: "Doctor on Call",
    description: "24/7 availability of qualified doctors for home visits, providing prompt medical attention when you need it most.",
    rating: 4.9
  },
  {
    name: "Cardiac Ambulance Services",
    description: "Fully equipped cardiac ambulances with trained paramedics, ready to respond to heart-related emergencies at a moment's notice.",
    rating: 4.9
  }
]

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <div className="bg-white min-h-screen text-gray-800">

      <Header />
      <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-green-600">Our Services</h1>
        <p className="text-xl mb-12 text-gray-600">Comprehensive home healthcare solutions tailored to your needs</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
              <h3 className="font-bold text-lg mb-3 text-green-600 group-hover:text-green-700 transition-colors">{service.name}</h3>
              <p className="text-gray-600 mb-4">Expert care and support for your specific healthcare needs.</p>
              <button
                onClick={() => setSelectedService(service)}
                className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors"
              >
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </main>



      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-green-600">{selectedService.name}</h2>
              <button
                onClick={() => setSelectedService(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-600 mb-4">{selectedService.description}</p>
            <div className="flex items-center">
              <span className="text-yellow-400 mr-1">
                <Star className="w-5 h-5 fill-current" />
              </span>
              <span className="font-bold text-gray-700">{selectedService.rating.toFixed(1)}</span>
              <span className="text-gray-500 ml-1">/ 5.0</span>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}