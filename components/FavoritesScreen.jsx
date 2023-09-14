import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AnimatedLottieView from "lottie-react-native";

const FavoritesScreen = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <View className="p-10">
      <Text className="text-xl text-amber-950  text-center font-semibold">Since this is a demo version, you do not have permission to access this page.</Text>
      </View>
        <AnimatedLottieView
          key="animation"
          autoPlay
          loop
          className="w-full"
          source={require("../assets/animation.json")}
        />
    </SafeAreaView>
  );
};

export default FavoritesScreen;
