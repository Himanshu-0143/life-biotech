import { Beaker, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Beaker className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">LIFE BIOTECH</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Excellence in pharmaceutical manufacturing. Committed to improving global healthcare through quality products and innovation.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-emerald-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-emerald-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-emerald-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Tablets & Capsules</li>
              <li>Injectable Solutions</li>
              <li>Liquid Formulations</li>
              <li>Cardiovascular</li>
              <li>Neurology</li>
              <li>Oncology</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  Life Biotech <br />Lucknow, U.P 
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-400">+91 99999999999</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-400">info@lifebiotech.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} LIFE BIOTECH. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
