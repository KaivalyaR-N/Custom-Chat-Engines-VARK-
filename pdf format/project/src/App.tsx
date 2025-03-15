"use client";
import React, { useState } from "react";
import { Send, FileText, Search, Download, Clock, Eye } from "lucide-react";

interface PDFResult {
  id: string;
  title: string;
  description: string;
  pageCount: number;
  uploadDate: string;
  views: number;
  fileSize: string;
  downloadUrl: string;
  thumbnailUrl: string;
}

export default function PDFSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<PDFResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Simulated search function with real PDFs
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      const allPDFs: PDFResult[] = [
        {
          id: "1",
          title: "Physics Part 1",
          description:
            "NCERT Class 12 Physics Part 1 textbook covering topics like Electric Charges and Fields, Electrostatic Potential and Capacitance, etc.",
          pageCount: 200,
          uploadDate: "2024-03-15",
          views: 15234,
          fileSize: "25 MB",
          downloadUrl: "https://ncert.nic.in/textbook/pdf/keph1dd.zip",
          thumbnailUrl:
            "https://ncert.nic.in/textbook/pdf/coverpage/keph1dd.jpg",
        },
        {
          id: "2",
          title: "Chemistry Part 1",
          description:
            "NCERT Class 12 Chemistry Part 1 textbook covering topics like Solid State, Solutions, Electrochemistry, etc.",
          pageCount: 250,
          uploadDate: "2024-03-10",
          views: 28567,
          fileSize: "30 MB",
          downloadUrl: "https://ncert.nic.in/textbook/pdf/kech1dd.zip",
          thumbnailUrl:
            "https://ncert.nic.in/textbook/pdf/coverpage/kech1dd.jpg",
        },
        {
          id: "3",
          title: "Mathematics Part 1",
          description:
            "NCERT Class 12 Mathematics Part 1 textbook covering topics like Relations and Functions, Inverse Trigonometric Functions, Matrices, etc.",
          pageCount: 300,
          uploadDate: "2024-03-08",
          views: 12453,
          fileSize: "35 MB",
          downloadUrl: "https://ncert.nic.in/textbook/pdf/kemh1dd.zip",
          thumbnailUrl:
            "https://ncert.nic.in/textbook/pdf/coverpage/kemh1dd.jpg",
        },
        {
          id: "4",
          title: "Biology",
          description:
            "NCERT Class 12 Biology textbook covering topics like Reproduction, Genetics, Evolution, and Biotechnology.",
          pageCount: 320,
          uploadDate: "2024-02-25",
          views: 10234,
          fileSize: "40 MB",
          downloadUrl: "https://ncert.nic.in/textbook/pdf/kebh1dd.zip",
          thumbnailUrl:
            "https://ncert.nic.in/textbook/pdf/coverpage/kebh1dd.jpg",
        },
      ];

      const filteredResults = allPDFs.filter((pdf) =>
        pdf.title.toLowerCase().includes(query.toLowerCase())
      );

      setResults(filteredResults);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-center mb-8">
            <FileText className="w-8 h-8 text-purple-300 mr-2" />
            <h1 className="text-3xl font-bold text-white">PDF <span className="text-purple-300">Search</span></h1>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="mb-8">
            <div className="relative flex items-center">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search NCERT PDFs..."
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
                        <div className="flex items-center space-x-6 text-sm text-purple-300">
                          <div className="flex items-center">
                            <FileText className="w-4 h-4 mr-1" />
                            <span>{result.pageCount} pages</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{result.uploadDate}</span>
                          </div>
                          <div className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            <span>{result.views.toLocaleString()} views</span>
                          </div>
                        </div>
                      </div>
                      <a
                        href={result.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors ml-4"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        <span>{result.fileSize}</span>
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
              <p className="text-purple-200">No PDFs found for "{query}". Try a different search term.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
