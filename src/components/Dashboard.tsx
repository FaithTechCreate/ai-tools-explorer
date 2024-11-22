import { useState, useMemo } from 'react';
import { Search, Code2, Brain, ChevronLeft, ChevronRight, Github, AlertCircle } from 'lucide-react';
import { techStackData } from '../data/techStackData';
import { modelsData } from '../data/modelsData';
import { TechStack, Model } from '../types';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<'tech' | 'models'>('tech');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLayer, setSelectedLayer] = useState<string>('');
  const [selectedComponent, setSelectedComponent] = useState<string>('');
  const [selectedLicense, setSelectedLicense] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Case insensitive string comparison helper
  const compareStrings = (a: string, b: string) => {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  };

  // Get unique layers and licenses for filters
  const layers = useMemo(() => Array.from(new Set(techStackData.map(item => item.Layer))), []);
  const components = useMemo(() => {
    const allComponents = techStackData.flatMap(item => item.Components.split(', '));
    return Array.from(new Set(allComponents)).sort();
  }, []);
  const licenses = useMemo(
    () => Array.from(new Set([...techStackData, ...modelsData].map(item => item.License))),
    []
  );

  // Filter and sort tech stack items
  const filteredTechStack = useMemo(() => {
    return techStackData
      .filter(item => {
        const matchesSearch =
          item.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.Description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesLayer = !selectedLayer || item.Layer === selectedLayer;
        const matchesComponent = !selectedComponent || item.Components.includes(selectedComponent);
        const matchesLicense = !selectedLicense || item.License === selectedLicense;
        return matchesSearch && matchesLayer && matchesComponent && matchesLicense;
      })
      .sort((a, b) => {
        const layerComparison = compareStrings(a.Layer, b.Layer);
        if (layerComparison !== 0) return layerComparison;

        const componentComparison = compareStrings(a.Components, b.Components);
        if (componentComparison !== 0) return componentComparison;

        const licenseComparison = compareStrings(a.License, b.License);
        if (licenseComparison !== 0) return licenseComparison;

        return compareStrings(a.Name, b.Name);
      });
  }, [searchQuery, selectedLayer, selectedComponent, selectedLicense]);

  // Filter and sort models
  const filteredModels = useMemo(() => {
    return modelsData
      .filter(item => {
        const matchesSearch =
          item.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.Description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesLicense = !selectedLicense || item.License === selectedLicense;
        return matchesSearch && matchesLicense;
      })
      .sort((a, b) => {
        // Sort by Type
        const typeComparison = compareStrings(a.Type, b.Type);
        if (typeComparison !== 0) {
          return typeComparison;
        }
        // Then by License
        const licenseComparison = compareStrings(a.License, b.License);
        if (licenseComparison !== 0) {
          return licenseComparison;
        }
        // Finally by Name
        return compareStrings(a.Name, b.Name);
      });
  }, [searchQuery, selectedLicense]);

  // Pagination logic with type safety
  const currentData = activeTab === 'tech' ? filteredTechStack : filteredModels;
  const totalPages = Math.ceil(currentData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = currentData.slice(startIndex, endIndex);

  // Reset to first page when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedLayer, selectedLicense, activeTab]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Type guard to check if item is TechStack
  const isTechStack = (item: TechStack | Model): item is TechStack => {
    return (item as TechStack).Layer !== undefined;
  };

  const renderTechStackCard = (item: TechStack) => (
    <div
      key={item.Name}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
    >
      <h3 className="text-lg font-semibold mb-2">{item.Name}</h3>
      <p className="text-gray-600 text-sm mb-4">{item.Description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
          {item.Layer}
        </span>
        {item.Components.split(', ').map(component => (
          <span
            key={component}
            className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
          >
            {component}
          </span>
        ))}
        <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
          {item.License}
        </span>
      </div>
      <a
        href={item.Link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-600 text-sm flex items-center"
      >
        Learn More
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    </div>
  );

  const renderModelCard = (item: Model) => (
    <div
      key={item.Name}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
    >
      <h3 className="text-lg font-semibold mb-2">{item.Name}</h3>
      <p className="text-gray-600 text-sm mb-2">{item.Description}</p>
      <p className="text-gray-700 text-sm mb-4">
        <span className="font-medium">Usage:</span> {item.Usage}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
          {item.Type}
        </span>
        <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
          {item.License}
        </span>
      </div>
      <a
        href={item.Link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-600 text-sm flex items-center"
      >
        Learn More
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">AI Tools Explorer</h1>
            <p className="text-gray-600">Discover and explore AI tools, frameworks, and models</p>
          </div>
          <a
            href="https://github.com/FaithTechCreate/ai-tools-explorer/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Github size={20} />
            <span>View on GitHub</span>
          </a>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 flex flex-wrap gap-4">
          <div className="relative flex-grow">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search by name or description..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>

          <select
            className="border rounded-lg px-4 py-2"
            value={selectedLicense}
            onChange={e => setSelectedLicense(e.target.value)}
          >
            <option value="">All Licenses</option>
            {licenses.map(license => (
              <option key={license} value={license}>
                {license}
              </option>
            ))}
          </select>

          {activeTab === 'tech' && (
            <>
              <select
                className="border rounded-lg px-4 py-2"
                value={selectedLayer}
                onChange={e => setSelectedLayer(e.target.value)}
              >
                <option value="">All Layers</option>
                {layers.map(layer => (
                  <option key={layer} value={layer}>
                    {layer}
                  </option>
                ))}
              </select>

              <select
                className="border rounded-lg px-4 py-2"
                value={selectedComponent}
                onChange={e => setSelectedComponent(e.target.value)}
              >
                <option value="">All Components</option>
                {components.map(component => (
                  <option key={component} value={component}>
                    {component}
                  </option>
                ))}
              </select>
            </>
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

        {/* Results Count */}
        <div className="mb-4 text-sm text-gray-600">
          Showing {startIndex + 1}-{Math.min(endIndex, currentData.length)} of {currentData.length}{' '}
          items
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentItems.map(item =>
            isTechStack(item) ? renderTechStackCard(item) : renderModelCard(item)
          )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-6">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-1 rounded-lg ${
                  currentPage === page
                    ? 'bg-blue-500 text-white'
                    : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* Contribution Links */}
        <div className="mt-12 border-t pt-8">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Help Keep Our Database Current</h2>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/FaithTechCreate/ai-tools-explorer/issues/new?template=add-tech-stack.yml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Code2 size={20} />
                <span>Submit a new Tech Stack</span>
              </a>
              <a
                href="https://github.com/FaithTechCreate/ai-tools-explorer/issues/new?template=add-model.yml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
              >
                <Brain size={20} />
                <span>Submit a new Model</span>
              </a>
              <a
                href="https://github.com/FaithTechCreate/ai-tools-explorer/issues/new"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                <AlertCircle size={20} />
                <span>Report an Issue</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
