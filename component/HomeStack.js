import HomeScreen from "../screen/HomeScreen";
import YearListScreen from "../screen/YearListScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import QuestionScreen from "../screen/QuestionScreen";
import ScoreScreen from "../screen/ScoreScreen";
import { View, Text } from "react-native";

import { useContext } from "react";
import { ThemeContext } from "../component/ThemeProvider";

const Stack = createNativeStackNavigator();

function HomeStack() {
  const { theme } = useContext(ThemeContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => (
            <View
              style={{
                backgroundColor: theme.backgroundColor1,
                alignItems: "center",
                paddingTop: 10,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 24,
                }}
              >
                Ethio Exit Exam
              </Text>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="YearListScreen"
        component={YearListScreen}
        options={{
          headerStyle: { backgroundColor: theme.backgroundColor1 },
          headerTintColor: "#fff",
          title: "category",
        }}
      />
      <Stack.Screen
        name="QuestionScreen"
        component={QuestionScreen}
        options={{
          headerStyle: { backgroundColor: theme.backgroundColor1 },
          headerTintColor: "#fff",
          title: "Question",
        }}
      />
      <Stack.Screen
        name="ScoreScreen"
        component={ScoreScreen}
        options={{
          headerStyle: { backgroundColor: theme.backgroundColor1 },
          headerTintColor: "#fff",
          title: "score",
        }}
      />
    </Stack.Navigator>
  );
}
export default HomeStack;
