export type Recommendation = {
    id: string;
    title: string;
    city: string;
    country: string;
    category: 'food' | 'nature' | 'culture' | 'shopping';
    description: string;
    isLiked: boolean;
    isSaved: boolean;
  };
export type RecommendationItemProps = Recommendation & {
    handleRecommendationFunctions: HandleRecommendationFunctions;
  };
export type RecommendationListProps = {
    recommendations: Recommendation[];
    handleRecommendationFunctions: HandleRecommendationFunctions;
}
export type HandleRecommendationFunctions = {
    handleLike: (id: string) => void;
    handleSave: (id: string) => void;
    handleDelete: (id: string) => void;
    handleSelect: (id: string) => void;
}
export type RecommendationsDetailsProps = {
    recommendation?: Recommendation;
}