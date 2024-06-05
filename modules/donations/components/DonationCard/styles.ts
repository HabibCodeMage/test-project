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
    height: rem(120),
    flex: 1,
    margin: rem(8),
  },
  container: {
    flex: 1,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: '100%'
  },
  heading: {
    color: '#000',
    fontSize: rem(16),
    fontFamily: FontFamily.ProximaNovaBold
  },
  body:{
    color:'#00000080',
  }
});

export default styles;
