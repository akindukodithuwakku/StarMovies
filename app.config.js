export default {
  expo: {
    "plugins": [
    "expo-router"
  ],
    // ... other config
    extra: {
      EXPO_PUBLIC_MOVIE_API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
      EXPO_PUBLIC_TMDB_API_KEY: process.env.EXPO_PUBLIC_TMDB_API_KEY,
      EXPO_PUBLIC_TMDB_ACCESS_TOKEN: process.env.EXPO_PUBLIC_TMDB_ACCESS_TOKEN,
    },
  },
}; 