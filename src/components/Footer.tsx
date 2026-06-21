import { Facebook, Instagram, Youtube, Phone, MapPin, ArrowUp } from "lucide-react";
import healthydayLogo from "@/assets/healthyday-logo.webp";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-healthyday-navy text-white py-12 px-6 relative">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={healthydayLogo}
                alt="Healthyday Logo"
                className="w-12 h-12 object-contain bg-white rounded-full p-1"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold">Healthyday</span>
                <span className="text-[8px] text-healthyday-orange font-medium tracking-wider">
                  HEALTH, HAPPINESS AND COMMUNITY
                </span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Healthyday is a wellness community of over 2.5 Lakh+ students. It was founded in 2024 by Jagan, an Internationally Certified Yoga Instructor with a mission to make yoga accessible to everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-healthyday-orange transition-colors text-sm">
                  Healthyday Healthtech Ltd
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-healthyday-orange transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-healthyday-orange transition-colors text-sm">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-healthyday-orange transition-colors text-sm">
                  Terms of use
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-healthyday-orange flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  503, Royal Green City, Kanuru - Autonagar Road,<br />
                  Vijayawada, Andhra Pradesh - 520007
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-healthyday-orange" />
                <span className="text-gray-300 text-sm">+91 9052 888 968</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=61566464743247"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/healthydayyoga/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@healthydayyoga"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025, Healthyday Healthtech Private Limited, All rights reserved
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-healthyday-orange rounded-full flex items-center justify-center hover:bg-healthyday-orange/90 transition-colors shadow-lg z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </button>
    </footer>
  );
};

export default Footer;
