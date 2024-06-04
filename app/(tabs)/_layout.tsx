import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/modules/common/components/navigation/TabBarIcon';
import { Colors } from '@/modules/common/constants/Colors';
import { ViewStyle } from 'react-native';
import { rem } from '@/modules/common/utils';

export default function TabLayout() {
  
  const TabBarStyle: ViewStyle = {
    borderWidth: rem(2),
    borderTopLeftRadius: rem(18),
    borderTopRightRadius: rem(18),
    borderColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 32,
    height:  rem(80),
    // iOS shadow properties
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    // Android shadow property
    elevation: 16,
  };


  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: TabBarStyle,
        tabBarItemStyle: {marginBottom: 10},
        tabBarLabelStyle: {fontFamily: 'ProximaNovaSemiBold', fontSize: rem(12), fontWeight: '400'},
        tabBarActiveTintColor: Colors.light.textBlack,        
      }
    }
     >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color}  />
          ),
        }}
      />
      <Tabs.Screen
        name="auto-donate"
        options={{
          title: 'Auto Donate',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'auto-donate' : 'auto-donate-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="round-up"
        options={{
          title: 'Round up',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'round-up' : 'round-up-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="portfolio"
        options={{
          title: 'Portfolio',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'portfolio' : 'portfolio-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'profile' : 'profile-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
