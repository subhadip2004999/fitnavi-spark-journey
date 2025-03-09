
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Activity,
  Calendar,
  Clock,
  Dumbbell,
  Flame,
  Heart,
  Home,
  User,
  Utensils
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home");

  // Function to handle navigation
  const handleNavigation = (tab: string) => {
    if (tab === "home") {
      setActiveTab(tab);
    } else {
      navigate(`/${tab}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm px-4 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Hi, James!</h2>
            <p className="text-sm text-gray-600">Ready for today's workout?</p>
          </div>
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500">
            <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 pb-24">
        {/* Stats Section */}
        <section className="grid grid-cols-3 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow p-4 flex flex-col items-center"
          >
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mb-2">
              <Flame className="w-5 h-5 text-red-500" />
            </div>
            <p className="text-lg font-bold">745</p>
            <p className="text-xs text-gray-500">Calories</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-white rounded-xl shadow p-4 flex flex-col items-center"
          >
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-2">
              <Clock className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-lg font-bold">43</p>
            <p className="text-xs text-gray-500">Minutes</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-white rounded-xl shadow p-4 flex flex-col items-center"
          >
            <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mb-2">
              <Dumbbell className="w-5 h-5 text-yellow-500" />
            </div>
            <p className="text-lg font-bold">12</p>
            <p className="text-xs text-gray-500">Exercises</p>
          </motion.div>
        </section>

        {/* Today's Plan */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-800">Today's Plan</h3>
            <button className="text-sm text-blue-600 font-medium">View All</button>
          </div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl overflow-hidden shadow flex"
            >
              <div className="w-24 h-24">
                <img
                  src="https://images.unsplash.com/photo-1577221084712-45b0445d2b00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                  alt="Upper Body"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex-1">
                <h4 className="font-semibold text-gray-900">Upper Body Strength</h4>
                <p className="text-xs text-gray-600 mb-2">
                  <Clock className="w-3 h-3 inline mr-1" /> 45 mins · 
                  <Flame className="w-3 h-3 inline mx-1" /> Intermediate
                </p>
                <Button className="bg-green-500 hover:bg-green-600 text-xs px-4 py-1 h-8">
                  Start
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow flex"
            >
              <div className="w-24 h-24">
                <img
                  src="https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                  alt="Cardio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex-1">
                <h4 className="font-semibold text-gray-900">HIIT Cardio</h4>
                <p className="text-xs text-gray-600 mb-2">
                  <Clock className="w-3 h-3 inline mr-1" /> 30 mins · 
                  <Flame className="w-3 h-3 inline mx-1" /> Advanced
                </p>
                <Button className="bg-green-500 hover:bg-green-600 text-xs px-4 py-1 h-8">
                  Start
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Nutrition Section */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-800">Nutrition</h3>
            <button className="text-sm text-blue-600 font-medium">Track Meals</button>
          </div>

          <Card className="mb-6">
            <CardContent className="p-5">
              <div className="flex items-center mb-6">
                <div className="relative w-24 h-24 mr-6">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#e6e6e6" strokeWidth="10" />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#4CAF50"
                      strokeWidth="10"
                      strokeDasharray="282.7"
                      strokeDashoffset="84.8"
                      transform="rotate(-90 50 50)"
                    />
                    <text x="50" y="55" fontSize="16" textAnchor="middle" fill="#333" fontWeight="bold">
                      70%
                    </text>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold">1,400 / 2,000</h4>
                  <p className="text-sm text-gray-600">Calories consumed</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">Protein</span>
                    <span className="text-gray-600">80g / 100g</span>
                  </div>
                  <Progress value={80} className="h-2 bg-gray-200" />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">Carbs</span>
                    <span className="text-gray-600">130g / 200g</span>
                  </div>
                  <Progress value={65} className="h-2 bg-gray-200" />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">Fats</span>
                    <span className="text-gray-600">30g / 67g</span>
                  </div>
                  <Progress value={45} className="h-2 bg-gray-200" />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg rounded-t-xl max-w-lg mx-auto">
        <div className="flex justify-between px-6 py-3">
          <button 
            onClick={() => handleNavigation("home")}
            className={`flex flex-col items-center ${
              activeTab === "home" ? "text-blue-600" : "text-gray-600"
            }`}
          >
            <Home className="w-6 h-6" />
            <span className="text-xs mt-1">Home</span>
          </button>
          
          <button 
            onClick={() => handleNavigation("workouts")}
            className={`flex flex-col items-center ${
              activeTab === "workouts" ? "text-blue-600" : "text-gray-600"
            }`}
          >
            <Dumbbell className="w-6 h-6" />
            <span className="text-xs mt-1">Workouts</span>
          </button>
          
          <button 
            onClick={() => handleNavigation("nutrition")}
            className={`flex flex-col items-center ${
              activeTab === "nutrition" ? "text-blue-600" : "text-gray-600"
            }`}
          >
            <Utensils className="w-6 h-6" />
            <span className="text-xs mt-1">Nutrition</span>
          </button>
          
          <button 
            onClick={() => handleNavigation("progress")}
            className={`flex flex-col items-center ${
              activeTab === "progress" ? "text-blue-600" : "text-gray-600"
            }`}
          >
            <Activity className="w-6 h-6" />
            <span className="text-xs mt-1">Progress</span>
          </button>
          
          <button 
            onClick={() => handleNavigation("profile")}
            className={`flex flex-col items-center ${
              activeTab === "profile" ? "text-blue-600" : "text-gray-600"
            }`}
          >
            <User className="w-6 h-6" />
            <span className="text-xs mt-1">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
