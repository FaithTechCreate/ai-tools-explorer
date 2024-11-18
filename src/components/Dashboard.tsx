import React, { useState, useMemo } from 'react';
import { Search, Filter, Layout, Code2, Database, Brain, Eye, Server } from 'lucide-react';

// Define TypeScript interfaces
interface TechStack {
  Name: string;
  Description: string;
  Link: string;
  Layer: string;
  Components: string;
  License: string;
}

interface Model {
  Name: string;
  Description: string;
  Link: string;
  Type: string;
  Usage: string;
  License: string;
}

const techStackData: TechStack[] = [
  {
    Name: "Flask",
    Description: "A lightweight WSGI web application framework in Python.",
    Link: "https://flask.palletsprojects.com/",
    Layer: "Application",
    Components: "API Development",
    License: "Open Source"
  },
  // ... more data would be here in real implementation
];

const modelsData: Model[] = [
  {
    Name: "Whisper",
    Description: "Whisper is an automatic speech recognition (ASR) system developed by OpenAI.",
    Link: "https://huggingface.co/openai/whisper-large-v2",
    Type: "Automatic Speech Recognition",
    Usage: "Transcribing audio to text",
    License: "Open Source"
  },
  // ... more data would be here in real implementation
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<'tech' | 'models'>('tech');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLayer, setSelectedLayer] = useState<string>('');
  const [selectedLicense, setSelectedLicense] = useState<string>('');

  // Get unique layers and licenses for filters
  const layers = useMemo(() => 
    Array.from(new Set(techStackData.map(item => item.Layer))), 
    []
  );
  
  const licenses = useMemo(() => 
    Array.from(new Set([...techStackData, ...modelsData].map(item => item.License))), 
    []
  );

  // Filter and search logic
  const filteredTechStack = useMemo(() => {
    return techStackData.filter(item => {
      const matchesSearch = item.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.Description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLayer = !selectedLayer || item.Layer === selectedLayer;
      const matchesLicense = !selectedLicense || item.License === selectedLicense;
      return matchesSearch && matchesLayer && matchesLicense;
    });
  }, [searchQuery, selectedLayer, selectedLicense]);

  const filteredModels = useMemo(() => {
    return modelsData.filter(item => {
      const matchesSearch = item.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.Description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLicense = !selectedLicense || item.License === selectedLicense;
      return matchesSearch && matchesLicense;
    });
  }, [searchQuery, selectedLicense]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">AI Technology Explorer</h1>
          <p className="text-gray-600">Discover and explore AI tools, frameworks, and models</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 flex flex-wrap gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by name or description..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <select
            className="border rounded-lg px-4 py-2"
            value={selectedLicense}
            onChange={(e) => setSelectedLicense(e.target.value)}
          >
            <option value="">All Licenses</option>
            {licenses.map(license => (
              <option key={license} value={license}>{license}</option>
            ))}
          </select>

          {activeTab === 'tech' && (
            <select
              className="border rounded-lg px-4 py-2"
              value={selectedLayer}
              onChange={(e) => setSelectedLayer(e.target.value)}
            >
              <option value="">All Layers</option>
              {layers.map(layer => (
                <option key={layer} value={layer}>{layer}</option>
              ))}
            </select>
          )}
        </div>

        {/* Tabs */}
        <div className="mb-6 border-b">
          <div className="flex space-x-6">
            <button
              className={`pb-2 px-1 ${activeTab === 'tech' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('tech')}
            >
              <div className="flex items-center space-x-2">
                <Code2 size={20} />
                <span>Tech Stack</span>
              </div>
            </button>
            <button
              className={`pb-2 px-1 ${activeTab === 'models' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('models')}
            >
              <div className="flex items-center space-x-2">
                <Brain size={20} />
                <span>Models</span>
              </div>
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab === 'tech' ? (
            filteredTechStack.map((item) => (
              <div key={item.Name} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold mb-2">{item.Name}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.Description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">{item.Layer}</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">{item.Components}</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">{item.License}</span>
                </div>
                <a
                  href={item.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 text-sm flex items-center"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))
          ) : (
            filteredModels.map((item) => (
              <div key={item.Name} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold mb-2">{item.Name}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.Description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">{item.Type}</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">{item.Usage}</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">{item.License}</span>
                </div>
                <a
                  href={item.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 text-sm flex items-center"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
