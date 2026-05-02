import type { RecommendationItemProps } from "../types/recommendation";


export function RecommendationItem(recommendationItem: RecommendationItemProps){
    const {
        handleLike,
        handleSave,
        handleDelete,
        handleSelect
    } = recommendationItem.handleRecommendationFunctions;
    return(
        <div className='bg-white p-4 rounded-md w-full shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer'  onClick={() => handleSelect(recommendationItem.id)}>
        <h2 className='text-2xl font-bold'>{recommendationItem.title}</h2>
        <p className='text-gray-600'>{recommendationItem.description}</p>
        <div className='flex gap-2 justify-between items-center mt-2 mb-2 border-b border-gray-200 pb-2 w-full text-sm text-gray-500'>
        <p className='text-gray-600 font-medium capitalize text-left'>{recommendationItem.city}, {recommendationItem.country}</p>
        <p className='text-gray-600 font-medium capitalize text-right'>{recommendationItem.category}</p>
        </div>
        <div className='flex gap-2 justify-end items-center w-full text-right'>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md text-sm cursor-pointer' onClick={(e) =>  {e.stopPropagation(); handleLike(recommendationItem.id); }}>Like</button>
        <button className='bg-green-500 text-white px-4 py-2 rounded-md text-sm cursor-pointer' onClick={(e) =>  {e.stopPropagation(); handleSave(recommendationItem.id)}}>Save</button>
        <button className='bg-red-500 text-white px-4 py-2 rounded-md text-sm cursor-pointer' onClick={(e) =>  {e.stopPropagation(); handleDelete(recommendationItem.id)}}>Delete</button>
        </div>
        </div>
    )
}