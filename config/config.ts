const _config = {
  BASE_URI: process.env.EXPO_PUBLIC_MOVIE_BASE_URI || "",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY || "",
  DATABASE_ID: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID || "",
  TABLE_ID: process.env.EXPO_PUBLIC_APPWRITE_TABLE_ID || "",
  APPWRITE_URI: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT || "",
  PROJECT_ID: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID || "",
};

export const config = Object.freeze(_config);
