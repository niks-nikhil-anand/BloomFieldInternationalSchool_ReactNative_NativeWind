import React from 'react';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { display: 'none' }
      }}
    >
      <Tabs.Screen 
        name="index"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      {/* Add more tabs as needed */}
    </Tabs>
  );
}