import {  FlatListComponent, StyleSheet, Text, View } from "react-native";
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
import CalculatorList from "@/modules/calculators/components/CalculatorList";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import { ScrollView } from 'react-native-virtualized-view';

import Svg, { Path } from 'react-native-svg';

const CustomShape = () => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Svg
      width={324}
      height={76}
      viewBox="0 0 324 76"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M190.57 23.127a25.155 25.155 0 00-4.505-.404H25.205c-13.808 0-25 11.193-25 25v3.017c0 13.807 11.192 25 25 25h268.279c16.595 0 30.048-10.297 30.048-23V.127c0 12.703-13.453 23-30.048 23H190.57z"
        fill="#fff"
      />
    </Svg>
    </View>
  );
};


const index = () => {
  const donationPlans = useDonationPlans();

  const renderItem = ({ item }: { item: DonationPlan }) => (
    <DonationCard heading={item.heading} Icon={item.icon} body={item.body} />
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar style="light" backgroundColor={Colors.light.orange} />
      <ScrollView style={styles.container}>
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
          <CalculatorList />
        </LinearGradient>
        <CustomShape />
      </ScrollView>
      
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    minHeight: vh(70),
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: 'space-between',
    marginRight: rem(20)
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
    transform: [{ translateY: rem(8) }],
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
