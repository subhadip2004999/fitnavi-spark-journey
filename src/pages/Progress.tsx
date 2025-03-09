
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Calendar, 
  TrendingUp,
  Scale,
  Heart,
  Activity,
  Dumbbell,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

const Progress = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("weight");

  // Sample data for weight chart
  const weightData = [
    { name: "Jan", value: 82 },
    { name: "Feb", value: 80 },
    { name: "Mar", value: 79 },
    { name: "Apr", value: 78 },
    { name: "May", value: 76 },
    { name: "Jun", value: 75 },
    { name: "Jul", value: 74 },
  ];

  // Sample data for workout chart
  const workoutData = [
    { name: "Mon", value: 45 },
    { name: "Tue", value: 30 },
    { name: "Wed", value: 0 },
    { name: "Thu", value: 60 },
    { name: "Fri", value: 45 },
    { name: "Sat", value: 75 },
    { name: "Sun", value: 0 },
  ];

  // Sample achievements data
  const achievements = [
    {
      id: 1,
      title: "7-Day Streak",
      description: "Completed workouts for 7 consecutive days",
      date: "July 15, 2023",
      icon: <Calendar className="h-5 w-5 text-green-500" />
    },
    {
      id: 2,
      title: "Weight Goal Reached",
      description: "Reached your target weight of 75kg",
      date: "June 28, 2023",
      icon: <Scale className="h-5 w-5 text-blue-500" />
    },
    {
      id: 3,
      title: "Strength Milestone",
      description: "Increased bench press by 20% since start",
      date: "June 15, 2023",
      icon: <Dumbbell className="h-5 w-5 text-red-500" />
    },
  ];

  // Sample data for body measurements
  const bodyMeasurements = [
    { name: "Weight", value: "74 kg", change: "-1.5 kg", positive: true },
    { name: "BMI", value: "24.2", change: "-0.5", positive: true },
    { name: "Body Fat", value: "18%", change: "-2.5%", positive: true },
    { name: "Muscle Mass", value: "32.4 kg", change: "+0.8 kg", positive: true },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white shadow-sm px-4 py-4">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            className="mr-2" 
            onClick={() => navigate("/dashboard")}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h2 className="text-xl font-bold text-gray-800">Progress</h2>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Progress Tabs */}
        <Tabs defaultValue="weight" className="mb-6">
          <TabsList className="grid grid-cols-3 bg-gray-100">
            <TabsTrigger 
              value="weight" 
              onClick={() => setActiveTab("weight")}
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Weight
            </TabsTrigger>
            <TabsTrigger 
              value="workouts" 
              onClick={() => setActiveTab("workouts")}
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Workouts
            </TabsTrigger>
            <TabsTrigger 
              value="measurements" 
              onClick={() => setActiveTab("measurements")}
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Body
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="weight" className="mt-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-lg font-bold">Weight Progress</h3>
                    <p className="text-sm text-gray-600">Last 6 months</p>
                  </div>
                  <div className="flex items-center">
                    <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      -8 kg
                    </div>
                  </div>
                </div>

                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={weightData}
                      margin={{
                        top: 5,
                        right: 5,
                        left: 5,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                      <YAxis domain={[70, 85]} tick={{ fontSize: 12 }} />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex flex-col items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm text-gray-600">Starting Weight</span>
                    <span className="text-xl font-bold text-gray-900">82 kg</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm text-gray-600">Current Weight</span>
                    <span className="text-xl font-bold text-gray-900">74 kg</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button className="w-full mt-4">Update Weight</Button>
          </TabsContent>
          
          <TabsContent value="workouts" className="mt-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-lg font-bold">Workout Duration</h3>
                    <p className="text-sm text-gray-600">Last 7 days</p>
                  </div>
                  <div className="flex items-center">
                    <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      255 mins
                    </div>
                  </div>
                </div>

                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={workoutData}
                      margin={{
                        top: 5,
                        right: 5,
                        left: 5,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                      <YAxis domain={[0, 80]} tick={{ fontSize: 12 }} />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#10b981"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-3 gap-2 mt-6">
                  <div className="flex flex-col items-center p-2 bg-green-50 rounded-lg">
                    <span className="text-xs text-gray-600">Workouts</span>
                    <span className="text-lg font-bold text-gray-900">5</span>
                  </div>
                  <div className="flex flex-col items-center p-2 bg-blue-50 rounded-lg">
                    <span className="text-xs text-gray-600">Avg. Time</span>
                    <span className="text-lg font-bold text-gray-900">51 min</span>
                  </div>
                  <div className="flex flex-col items-center p-2 bg-purple-50 rounded-lg">
                    <span className="text-xs text-gray-600">Calories</span>
                    <span className="text-lg font-bold text-gray-900">2,450</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="measurements" className="mt-4">
            <div className="grid grid-cols-2 gap-4 mb-6">
              {bodyMeasurements.map((measurement, index) => (
                <Card key={index}>
                  <CardContent className="pt-4 px-4">
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-600">{measurement.name}</span>
                      <span className="text-xl font-bold text-gray-900">{measurement.value}</span>
                      <div className={`mt-1 text-xs ${measurement.positive ? 'text-green-600' : 'text-red-600'}`}>
                        {measurement.change} {measurement.positive ? '↓' : '↑'}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button className="w-full">Update Measurements</Button>
          </TabsContent>
        </Tabs>

        {/* Achievements */}
        <section className="mt-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Achievements</h3>
          
          <Card>
            <CardContent className="p-0">
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.id}
                  className={`flex items-center px-4 py-3 ${
                    index !== achievements.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{achievement.title}</h4>
                    <p className="text-xs text-gray-600">{achievement.description}</p>
                  </div>
                  <div className="text-xs text-gray-500">{achievement.date}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Progress;
