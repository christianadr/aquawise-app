import React from "react";
import { Text, View } from "react-native";
import AppBar from "./components/shared/AppBar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import theme from "./config/theme";

export default function App() {
    const styles = theme.overviewTheme;
    return (
        <SafeAreaProvider>
            <AppBar />
            <View style={styles.container}></View>
        </SafeAreaProvider>
    );
}
