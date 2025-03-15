import React, { useState } from 'react';
import { Send, Search, GraduationCap } from 'lucide-react';

interface VideoResult {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  category: string;
  views: string;
  videoUrl: string;
  institute: string;
}

// 🎥 Updated YouTube Video Database (All Playable)
const videoDatabase: VideoResult[] = [
  // ✅ Physics
  {
    id: '1',
    title: 'Wave Optics - Complete Theory (JEE/NEET)',
    thumbnail: 'https://img.youtube.com/vi/6vOzZ8esTSs/hqdefault.jpg',
    duration: '45:20',
    category: 'Physics',
    views: '1.2M',
    videoUrl: 'https://www.youtube.com/watch?v=6vOzZ8esTSs&list=PLF_7kfnwLFCHr4eZATw4YURnGNr6mwF5R',
    institute: 'Physics Wallah'
  },
  {
    id: '2',
    title: 'Electromagnetic Induction - CBSE Class 12',
    thumbnail: 'https://img.youtube.com/vi/N10nfVwM0GE/hqdefault.jpg',
    duration: '38:45',
    category: 'Physics',
    views: '970K',
    videoUrl: 'https://www.youtube.com/watch?v=N10nfVwM0GE&pp=ygUqcGh5c2ljcyBlbGVjdHJvbWFnbmV0aWMgaW5kdWN0aW9uIGNsYXNzIDEy',
    institute: 'Unacademy'
  },

  // ✅ Chemistry
  {
    id: '3',
    title: 'Organic Chemistry Full Chapter - Class 12',
    thumbnail: 'https://img.youtube.com/vi/s2QNhckjSq0/hqdefault.jpg',
    duration: '55:10',
    category: 'Chemistry',
    views: '856K',
    videoUrl: 'https://www.youtube.com/watch?v=pfBHnhJUvn4&pp=ygUab3JnYW5pYyBjaGVtaXN0cnkgY2xhc3MgMTI%3D',
    institute: 'BYJU\'s'
  },
  {
    id: '4',
    title: 'Solid State Chemistry - Complete Chapter',
    thumbnail: 'https://img.youtube.com/vi/lOQfuJfqIts/hqdefault.jpg',
    duration: '1:12:30',
    category: 'Chemistry',
    views: '680K',
    videoUrl: 'https://www.youtube.com/watch?v=lOQfuJfqIts&pp=ygUec29saWQgc3RhdGUgY2xhc3MgMTIgY2hlbWlzdHJ5',
    institute: 'Vedantu'
  },

  // ✅ Mathematics
  {
    id: '5',
    title: 'Class 12 Calculus - Complete Course',
    thumbnail: 'https://img.youtube.com/vi/4xZEMUdGkvM/hqdefault.jpg',
    duration: '52:30',
    category: 'Mathematics',
    views: '925K',
    videoUrl: 'https://www.youtube.com/watch?v=s2QNhckjSq0&list=PL2xF3HCNxGM9_4QCssdTcmaQc260tuSux',
    institute: 'CBSE'
  },
  {
    id: '6',
    title: 'Probability & Permutations - Class 12',
    thumbnail: 'https://img.youtube.com/vi/6vOzZ8esTSs/hqdefault.jpg',
    duration: '40:10',
    category: 'Mathematics',
    views: '810K',
    videoUrl: 'https://www.youtube.com/watch?v=sAYVtIgwJD8&pp=ygUtY2xhc3MgMTJ0aCBtYXRocyBwcm9iYWJpbGl0eSBhbmQgcGVybXV0YXRpb25z',
    institute: 'Physics Wallah'
  },

  // ✅ Biology
  {
    id: '7',
    title: 'Human Nervous System - CBSE Class 12',
    thumbnail: 'https://img.youtube.com/vi/DtkRGbTp1s8/hqdefault.jpg',
    duration: '47:15',
    category: 'Biology',
    views: '560K',
    videoUrl: 'https://www.youtube.com/watch?v=DtkRGbTp1s8&pp=ygUdY2xhc3MgMTIgaHVtYW4gbmVydm91cyBzeXN0ZW0%3D',
    institute: 'NEET Prep'
  },

  // ✅ English
  {
    id: '8',
    title: 'Flamingo English - Class 12 Full Course',
    thumbnail: 'https://img.youtube.com/vi/Admt9jKKmmw/hqdefault.jpg',
    duration: '1:05:00',
    category: 'English',
    views: '350K',
    videoUrl: 'https://www.youtube.com/watch?v=Admt9jKKmmw&pp=ygUyY2xhc3MgMTIgZW5nbGlzaCBmbGFtaW5nbyBhbGwgY2hhcHRlcnMgaW4gb25lIHNob3Q%3D',
    institute: 'CBSE'
  },

  // ✅ Computer Science
  {
    id: '9',
    title: 'Python Programming - Class 12 Computer Science',
    thumbnail: 'https://img.youtube.com/vi/UrsmFxEIp5k/hqdefault.jpg',
    duration: '58:30',
    category: 'Computer Science',
    views: '420K',
    videoUrl: 'https://www.youtube.com/watch?v=UrsmFxEIp5k&pp=ygUlY29kZSB3aXRoIGhhcnJ5IGFsbCBsYW5ndWFnZSB0dXRvcmlhbA%3D%3D',
    institute: 'CodeWithHarry'
  },

  // ✅ Accountancy
  {
    id: '10',
    title: 'Company Accounts - Class 12 Accountancy',
    thumbnail: 'https://img.youtube.com/vi/d18EwAF51Mk/hqdefault.jpg',
    duration: '39:10',
    category: 'Accountancy',
    views: '610K',
    videoUrl: 'https://www.youtube.com/watch?v=d18EwAF51Mk&pp=ygUZMTJ0aCBhY2NvdW50YW5jeSByZXZpc2lvbg%3D%3D',
    institute: 'Rajat Arora '
  }
];

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<VideoResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      const searchQuery = query.toLowerCase().trim();
      const filteredResults = videoDatabase.filter(video => 
        video.title.toLowerCase().includes(searchQuery) ||
        video.category.toLowerCase().includes(searchQuery) ||
        video.institute.toLowerCase().includes(searchQuery)
      );
      setResults(filteredResults);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <GraduationCap className="w-12 h-12 text-purple-300 mr-3" />
            <h1 className="text-4xl font-bold text-white">Vidya<span className="text-purple-300">Search</span></h1>
          </div>

          <form onSubmit={handleSearch} className="mb-12">
            <div className="relative flex items-center">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for educational videos..."
                className="w-full px-8 py-5 rounded-full bg-white/10 border border-purple-300/20 text-white placeholder-purple-200"
              />
              <button type="submit" className="absolute right-3 p-3 bg-gradient-to-r from-blue-500 to-purple-500">
                {isLoading ? <Search className="w-6 h-6 text-white animate-spin" /> : <Send className="w-6 h-6 text-white" />}
              </button>
            </div>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((result) => (
              <div key={result.id} className="bg-white/10 rounded-xl overflow-hidden">
                <img src={result.thumbnail} alt={result.title} className="w-full h-52 object-cover" />
                <div className="p-5">
                  <h3 className="text-white">{result.title}</h3>
                  <button onClick={() => window.open(result.videoUrl, '_blank')} className="w-full bg-blue-500 text-white py-3 rounded-lg">Watch Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
