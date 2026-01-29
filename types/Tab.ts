import { ImageSourcePropType } from "react-native";

export interface TabProps {
  title: string;
  focused: boolean;
  icon: ImageSourcePropType | undefined;
}
