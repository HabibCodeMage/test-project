import React from "react";
import { View, Text } from "react-native";
import { SvgProps } from "react-native-svg";
import styles from "./styles";

interface Props {
  heading: string;
  Icon: React.FC<SvgProps>;
}

const CalculatorCard: React.FC<Props> = ({
  heading,
  Icon,
}) => {
  return (
    <View style={styles.root}>
         <Icon />
    <Text style={styles.heading}>{heading}</Text>
    </View>
  );
};

export default CalculatorCard;