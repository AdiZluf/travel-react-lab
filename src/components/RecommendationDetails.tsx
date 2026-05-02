import type { RecommendationsDetailsProps } from "../types/recommendation";

export function RecommendationsDetails(recommendationProps: RecommendationsDetailsProps){
const recommendation = recommendationProps.recommendation;
    if(!recommendation){
    return null;
}
    return (
    <div className='bg-gray-100 min-h-screen p-4 flex flex-col gap-4 w-full max-w-7xl mx-auto text-center'>
        <h2 className='text-2xl font-bold'>Selected Recommendation</h2>
        <div className='bg-white p-4 rounded-md w-full shadow-md hover:shadow-lg transition-shadow duration-300'>
        <h2 className='text-2xl font-bold'>{recommendation.title}</h2>
        <p className='text-gray-600'>{recommendation.description}</p>
        <p>is Liked: {recommendation.isLiked ? "Yes" : "No"}</p>
        <p>is Saved: {recommendation.isSaved ? "Yes" : "No"}</p>
    </div>
    </div>
)
}