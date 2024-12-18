import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";

export default function HomeHeader({
  showBackButton,
  label,
}: {
  showBackButton?: boolean;
  label?: string;
}) {
  return (
    <View style={styles.container}>
      {showBackButton && (
        <View style={[styles.column, { justifyContent: "flex-start" }]}>
          <HomeHeaderItemButton
            icon={<Ionicons name="chevron-back" size={24} color="black" />}
          />
        </View>
      )}

      <View
        style={[
          styles.column,
          {
            flex: 2,

            justifyContent: showBackButton ? "center" : "flex-start",
          },
        ]}
      >
        <HomeHeaderItemButton
          style={{ height: 50 }}
          icon={
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/men/76.jpg",
              }}
              style={{
                height: "100%",
                aspectRatio: 1,

                borderRadius: 25,
              }}
            />
          }
        />

        <Text style={styles.text}>{label}</Text>
      </View>

      <View style={[styles.column, { justifyContent: "flex-end" }]}>
        <HomeHeaderItemButton
          backgroundColor="#00000011"
          icon={
            <Ionicons name="notifications-outline" size={20} color="black" />
          }
        />
        <HomeHeaderItemButton
          backgroundColor="#00000011"
          icon={<AntDesign name="staro" size={20} color="black" />}
        />
      </View>
    </View>
  );
}

const HomeHeaderItemButton = ({
  backgroundColor,
  icon,
  onPress,
  style,
}: {
  backgroundColor?: string;
  icon?: React.ReactNode;
  onPress?: () => void;
  style?: any;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[
        {
          backgroundColor: backgroundColor,
          height: 45,
          aspectRatio: 1,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 25,
        },
        style,
      ]}
      onPress={onPress}
    >
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    minHeight: 50,

    flex: 1,
    flexDirection: "row", // Arrange items in a row
    justifyContent: "space-between", // Space columns evenly
  },
  column: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    gap: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
