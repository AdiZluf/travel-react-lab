import { useState } from "react";
import type { Recommendation } from "../types/recommendation";
import type { RecommendationCategory, RecommendationForm } from "../types/RecommendationForm";

export function AddRecommendationForm({ onAdd, onClose, }: RecommendationForm) {
    const [title, setTitle] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [country, setCountry] = useState<string>("");
    const [category, setCategory] = useState<RecommendationCategory>("food");
    const [description, setDescription] = useState<string>("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newRecommendation: Recommendation = {
            id: crypto.randomUUID(),
            title,
            city,
            country,
            category,
            description,
            isLiked: false,
            isSaved: false,
        };

        onAdd(newRecommendation);
        onClose();
    };
    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-4 rounded-md shadow-md flex flex-col gap-3"
        >
            <h2 className="text-xl font-bold">Add New Recommendation</h2>

            <input
                className="border rounded-md px-3 py-2"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />

            <input
                className="border rounded-md px-3 py-2"
                type="text"
                placeholder="City"
                value={city}
                onChange={(event) => setCity(event.target.value)}
            />

            <input
                className="border rounded-md px-3 py-2"
                type="text"
                placeholder="Country"
                value={country}
                onChange={(event) => setCountry(event.target.value)}
            />

            <select
                className="border rounded-md px-3 py-2"
                value={category}
                onChange={(event) =>
                    setCategory(event.target.value as RecommendationCategory)
                }
            >
                <option value="food">Food</option>
                <option value="nature">Nature</option>
                <option value="culture">Culture</option>
                <option value="shopping">Shopping</option>
            </select>

            <textarea
                className="border rounded-md px-3 py-2"
                placeholder="Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />

            <div className="flex gap-2 justify-end">
                <button
                    type="button"
                    className="px-4 py-2 rounded-md border cursor-pointer"
                    onClick={onClose}
                >
                    Cancel
                </button>

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                >
                    Add
                </button>
            </div>
        </form>
    )
}