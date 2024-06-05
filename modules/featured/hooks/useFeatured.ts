import { AutoDonateFill, PortFolioFill, QuickDonateIcon, RoundUpFillIcon } from '@/modules/common/icons';
import { DonationIllustration, FidyaIllustration, KafaraIllustration } from '@/modules/common/illustrations';
import { useState } from 'react';
import { ImageSourcePropType } from 'react-native';
import { SvgProps } from 'react-native-svg';
export interface Emergency {
  id: number;
  heading: string;
  icon: ImageSourcePropType;
}

const useFeatured = () => {
  const [featured, setFeatured] = useState<Emergency[]>([
    {
      id: 1,
      heading: "Winter Relief For Yemen, Libya, Pales..",
      icon: require("../../../assets/images/girl.png"),
    },
    {
        id: 2,
        heading: "Flood response in Pakistan",
        icon: require("../../../assets/images/floodResponse.png"),
    },
    {
        id: 3,
        heading: "Winter Relief For Yemen, Libya, Pales..",
        icon: require("../../../assets/images/girl.png"),
      },
  ]);

  return featured;
};

export default useFeatured;
