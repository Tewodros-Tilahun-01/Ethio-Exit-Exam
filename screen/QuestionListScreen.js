import { Text, View } from "react-native";

function QuestionListScreen({ route }) {
    return (
        <View>
            <Text>{route.params.name}</Text>
        </View>
    );
}
export default QuestionListScreen;
