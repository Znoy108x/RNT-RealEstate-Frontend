import React from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";

const Single_Category = (custom_image, custom_text) => {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed && {
          opacity: 0.25,
        }
      }
    >
      <View className="items-center">
        <View className="rounded-full p-1 ">
          <Image source={custom_image} className="w-16 h-16" />
        </View>
        <Text className="text-md text-gray-600">{custom_text}</Text>
      </View>
    </Pressable>
  );
};

const Categories = () => {
  return (
    <View className="flex-row space-x-4 mt-5  border-b-[1px] border-gray-200 pb-3">
      {Single_Category(require("../../assets/images/house.png"), "House")}
      {Single_Category(
        require("../../assets/images/appartment.png"),
        "Appartment"
      )}
      {Single_Category(require("../../assets/images/land.png"), "Land")}
      {Single_Category(require("../../assets/images/town.png"), "Town House")}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Categories;
