import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Etho Exit Exam</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        height: 50,
    },
    title: {
        color: "white",
        textAlign: "center",
        fontSize: 23,
    },
});
export default Header;
