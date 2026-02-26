// import React from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useNavigation, DrawerActions } from "@react-navigation/native";
// import CustomHeader from "../components/CustomHeader";



// const About = () => {
//   const navigation = useNavigation();
//   const colors = {
//     background: isDark ? "#121212" : "#f4f6f8",
//     card: isDark ? "#1E1E1E" : "#ffffff",
//     text: isDark ? "#ffffff" : "#000000",
//     subText: isDark ? "#aaaaaa" : "#555",
//     input: isDark ? "#2C2C2C" : "#ffffff",
//     button: "#6200EE",
//   };
//   return (
// <SafeAreaView style={styles.container}>
//   <CustomHeader title="About Us" 
//     rightComponent={
//                 <TouchableOpacity onPress={() => setTheme(isDark ? "LIGHT" : "DARK")}>
//                   <Text style={{ fontSize: 20 }}>
//                     {isDark ? "☀️" : "🌙"}
//                   </Text>
//                 </TouchableOpacity>
//               }/>

//   <Text>This is the About screen.</Text>
// </SafeAreaView>
//   );
// };

// export default About;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   headerRow: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: "bold",
//   },
// });

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../components/CustomHeader";

type Props = {
  theme: "LIGHT" | "DARK";
  isDark: boolean;
  toggleTheme: () => void;
};

const About: React.FC<Props> = ({ isDark, toggleTheme }) => {
  const colors = {
    background: isDark ? "#121212" : "#f4f6f8",
    text: isDark ? "#ffffff" : "#000000",
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <CustomHeader
        title="About Us"
         isDark={isDark}
        rightComponent={
          <TouchableOpacity onPress={toggleTheme}>
            <Text style={{ fontSize: 20 }}>
              {isDark ? "☀️" : "🌙"}
            </Text>
          </TouchableOpacity>
        }
      />

      <Text style={{ color: colors.text }}>
        This is the About screen.
      </Text>
    </SafeAreaView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});