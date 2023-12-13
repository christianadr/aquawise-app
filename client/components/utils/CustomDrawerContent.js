import React from "react";
import { View, Text, Image } from "react-native";
import { Avatar } from "react-native-paper";
import theme from "../../config/theme";
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from "@react-navigation/drawer";

export default CustomDrawerContent = (props) => {
    const styles = theme.appBarTheme;

    return (
        <View style={{ flex: 1, marginTop: 50 }}>
            <View
                style={{
                    flexDirection: "row",
                    backgroundColor: styles.container.color,
                    padding: 20,
                    gap: 20,
                }}
            >
                <Avatar.Image
                    size={60}
                    source={require("../../assets/profile.jpg")}
                />

                <View style={{ alignContent: "center" }}>
                    <Text
                        style={{
                            color: styles.container.color,
                            fontSize: 12,
                            marginTop: 10,
                            justifyContent: "center",
                        }}
                    >
                        Hello,
                    </Text>
                    <Text
                        style={{
                            fontFamily: "Inter-Bold",
                            color: styles.container.color,
                            fontSize: 18,
                            justifyContent: "center",
                        }}
                    >
                        Mikasa Ackerman
                    </Text>
                </View>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    );
};
