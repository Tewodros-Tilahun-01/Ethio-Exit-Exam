import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
const Card = ({ name, navigation }) => {
    list = [
        {
            title: "2014",
            image: "https://www.example.com/landscape.jpg",
            description: "A beautiful landscape with mountains and a river.",
        },
        {
            title: "2014",
            image: "https://www.example.com/landscape.jpg",
            description: "A beautiful landscape with mountains and a river.",
        },
        {
            title: "2014",
            image: "https://www.example.com/landscape.jpg",
            description: "A beautiful landscape with mountains and a river.",
        },
    ];
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate("QuestionListScreen", {
                    name: name,
                    list: list,
                });
            }}
        >
            <View style={styles.button}>
                <View>
                    <Image source={require("../assets/favicon.png")} />
                </View>
                <View>
                    <Text>{name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        width: 160,
        height: 160,
        backgroundColor: "#f8f6f2",
        alignItems: "center",
        justifyContent: "center",
        margin: 8,
        borderRadius: 16,
    },
});
export default Card;
