import { Text, View } from "react-native";
import QuestionCard from "../component/QuestionCard";

function QuestionListScreen({ route }) {
    return (
        <View>
            <QuestionCard
                title={route.params.name}
                image="https://www.example.com/landscape.jpg"
                description="A beautiful landscape with mountains and a river."
            />
            <QuestionCard
                title={route.params.name}
                image="https://www.example.com/landscape.jpg"
                description="A beautiful landscape with mountains and a river."
            />
            <QuestionCard
                title={route.params.name}
                image="https://www.example.com/landscape.jpg"
                description="A beautiful landscape with mountains and a river."
            />
        </View>
    );
}
export default QuestionListScreen;
