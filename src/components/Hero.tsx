import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Users, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-blood-bank.jpg";

const Hero = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Blood Bank Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Save Lives Through
              <span className="block text-accent-foreground">Blood Donation</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Connect donors with recipients in a secure, efficient blood bank management system.
              Every donation counts, every life matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-card" asChild>
                <Link to="/register">Become a Donor</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/request">Request Blood</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="p-6 text-center shadow-card hover:shadow-medical transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-medical rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">1,200+</h3>
              <p className="text-muted-foreground">Active Donors</p>
            </Card>
            
            <Card className="p-6 text-center shadow-card hover:shadow-medical transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-medical rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">3,500+</h3>
              <p className="text-muted-foreground">Lives Saved</p>
            </Card>
            
            <Card className="p-6 text-center shadow-card hover:shadow-medical transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-medical rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">24/7</h3>
              <p className="text-muted-foreground">Available</p>
            </Card>
            
            <Card className="p-6 text-center shadow-card hover:shadow-medical transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-medical rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">100%</h3>
              <p className="text-muted-foreground">Secure</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, secure, and efficient blood donation management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 shadow-card hover:shadow-medical transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-medical rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Register</h3>
              <p className="text-muted-foreground">
                Create your account as a donor or recipient. Quick and secure registration process.
              </p>
            </Card>
            
            <Card className="p-8 shadow-card hover:shadow-medical transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-medical rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Donate or Request</h3>
              <p className="text-muted-foreground">
                Donors can schedule donations, recipients can request specific blood types.
              </p>
            </Card>
            
            <Card className="p-8 shadow-card hover:shadow-medical transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-medical rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Save Lives</h3>
              <p className="text-muted-foreground">
                Real-time matching and secure management ensures blood reaches those in need.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;