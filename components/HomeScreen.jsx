import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { categories, coffeeItems } from "../data";
import { useState } from "react";
import Carousel from "react-native-snap-carousel";
import CoffeeCard from "./CoffeeCard";

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState(1);
  const [selectedCoffee, setSelectedCoffee] = useState(1);

  return (
    <View className="flex-1 relative bg-white">
      <Image
        source={require("../assets/images/beansBackground1.png")}
        className="w-full absolute -top-5 opacity-10"
        style={{ height: 220 }}
      />
      <SafeAreaView className="flex-1">
        <View className="p-4 flex-row justify-between items-center">
          <Image
            source={require("../assets/images/avatar.png")}
            className="w-9 h-9 rounded-full"
          />
          <View className="flex-row items-center space-x-2">
            <MaterialCommunityIcons
              name="google-maps"
              color="brown"
              size={25}
            />
            <Text className="text-amber-600 text-lg font-bold">Izmir, TR</Text>
          </View>
          <MaterialCommunityIcons name="bell-outline" color="black" size={25} />
        </View>

        <View className="mx-5 mt-14">
          <View className="flex-row justify-center rounded-full p-1 bg-[#e6e6e6]">
            <TextInput
              placeholder="Search.."
              className="p-2 flex-1 font-semibold text-gray-700"
            />
            <TouchableOpacity className="rounded-full p-2 bg-amber-600">
              <MaterialCommunityIcons name="magnify" color="white" size={25} />
            </TouchableOpacity>
          </View>
        </View>

        <View className="px-5 mt-6">
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={(item) => item.id}
            className="overflow-visible"
            renderItem={({ item }) => {
              let isActive = item.id == activeCategory;
              let activeText = isActive ? "text-white" : "text-gray-700";
              return (
                <TouchableOpacity
                  onPress={() => {
                    setActiveCategory(item.id);
                    setSelectedCoffee(item.id);
                  }}
                  className={`p-4 px-5 rounded-full mr-2 shadow  ${
                    isActive ? "bg-amber-800" : "bg-slate-100"
                  }`}>
                  <Text className={`font-semibold ${activeText}`}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <View className="mt-16 py-2">
          <Carousel
            containerCustomStyle={{ overflow: "visible" }}
            data={coffeeItems}
            renderItem={({ item }) => <CoffeeCard item={item} />}
            firstItem={selectedCoffee}
            loop={true}
            inactiveSlideOpacity={0.3}
            inactiveSlideScale={0.77}
            sliderWidth={400}
            itemWidth={250}
            slideStyle={{ display: "flex", alignItems: "center" }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
