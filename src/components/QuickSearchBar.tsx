import { TextInput, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

export default function QuickSearchBar() {
  return (
    <View
      style={{
        backgroundColor: "rgba(246, 249, 255, 1)",
        height: 60,
        width: "100%",
        borderRadius: 30,
        paddingInline: 16,

        gap: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Feather name="search" size={24} color="black" />

      <TextInput placeholder="Search for anything" style={{ flex: 1 }} />
    </View>
  );
}
