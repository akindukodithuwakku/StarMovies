import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Link } from "expo-router";
import { Text, View, Image, ScrollView } from "react-native";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";

export default function Index() {

  const router = useRouter();


  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full h-full z-0" />
      <ScrollView className="flex-1 z-10"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        minHeight: '100%',
        paddingBottom: 10
      }}>
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
        <SearchBar 
        onPress={() => router.push('/search')}
        placeholder="Search for any movie" 
        />
      </ScrollView>
    </View>
  );
}
