import { View, StyleSheet } from "react-native";

import Item from "../component/Item";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { ThemeContext } from "../component/ThemeProvider";

const acountItem = [
  { title: "Notifications", icon: "🔔", component: "NotificationScreen" },
  { title: "Support Us ", icon: "💸", component: "SupportUsScreen" },
];

const InformationItem = [
  { title: "Help", icon: "🛠️", component: "HelpScreen" },

  { title: "Contact us", icon: "📞", component: "ContactUsScreen" },
  {
    title: "Terms & Conditions",
    icon: "📄",
    component: "TermsAndConditionsScreen",
  },
];

const Actions = [{ title: "Theme", icon: "🎨", component: "ThemeScreen" }];

export default function SettingsScreen() {
  const navigation = useNavigation();
  const { theme } = useContext(ThemeContext);

  const actions = (Action, { ItemId }) => {
    navigation.navigate(Action);
  };
  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor3 }]}
    >
      <Item Items={acountItem} actions={actions} title={"Acount"} />
      <Item Items={InformationItem} actions={actions} title={"Info"} />
      <Item Items={Actions} actions={actions} title={"Action"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
    paddingHorizontal: 10,
    height: "100%",
  },
});
