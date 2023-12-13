import { StyleSheet } from "react-native";

const colors = {
    primary: "#1c1e20",
    white: "#edeef2",
    accent: "#a4aeff",
};

const theme = {
    overviewTheme: {
        container: {
            flex: 1,
            backgroundColor: colors.primary,
        },
        text: {
            color: colors.white,
            fontFamily: "Inter-Regular",
        },
    },
    appBarTheme: {
        container: {
            backgroundColor: colors.primary,
        },
        title: {
            fontFamily: "Inter-Black",
            color: colors.white,
        },
    },

    filledBox: {
        container: {
            marginTop: 20,
            backgroundColor: colors.accent,
            borderRadius: 10,
            padding: 20,
        },
        title: {
            fontFamily: "Inter-Bold",
            fontSize: 24,
        },
    },
};

export default theme;
