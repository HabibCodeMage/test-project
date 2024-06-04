import { PixelRatio, Dimensions } from 'react-native';
import { baseDevice, baseFontSize, maxFontScaleFactor } from '../constants';

const { width, height } = Dimensions.get('window');
const isLandscape = width > height;
const base = isLandscape ? height : width;

export const vw = (widthPercent: number | string): number => {
  const elementWidth = typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return Math.floor((width / 100) * elementWidth);
};

export const vh = (heightPercent: number | string): number => {
  const elementHeight = typeof heightPercent === 'number' ? heightPercent : parseFloat(heightPercent);
  return Math.floor((height / 100) * elementHeight);
};

export const wp = (widthPercent: number | string): number => {
  const elementWidth = typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((width * elementWidth) / 100);
};

export const hp = (heightPercent: number | string): number => {
  const elementHeight = typeof heightPercent === 'number' ? heightPercent : parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((height * elementHeight) / 100);
};

export const rem = (size: number | string = 0): number => {
  let multiplier = 1;
  if (Math.max(height, width) < baseDevice.height) {
    multiplier = 0.9;
  }
  const elementSize = typeof size === 'number' ? size : parseFloat(size);
  return Math.floor((base / baseDevice.width) * elementSize * multiplier);
};

export const rf = (size: number | string = 0): number => {
  const elementSize = typeof size === 'number' ? size : parseFloat(size);
  const scaledFontSize = Math.min(baseFontSize * maxFontScaleFactor, elementSize);
  return scaledFontSize;
};
