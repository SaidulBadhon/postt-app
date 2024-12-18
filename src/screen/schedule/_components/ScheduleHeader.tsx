import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function ScheduleHeader({
  showBackButton,
}: {
  showBackButton?: boolean;
}) {
  return (
    <SafeAreaView>
      <View
        style={{
          height: 60,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {showBackButton && (
          <View style={{ flexDirection: "row", gap: 8 }}>
            <HeaderItemButton
              icon={<Ionicons name="chevron-back" size={24} color="black" />}
            />
          </View>
        )}

        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          March 2024
        </Text>

        <View style={{ flexDirection: "row", gap: 8 }}>
          <HeaderItemButton
            icon={
              <MaterialIcons name="calendar-month" size={16} color="#222222" />
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export const HeaderItemButton = ({
  id,
  color,
  icon,
  selectedSocial,
  onPress,
  activeOpacity,
}: {
  id?: number;
  color?: string;
  icon?: React.ReactNode;
  selectedSocial?: number;
  onPress?: () => void;
  activeOpacity?: number;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity || color ? 0.75 : 0.5}
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
