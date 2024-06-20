// components/Card.js
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const QuestionCard = ({ title, image, description }) => {
    return (
        <TouchableOpacity>
            <View style={styles.QuestionCard}>
                <View style={styles.textContainer}>
                    <Image source={{ uri: image }} style={styles.image} />
                    <View>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.description}>{description}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    QuestionCard: {
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        margin: 5,
        overflow: "hidden",
        paddingVertical: 10,
    },
    image: {
        width: 30,
        height: 30,
    },
    textContainer: {
        padding: 10,
        flexDirection: "row",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: "#666",
    },
});

export default QuestionCard;
