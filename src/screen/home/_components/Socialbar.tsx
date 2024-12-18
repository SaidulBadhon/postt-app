import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, Entypo, FontAwesome5 } from "@expo/vector-icons";

const socials = [
  {
    id: 1,
    name: "Facebook",
    color: "#1877f2",
    icon: <FontAwesome5 name="facebook" size={24} color="#1877f2" />,
  },
  {
    id: 2,
    name: "X",
    color: "#1da1f2",
    icon: <AntDesign name="twitter" size={24} color="#1da1f2" />,
  },
  {
    id: 3,
    name: "Instagram",
    color: "#c32aa3",
    icon: <Entypo name="instagram" size={24} color="#c32aa3" />,
  },
  {
    id: 4,
    name: "LinkedIn",
    color: "#0077b5",
    icon: <FontAwesome5 name="linkedin" size={24} color="#0077b5" />,
  },
];

export default function Socialbar() {
  const [selectedSocial, setSelectedSocial] = useState(1);

  const renderDateSection = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "purple",
          aspectRatio: 1,

          flex: 1,
          // width: "50% - 20px",

          borderRadius: 25,

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <>
      <FlatList
        data={socials}
        keyExtractor={(item) => item.id}
        renderItem={renderDateSection}
        contentContainerStyle={{
          flexGrow: 1,
          rowGap: 16,
          marginTop: 16,

          // paddingHorizontal: 16,
        }}
        numColumns={2}
        columnWrapperStyle={{
          width: "100%",

          columnGap: 16,
        }}
      />

      <View style={styles.container}>
        {socials?.map((social) => (
          <HomeHeaderItemButton
            key={social?.id}
            {...social}
            selectedSocial={selectedSocial}
            onPress={() => setSelectedSocial(social?.id)}
          />
        ))}

        <HomeHeaderItemButton
          icon={<Entypo name="plus" size={24} color="black" />}
        />
      </View>
    </>
  );
}

const HomeHeaderItemButton = ({
  id,
  name,
  color,
  icon,
  selectedSocial,
  onPress,
}: {
  id?: number;
  name?: string;
  color?: string;
  icon?: React.ReactNode;
  selectedSocial?: number;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={color ? 0.75 : 0.5}
      style={[
        styles.headerItemButton,
        {
          backgroundColor: color ? color + "22" : "#00000011",

          opacity: selectedSocial === id ? 1 : 0.5,
        },
      ]}
      onPress={onPress}
    >
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flexDirection: "row",
    marginTop: 16,
  },
  headerItemButton: {
    height: 40,
    aspectRatio: 1,

    borderRadius: 25,

    justifyContent: "center",
    alignItems: "center",
  },
  headerItemButtonText: {
    color: "white",
  },
});
