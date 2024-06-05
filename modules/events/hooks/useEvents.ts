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

const useEvents = () => {
  const [events, setEvent] = useState<Emergency[]>([
    {
      id: 1,
      heading: "Sh. Assim Al Hakeem Tour - Feb 17th - Edmonton",
      icon: require("../../../assets/images/image.png"),
    },
    {
        id: 2,
        heading: "Sh. Assim Al Hakeem Tour - Feb 17th - Edmonton",
        icon: require("../../../assets/images/sheikhAsimSecond.png"),
    },
  ]);

  return events;
};

export default useEvents;
