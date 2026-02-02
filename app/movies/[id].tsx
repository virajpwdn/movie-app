import { useLocalSearchParams } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
const Details = () => {
  const { id } = useLocalSearchParams(); // to get dynamic name passed in url
  return (
    <View className="bg-primary flex-1">
      {/* rendering in scroll view */}
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View>
          <Image source={} />
        </View>
      </ScrollView>
    </View>
  );
};
export default Details;
const styles = StyleSheet.create({});
