import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Shield, Award, Target, Globe } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Heart, value: "10,000+", label: "Lives Saved" },
    { icon: Users, value: "5,000+", label: "Active Donors" },
    { icon: Shield, value: "99.9%", label: "Safety Rate" },
    { icon: Award, value: "15+", label: "Years of Service" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We believe in the power of human kindness and the impact of giving."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Every donation follows the highest medical safety standards and protocols."
    },
    {
      icon: Target,
      title: "Efficiency",
      description: "Quick response times and streamlined processes to save lives faster."
    },
    {
      icon: Globe,
      title: "Community",
      description: "Building a network of caring individuals united in saving lives."
    },
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      description: "15+ years in hematology and blood banking."
    },
    {
      name: "Michael Chen",
      role: "Director of Operations",
      description: "Expert in healthcare logistics and donor management."
    },
    {
      name: "Emily Rodriguez",
      role: "Community Outreach Manager",
      description: "Passionate about building donor communities."
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Saving Lives Through Blood Donation
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              BloodBank connects generous donors with those in critical need, creating a community 
              dedicated to preserving life and health.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, value, label }, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-medical rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{value}</div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-8">
              To bridge the gap between blood donors and recipients through innovative technology, 
              ensuring that no life is lost due to blood shortage. We strive to make blood donation 
              accessible, safe, and rewarding for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, description }, index) => (
              <Card key={index} className="text-center shadow-elegant">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-medical rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals working to save lives every day
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center shadow-elegant">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-medical rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How BloodBank Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simple steps to save lives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-medical rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Register & Verify</h3>
              <p className="text-muted-foreground">
                Create your account and complete the medical eligibility screening
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-medical rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Donate or Request</h3>
              <p className="text-muted-foreground">
                Schedule a donation appointment or submit a blood request
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-medical rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Save Lives</h3>
              <p className="text-muted-foreground">
                Your donation helps save up to 3 lives and strengthens our community
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;