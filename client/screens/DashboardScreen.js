import React from "react";
import { Text, View } from "react-native";
import theme from "../config/theme";
import { FilledBoxInformation } from "../components/utils/FilledBoxInformation";

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
                    Overview
                </Text>
                <FilledBoxInformation
                    message={"Average Flow Rate"}
                    aveFlowRate={2.4}
                />
            </View>
        </View>
    );
};

export default DashboardScreen;
