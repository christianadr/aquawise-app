import React from "react";
import { Text, View } from "react-native";
import theme from "../config/theme";

const DashboardScreen = () => {
    const styles = theme.overviewTheme;
    return (
        <View style={[styles.container]}>
            <View style={{ marginTop: 10, paddingHorizontal: 30 }}>
                <Text
                    style={[
                        styles.text,
                        { fontSize: 30, fontFamily: "Inter-Bold" },
                    ]}
                >
                    Valve Controller
                </Text>
            </View>
        </View>
    );
};

export default DashboardScreen;
