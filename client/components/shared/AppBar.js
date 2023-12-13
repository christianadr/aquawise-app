import React from "react";
import { Appbar, Avatar, IconButton } from "react-native-paper";
import theme from "../../config/theme";

function AppBar() {
    const styles = theme.appBarTheme;

    return (
        <Appbar.Header style={styles.container}>
            <Appbar.Action
                icon="menu"
                color="white"
                onPress={() => {
                    // Handle menu press event
                }}
            />
            <Appbar.Content title="aquawise." titleStyle={styles.title} />
            <Appbar.Action
                icon={({ color, size }) => (
                    <Avatar.Image
                        size={size}
                        // source={require("./path_to_your_profile_image.png")} // Replace with your profile image source
                    />
                )}
                onPress={() => {
                    // Handle profile picture press event
                }}
            />
        </Appbar.Header>
    );
}

export default AppBar;
