import React from "react";
import { Text, View } from "react-native";
function QuizScreen({ route }) {
    return (
        <View>
            <Text>{route.params.title}</Text>
        </View>
    );
}
export default QuizScreen;
