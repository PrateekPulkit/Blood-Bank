import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-medical rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">BloodBank</span>
            </div>
            <p className="text-background/80 mb-4 max-w-md">
              Connecting donors with recipients to save lives through secure and efficient blood bank management.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-background/80">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-background/80">
                <Mail className="w-4 h-4" />
                <span>contact@bloodbank.org</span>
              </div>
              <div className="flex items-center space-x-2 text-background/80">
                <MapPin className="w-4 h-4" />
                <span>123 Medical Center Dr, Health City, HC 12345</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-background/80 hover:text-background transition-colors">
                About Us
              </Link>
              <Link to="/donate" className="block text-background/80 hover:text-background transition-colors">
                Donate Blood
              </Link>
              <Link to="/request" className="block text-background/80 hover:text-background transition-colors">
                Request Blood
              </Link>
              <Link to="/contact" className="block text-background/80 hover:text-background transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <div className="space-y-2">
              <Link to="/help" className="block text-background/80 hover:text-background transition-colors">
                Help Center
              </Link>
              <Link to="/privacy" className="block text-background/80 hover:text-background transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-background/80 hover:text-background transition-colors">
                Terms of Service
              </Link>
              <Link to="/faq" className="block text-background/80 hover:text-background transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">
            © 2024 BloodBank. All rights reserved. Built with ❤️ to save lives.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;