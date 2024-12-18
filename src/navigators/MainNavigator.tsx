import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import HomeScreen from "../screen/home/HomeScreen";
import CreateScreen from "../screen/CreateScreen";
import HexagonalSVG from "../assets/nav/HexagonalSVG";
import ScheduleScreen from "../screen/schedule/ScheduleScreen";

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        // header: () => <Header />,

        // tabBarShowLabel: false,
        sceneStyle: { backgroundColor: "white" },

        tabBarActiveTintColor: "black",
        tabBarItemStyle: {
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        tabBarIconStyle: { marginTop: 3 },
        tabBarLabelStyle: { marginTop: 5 },
        tabBarStyle: { borderTopColor: "transparent" },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Create"
        component={CreateScreen}
        options={{
          tabBarButton: (props) => (
            <View style={[props.style, styles.createButtonContainer]}>
              <TouchableOpacity
                activeOpacity={0.75}
                {...props}
                style={styles.createButton}
              >
                <Feather
                  name="plus"
                  size={28}
                  color="#fff"
                  style={styles.createButtonIcon}
                />

                <HexagonalSVG
                  style={{
                    position: "absolute",
                    transform: [{ rotate: "90deg" }],
                  }}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />

      {/* 
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
      */}

      <Tab.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="calendar" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  createButtonContainer: {
    // backgroundColor: "#007AFF",

    justifyContent: "center",
    alignItems: "center",
    padding: 0,
  },
  createButton: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1,
  },
  createButtonIcon: {
    color: "#fff",
    zIndex: 1,
  },
});
