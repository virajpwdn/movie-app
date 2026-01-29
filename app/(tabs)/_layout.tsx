import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import { Image, ImageBackground, Text } from "react-native";
const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <ImageBackground
                source={images.highlight}
                className="flex flex-row gap-2 w-full flex-1 min-w-[112px] min-h-10 mt-4 justify-center items-center rounded-full overflow-hidden"
              >
                <Image
                  source={icons.home}
                  className="size-5"
                  tintColor="#151312"
                />
                <Text>Home</Text>
              </ImageBackground>
            </>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
        }}
      />
    </Tabs>
  );
};
export default _layout;
