import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/service/api";
import { getTrendingMovies } from "@/service/appWrite";
import useFetch from "@/service/useFetch";
import { useRouter } from "expo-router";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import TrendingCard from "../components/TrendingCard";

export default function Index() {
  const router = useRouter();

  const {
    data: trendingMovies,
    loading: trendingLoading,
    error: trendingError,
  } = useFetch(getTrendingMovies);

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  // Header Component - Everything above the movie grid
  const renderHeader = () => (
    <View>
      {/* Logo */}
      <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

      {/* Loading State */}

      {moviesLoading ||
        (trendingLoading && (
          <ActivityIndicator
            size={"large"}
            color="#0000ff"
            className="mt-10 self-center"
          />
        ))}

      {/* Error State */}
      {moviesError && (
        <Text className="text-red-500 text-center">
          Error: {moviesError?.message}
        </Text>
      )}

      {trendingError && (
        <Text className="text-red-500 text-center">
          Error: {moviesError?.message}
        </Text>
      )}

      {/* Search Bar and Title - Only show when data is loaded */}
      {!moviesLoading && !moviesError && (
        <View className="mt-5">
          <SearchBar
            onPress={() => router.push("/search")}
            placeholder="Search for your Favourite Movie"
          />

          {trendingMovies && (
            <View className="mt-10">
              <Text className="text-lg text-white font-bold mt-5 mb-3">
                Trending Movies
              </Text>
            </View>
          )}

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View className="w-4" />}
            className="mb-4 mt-3"
            data={trendingMovies}
            renderItem={({ item, index }) => (
              <TrendingCard movie={item} index={index} />
            )}
            keyExtractor={(item) => item.movieId.toString()}
          />

          <Text className="text-xl text-white font-bold mt-5 mb-3">
            Latest Movies
          </Text>
        </View>
      )}
    </View>
  );

  // Empty Component - Show when no movies
  const renderEmptyComponent = () => (
    <Text className="text-center text-white mt-10">No movies found</Text>
  );

  return (
    <View className="bg-primary flex-1">
      <Image source={images.bg} className="absolute w-full z-0" />
      <SafeAreaProvider>
        {/* <SafeAreaView> */}
        <FlatList
          data={movies || []}
          renderItem={({ item }) => <MovieCard {...item} />}
          keyExtractor={(item) => item.id.toString()}
          /* Header Component */
          ListHeaderComponent={renderHeader}
          /* Empty State */
          ListEmptyComponent={
            !moviesLoading && !moviesError ? renderEmptyComponent : null
          }
          /* Grid Layout */
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: "flex-start",
            gap: 10,
            paddingRight: 5,
            marginBottom: 10,
          }}
          /* Styling */
          contentContainerStyle={{
            minHeight: "100%",
            paddingBottom: 32,
          }}
          className="flex-1 px-5"
          showsVerticalScrollIndicator={false}
        />
        {/* </SafeAreaView> */}
      </SafeAreaProvider>
    </View>
  );
}
