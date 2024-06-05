import React from "react";
import { View, Text, ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";
import { RoundUpFillIcon } from "@/modules/common/icons";
import { rowBetween } from "@/modules/common/constants/styles";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { rem } from "@/modules/common/utils";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  heading: string;
  Icon: React.FC<SvgProps>;
  body: string;
}

const DonationCard: React.FC<Props> = ({
  heading,
  Icon,
  body,
}) => {
  return (
    <View style={styles.root}>
      <LinearGradient
       colors={['#FFFFFF', 'rgba(255, 255, 255, 0.5)']}
       start={[0, 0]}
       end={[1, 1]}
      >
      <View style={[rowBetween as ViewStyle]}>
        <View style={{flex: 1, gap: rem(16)}}>
          <Text style={styles.heading}>{heading}</Text>
          <Text style={styles.body}>{body}</Text>
        </View>
        <Icon />
      </View>
      </LinearGradient>
    </View>
  );
};

export default DonationCard;