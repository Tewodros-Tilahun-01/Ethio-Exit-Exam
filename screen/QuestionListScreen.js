import { Text, View } from "react-native";
import QuestionCard from "../component/QuestionCard";
import { useEffect, useState } from "react";
import { MasonryFlashList } from "@shopify/flash-list";

function QuestionListScreen({ route, navigation }) {
    const list = route.params.list;

    return (
        <View style={{ width: "100%", height: "100%" }}>
            <MasonryFlashList
                data={list}
                numColumns={1}
                renderItem={({ item }) => (
                    <QuestionCard
                        title={item.title}
                        image={item.image}
                        description={item.description}
                        navigation={navigation}
                    />
                )}
                estimatedItemSize={200}
            ></MasonryFlashList>
        </View>
    );
}
export default QuestionListScreen;
