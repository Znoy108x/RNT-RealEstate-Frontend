import React from "react";
import { View, StyleSheet ,Image , Text} from "react-native";


// icon imports
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import EvilIcons from "react-native-vector-icons/EvilIcons";

const Card = ({
  custom_image,
  category,
  title,
  location,
  number_of_bed_rooms,
  number_of_bathrooms,
  price,
  time_unit,
  currency,
}) => {
  return (
    <View className="border-[1px] h-[110px] border-gray-200 rounded-2xl p-2 mb-5">
      <View className="flex-row  rounded-md overflow-hidden space-x-4  w-full">
        <Image source={custom_image} className="rounded-md  h-full w-[30%]" />
        <View className="flex-grow">
          <Text className="text-[15px] font-semibold text-gray-700">
            {category}
          </Text>
          <Text className="mb-1 text-xl font-bold text-gray-900">{title}</Text>
          <View className="flex-row space-x-1 items-center">
            <EvilIcons name="location" size={15} color={"#48494B"} />
            <Text className="text-md text-light_gray">{location}</Text>
          </View>
          <View className="flex-row justify-between mt-1 items-center">
            <View className="flex-row items-center mt-2">
              <View className="flex-row space-x-2 items-center mr-5">
                <Ionicons name="ios-bed" size={16} color={"#48494B"} />
                <Text className="font-semibold text-[#48494B]">
                  {number_of_bed_rooms}
                </Text>
              </View>
              <View className="flex-row space-x-2 items-center mr-5">
                <FontAwesome name="bathtub" size={16} color={"#48494B"} />
                <Text className="font-semibold text-[#48494B]">
                  {number_of_bathrooms}
                </Text>
              </View>
            </View>
            <View className="flex-row  items-center">
              <Text className="text-lg font-normal text-dark_gray">
                {currency}
                {price}
              </Text>
              <Text className="text-md font-light text-light_gray">
                /{time_unit}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Card;
