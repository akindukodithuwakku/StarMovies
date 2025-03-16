import { View, Image, TextInput } from 'react-native';
import React from 'react';
import { icons } from '@/constants/icons';

interface SearchBarProps {
    placeholder: string;
    onPress: () => void;
}

const SearchBar = ({ placeholder, onPress }: SearchBarProps) => {
    return (
        <View className="flex-row items-center bg-light-100 rounded-full px-5 py-2 shadow-md">
            <Image
                source={icons.search}
                style={{ width: 20, height: 20, tintColor: '#ab8bff' }}
                resizeMode="contain"
            />
            <TextInput
                onPress={onPress}
                placeholder={placeholder}
                placeholderTextColor="#a8b5db"
                onChangeText={onPress}
                style={{ flex: 1, marginLeft: 10, color: '#000', backgroundColor: 'transparent' }}
                className="text-base"
            />
        </View>
    );
};

export default SearchBar;