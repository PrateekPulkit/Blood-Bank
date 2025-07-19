import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Calendar, MapPin, Phone, Award, Activity } from "lucide-react";

const Dashboard = () => {
  const [userType] = useState("donor"); // Mock user type

  const mockUser = {
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 234 567 8900",
    bloodGroup: "O+",
    userType: "donor",
    donationsCount: 5,
    lastDonation: "2024-01-15",
  };

  const mockDonations = [
    { id: 1, date: "2024-01-15", location: "City Hospital", status: "completed" },
    { id: 2, date: "2023-11-20", location: "Blood Drive Center", status: "completed" },
    { id: 3, date: "2023-09-10", location: "Community Center", status: "completed" },
  ];

  const mockRequests = [
    { id: 1, date: "2024-01-20", bloodGroup: "A+", units: 2, status: "pending" },
    { id: 2, date: "2023-12-15", bloodGroup: "O-", units: 1, status: "fulfilled" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Welcome back, {mockUser.name}!</h1>
          <p className="text-muted-foreground mt-2">Manage your blood donations and requests</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Blood Group</CardTitle>
              <Heart className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{mockUser.bloodGroup}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
              <Award className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockUser.donationsCount}</div>
              <p className="text-xs text-muted-foreground">Lives potentially saved: {mockUser.donationsCount * 3}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Last Donation</CardTitle>
              <Calendar className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockUser.lastDonation}</div>
              <p className="text-xs text-muted-foreground">Eligible for next donation</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="donations" className="space-y-6">
          <TabsList>
            <TabsTrigger value="donations">My Donations</TabsTrigger>
            <TabsTrigger value="requests">Blood Requests</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="donations" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Donation History</h2>
              <Button className="bg-gradient-medical shadow-medical">
                Schedule Donation
              </Button>
            </div>
            
            <div className="space-y-4">
              {mockDonations.map((donation) => (
                <Card key={donation.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-medical rounded-lg flex items-center justify-center">
                          <Heart className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-medium">{donation.location}</p>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-1" />
                            {donation.date}
                          </div>
                        </div>
                      </div>
                      <Badge variant="default">
                        {donation.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="requests" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Blood Requests</h2>
              <Button variant="outline">
                New Request
              </Button>
            </div>
            
            <div className="space-y-4">
              {mockRequests.map((request) => (
                <Card key={request.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                          <Activity className="w-6 h-6 text-secondary-foreground" />
                        </div>
                        <div>
                          <p className="font-medium">{request.bloodGroup} - {request.units} units</p>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-1" />
                            {request.date}
                          </div>
                        </div>
                      </div>
                      <Badge variant={request.status === "fulfilled" ? "default" : "secondary"}>
                        {request.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="profile" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Your account details and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium">Full Name</Label>
                    <p className="text-sm text-muted-foreground">{mockUser.name}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Email</Label>
                    <p className="text-sm text-muted-foreground">{mockUser.email}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Phone</Label>
                    <p className="text-sm text-muted-foreground">{mockUser.phone}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Blood Group</Label>
                    <p className="text-sm text-muted-foreground">{mockUser.bloodGroup}</p>
                  </div>
                </div>
                <Button variant="outline" className="mt-4">
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;