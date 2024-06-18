import React from "react";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TopSection = () => {
    return (
        <View style={styles.container}>
            <Text style={{ color: "white", fontSize: 22 }}>
                challenge your self
            </Text>
            <View style={{ alignItems: "flex-start", marginTop: 10 }}>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={{ color: "#000" }}>start now</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: { flex: 1, paddingHorizontal: 20, justifyContent: "center" },
    button: {
        backgroundColor: "#fff",
        paddingHorizontal: 9,
        paddingVertical: 7,
    },
});
export default TopSection;
