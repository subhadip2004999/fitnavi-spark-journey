
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  User,
  Settings,
  FileText,
  Heart,
  HelpCircle,
  LogOut,
  Edit,
  Bell,
  Sun,
  Moon,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profile = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  // Sample user data
  const userData = {
    name: "James Wilson",
    email: "james.wilson@example.com",
    photo: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    stats: {
      height: "183 cm",
      weight: "74 kg",
      bmi: "22.1",
      age: "32"
    },
    goals: {
      primary: "Build Muscle",
      weight: "80 kg",
      workoutsPerWeek: 5
    }
  };

  // Menu sections
  const menuSections = [
    {
      title: "Account",
      items: [
        { icon: <User className="h-5 w-5" />, label: "Personal Information", action: () => {} },
        { icon: <Bell className="h-5 w-5" />, label: "Notifications", action: () => {}, hasToggle: true, toggleState: notifications, setToggleState: setNotifications },
        { icon: <Settings className="h-5 w-5" />, label: "Account Settings", action: () => {} }
      ]
    },
    {
      title: "Preferences",
      items: [
        { icon: darkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />, label: "Dark Mode", action: () => {}, hasToggle: true, toggleState: darkMode, setToggleState: setDarkMode },
        { icon: <FileText className="h-5 w-5" />, label: "Terms of Service", action: () => {} },
        { icon: <HelpCircle className="h-5 w-5" />, label: "Help & Support", action: () => {} }
      ]
    }
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
          <h2 className="text-xl font-bold text-gray-800">Profile</h2>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* User Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-xl shadow overflow-hidden mb-6"
        >
          <div className="h-32 bg-gradient-to-r from-blue-600 to-blue-400 relative">
            <Button 
              size="icon"
              variant="ghost" 
              className="absolute top-2 right-2 bg-white/20 hover:bg-white/30 text-white"
            >
              <Edit className="h-4 w-4" />
            </Button>
          </div>
          <div className="px-4 pt-0 pb-5 flex flex-col items-center">
            <Avatar className="w-24 h-24 border-4 border-white -mt-12 mb-3">
              <AvatarImage src={userData.photo} alt={userData.name} />
              <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-bold text-gray-900">{userData.name}</h3>
            <p className="text-gray-600 text-sm">{userData.email}</p>
            
            <div className="flex justify-between w-full mt-6 px-2">
              <div className="text-center">
                <p className="text-xs text-gray-500">Height</p>
                <p className="font-semibold">{userData.stats.height}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500">Weight</p>
                <p className="font-semibold">{userData.stats.weight}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500">BMI</p>
                <p className="font-semibold">{userData.stats.bmi}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500">Age</p>
                <p className="font-semibold">{userData.stats.age}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* User Goals */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-800">My Goals</h3>
              <Button variant="outline" size="sm" className="h-8">
                Edit
              </Button>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 text-sm">Primary Goal</span>
                <span className="font-medium">{userData.goals.primary}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 text-sm">Target Weight</span>
                <span className="font-medium">{userData.goals.weight}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 text-sm">Workouts per Week</span>
                <span className="font-medium">{userData.goals.workoutsPerWeek}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Menu Sections */}
        {menuSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-6">
            <h3 className="font-bold text-gray-800 mb-3">{section.title}</h3>
            <Card>
              <CardContent className="p-0">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <div 
                      className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-50"
                      onClick={item.action}
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                          {item.icon}
                        </div>
                        <span>{item.label}</span>
                      </div>
                      
                      {item.hasToggle ? (
                        <Switch 
                          checked={item.toggleState} 
                          onCheckedChange={(checked) => item.setToggleState(checked)} 
                        />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                    {itemIndex < section.items.length - 1 && <Separator />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        ))}

        {/* Logout Button */}
        <Button 
          variant="outline" 
          className="w-full flex items-center justify-center gap-2 text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
          onClick={() => navigate("/login")}
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </Button>
      </main>
    </div>
  );
};

export default Profile;
