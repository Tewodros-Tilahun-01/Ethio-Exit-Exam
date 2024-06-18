import React from "react";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MasonryFlashList } from "@shopify/flash-list";
import Card from "./Card";
let title = [
    { name: "Sport" },
    { name: "Chemistry" },
    { name: "Economics" },
    { name: "Accounting" },
    { name: "Math" },
    { name: "Physics" },
    { name: "Sport" },
    { name: "Chemistry" },
    { name: "Economics" },
    { name: "Accounting" },
    { name: "Math" },
    { name: "Physics" },
];
const MainSection = ({ fullscreenChange }) => {
    return (
        <View style={{ paddingTop: 30, paddingHorizontal: 20 }}>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <Text>explore quizzes</Text>
                <TouchableOpacity onPress={fullscreenChange}>
                    <Text style={styles.button}>VIEW ALL</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.listContainer}>
                <MasonryFlashList
                    data={title}
                    numColumns={2}
                    renderItem={({ item }) => <Card name={item.name}></Card>}
                    estimatedItemSize={200}
                ></MasonryFlashList>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        height: 100,
    },
    title: {
        color: "white",
        textAlign: "center",
        fontSize: 23,
    },
    listContainer: {
        width: "100%",
        height: "100%",
        paddingTop: 10,
        paddingBottom: 60,
    },
    button: {
        backgroundColor: "#fff",
        padding: 4,
    },
});
export default MainSection;
