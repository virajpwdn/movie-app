import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MovieCard = ({
  title,
  id,
  poster_path,
  vote_average,
  release_date,
  original_language,
}: Movie) => {
  //! In React Native in Text component there is a prebuilt prop numberOfLine={1} which does this job.
  // const truncateText = (text: string) => {
  //   if (text.includes(":")) {
  //     const newText = text.split(":");
  //     return newText[0];
  //   } else return text;
  // };

  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className="w-[32%]">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://placeholder.co/600x400/1a1a1a/ffffff.png`,
          }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />
        <Text className="text-sm text-white font-bold mt-2" numberOfLines={1}>
          {title}
        </Text>

        <View className="flex-row items-center justify-start gap-x-1">
          <Image source={icons.star} className="size-4" />
          <Text className="text-xs text-white font-bold uppercase">
            {Math.round(vote_average / 2)}
          </Text>
        </View>
        <Text className="text-gray-400 text-xs font-semibold">
          {release_date?.split("-")[0]}
        </Text>
        <Text className="text-gray-400 text-xs font-semibold">
          Language: <Text className="uppercase">{original_language}</Text>
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
