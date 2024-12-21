import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";

export default function InfoCards() {
  return (
    <View style={styles.container}>
      <CardItem
        icon={<Ionicons name="notifications-outline" size={20} color="black" />}
        color="#D7D5FC"
        title="Today’s posts"
        value="10"
      />
      <CardItem
        icon={<FontAwesome5 name="hourglass" size={20} color="black" />}
        color="#FFCFA8"
        title="Total draft posts"
        value="5"
      />
    </View>
  );
}

const CardItem = ({
  icon,
  color,

  title,
  value,
}: {
  icon: any;
  color: string;

  title: string;
  value: string;
}) => {
  const { width } = useWindowDimensions();

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={[
        styles.item,
        {
          width: width / 2 - 24,
          backgroundColor: color + "88",
          borderColor: color,
        },
      ]}
    >
      <View style={styles.header}>
        <View style={[styles.iconContainer, { backgroundColor: color }]}>
          {/* <Ionicons name="notifications-outline" size={24} color="black" /> */}
          {icon}
        </View>

        <Feather name="arrow-up-right" size={24} color="black" />
      </View>

      <View>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },

  item: {
    padding: 16,
    borderRadius: 16,
    aspectRatio: 1,
    borderWidth: 1,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: "white",
    aspectRatio: 1,
    width: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  value: {
    fontSize: 48,
    fontWeight: "bold",
  },

  title: {
    fontSize: 16,
    fontWeight: "normal",
  },
});
