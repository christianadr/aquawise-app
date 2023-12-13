import React from "react";
import { View, Image, Text } from "react-native";
import theme from "../../config/theme";

export const FilledBoxInformation = ({ message, averageFlowRate }) => {
    const styles = theme.filledBox;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{message}</Text>
            <Image
                source={require("../../assets/design1.png")}
                style={{
                    width: 200,
                    height: 200,
                    resizeMode: "contain",
                    alignSelf: "center",
                }}
            />
            <Text style={[styles.title, { fontSize: 30 }]}>
                {averageFlowRate} liter/minute
            </Text>
        </View>
    );
};
