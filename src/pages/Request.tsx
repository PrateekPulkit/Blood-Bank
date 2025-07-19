import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Activity, AlertCircle, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Request = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    bloodGroup: "",
    unitsNeeded: "",
    urgency: "",
    hospital: "",
    contactPerson: "",
    phone: "",
    medicalReason: "",
  });
  const { toast } = useToast();

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const urgencyLevels = [
    { value: "emergency", label: "Emergency (Immediate)", color: "destructive" },
    { value: "urgent", label: "Urgent (24 hours)", color: "secondary" },
    { value: "routine", label: "Routine (7 days)", color: "default" },
  ];

  const hospitals = [
    "City General Hospital",
    "St. Mary's Medical Center",
    "University Hospital",
    "Children's Hospital",
    "Emergency Medical Center",
  ];

  // Mock blood bank inventory
  const inventory = [
    { bloodGroup: "A+", units: 25, status: "good" },
    { bloodGroup: "A-", units: 8, status: "low" },
    { bloodGroup: "B+", units: 18, status: "good" },
    { bloodGroup: "B-", units: 5, status: "critical" },
    { bloodGroup: "AB+", units: 12, status: "good" },
    { bloodGroup: "AB-", units: 3, status: "critical" },
    { bloodGroup: "O+", units: 30, status: "good" },
    { bloodGroup: "O-", units: 6, status: "low" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Blood Request Submitted",
      description: "We'll contact you within 1 hour with availability information.",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "good": return "default";
      case "low": return "secondary";
      case "critical": return "destructive";
      default: return "default";
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Request Blood</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Submit your blood request and we'll help you find compatible donors immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-primary" />
                  Blood Request Form
                </CardTitle>
                <CardDescription>
                  Provide detailed information for your blood request
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="patientName">Patient Name</Label>
                      <Input
                        id="patientName"
                        placeholder="Enter patient's full name"
                        value={formData.patientName}
                        onChange={(e) => setFormData(prev => ({ ...prev, patientName: e.target.value }))}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Blood Group Required</Label>
                      <Select value={formData.bloodGroup} onValueChange={(value) => setFormData(prev => ({ ...prev, bloodGroup: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select blood group" />
                        </SelectTrigger>
                        <SelectContent>
                          {bloodGroups.map((group) => (
                            <SelectItem key={group} value={group}>
                              {group}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="unitsNeeded">Units Needed</Label>
                      <Input
                        id="unitsNeeded"
                        type="number"
                        min="1"
                        placeholder="Number of units"
                        value={formData.unitsNeeded}
                        onChange={(e) => setFormData(prev => ({ ...prev, unitsNeeded: e.target.value }))}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Urgency Level</Label>
                      <Select value={formData.urgency} onValueChange={(value) => setFormData(prev => ({ ...prev, urgency: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select urgency level" />
                        </SelectTrigger>
                        <SelectContent>
                          {urgencyLevels.map((level) => (
                            <SelectItem key={level.value} value={level.value}>
                              {level.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Hospital/Medical Center</Label>
                    <Select value={formData.hospital} onValueChange={(value) => setFormData(prev => ({ ...prev, hospital: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select hospital" />
                      </SelectTrigger>
                      <SelectContent>
                        {hospitals.map((hospital) => (
                          <SelectItem key={hospital} value={hospital}>
                            {hospital}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contactPerson">Contact Person</Label>
                      <Input
                        id="contactPerson"
                        placeholder="Name of contact person"
                        value={formData.contactPerson}
                        onChange={(e) => setFormData(prev => ({ ...prev, contactPerson: e.target.value }))}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Contact phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="medicalReason">Medical Reason</Label>
                    <Textarea
                      id="medicalReason"
                      placeholder="Brief description of the medical condition requiring blood transfusion"
                      value={formData.medicalReason}
                      onChange={(e) => setFormData(prev => ({ ...prev, medicalReason: e.target.value }))}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-medical shadow-medical">
                    Submit Blood Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-primary" />
                  Current Blood Availability
                </CardTitle>
                <CardDescription>Real-time blood bank inventory</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {inventory.map((item) => (
                    <div key={item.bloodGroup} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{item.bloodGroup}</span>
                        <Badge variant={getStatusColor(item.status)}>
                          {item.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.units} units</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 text-primary" />
                  Important Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm mb-1">Response Time</h4>
                  <p className="text-sm text-muted-foreground">
                    Emergency requests: Within 1 hour<br />
                    Urgent requests: Within 4 hours<br />
                    Routine requests: Within 24 hours
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">Required Documents</h4>
                  <p className="text-sm text-muted-foreground">
                    Doctor's prescription, patient ID, and medical records
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-primary" />
                  Emergency Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">24/7 Emergency Hotline</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Request;