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
                minHeight: 60,
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
      <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 8 }}>
      <Image source={icon} style={{ tintColor: '#A1A1A1', width: 22, height: 22 }} />
    </View>

  );
};

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: 'auto',
          height: 70,
          justifyContent: 'center',
          alignItems: 'center',
        },

        tabBarStyle: {
          backgroundColor: '#0f0D23',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderColor: '#0f0D23',
          overflow: 'hidden',
          height: 70,
          paddingVertical: 8,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.1,
          shadowRadius: 20,
        },
        
        }} >
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