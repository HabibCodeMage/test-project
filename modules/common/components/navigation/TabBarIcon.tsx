import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { AutoDonateIcon, HomeFillIcon, HomeIcon, PortfolioIcon, ProfileIcon, RoundUpIcon } from '../../icons';
import { Colors } from '../../constants/Colors';

interface TabBarIconProps extends IconProps<string> {
  name: string;
}

export function TabBarIcon({ style, name, ...rest }: TabBarIconProps) {
  const customIcons: Record<string, JSX.Element> = {
    'home': <HomeFillIcon size={28} style={[ {marginBottom: 20} , style]} {...rest} />,
    'home-outline': <HomeIcon size={28} style={[{marginBottom: 20},style]} {...rest} />,
    'auto-donate': <AutoDonateIcon size={28} style={[ {marginBottom: 20},style]} {...rest} fill={Colors.light.orange} />,
    'auto-donate-outline': <AutoDonateIcon size={28} style={[{marginBottom: 20},style]} {...rest}/>,
    'round-up': <RoundUpIcon  size={28} style={[ {marginBottom: 20},style]} {...rest} stroke={Colors.light.orange} />,
    'round-up-outline': <RoundUpIcon  size={28} style={[ {marginBottom: 20},style]} {...rest} />,
    'portfolio': <PortfolioIcon size={28} style={[{marginBottom: 20},style]} {...rest} stroke={Colors.light.orange} fill={Colors.light.orange} />,
    'portfolio-outline': <PortfolioIcon size={28} style={[ {marginBottom: 20},style]} {...rest} />,
    'profile': <ProfileIcon size={28} style={[{marginBottom: 20},style]} {...rest} stroke={Colors.light.orange} />,
    'profile-outline': <ProfileIcon size={28} style={[ {marginBottom: 20},style]} {...rest} />,

  };

  // Check if the name matches a custom icon; otherwise, use Ionicons
  const IconComponent = customIcons[name] || <Ionicons name={name as any} size={28} style={[{ marginBottom: 20 }, style]} {...rest} />;

  return IconComponent;
}
