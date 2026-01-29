import { images } from "@/constants/images";
import { TabProps } from "@/types/Tab";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
const TabComp = ({ title, focused, icon }: TabProps) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row gap-2 w-full flex-1 min-w-[115px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
      >
        <Image source={icon} className="size-5" tintColor="#151312" />
        <Text className="text-secondary text-base font-semibold">{title}</Text>
      </ImageBackground>
    );
  }

  return (
    <View className="size-full justify-center items-center rounded-full mt-4">
      <Image source={icon} tintColor="#A8B5DB" className="size-5" />
    </View>
  );
};
export default TabComp;
const styles = StyleSheet.create({});
