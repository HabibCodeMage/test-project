import { AutoDonateFill, PortFolioFill, QuickDonateIcon, RoundUpFillIcon } from '@/modules/common/icons';
import { DonationIllustration, FidyaIllustration, KafaraIllustration } from '@/modules/common/illustrations';
import { useState } from 'react';
import { SvgProps } from 'react-native-svg';

export interface Calculator {
  id: number;
  heading: string;
  icon: React.FC<SvgProps>;
}

const useCalculators = () => {
  const [calculators, setCalculators] = useState<Calculator[]>([
    {
      id: 1,
      heading: 'Zakat',
      icon: DonationIllustration,
    },
    {
      id: 2,
      heading: 'Fidya',
      icon: FidyaIllustration,
    },
    {
      id: 3,
      heading: 'Kafarrah',
      icon: KafaraIllustration,
    },
    {
      id: 4,
      heading: 'Zakat',
      icon: DonationIllustration,
    }
  ]);

  return calculators;
};

export default useCalculators;
