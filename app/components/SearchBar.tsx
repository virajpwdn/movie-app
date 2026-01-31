import { icons } from "@/constants/icons";
import { SearchBarProps } from "@/types/Search";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
const SearchBar = ({
  onPress,
  placeholder,
  value,
  onChangeText,
}: SearchBarProps) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image source={icons.search} className="size-5" />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value || ""}
        onChangeText={onChangeText}
        placeholderTextColor="#a8b5db"
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};
export default SearchBar;
const styles = StyleSheet.create({});
