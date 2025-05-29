import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { User, HeartPulse, Activity, Clock, Calendar, FileText, MessageSquare, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Dashboard | Ayuv Health",
  description: "Your personalized health dashboard",
};

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Welcome Section */}
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-primary/10 p-4 rounded-full">
          <User className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Good Morning!</h1>
          <p className="text-muted-foreground">Welcome back to your health dashboard</p>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Vitals Summary Widget */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Vitals Summary</CardTitle>
              <HeartPulse className="h-5 w-5 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Heart Rate</span>
                <div className="flex items-center gap-2">
                  <span className="font-medium">72 bpm</span>
                  <span className="text-green-500">↓</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Blood Pressure</span>
                <div className="flex items-center gap-2">
                  <span className="font-medium">120/80 mmHg</span>
                  <span className="text-green-500">✓</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Wearable Data Widget */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Activity</CardTitle>
              <Activity className="h-5 w-5 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Steps Today</span>
                <div className="flex items-center gap-2">
                  <span className="font-medium">7,500 / 10,000</span>
                  <span className="text-green-500">75%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Sleep Duration</span>
                <span className="font-medium">7h 30m</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Appointments Widget */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Upcoming Appointments</CardTitle>
              <Calendar className="h-5 w-5 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-medium">Cardiology Checkup</span>
                  <p className="text-sm text-muted-foreground">Dr. Smith</p>
                </div>
                <span className="text-sm">Tomorrow, 10:00 AM</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-medium">Telemedicine</span>
                  <p className="text-sm text-muted-foreground">Dr. Johnson</p>
                </div>
                <span className="text-sm">Wednesday, 2:30 PM</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Medications Widget */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Medications</CardTitle>
              <Clock className="h-5 w-5 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-medium">Aspirin 100mg</span>
                  <p className="text-sm text-muted-foreground">Daily</p>
                </div>
                <span className="text-sm text-green-500">Taken</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-medium">Lisinopril 10mg</span>
                  <p className="text-sm text-muted-foreground">Morning</p>
                </div>
                <span className="text-sm text-yellow-500">Due Now</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Insights Widget */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>AI Insights</CardTitle>
              <BarChart3 className="h-5 w-5 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">
                  Your activity levels have improved by 20% this week
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Your blood pressure readings are consistently in the optimal range
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions Widget */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                <FileText className="mr-2 h-4 w-4" />
                Upload Record
              </Button>
              <Button variant="outline" className="w-full">
                <MessageSquare className="mr-2 h-4 w-4" />
                Contact Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
