import { ChevronRight, Clock, Globe, Phone } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import img from '../assets/internship copy.png'


export default function LandingPage() {

  return (
    <div className="bg-white min-h-screen text-gray-800">
      <Header />
      <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2">
            <h1 className="text-8xl font-bold mb-6 text-green-600">Your health comes first</h1>
            <p className="text-3xl mb-8 text-gray-600">24/7 expert care in the comfort of your home</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Home Nursing", desc: "Professional care tailored to your needs" },
                { title: "ICU Setup", desc: "Advanced medical care at home" },
                { title: "Emergency Services", desc: "Rapid response when you need it most" }
              ].map((service, index) => (
                <div key={index} className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="font-bold mb-2 text-green-600">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{service.desc}</p>
                  <ChevronRight className="text-green-600" />
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src={img}

              alt="Healthcare professional caring for a patient"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </main>

      <Footer />

    </div>
  );
}
