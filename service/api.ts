import { config } from "@/config/config";
export const apiClient = {
  BASE_URL: config.BASE_URI,
  API_KEY: config.API_KEY,
  headers: {
    accept: "/application/json",
    Authorization: `Bearer ${config.API_KEY}`,
  },
};

export const fetchMovies = async ({ query }: { query: string }) => {
  const endpoint = query
    ? `${apiClient.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${apiClient.BASE_URL}/discover/movie?sort_by=popularity.desc`;

  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: apiClient.headers,
    });

    if (!response.ok) {
      console.log(response.statusText);
      throw new Error("Failded to fetch movies");
    }

    const data = await response.json();

    return data.result;
  } catch (error) {
    console.log("ERROR - ", error);
    throw new Error("Something went wrong");
  }
};
