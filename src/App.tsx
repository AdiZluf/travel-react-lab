import { useState } from "react";
import { RecommendationsDetails } from './components/RecommendationDetails';
import { RecommendationList } from "./components/RecommendationList";
import { initialRecommendations } from "./data/initialRecommendations";
import './index.css';
import { SearchBar } from "./components/SearchBar";
import { AddRecommendationForm } from "./components/AddRecommendationForm";
import type { Recommendation } from "./types/recommendation";
import type { FilterField } from "./types/SearchBarProps";

export default function App() {
  const [recommendations, setRecommendations] = useState(initialRecommendations);
  const [selectedRecommendationId, setSelectedRecommendationId] = useState<string| null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedFilter, setSelectedFilter] = useState<FilterField>("city");
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  const filteredRecommendations = recommendations.filter((recommendation) => {
    const searchValue = searchTerm.toLowerCase();

    if (selectedFilter === "city") {
      return recommendation.city.toLowerCase().includes(searchValue);
    }

    if (selectedFilter === "category") {
      return recommendation.category.toLowerCase().includes(searchValue);
    }

    return true;
  });

  const selectedRecommendation = recommendations.find(recommendation => recommendation.id === selectedRecommendationId);

  const handleLike = (id: string) => {
    setRecommendations(prev => prev.map(recommendation =>
      recommendation.id === id ? { ...recommendation, isLiked: !recommendation.isLiked } : recommendation));
  }
  const handleSave = (id: string) => {
    setRecommendations(prev =>
      prev.map(recommendation => recommendation.id === id ? { ...recommendation, isSaved: !recommendation.isSaved } : recommendation));
  }
  const handleDelete = (id: string) => {
    setRecommendations((prev) =>
      prev.filter((recommendation) => recommendation.id !== id)
    );

    if (selectedRecommendationId === id) {
      setSelectedRecommendationId(null);
    }
  }
  const handleSelect = (id: string) => {
    if (selectedRecommendationId === id) {
      setSelectedRecommendationId(null);
    }
    else {
      setSelectedRecommendationId(id);
    }
  }
  const handleSearchChange = (searchText: string) => {
    setSearchTerm(searchText);
  }

  const handleFilterChange = (filter: FilterField) => {
    setSelectedFilter(filter);
  }

  const handleAddRecommendation = (recommendation: Recommendation) => {
    setRecommendations((prev) => [...prev, recommendation]);
  };

  return <div className='bg-gray-100 min-h-screen p-4 flex flex-col gap-4 w-full max-w-7xl mx-auto text-center'>
    <div>
      <SearchBar
        searchTerm={searchTerm}
        selectedFilter={selectedFilter}
        handleSearchChange={handleSearchChange}
        handleFilterChange={handleFilterChange}
      />
      <h1 className='text-3xl font-bold mb-4 text-center text-gray-800 capitalize'>Travel React Lab</h1>
      <RecommendationList
        recommendations={filteredRecommendations}
        handleRecommendationFunctions={{
          handleLike,
          handleSave,
          handleDelete,
          handleSelect
        }} />
    </div>
    <div>
      <button className="cursor-pointer" onClick={() => setIsFormOpen(true)}>
        Add New Recommendation
      </button>

      {
        isFormOpen && (
          <AddRecommendationForm
            onAdd={handleAddRecommendation}
            onClose={() => setIsFormOpen(false)}
          />
        )}
    </div>
    <div>
      <RecommendationsDetails recommendation={selectedRecommendation}></RecommendationsDetails>
    </div>
  </div>
}

