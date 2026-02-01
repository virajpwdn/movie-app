// track the searches made by a user
import { Client, Databases } from "react-native-appwrite";
import { config } from "@/config/config";

const client = new Client()
  .setEndpoint(config.APPWRITE_URI)
  .setProject(config.PROJECT_ID);
const database = new Databases(client);

export const updateSearchCount = async (query: string, movie: Movie) => {
  // check if a record of that search has already been stored
  // if a document is found increment the searchCount field
  // if no document is found
  // create a new document in Appwrite database
};
