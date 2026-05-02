import type { RecommendationListProps } from "../types/recommendation";
import { RecommendationItem } from "./RecommendationItem";

export function RecommendationList(recommendationsList: RecommendationListProps){
    return(
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-7xl mx-auto'>
            {recommendationsList.recommendations.map(recommendation =>
              <RecommendationItem key={recommendation.id} {...recommendation} handleRecommendationFunctions={recommendationsList.handleRecommendationFunctions} />
            )}
        </div>
    )
}