import HomeScreen from "../screen/HomeScreen";
import YearListScreen from "../screen/YearListScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import QuestionScreen from "../screen/QuestionScreen";

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: "#eee7db" },
          headerTintColor: "#000",
        }}
      />
      <Stack.Screen
        name="YearListScreen"
        component={YearListScreen}
        options={{
          headerStyle: { backgroundColor: "#eee7db" },
          headerTintColor: "#000",
          title: "category",
        }}
      />
      <Stack.Screen
        name="QuestionScreen"
        component={QuestionScreen}
        options={{
          headerStyle: { backgroundColor: "#eee7db" },
          headerTintColor: "#000",
          title: "Question",
        }}
      />
    </Stack.Navigator>
  );
}
export default HomeStack;
