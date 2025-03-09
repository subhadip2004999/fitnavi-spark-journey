
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Dumbbell, ArrowLeft, Clock, Flame, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const Workouts = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");

  // Sample data for different workout categories
  const workoutCategories = [
    { id: "strength", name: "Strength", count: 12 },
    { id: "cardio", name: "Cardio", count: 8 },
    { id: "flexibility", name: "Flexibility", count: 5 },
    { id: "hiit", name: "HIIT", count: 7 },
  ];

  // Sample workouts data
  const workouts = [
    {
      id: 1,
      category: "strength",
      title: "Upper Body Power",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
      duration: 45,
      level: "Intermediate",
      calories: 350
    },
    {
      id: 2,
      category: "strength",
      title: "Lower Body Focus",
      image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
      duration: 40,
      level: "Intermediate",
      calories: 300
    },
    {
      id: 3,
      category: "cardio",
      title: "HIIT Cardio Blast",
      image: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
      duration: 30,
      level: "Advanced",
      calories: 400
    },
    {
      id: 4,
      category: "flexibility",
      title: "Full Body Stretch",
      image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
      duration: 25,
      level: "Beginner",
      calories: 150
    },
    {
      id: 5,
      category: "hiit",
      title: "Tabata Challenge",
      image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
      duration: 20,
      level: "Advanced",
      calories: 280
    },
  ];

  // Filter workouts based on active filter
  const filteredWorkouts = activeFilter === "all" 
    ? workouts 
    : workouts.filter(workout => workout.category === activeFilter);

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
          <h2 className="text-xl font-bold text-gray-800">Workouts</h2>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Tabs */}
        <Tabs defaultValue="all" className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800">Categories</h3>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>
          </div>
          
          <TabsList className="flex w-full overflow-x-auto space-x-2 bg-transparent h-auto p-0">
            <TabsTrigger 
              value="all" 
              onClick={() => setActiveFilter("all")}
              className="rounded-full px-5 py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              All
            </TabsTrigger>
            
            {workoutCategories.map(category => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                onClick={() => setActiveFilter(category.id)}
                className="rounded-full px-5 py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white whitespace-nowrap"
              >
                {category.name} ({category.count})
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Workouts List */}
        <div className="space-y-4">
          {filteredWorkouts.map(workout => (
            <motion.div
              key={workout.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl overflow-hidden shadow flex"
            >
              <div className="w-32 h-32">
                <img
                  src={workout.image}
                  alt={workout.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex-1">
                <h4 className="font-semibold text-gray-900">{workout.title}</h4>
                <div className="flex items-center gap-3 text-xs text-gray-600 my-2">
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 inline mr-1" /> {workout.duration} mins
                  </span>
                  <span className="flex items-center">
                    <Flame className="w-3 h-3 inline mr-1" /> {workout.level}
                  </span>
                  <span className="flex items-center">
                    <Dumbbell className="w-3 h-3 inline mr-1" /> {workout.calories} cal
                  </span>
                </div>
                <Button className="bg-green-500 hover:bg-green-600 text-xs px-6 py-1 h-8">
                  Start
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recommended Programs */}
        <section className="mt-10">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Recommended Programs</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <Card className="overflow-hidden">
              <div className="h-32 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                  alt="30-Day Strength"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-3">
                <h4 className="font-semibold text-sm">30-Day Strength Challenge</h4>
                <p className="text-xs text-gray-600 my-1">Transform your strength in just 30 days</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs font-medium text-blue-600">12 workouts</span>
                  <Button variant="outline" size="sm" className="h-7 text-xs">View</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-32 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                  alt="Fat Burn"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-3">
                <h4 className="font-semibold text-sm">Fat Burn Revolution</h4>
                <p className="text-xs text-gray-600 my-1">High-intensity training for weight loss</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs font-medium text-blue-600">8 workouts</span>
                  <Button variant="outline" size="sm" className="h-7 text-xs">View</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Workouts;
