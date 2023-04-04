import React from "react";
import { View, StyleSheet, Text } from "react-native";

// components imports
import Ammenities from "./Ammenities";

const BillingDetails = ({ data }) => {
  return (
    <View className="pt-3  ">
      <View className="w-[90%] rounded-2xl p-3 mx-auto bg-emerald-50 relative h-[130px]">
        <View className="bg-emerald-700  w-[120px] rounded-md px-2 py-1 absolute top-3 right-3">
          <Text className="text-emerald-100">Official Hotel Site</Text>
        </View>
        <View className="absolute bottom-7 left-5">
          <Text className="text-emerald-900 text-sm font-medium tracking-wide">
            · Free Cancellation
          </Text>
          <Text className="text-emerald-900 text-sm font-medium tracking-wide">
            · Free Breakfast
          </Text>
          <Text className="text-emerald-900 text-sm font-medium tracking-wide">
            · Pay at the property
          </Text>
        </View>
        <Text className="absolute right-5 bottom-7 text-3xl font-bold text-emerald-800">
          ₹ {data.price}
          <Text className="text-sm ">/{data.time_unit}</Text>
        </Text>
      </View>

      {/* Amenities */}
      <Ammenities data={data}/>
    </View>
  );
};

export default BillingDetails;