import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ThemedText } from './ThemedText'
import { LogoIcon } from '../icons'
import { Colors } from '../constants/Colors'
import { rem } from '../utils'
import { FontFamily } from '../constants/FontFamily'

export default function Logo() {
  return (
    <View style={styles.container}>
      <LogoIcon 
      />
      <View style={styles.textContainer}>
        <ThemedText lightColor={Colors.light.orange} style={styles.pennyText}>
          penny
        </ThemedText>
        <ThemedText lightColor={Colors.light.orange} style={styles.appealText}>
          appeal
        </ThemedText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  textContainer: {
    position: 'absolute',
    left: 25,
    top: 30
  },
  pennyText: {
    fontSize: rem(32),
    fontFamily: FontFamily.Gothic
  },
  appealText: {
    fontSize: rem(26),
    fontFamily: FontFamily.PoppinsBold
  }
});
