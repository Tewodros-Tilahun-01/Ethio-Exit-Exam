import HomeScreen from "../screen/HomeScreen";
import QuestionListScreen from "../screen/QuestionListScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
                name="QuestionListScreen"
                component={QuestionListScreen}
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
