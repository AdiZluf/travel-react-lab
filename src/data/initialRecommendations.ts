import type { Recommendation } from "../types/recommendation";

export const initialRecommendations: Recommendation[] = [
  {
    id: "1",
    title: "Best Pizza in Rome",
    city: "Rome",
    country: "Italy",
    category: "food",
    description:
      "A small local restaurant near Trastevere with amazing wood-fired pizza and authentic Italian atmosphere.",
    isLiked: false,
    isSaved: true,
  },
  {
    id: "2",
    title: "Hidden Beach in Barcelona",
    city: "Barcelona",
    country: "Spain",
    category: "nature",
    description:
      "A quiet beach away from the tourist areas, perfect for sunset and relaxing after a long walking day.",
    isLiked: true,
    isSaved: false,
  },
  {
    id: "3",
    title: "Night Food Tour in Tokyo",
    city: "Tokyo",
    country: "Japan",
    category: "culture",
    description:
      "An amazing guided tour through local food markets and hidden street food places in Shinjuku.",
    isLiked: true,
    isSaved: true,
  },
  {
    id: "4",
    title: "Vintage Shopping in Paris",
    city: "Paris",
    country: "France",
    category: "shopping",
    description:
      "A beautiful area full of vintage stores and local fashion boutiques with unique pieces.",
    isLiked: false,
    isSaved: false,
  },
  {
    id: "5",
    title: "Mountain Viewpoint in Cusco",
    city: "Cusco",
    country: "Peru",
    category: "nature",
    description:
      "A hidden hiking trail with one of the best panoramic views over the city and surrounding mountains.",
    isLiked: false,
    isSaved: true,
  },
];

