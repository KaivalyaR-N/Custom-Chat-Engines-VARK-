import React, { useState } from 'react';
import { Send, FlaskRound as Flask, Search, ExternalLink, Clock, BeakerIcon, Timer, GraduationCap } from 'lucide-react';

interface ExperimentResult {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  timeRequired: string;
  subject: string;
  materialsCost: string;
  projectUrl: string;
  thumbnailUrl: string;
}

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ExperimentResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setResults([
        {
          id: '1',
          title: 'Make a potato Battery',
          description: 'Create a battery using potato and metal electrodes to learn about electrochemistry and how batteries work. This classic experiment demonstrates how chemical energy can be converted into electrical energy.',
          difficulty: 'Beginner',
          timeRequired: '1-2 hours',
          subject: 'Chemistry & Electronics',
          materialsCost: '$10-15',
          projectUrl: 'https://www.sciencebuddies.org/science-fair-projects/project-ideas/Energy_p010/energy-power/potato-battery',
          thumbnailUrl: 'https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=800&auto=format&fit=crop&q=60'
        },
        {
          id: '2',
          title: 'Stair Master: Build an All-Terrain Robot',
          description: 'Have you ever tried to ride your bike up a flight of stairs? Vehicles with wheels are great at traveling on paved roads or flat ground, but when it comes to stairs or uneven ground in the woods, wheels are not always such a great option. Inspired by real-life all-terrain robots',
          difficulty: 'Beginner',
          timeRequired: '1-2 hours',
          subject: 'Physics',
          materialsCost: '$5-10',
          projectUrl: 'https://www.sciencebuddies.org/science-fair-projects/project-ideas/Robotics_p009/robotics/lego-all-terrain-robot',
          thumbnailUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60'
        },
        {
          id: '3',
          title: 'Make Slime with Borax',
          description: 'Create your own slime while learning about polymers and non-Newtonian fluids. Experiment with different concentrations to see how they affect the slime\'s properties.',
          difficulty: 'Beginner',
          timeRequired: '30-60 minutes',
          subject: 'Chemistry',
          materialsCost: '$5-10',
          projectUrl: 'https://www.sciencebuddies.org/science-fair-projects/project-ideas/Chem_p012/chemistry/make-slime',
          thumbnailUrl: 'https://images.unsplash.com/photo-1563153536867-7a6a7080c4ba?w=800&auto=format&fit=crop&q=60'
        },
        {
          id: '5',
          title: 'Build a Simple Motor',
          description: 'Create a basic electric motor using common materials to understand electromagnetic principles and how electric motors convert electrical energy into mechanical energy.',
          difficulty: 'Intermediate',
          timeRequired: '2-3 hours',
          subject: 'Physics & Engineering',
          materialsCost: '$15-20',
          projectUrl: 'https://www.sciencebuddies.org/science-fair-projects/project-ideas/Elec_p051/electricity-electronics/build-a-simple-electric-motor',
          thumbnailUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=60'
        },
        {
          id: '6',
          title: 'Balloon-Powered Car Challenge',
          description: 'Design and build a car powered by a balloon to explore concepts of force, motion, and air pressure. Test different designs to see which travels the farthest.',
          difficulty: 'Beginner',
          timeRequired: '1-2 hours',
          subject: 'Physics',
          materialsCost: '$10',
          projectUrl: 'https://www.sciencebuddies.org/science-fair-projects/project-ideas/Phys_p099/physics/balloon-powered-car-challenge',
          thumbnailUrl: 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800&auto=format&fit=crop&q=60'
        },
        {
          id: '7',
          title: 'Crystal Growing Competition',
          description: 'Grow crystals using different solutions and compare their growth rates and patterns. Learn about supersaturated solutions and crystallization processes.',
          difficulty: 'Intermediate',
          timeRequired: '1-2 weeks',
          subject: 'Chemistry',
          materialsCost: '$20-25',
          projectUrl: 'https://www.sciencebuddies.org/science-fair-projects/project-ideas/FoodSci_p005/cooking-food-science/growing-rock-candy-crystals',
          thumbnailUrl: 'https://images.unsplash.com/photo-1617840931831-1563a8f9f4e7?w=800&auto=format&fit=crop&q=60'
        } 
      ]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-center mb-8">
            <Flask className="w-8 h-8 text-purple-300 mr-2" />
            <h1 className="text-3xl font-bold text-white">ScienceSearch AI</h1>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="mb-8">
            <div className="relative flex items-center">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for science experiments..."
                className="w-full px-6 py-4 rounded-full bg-white/10 border border-purple-300/20 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent backdrop-blur-sm"
              />
              <button
                type="submit"
                className="absolute right-2 p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <Send className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </form>

          {/* Results */}
          <div className="space-y-6">
            {results.map((result) => (
              <div
                key={result.id}
                className="bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm border border-purple-300/20 hover:bg-white/20 transition-all duration-200"
              >
                <div className="flex">
                  <div className="w-48 h-48 flex-shrink-0">
                    <img 
                      src={result.thumbnailUrl} 
                      alt={result.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {result.title}
                        </h3>
                        <p className="text-purple-200 text-sm mb-4">
                          {result.description}
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm text-purple-300">
                          <div className="flex items-center">
                            <GraduationCap className="w-4 h-4 mr-1" />
                            <span>Difficulty: {result.difficulty}</span>
                          </div>
                          <div className="flex items-center">
                            <Timer className="w-4 h-4 mr-1" />
                            <span>Time: {result.timeRequired}</span>
                          </div>
                          <div className="flex items-center">
                            <BeakerIcon className="w-4 h-4 mr-1" />
                            <span>Subject: {result.subject}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>Cost: {result.materialsCost}</span>
                          </div>
                        </div>
                      </div>
                      <a
                        href={result.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors ml-4"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        <span>View Project</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {query && !isLoading && results.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-purple-300 mx-auto mb-4" />
              <p className="text-purple-200">No experiments found for "{query}". Try a different search term.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;