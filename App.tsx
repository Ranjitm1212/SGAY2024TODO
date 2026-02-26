// // import React from "react";
// // import Home from "./src/screens/Home";
// // import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


// // const App=()=>{
// //   return (
// //    <SafeAreaProvider>
// //   <SafeAreaView style={{ flex: 1 }}>
// //     <Home />
// //   </SafeAreaView>
// // </SafeAreaProvider>
// //   )
// // }
// // export default App

// import 'react-native-gesture-handler';
// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import Home from "./src/screens/Home";
// import About from "./src/screens/About";

// const Drawer = createDrawerNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       {/* <Drawer.Navigator
//         screenOptions={{
//           headerShown: true,
//           drawerActiveTintColor: "#6200EE",
//         }}
//       > */}
//       <Drawer.Navigator
//   screenOptions={{
//     headerShown: false, // 👈 IMPORTANT
//   }}
// >
//         <Drawer.Screen name="Home" component={Home} />
//         <Drawer.Screen name="About Us" component={About} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

import 'react-native-gesture-handler';
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./src/screens/Home";
import About from "./src/screens/About";

const Drawer = createDrawerNavigator();

const App = () => {
  const [theme, setTheme] = useState<"LIGHT" | "DARK">("LIGHT");

  const isDark = theme === "DARK";

  const toggleTheme = () => {
    setTheme(isDark ? "LIGHT" : "DARK");
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Home">
          {() => (
            <Home
              theme={theme}
              isDark={isDark}
              toggleTheme={toggleTheme}
            />
          )}
        </Drawer.Screen>

        <Drawer.Screen name="About Us">
          {() => (
            <About
              theme={theme}
              isDark={isDark}
              toggleTheme={toggleTheme}
            />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;