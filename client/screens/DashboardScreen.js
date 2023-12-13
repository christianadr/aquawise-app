import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import theme from "../config/theme";
import { FilledBoxInformation } from "../components/utils/FilledBoxInformation";

const DashboardScreen = () => {
    const styles = theme.overviewTheme;
    return (
        <SafeAreaView style={[styles.container]}>
            <View style={{ marginTop: 10, paddingHorizontal: 30 }}>
                <Text
                    style={[
                        styles.text,
                        { fontSize: 30, fontFamily: "Inter-Bold" },
                    ]}
                >
                    Overview
                </Text>
                <FilledBoxInformation
                    message={"Average Flow Rate"}
                    averageFlowRate={2.4}
                />
            </View>
        </SafeAreaView>
    );
};

export default DashboardScreen;
