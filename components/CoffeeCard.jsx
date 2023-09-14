import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const CoffeeCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        borderRadius: 40,
        backgroundColor: "#C68B59",
        height: 350,
        width: 250,
      }}>
      <View
        style={{
          shadowColor: "black",
          shadowRadius: 30,
          shadowOffset: { width: 0, height: 40 },
          shadowOpacity: 0.8,
        }}
        className="flex-row justify-center -mt-7">
        <Image source={item.image} className="w-40 h-40" />
      </View>

      <View className="px-5 mt-5 space-y-3">
        <Text className="text-3xl text-white font-semibold z-10">
          {item.name}
        </Text>

        <View
          style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
          className="flex-row items-center rounded-3xl p-1 px-2 space-x-1 w-16">
          <MaterialCommunityIcons name="star" color="white" size={20} />
          <Text className="text-base font-semibold text-white">
            {item.stars}
          </Text>
        </View>

        <View className="flex-row space-x-1 z-10 mb-4">
          <Text className="text-base text-white font-semibold opacity-60">
            Volume
          </Text>
          <Text className="text-base text-white font-semibold">
            {item.volume}
          </Text>
        </View>

        <View
          style={{
            shadowColor: "black",
            shadowRadius: 25,
            shadowOffset: { width: 0, height: 40 },
            shadowOpacity: 0.8,
          }}
          className="flex-row justify-between items-center">
          <Text className="text-white font-bold text-lg">{item.smallPrice} €</Text>
          <TouchableOpacity
            style={{
              shadowColor: "black",
              shadowRadius: 25,
              shadowOffset: { width: 0, height: 40 },
              shadowOpacity: 0.8,
            }}
            className="p-4 bg-white rounded-full"
            onPress={() => navigation.navigate("Order", {...item})}>
            <MaterialCommunityIcons name="plus" color="brown" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CoffeeCard;
