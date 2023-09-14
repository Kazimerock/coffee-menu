import { View, Image, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { coffeeItems } from "../data";
import AnimatedLottieView from "lottie-react-native";

const OrderScreen = (props) => {
  const navigation = useNavigation();
  const [size, setSize] = useState("Small");
  const item = props.route.params;
  const [liked, setLiked] = useState(false);
  const [coffeeAmount, setCoffeeAmount] = useState(1);
  const minusHandler = () => {
    if (coffeeAmount === 1) {
      return;
    }
    setCoffeeAmount(coffeeAmount - 1);
  };

  return (
    <>
      {!item ? (
        <View className="flex-1">
          <StatusBar />
          <Image
            source={require("../assets/images/beansBackground2.png")}
            style={{
              height: 300,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
            }}
            className="w-full absolute"
          />
          <SafeAreaView className="space-y-4">
            <View className="mx-4 flex-row justify-between items-center">
              <TouchableOpacity
                className="mt-10"
                onPress={() => navigation.goBack()}>
                <MaterialCommunityIcons
                  name="arrow-left"
                  color="white"
                  size={34}
                />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
          <View className="flex-1 justify-end items-center p-10">
            <AnimatedLottieView
              key="animation"
              autoPlay
              loop
              className="w-full"
              source={require("../assets/coffeeAnimation.json")}
            />
            <Text className="text-xl text-center text-amber-950 font-semibold">
              Before ordering, please select a coffee from the Home screen.
            </Text>
          </View>
        </View>
      ) : (
        <View className="flex-1">
          <StatusBar />
          <Image
            source={require("../assets/images/beansBackground2.png")}
            style={{
              height: 300,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
            }}
            className="w-full absolute"
          />
          <SafeAreaView className="space-y-4">
            <View className="mx-4 flex-row justify-between items-center">
              <TouchableOpacity
                className="mt-10"
                onPress={() => navigation.goBack()}>
                <MaterialCommunityIcons
                  name="arrow-left"
                  color="white"
                  size={34}
                />
              </TouchableOpacity>

              <TouchableOpacity
                className={`mt-10 rounded-full border-2 p-2 ${
                  liked ? "border-red-500" : "border-white"
                }`}
                onPress={() => setLiked(!liked)}>
                <MaterialCommunityIcons
                  name="heart"
                  color={liked ? "red" : "white"}
                  size={20}
                />
              </TouchableOpacity>
            </View>

            <View className="flex-row justify-center">
              <Image source={item.image} className="h-60 w-60" />
            </View>

            <View
              style={{ backgroundColor: "#C68B59" }}
              className="flex-row items-center rounded-3xl p-1 mx-4 space-x-1 w-16">
              <MaterialCommunityIcons name="star" color="white" size={20} />
              <Text className="text-base font-semibold text-white">
                {item.stars}
              </Text>
            </View>

            <View className="mx-4 flex-row justify-between items-center">
              <Text className="text-2xl font-semibold">{item.name}</Text>
              <Text className="text-2xl font-semibold">
                {size === "Small"
                  ? item.smallPrice * coffeeAmount
                  : size === "Medium"
                  ? item.mediumPrice * coffeeAmount
                  : item.largePrice * coffeeAmount}
                €
              </Text>
            </View>

            <View className="space-y-2 mx-4">
              <Text className="text-lg font-bold">Choose Size</Text>

              <View className="flex-row justify-between">
                <TouchableOpacity
                  onPress={() => setSize("Small")}
                  className={`p-3 px-8 rounded-full ${
                    size === "Small" ? "bg-[#C68B59]" : "bg-slate-300"
                  }`}>
                  <Text
                    className={`text-white ${
                      size === "Small" ? "text-white" : "text-gray-700"
                    }`}>
                    Small
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setSize("Medium")}
                  className={`p-3 px-8 rounded-full ${
                    size === "Medium" ? "bg-[#C68B59]" : "bg-slate-300"
                  }`}>
                  <Text
                    className={`text-white ${
                      size === "Medium" ? "text-white" : "text-gray-700"
                    }`}>
                    Medium
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setSize("Large")}
                  className={`p-3 px-8 rounded-full ${
                    size === "Large" ? "bg-[#C68B59]" : "bg-slate-300"
                  }`}>
                  <Text
                    className={`text-white ${
                      size === "Large" ? "text-white" : "text-gray-700"
                    }`}>
                    Large
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="mx-4 space-y-2 h-28">
              <Text className="text-lg font-bold">About Coffee</Text>
              <Text className="text-gray-600">{item.desc}</Text>
            </View>

            <View className="flex-row justify-between items-center mx-4 mb-2">
              <View className="flex-row items-center space-x-1">
                <Text className="text-base text-gray-700 font-semibold opacity-60">
                  Volume
                </Text>
                <Text className="text-base text-black font-semibold">
                  {item.volume}
                </Text>
              </View>

              <View className="flex-row items-center space-x-4 border-gray-500 border rounded-full p-1 px-4">
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="minus"
                    color="brown"
                    size={20}
                    onPress={minusHandler}
                  />
                </TouchableOpacity>
                <Text className="font-extrabold text-xl text-amber-600">
                  {coffeeAmount}
                </Text>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="plus"
                    color="brown"
                    size={20}
                    onPress={() => setCoffeeAmount(coffeeAmount + 1)}
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity className=" rounded-full p-2 bg-[#C68B59]">
                <Text className="text-center text-white text-base font-semibold">
                  Order Now
                </Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </View>
      )}
    </>
  );
};

export default OrderScreen;
