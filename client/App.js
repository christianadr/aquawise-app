import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardScreen from "./screens/DashboardScreen.js";
import ControllerScreen from "./screens/ControllerScreen.js";
import theme from "./config/theme.js";
// import { useFonts } from "expo-font";
import * as Font from "expo-font";
import CustomDrawerContent from "./components/utils/CustomDrawerContent.js";

const Drawer = createDrawerNavigator();

export default function App() {
    const [fontsLoaded] = Font.useFonts({
        "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
        "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
        "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    });

    if (!fontsLoaded) {
        // setFontsLoaded(true)
        return null;
    }

    const styles = theme.appBarTheme;

    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props) => <CustomDrawerContent {...props} />}
                screenOptions={{
                    title: "aquawise.",
                    drawerContentStyle: {
                        backgroundColor: styles.title.color,
                    },
                    overlayColor: styles.container.color,
                    drawerContentContainerStyle: styles.container.color,
                    drawerActiveTintColor: styles.container.color,
                    drawerInactiveTintColor: styles.container.color,
                    drawerActiveBackgroundColor: styles.container.color,
                    drawerInactiveBackgroundColor: styles.container.color,
                    headerTintColor: styles.title.color,
                    headerShadowVisible: false,
                    drawerType: "slide",
                    headerTitleStyle: styles.title,
                    headerStyle: styles.container,
                    headerTitleAlign: "center",
                    swipeEnabled: true,
                }}
            >
                <Drawer.Screen
                    name="Dashboard"
                    component={DashboardScreen}
                    options={{ drawerLabel: "Dashboard" }}
                />
                <Drawer.Screen
                    name="Controller"
                    component={ControllerScreen}
                    options={{ drawerLabel: "Controller" }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
