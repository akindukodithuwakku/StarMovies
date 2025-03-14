// filepath: c:\Users\akind\OneDrive\Desktop\movies\app\(tabs)\_layout.tsx
import { View, Text, ImageBackground, Image } from 'react-native';
import { Tabs } from 'expo-router';
import React from 'react';
import { images } from '@/constants/images';
import { icons } from '@/constants/icons';

const Icons = ({focused, title, icon}) => { // reusable custom component
  
    if (focused) { // if the tab is focused

        return (
            <ImageBackground
            source={images.highlight}
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                overflow: 'hidden',
                borderRadius: 9999,
                minWidth: 112,
                minHeight: 56,
            }}
            >
            <Image
                source={icon}
                style={{ tintColor: '#151312', width: 20, height: 20 }}
            />
            <Text className='text-primary text-base font-semibold'>{title}</Text>
            </ImageBackground>
        );
    }
    return (
        <Image
        source={icon}
        style={{ tintColor: '#151312', width: 20, height: 20 }}
        />
  );
};

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          headerShown: false,
            tabBarIcon: ({ focused }) => (
                <Icons 
                focused={focused}
                icon={icons.person}
                title="Profile"
                />
            )
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          title: "saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return <Icons
                  focused={focused}
                  icon={icons.save}
                  title="Saved" />;
          }
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Icons 
              focused={focused}
              icon={icons.search}
              title="Search"
              />
          )
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Icons 
            focused={focused}
            icon={icons.home}
            title="Home"
            />
          )
        }}
      />
    </Tabs>
  );
};

export default _layout;