import React from "react";
import { View, Text, ImageBackground, ImageSourcePropType } from "react-native";
import styles from "./styles";
import { Path, Svg } from "react-native-svg";
import { rem } from "@/modules/common/utils";
import { DonationCountIcon, HomeFillIcon } from "@/modules/common/icons";

interface Props {
  heading: string;
  image: ImageSourcePropType;
}

const CustomShape = () => {
    return (
        <View
            style={{
                width: "100%",
                height: rem(76),
                alignItems: "center",
                justifyContent: "center",
                transform: [{ translateY: rem(115) }, {translateX: rem(0.5)}],
                borderColor: "#fff",
            }}
        >
            <Svg width="100%" height="100%" viewBox="0 0 388 76" fill="none">
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M190.57 23.127a25.155 25.155 0 00-4.505-.404H25.205c-13.808 0-25 11.193-25 25v3.017c0 13.807 11.192 25 25 25h333.279c16.595 0 30.048-10.297 30.048-23V.127c0 12.703-13.453 23-30.048 23H190.57z"
                    fill="#fff"
                />
            </Svg>
        </View>
    );
  };

const EmergencyCard: React.FC<Props> = ({ heading, image }) => {
  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <ImageBackground source={image} style={styles.image} resizeMode="cover">
          <CustomShape />
          <View style={styles.rootBox}>
            <View style={styles.bottomBox}>
              <Text style={styles.headingText}>Donate for Pakistan Flood</Text>
              <View style={styles.countBox}>
                <DonationCountIcon />
                <Text style={styles.countText}>250 Donors</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default EmergencyCard;
