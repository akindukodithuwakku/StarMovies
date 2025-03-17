import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Link } from "expo-router";
import { Text, View, Image, ScrollView, ActivityIndicator, FlatList } from "react-native";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import MovieCard from "@/components/MovieCard";
import React, { Fragment } from 'react';

export default function Index() {

  const router = useRouter();
  
  const {data: movies, 
    loading: moviesLoading, 
    error: moviesError }: { data: any, loading: boolean, error: any } = useFetch(() => fetchMovies({
    query: ''
  }));

  console.log('Movies:', movies);
  console.log('Error:', moviesError);

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full h-full z-0" />
      <ScrollView 
        className="flex-1 z-10"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: '100%',
          paddingBottom: 10
        }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
        
        {moviesLoading ? (
          <ActivityIndicator 
            size="large" 
            color="#fff"
            className="mt-10 self-center"
          />
        ) : moviesError ? (
          <Text className="text-red-500 text-center">
            {moviesError?.message}
          </Text>
        ) : (
          <View className="px-4">
            <SearchBar 
              onPress={(text) => {
                if (text) {
                  router.push(`/search?query=${encodeURIComponent(text)}`);
                }
              }}
              placeholder="Search for any movie" 
            />
            <Text className="text-lg text-white font-bold mt-5 mb-3">
              Popular Movies
            </Text>

            <FlatList
              data={movies}
              renderItem={({item}) => (
                <MovieCard {...item}/>
              )}
              keyExtractor={(item) => item.id.toString()}
              numColumns={3}
              columnWrapperStyle={{
                justifyContent: 'flex-start',
                gap: 8
              }}
              contentContainerStyle={{
                paddingBottom: 100
              }}
              className="mt-2"
              scrollEnabled={false}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
}
