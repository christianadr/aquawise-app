import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardScreen from "./screens/DashboardScreen.js";
import ControllerScreen from "./screens/ControllerScreen.js";
import theme from "./config/theme.js";
import { useFonts } from "expo-font";

const Drawer = createDrawerNavigator();

export default function App() {
    const [loaded] = useFonts({
        "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
        "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
        "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    });

    if (!loaded) {
        return null;
    }
    const styles = theme.appBarTheme;

    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    title: "aquawise.",
                    drawerType: "slide",
                    headerTitleStyle: styles.title,
                    headerStyle: styles.container,
                    headerTitleAlign: "center",
                    swipeEnabled: true,
                }}
            >
                <Drawer.Screen name="Dashboard" component={DashboardScreen} />
                <Drawer.Screen name="Controller" component={ControllerScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
