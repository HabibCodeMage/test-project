import { FlatList, FlatListComponent, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/modules/common/constants/Colors";
import { rem, vh } from "@/modules/common/utils";
import { StatusBar } from "expo-status-bar";
import { ThemedText } from "@/modules/common/components/ThemedText";
import Logo from "@/modules/common/components/Logo";
import { FontFamily } from "@/modules/common/constants/FontFamily";
import { SearchIcon } from "@/modules/common/icons";
import DonationProgressBar from "@/modules/donations/components/DonationProgressBar";
import DonationCard from "@/modules/donations/components/DonationCard";
import useDonationPlans, { DonationPlan } from "@/modules/donations/hooks/useDonationPlans";

const index = () => {
  const donationPlans = useDonationPlans();

  const renderItem = ({ item }: { item: DonationPlan }) => (
    <DonationCard heading={item.heading} Icon={item.icon} body={item.body} />
  );

  return (
    <SafeAreaView>
      <StatusBar style="light" backgroundColor={Colors.light.orange} />
      <View style={styles.container}>
        <LinearGradient
          colors={[
            Colors.light.orange,
            "rgba(239, 125, 0, 0.9)",
            "rgba(239, 125, 0, 0.85)",
            "rgba(239, 125, 0, 0.75)",
            "rgba(239, 125, 0, 0.25)",
            "transparent",
          ]}
          style={styles.background}
        >
          <View style={styles.logoContainer}>
            <Logo />
            <View style={styles.iconBox}>
              <View style={styles.userTextBox}>
                <ThemedText
                  lightColor={Colors.light.white}
                  style={styles.userText}
                >
                  Salam,
                </ThemedText>
                <ThemedText
                  lightColor={Colors.light.white}
                  style={styles.lastName}
                >
                  Ahmed
                </ThemedText>
              </View>
              <SearchIcon />
            </View>
          </View>

          

          <View style={styles.progressBarBox}>
            <DonationProgressBar goal={100} progress={30} nearToComplete={30} />
          </View>
          <View style={styles.subBox}>
            <FlatList
              data={donationPlans}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
            />
            </View>
          
         
            
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    minHeight: vh(70),
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  userTextBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  userText: {
    fontFamily: FontFamily.ProximaNovaExtraBold,
    fontSize: rem(24),
  },
  lastName: {
    fontSize: rem(24),
    fontFamily: FontFamily.ProximaNovaSemiBold,
  },
  iconBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginRight: 20,
    transform: [{ translateX: rem(-24) }, { translateY: rem(8) }],
  },
  progressBarBox: {
    paddingHorizontal: rem(24),
    marginTop: rem(30),
    marginBottom: rem(20)
  },
  subBox: {
    paddingHorizontal: rem(14),
  }
});
