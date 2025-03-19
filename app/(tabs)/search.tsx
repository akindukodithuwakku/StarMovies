import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native'
// Removed unused import
import React, { useState } from 'react'
import {images} from "@/constants/images" // Replace with the correct path to your images module or file
import MovieCard from "@/components/MovieCard"; // Replace with the correct path to your MovieCard component
import { SearchBar } from 'react-native-screens';
import useFetch from '@/services/useFetch';
import { fetchMovies } from '@/services/api';


const search = () => {
 
  const [SearchQuery, setSearchQuery] = useState('');

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,

  } = useFetch(() => fetchMovies({
    query: ''
  }), false)


  return (
    <View className='flex-1 bg-primary'>
      <Image source={images.bg} className='flex-1 absolute w-full h-full z-0 ' resizeMode="cover" />

      <FlatList data={movies || []} 
        keyExtractor={(item) => item.id.toString()}
       renderItem={({item}) => (
          <MovieCard {...item}/>

        )}
        className='px-4'
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: 'center',
          gap: 16,
          marginVertical: 16
        }}
        contentContainerStyle={{
          paddingBottom: 100
        }}
        ListHeaderComponent={
          <>
          <View className='w-full flex-row justify-center items-center mt-20 '>

            <Image className='w-12 h-12' source={images.bg || null} />
          </View>

          <View className='my-4'>
            <SearchBar placeholder='Search Movies...'
            value={SearchQuery}
            onChangeText={(text: string) => setSearchQuery(text)}
              
             />

          </View>

          {moviesLoading && (

            <ActivityIndicator className='mt-4' size='large' color='#fff' />
          )}

          {moviesError && (
            <Text className='text-white text-center mt-4'>An error occurred</Text>
          )}

          {!moviesLoading && !moviesError && SearchQuery.trim() && movies?.length > 0 && (
            <Text>
              Search results for{' '}
              <Text className='text-accent'>{SearchQuery}</Text>
            </Text>
          )}
          </>
        }

        

        
        />
    </View>
  )
}

export default search