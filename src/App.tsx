import './index.css';
import { useState } from "react";
import { RecommendationList } from "./components/RecommendationList";
import { initialRecommendations } from "./data/initialRecommendations";
import type { Recommendation } from './types/recommendation';
import { RecommendationsDetails } from './components/RecommendationDetails';

export default function App() {
  const [recommendations, setRecommendations] = useState(initialRecommendations);
  const [selectedRecommendationId, setSelectedRecommendationId] = useState<string>("");
  const handleLike = (id: string) => {
    setRecommendations(recommendations.map(recommendation => recommendation.id === id ? { ...recommendation, isLiked: !recommendation.isLiked } : recommendation));
  }
  const handleSave = (id: string) => {
    setRecommendations(recommendations.map(recommendation => recommendation.id === id ? { ...recommendation, isSaved: !recommendation.isSaved } : recommendation));
  }
  const handleDelete = (id: string) => {
    setRecommendations(recommendations.filter(recommendation => recommendation.id !== id));
  }
  const handleSelect = (id: string) => {
    if(selectedRecommendationId === id){
      setSelectedRecommendationId("");
    }
    else{
      setSelectedRecommendationId(id);
    }
  }
 function selectedRecommendation(): Recommendation | undefined{
    return recommendations.find(recommendation => recommendation.id === selectedRecommendationId);
  }

  return <div className='bg-gray-100 min-h-screen p-4 flex flex-col gap-4 w-full max-w-7xl mx-auto text-center'>
    <div>
    <h1 className='text-3xl font-bold mb-4 text-center text-gray-800 capitalize'>Travel React Lab</h1>
    <RecommendationList
    recommendations={recommendations}
    handleRecommendationFunctions={{
        handleLike,
        handleSave,
        handleDelete,
        handleSelect
    }}/>
    </div>
    <div>
    <RecommendationsDetails recommendation={selectedRecommendation()}></RecommendationsDetails>
    </div>
     </div>
}

