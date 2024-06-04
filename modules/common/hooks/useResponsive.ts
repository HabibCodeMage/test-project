import { useWindowDimensions, PixelRatio, Platform } from 'react-native';
import { baseDevice, baseFontSize, breakpoints, maxFontScaleFactor, BreakpointGroups } from '../constants';

interface ResponsiveDesign {
  isLandscape: boolean;
  isPortrait: boolean;
  wp: (widthPercent: number | string) => number;
  hp: (heightPercent: number | string) => number;
  vw: (widthPercent: number | string) => number;
  vh: (heightPercent: number | string) => number;
  rem: (size: number | string) => number;
  rf: (size: number | string) => number;
  isIOS: boolean;
  isAndroid: boolean;
  breakpointGroup: string;
}

const useResponsive = (): ResponsiveDesign => {
  const { width, height } = useWindowDimensions();

  const isLandscape = width > height;
  const isPortrait = width < height;

  const getBreakpointGroup = (): BreakpointGroups | 'default' => {
    for (const group in breakpoints) {
      const breakpointGroup = group as BreakpointGroups;
      if (width >= breakpoints[breakpointGroup][0] && width <= breakpoints[breakpointGroup][1]) {
        return breakpointGroup;
      }
    }
    return 'default';
  };

  const breakpointGroup = getBreakpointGroup();

  const wp = (widthPercent: number | string): number => {
    const elementWidth = typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel((width * elementWidth) / 100);
  };

  const hp = (heightPercent: number | string): number => {
    const elementHeight = typeof heightPercent === 'number' ? heightPercent : parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel((height * elementHeight) / 100);
  };

  const vw = (widthPercent: number | string): number => {
    const elementWidth = typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
    return Math.floor((width / 100) * elementWidth);
  };

  const vh = (heightPercent: number | string): number => {
    const elementHeight = typeof heightPercent === 'number' ? heightPercent : parseFloat(heightPercent);
    return Math.floor((height / 100) * elementHeight);
  };

  const base = isLandscape ? height : width;

  const rem = (size: number | string = 0): number => {
    let multiplier = 1;
    if (Math.max(height, width) < baseDevice.height) {
      multiplier = 0.9;
    }
    const elementSize = typeof size === 'number' ? size : parseFloat(size);
    return Math.floor((base / baseDevice.width) * elementSize * multiplier);
  };

  const rf = (size: number | string = 0): number => {
    const elementSize = typeof size === 'number' ? size : parseFloat(size);
    const scaledFontSize = Math.min(baseFontSize * maxFontScaleFactor, elementSize);
    return scaledFontSize;
  };

  const isIOS = Platform.OS === 'ios';
  const isAndroid = Platform.OS === 'android';

  return {
    isLandscape,
    isPortrait,
    wp,
    hp,
    vw,
    vh,
    rem,
    rf,
    isIOS,
    isAndroid,
    breakpointGroup,
  };
};

export default useResponsive;
