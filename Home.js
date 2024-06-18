import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Card from "./component/Card";
import TopSection from "./component/TopSection";
import Header from "./component/Header";
import MainSection from "./component/MainSection";

const Home = () => {
    const [fullView, setFullView] = useState(1);
    const fullscreenChange = () => {
        setFullView((prv) => (prv === 1 ? 0 : 1));
    };

    return (
        <View style={styles.container}>
            <Header />
            <View style={{ flex: fullView }}>
                {fullView === 1 ? <TopSection /> : null}
            </View>
            <View style={styles.mainSection}>
                <MainSection fullscreenChange={fullscreenChange} />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#33324b",
    },
    mainSection: {
        flex: 2,
        borderTopLeftRadius: 50,
        backgroundColor: "#eee7db",
    },
});
export default Home;
