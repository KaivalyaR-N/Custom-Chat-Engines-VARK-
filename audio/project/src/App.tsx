import React, { useState, useRef } from 'react';
import { Send, Music, Search, GraduationCap, PlayCircle, Clock, Headphones, Pause } from 'lucide-react';
//import { AudioPlayer } from '@react-audio-player/core';

interface AudioResult {
  id: string;
  title: string;
  coverImage: string;
  duration: string;
  category: string;
  listens: string;
  audioUrl: string;
  institute: string;
  type: string;
}

// Educational audio database with real audio content
const audioDatabase: AudioResult[] = [
  {
    id: '1',
    title: 'Introduction to Physics - MIT OpenCourseWare',
    coverImage: 'https://ocw.mit.edu/courses/physics/8-01sc-classical-mechanics-fall-2011/8-01scf11.jpg',
    duration: '45:00',
    category: 'Physics',
    listens: '100K',
    audioUrl: 'https://ia802606.us.archive.org/22/items/MIT8.01F99/MIT8_01F99_lec01_300k.mp3',
    institute: 'MIT',
    type: 'Lecture'
  },
  {
    id: '2',
    title: 'Anatomy and Physiology - LibriVox Audiobook',
    coverImage: 'https://www.librivox.org/uploads/coverart/anatomy.jpg',
    duration: '50:30',
    category: 'Biology',
    listens: '75K',
    audioUrl: 'https://ia802606.us.archive.org/22/items/anatomyphysiology_1301_librivox/01_introductory.mp3',
    institute: 'LibriVox',
    type: 'Audiobook'
  },
  {
    id: '3',
    title: 'Economic Growth and GDP - Oxford University Podcast',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Oxford_University_Coat_Of_Arms.svg',
    duration: '40:20',
    category: 'Economics',
    listens: '60K',
    audioUrl: 'https://media.podcasts.ox.ac.uk/econ/econ-strategy/2020-lecture.mp3',
    institute: 'Oxford University',
    type: 'Podcast'
  },
  {
    id: '4',
    title: 'Understanding Computer Science - Harvard CS50',
    coverImage: 'https://cs50.harvard.edu/images/logos/cs50x/cs50x-cards.jpg',
    duration: '55:10',
    category: 'Computer Science',
    listens: '95K',
    audioUrl: 'https://cs50.harvard.edu/lectures/audio/cs50-lecture-1.mp3',
    institute: 'Harvard',
    type: 'Lecture'
  },
];


function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<AudioResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentAudio, setCurrentAudio] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      const searchQuery = query.toLowerCase().trim();
      const filteredResults = audioDatabase.filter(audio => 
        audio.title.toLowerCase().includes(searchQuery) ||
        audio.category.toLowerCase().includes(searchQuery) ||
        audio.institute.toLowerCase().includes(searchQuery) ||
        audio.type.toLowerCase().includes(searchQuery)
      );
      setResults(filteredResults);
      setIsLoading(false);
    }, 500);
  };

  const handlePlay = (audio: AudioResult) => {
    if (currentlyPlaying === audio.id) {
      audioRef.current?.pause();
      setCurrentlyPlaying(null);
      setCurrentAudio(null);
    } else {
      if (audioRef.current) {
        audioRef.current.src = audio.audioUrl;
        audioRef.current.play();
      }
      setCurrentlyPlaying(audio.id);
      setCurrentAudio(audio.audioUrl);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-center mb-8">
            <Headphones className="w-12 h-12 text-purple-300 mr-3" />
            <h1 className="text-4xl font-bold text-white">Audio<span className="text-purple-300">Learn</span></h1>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="mb-12">
            <div className="relative flex items-center">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for educational audio content..."
                className="w-full px-8 py-5 rounded-full bg-white/10 border border-purple-300/20 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent backdrop-blur-sm text-lg"
              />
              <button
                type="submit"
                className="absolute right-3 p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg"
              >
                {isLoading ? (
                  <Search className="w-6 h-6 text-white animate-spin" />
                ) : (
                  <Send className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </form>

          {/* Audio Player */}
          <audio ref={audioRef} className="hidden" />

          {/* Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((result) => (
              <div
                key={result.id}
                className="bg-white/10 rounded-xl overflow-hidden backdrop-blur-sm border border-purple-300/20 hover:transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <div className="relative">
                  <img
                    src={result.coverImage}
                    alt={result.title}
                    className="w-full h-52 object-cover"
                  />
                  <span className="absolute bottom-2 right-2 bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {result.duration}
                  </span>
                  <span className="absolute top-2 left-2 bg-purple-500/90 text-white px-3 py-1 rounded-full text-sm">
                    {result.type}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-semibold text-xl mb-2 line-clamp-2">{result.title}</h3>
                  <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center text-purple-300 text-sm">
                      <Music className="w-4 h-4 mr-1" />
                      <span>{result.category}</span>
                    </div>
                    <div className="flex items-center text-purple-200 text-sm">
                      <GraduationCap className="w-4 h-4 mr-1" />
                      <span>{result.institute}</span>
                    </div>
                    <div className="flex items-center text-purple-300 text-sm">
                      <Headphones className="w-4 h-4 mr-1" />
                      <span>{result.listens} listens</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => handlePlay(result)}
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg transition-all duration-200 font-medium shadow-lg ${
                      currentlyPlaying === result.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                    }`}
                  >
                    {currentlyPlaying === result.id ? (
                      <>
                        <Pause className="w-5 h-5" />
                        Pause
                      </>
                    ) : (
                      <>
                        <PlayCircle className="w-5 h-5" />
                        Play
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {query && results.length === 0 && !isLoading && (
            <div className="text-center text-purple-200 mt-12">
              <Music className="w-20 h-20 mx-auto mb-6 opacity-50" />
              <p className="text-2xl">No audio content found for "{query}"</p>
              <p className="text-purple-300 mt-2">Try searching for a subject, institute name, or content type (Lecture/Podcast/Audiobook)</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;