
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  PlusCircle, 
  Coffee, 
  Utensils, 
  UtensilsCrossed, 
  Apple,
  Beef
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Nutrition = () => {
  const navigate = useNavigate();
  const [activeDay, setActiveDay] = useState("today");

  // Sample nutrition data
  const nutritionSummary = {
    calories: {
      consumed: 1400,
      goal: 2000,
      percentage: 70
    },
    macros: {
      protein: { consumed: 80, goal: 100, percentage: 80 },
      carbs: { consumed: 130, goal: 200, percentage: 65 },
      fats: { consumed: 30, goal: 67, percentage: 45 }
    }
  };

  // Sample meal data
  const meals = [
    {
      id: 1,
      type: "breakfast",
      name: "Protein Oatmeal",
      time: "07:30 AM",
      calories: 320,
      image: "https://images.unsplash.com/photo-1607079455791-2fce1ad3d500?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
      macros: { protein: 20, carbs: 40, fats: 8 }
    },
    {
      id: 2,
      type: "lunch",
      name: "Grilled Chicken Salad",
      time: "12:15 PM",
      calories: 450,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
      macros: { protein: 35, carbs: 25, fats: 12 }
    },
    {
      id: 3,
      type: "snack",
      name: "Greek Yogurt with Berries",
      time: "03:45 PM",
      calories: 180,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
      macros: { protein: 15, carbs: 20, fats: 2 }
    },
    {
      id: 4,
      type: "dinner",
      name: "Salmon with Vegetables",
      time: "07:30 PM",
      calories: 450,
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
      macros: { protein: 30, carbs: 25, fats: 18 }
    }
  ];

  // Get meal icon based on meal type
  const getMealIcon = (type: string) => {
    switch (type) {
      case "breakfast":
        return <Coffee className="h-5 w-5" />;
      case "lunch":
        return <Utensils className="h-5 w-5" />;
      case "dinner":
        return <UtensilsCrossed className="h-5 w-5" />;
      case "snack":
        return <Apple className="h-5 w-5" />;
      default:
        return <Beef className="h-5 w-5" />;
    }
  };

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
          <h2 className="text-xl font-bold text-gray-800">Nutrition</h2>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Day Selector */}
        <Tabs value={activeDay} className="mb-6">
          <TabsList className="flex w-full overflow-x-auto space-x-2 bg-transparent h-auto p-0">
            <TabsTrigger 
              value="yesterday" 
              onClick={() => setActiveDay("yesterday")}
              className="rounded-full px-5 py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white whitespace-nowrap"
            >
              Yesterday
            </TabsTrigger>
            <TabsTrigger 
              value="today" 
              onClick={() => setActiveDay("today")}
              className="rounded-full px-5 py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white whitespace-nowrap"
            >
              Today
            </TabsTrigger>
            <TabsTrigger 
              value="tomorrow" 
              onClick={() => setActiveDay("tomorrow")}
              className="rounded-full px-5 py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white whitespace-nowrap"
            >
              Tomorrow
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Nutrition Summary */}
        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Daily Summary</CardTitle>
          </CardHeader>
          <CardContent>
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
                    strokeDashoffset={282.7 * (1 - nutritionSummary.calories.percentage / 100)}
                    transform="rotate(-90 50 50)"
                  />
                  <text x="50" y="55" fontSize="16" textAnchor="middle" fill="#333" fontWeight="bold">
                    {nutritionSummary.calories.percentage}%
                  </text>
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold">
                  {nutritionSummary.calories.consumed} / {nutritionSummary.calories.goal}
                </h4>
                <p className="text-sm text-gray-600">Calories consumed</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">Protein</span>
                  <span className="text-gray-600">
                    {nutritionSummary.macros.protein.consumed}g / {nutritionSummary.macros.protein.goal}g
                  </span>
                </div>
                <Progress value={nutritionSummary.macros.protein.percentage} className="h-2 bg-gray-200" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">Carbs</span>
                  <span className="text-gray-600">
                    {nutritionSummary.macros.carbs.consumed}g / {nutritionSummary.macros.carbs.goal}g
                  </span>
                </div>
                <Progress value={nutritionSummary.macros.carbs.percentage} className="h-2 bg-gray-200" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">Fats</span>
                  <span className="text-gray-600">
                    {nutritionSummary.macros.fats.consumed}g / {nutritionSummary.macros.fats.goal}g
                  </span>
                </div>
                <Progress value={nutritionSummary.macros.fats.percentage} className="h-2 bg-gray-200" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Meals List */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-800">Today's Meals</h3>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <PlusCircle className="h-4 w-4" />
              <span>Add Meal</span>
            </Button>
          </div>

          <div className="space-y-4">
            {meals.map(meal => (
              <motion.div
                key={meal.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl overflow-hidden shadow flex"
              >
                <div className="w-24 h-24">
                  <img
                    src={meal.image}
                    alt={meal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        {getMealIcon(meal.type)}
                      </div>
                      <span className="text-xs font-medium text-blue-600 capitalize">{meal.type}</span>
                    </div>
                    <span className="text-xs text-gray-500">{meal.time}</span>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 mt-1">{meal.name}</h4>
                  
                  <div className="flex items-center justify-between mt-2">
                    <div className="text-sm font-bold">{meal.calories} cal</div>
                    
                    <div className="flex gap-3">
                      <div className="text-xs">
                        <span className="font-medium text-red-500">{meal.macros.protein}g</span>
                        <span className="text-gray-500 ml-1">P</span>
                      </div>
                      <div className="text-xs">
                        <span className="font-medium text-yellow-500">{meal.macros.carbs}g</span>
                        <span className="text-gray-500 ml-1">C</span>
                      </div>
                      <div className="text-xs">
                        <span className="font-medium text-green-500">{meal.macros.fats}g</span>
                        <span className="text-gray-500 ml-1">F</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Meal Plan Suggestions */}
        <section>
          <h3 className="text-lg font-bold text-gray-800 mb-4">Suggested Meal Plans</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <Card className="overflow-hidden">
              <div className="h-32 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1606914707708-5180546f153d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                  alt="Protein Plan"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-3">
                <h4 className="font-semibold text-sm">High Protein Plan</h4>
                <p className="text-xs text-gray-600 my-1">Ideal for muscle building</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs font-medium text-blue-600">7 days</span>
                  <Button variant="outline" size="sm" className="h-7 text-xs">View</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-32 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                  alt="Weight Loss Plan"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-3">
                <h4 className="font-semibold text-sm">Weight Loss Plan</h4>
                <p className="text-xs text-gray-600 my-1">Calorie deficit with nutrition</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs font-medium text-blue-600">14 days</span>
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

export default Nutrition;
