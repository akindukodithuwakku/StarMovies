import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 3; // 48 = padding (16 * 2) + gaps between cards (8 * 2)

const MovieCard = ({id, poster_path, title, vote_average, release_date} : Movie) => {
  return (
    <View style={{ width: cardWidth }}>
      <Link href={`/movies/${id}`} asChild>
        <TouchableOpacity className="mx-1">
          <Image 
            source={{
              uri: poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : 'https://via.placeholder.co/600*400/1a1a1a/ffffff.png'
            }} 
            style={{
              width: cardWidth - 8,
              height: (cardWidth - 8) * 1.5,
              borderRadius: 8
            }}
            resizeMode="cover"
          />
          <Text 
            numberOfLines={1} 
            className="text-white font-bold text-sm mt-2"
          >
            {title}
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  )
}

export default MovieCard