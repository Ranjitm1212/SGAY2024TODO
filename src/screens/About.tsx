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
      <View style={styles.aboutBody}>
         <Text style={[, styles.abouttext, { color: colors.text }]}>
          Shangrila Industries Pvt. Ltd is a WHO-GMP and Schedule-M compliant pharmaceutical manufacturer driven by a commitment to quality, affordability, and
          ethical healthcare. Located in the pollution-free region of Sikkim, our two modern manufacturing units
          operate with advanced automation, stringent quality systems, and a skilled workforce dedicated to delivering safe and effective medicines.
        </Text>
        <Text style={[, styles.abouttext, { color: colors.text }]}>
          We offer a wide range of dosage forms including tablets, capsules, oral liquids, and external preparations. Our manufacturing excellence, combined with a
          zero-compromise approach toward ethics and quality, has enabled us to become a reliable partner for both domestic and global markets. With a customer-centric
          mindset and a focus on continuous improvement, we aim to support healthcare professionals, institutions, and third-party brands with dependable, value-driven solutions.
        </Text>
         <Text style={[, styles.abouttext, { color: colors.text }]}>
          Our units receive 10 years of excise benefits from the Sikkim government, allowing us to provide cost-effective solutions without compromising on quality. At Shangrila
          Pharma, quality is our foundation, ethics are our strength, and patient well-being is our purpose. We continue to evolve with a shared mission of contributing to a
          healthier, and a more compassionate future.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  abouttext: {
    color: "black",
    fontSize: 16,
  fontFamily: "roboto",
  margin:5
  },
  aboutBody:{
margin:1,
padding:10
  }
});