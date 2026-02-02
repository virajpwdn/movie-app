import { icons } from "@/constants/icons";
import { Image, StyleSheet, Text, View } from "react-native";
const Profile = () => {
  return (
    <View className="bg-primary flex-1 px-10">
      <Text className="flex justify-center items-center flex-1 flex-col gap-5">
        <Image source={icons.person} className="size-10" tintColor="#fff" />
        <Text className="text-gray-500 text-base">Profile</Text>
      </Text>
    </View>
  );
};
export default Profile;
const styles = StyleSheet.create({});
