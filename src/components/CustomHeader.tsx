import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";

type Props = {
  title: string;
  rightComponent?: React.ReactNode; // optional (for theme toggle etc.)
    isDark: boolean;
};

const CustomHeader: React.FC<Props> = ({ title, rightComponent,isDark }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerRow}>
      <View style={styles.leftSection}>
        {/* Drawer Button */}
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          style={styles.menuButton}
        >
          <Text style={[ styles.menuText,
    { color: isDark ? "#ffffff" : "#000000" },
  ]}>☰</Text>
        </TouchableOpacity>

       <Text
  style={[
    styles.title,
    { color: isDark ? "#ffffff" : "#000000" },
  ]}
>
  {title}
</Text>
      </View>

      {/* Right side (optional component) */}
      {rightComponent && <View>{rightComponent}</View>}
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuButton: {
    marginRight: 12,
  },
  menuText: {
    fontSize: 22,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color:'black'
  },
});