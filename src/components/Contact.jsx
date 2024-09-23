
import { Mail, MapPin, Phone, Instagram } from "lucide-react"
import img from "../assets/contact_healthcare copy.jpeg";
import Header from "./Header";
import Footer from "./Footer";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen text-gray-800">
       <Header/>

      <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-green-600 text-center">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <img
              src={img}
              alt="Neuro Health Care Contact Information"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg mb-6"
            />
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-green-600 mr-2 flex-shrink-2" />
                <p>Shop No. 01, Dakoha, Rama Mandi, Jalandhar-144005</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-green-600 mr-2 flex-shrink-2" />
                <a href="mailto:neurohealthcareathome@gmail.com" className="hover:text-green-600 break-all">
                  neurohealthcareathome@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Instagram className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                <a href="https://www.instagram.com/neuro_health_care" target="_blank" rel="noopener noreferrer" className="hover:text-green-600">
                  @neuro_health_care
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-green-600">Managing Directors</h2>
              <div className="space-y-4">
                <div>
                <h3 className="font-semibold">Dr. Himanshu Kumar</h3>
                  
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                    <a href="tel:88378-10051" className="hover:text-green-600">88378-10051</a>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">Harmeet Singh</h3>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                    <a href="tel:83605-47052" className="hover:text-green-600">83605-47052</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-green-600">Head of Department</h2>
              <div>
                <h3 className="font-semibold">Nishandeep Singh</h3>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  <a href="tel:73475-61053" className="hover:text-green-600">73475-61053</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}