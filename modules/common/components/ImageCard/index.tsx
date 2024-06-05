import React from "react";
import { View, Text, ImageBackground, ImageSourcePropType, StyleProp, ViewStyle } from "react-native";
import styles from "./styles";
import { Path, Svg } from "react-native-svg";
import { rem } from "@/modules/common/utils";
import { DonationCountIcon } from "../../icons";

interface Props {
  heading: string;
  image: ImageSourcePropType;
  rootStyles: StyleProp<ViewStyle>
  yValue?: number
}

const CustomShape: React.FC<{yValue?: number}>  = ({yValue}) => {
  return (
      <View
          style={{
              width: "100%",
              height: rem(yValue || 90),
              alignItems: "center",
              justifyContent: "center",
              transform: [{ translateY: rem(120) }, {translateX: rem(0.5)}],
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

const ImageCard: React.FC<Props> = ({ heading, image, rootStyles, yValue  }) => {
  return (
    <View style={[styles.root, rootStyles]}>
      <View style={styles.imageContainer}>
        <ImageBackground source={image} style={styles.image} resizeMode="cover">
          <CustomShape yValue={yValue} />
          <View style={styles.rootBox}>
            <View style={styles.bottomBox}>
              <Text style={styles.headingText}>{heading}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default ImageCard;
