import { StyleSheet } from "react-native";
import { Colors } from "../../../common/constants/Colors";
import { rem } from "../../../common/utils";
import { FontFamily } from "../../../common/constants/FontFamily";

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    borderRadius: rem(16),
    padding: rem(15),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: rem(110),
    width: rem(115),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap:  rem(15)
  },
  innerBox: {

  },
  heading: {

  }
});

export default styles;
