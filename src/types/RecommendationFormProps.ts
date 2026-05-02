import type { Recommendation } from "./recommendation";
export type RecommendationCategory = Recommendation["category"];

export type RecommendationFormProps = {
    onAdd: (recommendation: Recommendation) => void;
    onClose: () => void;
  };