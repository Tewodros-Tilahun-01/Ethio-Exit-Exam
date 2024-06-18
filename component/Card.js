import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
const Card = ({ name }) => {
    return (
        <TouchableOpacity>
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
