import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

// icon imports
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Ammenities = ({ data }) => {
  return (
    <View className=" pt-5 px-4 pr-10 h-[200px] overflow-hidden">
      <Text className="text-2xl font-bold mb-3 text-gray-800">Amenities</Text>
      <View className="flex-row flex-wrap gap-y-3">
        <View className="w-1/2 flex-row space-x-2 items-center">
          <FontAwesome5 name="wifi" size={18} color={"#9ca3af"} />
          <Text
            className={`text-[16px] tracking-wider text-[#9ca3af] ${
              !data.is_wifi_lobby && "line-through"
            }`}
          >
            Wifi in lobby
          </Text>
        </View>
        <View className="w-1/2 flex-row space-x-2 items-center">
          <FontAwesome5 name="wifi" size={18} color={"#9ca3af"} />
          <Text
            className={`text-[16px] tracking-wider text-[#9ca3af] ${
              !data.is_wifi_rooms && "line-through"
            }`}
          >
            Wifi in rooms
          </Text>
        </View>

        <View className="w-1/2 flex-row space-x-2 items-center">
          <FontAwesome5 name="swimming-pool" size={18} color={"#9ca3af"} />
          <Text
            className={`text-[16px] tracking-wider text-[#9ca3af] ${
              !data.is_pool && "line-through"
            }`}
          >
            Pool
          </Text>
        </View>

        <View className="w-1/2 flex-row space-x-2 items-center">
          <Fontisto name="blood-drop" size={18} color={"#9ca3af"} />
          <Text
            className={`text-[16px] tracking-wider text-[#9ca3af] ${
              !data.is_spa && "line-through"
            }`}
          >
            Spa
          </Text>
        </View>
        <View className="w-1/2 flex-row space-x-2 items-center">
          <FontAwesome5 name="parking" size={18} color={"#9ca3af"} />
          <Text
            className={`text-[16px] tracking-wider text-[#9ca3af] ${
              !data.is_parking && "line-through"
            }`}
          >
            Parking
          </Text>
        </View>

        <View className="w-1/2 flex-row space-x-2 items-center">
          <MaterialIcons name="pets" size={18} color={"#9ca3af"} />
          <Text
            className={`text-[16px] tracking-wider text-[#9ca3af] ${
              !data.is_pets && "line-through"
            }`}
          >
            Pets
          </Text>
        </View>

        <View className="w-1/2 flex-row space-x-2 items-center">
          <FontAwesome name="snowflake-o" size={18} color={"#9ca3af"} />
          <Text
            className={`text-[16px] tracking-wider text-[#9ca3af] ${
              !data.is_ac && "line-through"
            }`}
          >
            Ac
          </Text>
        </View>

        <View className="w-1/2 flex-row space-x-2 items-center">
          <MaterialCommunityIcons name="balcony" size={18} color={"#9ca3af"} />
          <Text
            className={`text-[16px] tracking-wider text-[#9ca3af] ${
              !data.is_balcony && "line-through"
            }`}
          >
            Balcony
          </Text>
        </View>

        <View className="w-1/2 flex-row space-x-2 items-center">
          <MaterialCommunityIcons
            name="table-chair"
            size={18}
            color={"#9ca3af"}
          />
          <Text
            className={`text-[16px] tracking-wider text-[#9ca3af] ${
              !data.is_diningarea && "line-through"
            }`}
          >
            Dining Area
          </Text>
        </View>

        <View className="w-1/2 flex-row space-x-2 items-center">
          <FontAwesome5 name="dumbbell" size={18} color={"#9ca3af"} />
          <Text
            className={`text-[16px] tracking-wider text-[#9ca3af] ${
              !data.isGym && "line-through"
            }`}
          >
            Gym
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Ammenities;
