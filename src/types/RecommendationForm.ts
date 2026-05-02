import type { Recommendation } from "./recommendation";
export type RecommendationCategory = Recommendation["category"];

export type RecommendationForm = {
    onAdd: (recommendation: Recommendation) => void;
    onClose: () => void;
  };