// track the searches made by a user
import { Client, Databases, ID, Query } from "react-native-appwrite";
import { config } from "@/config/config";

export const client = new Client()
  .setEndpoint(config.APPWRITE_URI)
  .setProject(config.PROJECT_ID)
  .setPlatform("com.moviestar.com");

const database = new Databases(client);

export const updateSearchCount = async (query: string, movie: Movie) => {
  // check if a record of that search has already been stored
  // if a document is found increment the searchCount field
  // if no document is found
  // create a new document in Appwrite database

  try {
    const result = await database.listDocuments({
      databaseId: config.DATABASE_ID,
      collectionId: config.TABLE_ID,
      queries: [Query.equal("searchTerm", query)],
    });

    if (result.documents.length > 0) {
      const existingMovie = result.documents[0];
      console.log("EXISTING MOVIE - ", existingMovie)

      await database.updateDocument(
        config.DATABASE_ID,
        config.TABLE_ID,
        existingMovie.$id,
        {
          count: existingMovie.count + 1,
        },
      );
    } else {
      await database.createDocument(
        config.DATABASE_ID,
        config.TABLE_ID,
        ID.unique(),
        {
          searchTerm: query,
          movieId: movie.id,
          count: 1,
          posterUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          Title: movie.title,
        },
      );
    }

    console.log("result", result);
  } catch (error) {
    console.log(
      error instanceof Error
        ? error
        : new Error("Appwrite error updateSearchCound"),
    );
    throw new Error("Something went wrong in search");
  }
};

export const getTrendingMovies = async (): Promise<
  TrendingMovie[] | undefined
> => {
  try {
    const result = await database.listDocuments(
      config.DATABASE_ID,
      config.TABLE_ID,
      [Query.limit(5), Query.orderDesc("count")],
    );
    return result.documents as unknown as TrendingMovie[];
  } catch (error) {
    console.log(
      error instanceof Error
        ? error
        : new Error("Appwrite Trending movies Error"),
    );
    return undefined;
  }
};
