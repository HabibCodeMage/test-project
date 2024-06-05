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

const useEmergency = () => {
  const [emergencies, setEmergencies] = useState<Emergency[]>([
    {
      id: 1,
      heading: "Donate for Pakistan Flood",
      icon: require("../../../assets/images/girl.png"),
    },
    {
        id: 2,
        heading: "Donate for Pakistan Flood",
        icon: require("../../../assets/images/flood.png"),
    },
  ]);

  return emergencies;
};

export default useEmergency;
