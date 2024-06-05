import { AutoDonateFill, PortFolioFill, QuickDonateIcon, RoundUpFillIcon } from '@/modules/common/icons';
import { useState } from 'react';
import { SvgProps } from 'react-native-svg';

export interface DonationPlan {
  id: number;
  heading: string;
  icon: React.FC<SvgProps>;
  body: string;
}

const useDonationPlans = () => {
  const [donationPlans, setDonationPlans] = useState<DonationPlan[]>([
    {
      id: 1,
      heading: 'Round up',
      icon: RoundUpFillIcon,
      body: '$25 Round Up Last Month',
    },
    {
      id: 2,
      heading: 'Quick Donate',
      icon: QuickDonateIcon,
      body: '5 Days Since Last Donation',
    },
    {
      id: 3,
      heading: 'Akhirah Portfolio',
      icon: PortFolioFill,
      body: '5 Campaigns Supported',
    },
    {
      id: 4,
      heading: 'Auto Donate',
      icon: AutoDonateFill,
      body: 'Next donation: Palestine Relief',
    },
  ]);

  return donationPlans;
};

export default useDonationPlans;
