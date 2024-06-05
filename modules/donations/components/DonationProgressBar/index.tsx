import React from "react";
import { View, StyleSheet, Text, ViewStyle } from "react-native";
import styles from "./styles";
import { ThemedText } from "../../../common/components/ThemedText";
import InfoIcon from "../../../common/icons/InfoIcon";
import { rowCenter } from "../../../common/constants/styles";

interface DonationProgressBarProps {
  goal: number;
  progress: number;
  nearToComplete: number
}

const DonationProgressBar: React.FC<DonationProgressBarProps> = ({
  goal,
  progress,
  nearToComplete,
}) => {
  const progressBarWidth = Math.min(progress / goal, 1) * 100; // Percentage of progress bar filled

  return (
    <View>
      <View style={styles.textBox}>
        <ThemedText style={styles.donationText}>$450</ThemedText>
        <View style={[rowCenter as ViewStyle, { gap: 8 }]}>
          <ThemedText style={styles.donationText}>
            2024 donation goal
          </ThemedText>
          <InfoIcon />
        </View>
        <ThemedText style={styles.donationText}>$1,000</ThemedText>
      </View>
      <View style={styles.progressBarContainer}>
        <View
          style={[styles.progressBarFill, { width: `${progressBarWidth}%` }]}
        />
        <View
          style={[styles.nearToCompleteFill, { width: `${nearToComplete}%` }]}
        />
      </View>
    </View>
  );
};

export default DonationProgressBar;
