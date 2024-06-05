import { StyleSheet } from "react-native";
import { rem, rf } from "../../../common/utils";
import { Colors } from "../../../common/constants/Colors";
import { FontFamily } from "../../../common/constants/FontFamily";
import { FlipInEasyX } from "react-native-reanimated";

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    borderRadius: rem(16),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    minHeight: rem(241),
    flex: 1,
    margin: rem(8),
    width: rem(323)
  },
  imageContainer: {
    flex: 1,
    borderRadius: rem(16),
    overflow: 'hidden', // This ensures the border radius is applied to the ImageBackground
  },
  image: {
    flex: 1,
    width: "100%",
    height: '100%',
    position: 'relative'
  },
  text: {
    color: 'white',
    fontSize: rem(16),
    textAlign: 'center',
  },
  bottomBox: {
    width: '100%',
    backgroundColor: '#fff',
    marginTop: rem(5),
    paddingLeft: rem(20),
    gap: 4
  },
  rootBox: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: rem(80),
    backgroundColor: '#fff',
  },
  countBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },
  countText:{
    color: '#5A606D',
    fontFamily: FontFamily.ProximaNovaSemiBold
  },
  headingText: {
    fontFamily: FontFamily.ProximaNovaSemiBold,
    fontSize: rf(16),
  }
});

export default styles;
