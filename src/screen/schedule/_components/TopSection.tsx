import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

const days = ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"];
const dates = ["25", "26", "27", "28", "1", "2", "3"];

export default function TopSection() {
  const [selectedItem, setSelectedItem] = useState<any>(0);

  return (
    <View style={{ gap: 8 }}>
      <View style={styles.item}>
        {days.map((day, index) => (
          <Text
            style={{
              width: 40,
              color: selectedItem === index ? "#000000" : "#00000055",
              textAlign: "center",
            }}
          >
            {day}
          </Text>
        ))}
      </View>

      <View style={styles.item}>
        {dates.map((date, index) => (
          <TouchableOpacity
            activeOpacity={0.75}
            key={date}
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 40,
              aspectRatio: 1,
              gap: 4,
            }}
            onPress={() => setSelectedItem(index)}
          >
            <Text
              style={{
                color: selectedItem === index ? "#000000" : "#00000055",

                fontWeight: 600,
              }}
            >
              {date}
            </Text>

            <View
              style={{
                flexDirection: "row",
                gap: 2,
              }}
            >
              <View
                style={[
                  styles.dot,
                  {
                    backgroundColor:
                      selectedItem === index ? "#000000" : "#00000055",
                  },
                ]}
              />

              <View
                style={[
                  styles.dot,
                  {
                    backgroundColor:
                      selectedItem === index ? "#000000" : "#00000055",
                  },
                ]}
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingInline: 8,
  },

  dot: {
    borderRadius: 3,
    height: 3,
    width: 3,
  },
});
