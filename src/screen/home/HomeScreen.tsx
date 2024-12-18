import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import HomeHeader from "./_components/HomeHeader";
import QuickSearchBar from "../../components/QuickSearchBar";
import Socialbar from "./_components/Socialbar";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <HomeHeader />

      <ScrollView scrollEnabled={false} style={{ padding: 16 }}>
        <View style={{ gap: 8 }}>
          <Text style={{ fontSize: 24, fontWeight: "normal", color: "gray" }}>
            Hello,
          </Text>

          <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
            Saidul Badhon 👋
          </Text>
        </View>

        <QuickSearchBar />

        {/*  */}
        <Socialbar />

        {/*  */}
        {/*  */}

        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          impedit corrupti facilis incidunt dolorum nam. Corrupti illum amet
          assumenda aliquid modi laboriosam a. Voluptatum nulla quo maiores,
          exercitationem odit enim?
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
