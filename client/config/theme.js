import { StyleSheet } from "react-native";

const colors = {
    primary: "#1c1e20",
    white: "#eDeef2",
};

const theme = {
    overviewTheme: {
        container: {
            flex: 1,
            alignItems: "center",
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
            alignItems: "center",
            justifyContent: "center",
        },
        title: {
            fontFamily: "Inter-Black",
            color: colors.white,
        },
    },

    roundedRectangle: {},
};

export default theme;