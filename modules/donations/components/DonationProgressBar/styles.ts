import { StyleSheet } from "react-native";
import { Colors } from "../../../common/constants/Colors";
import { rem } from "../../../common/utils";
import { FontFamily } from "../../../common/constants/FontFamily";

const styles = StyleSheet.create({
    progressBarContainer: {
      flexDirection: 'row',
      backgroundColor: Colors.light.gray,
      borderRadius:rem(8),
      height: rem(10),
    },
    progressBarFill: {
      backgroundColor: Colors.light.green,
      borderRadius: rem(8),
      zIndex: 10
    },
    progressText: {
      flex: 1,
      textAlign: 'center',
      padding: 5,
    },
    textBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    donationText: {
        color: Colors.light.white,
        fontSize: rem(14),
        fontFamily: FontFamily.ProximaNovaSemiBold
    },
    nearToCompleteFill: {
    backgroundColor: Colors.light.white,
    borderRadius: rem(8),
    transform: [{ translateX: -10 }],
    }
});

export default styles