import React from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import { Pressable } from "react-native";

// icons imports
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";

// components imports
import BillingDetails from "../components/About/BillingDetails";

const About = ({ route, navigation }) => {
  const HouseData = route.params.data;
  return (
    <View className="flex-grow bg-white">
      <View className="relative ">
        <View className="h-[330px] w-full relative">
          <Image
            source={{
              uri: "https://a0.muscache.com/im/pictures/miso/Hosting-51592601/original/0e162f34-abc9-431a-8258-6e2505a7fc35.jpeg?im_w=720",
            }}
            className="w-full h-full"
          />
          <View className="w-full h-[100px]  absolute bottom-0 flex-row items-center py-2 space-x-3 p-2">
            <View className="h-[98%] w-[100px] border-2  rounded-xl   border-white overflow-hidden">
              <Image
                source={{
                  uri: "https://a0.muscache.com/im/pictures/miso/Hosting-792998192311502493/original/0098f012-5168-4ca2-bf07-edf7800aae45.jpeg?im_w=720",
                }}
                className="w-full h-full  rounded-xl "
              />
            </View>

            <View className="h-[98%] w-[100px] border-2  rounded-xl   border-white overflow-hidden">
              <Image
                source={{
                  uri: "https://a0.muscache.com/im/pictures/miso/Hosting-792998192311502493/original/3f30ec93-402d-4c20-9545-bea9eccb9ab8.jpeg?im_w=720",
                }}
                className="w-full h-full  rounded-xl "
              />
            </View>
          </View>
        </View>
        <View className="flex-row justify-between absolute top-16 w-full px-4">
          <View className="bg-white rounded-full p-2">
            <MaterialIcons name="arrow-back" size={20} />
          </View>
          <View className="bg-white rounded-full p-2">
            <Entypo name="dots-three-horizontal" size={20} />
          </View>
        </View>
      </View>
      <View className="w-full h-[424px] ">
        <ScrollView className="pb-7" showsVerticalScrollIndicator={false}>
          {/* House Data */}
          <View className="grid grid-cols-2 grid-rows-2 pt-4 px-2">
            {/* house information */}
            <Text className="text-md font-medium text-red-700">
              {HouseData.category}
            </Text>
            {/* house title */}
            <View className="flex-row justify-between items-center pr-4">
              <Text className="text-3xl font-medium text-gray-800">
                {HouseData.title}
              </Text>
              <Entypo name="heart" size={23} color={"#B53C43"} />
            </View>
            {/* house location */}
            <Text className="text-[17px] text-slate-700 font-medium">
              {HouseData.location}
            </Text>
            {/* icons container */}
            <View className="mt-3 flex-row space-x-[100px] items-center pl-[2.9px]">
              <View className="flex-row  items-center space-x-3">
                <Ionicons name="ios-bed" size={12} color={"#6b7280"} />
                <Text className="text-md text-gray-500">
                  {HouseData.number_of_bed_rooms} Bedrooms
                </Text>
              </View>
              <View className="flex-row  items-center space-x-3">
                <FontAwesome name="bathtub" size={12} color={"#6b7280"} />
                <Text className="text-md text-gray-500">
                  {HouseData.number_of_bathrooms} Bathrooms
                </Text>
              </View>
            </View>

            {/* icon 2 container */}
            <View className="mt-2 flex-row space-x-[107px] items-center pl-1">
              <View className="flex-row  items-center space-x-3">
                <FontAwesome5
                  name="vector-square"
                  size={12}
                  color={"#6b7280"}
                />
                <Text className="text-md text-gray-500">
                  {HouseData.square_feet} Sqft
                </Text>
              </View>
              <View className="flex-row  items-center space-x-3">
                <MaterialCommunityIcons
                  name="garage"
                  size={18}
                  color={"#6b7280"}
                />
                <Text className="text-md text-gray-500">
                  {HouseData.garage} Garage
                </Text>
              </View>
            </View>
          </View>
          {/* Billing Bar */}
          <BillingDetails data={HouseData} />
        </ScrollView>
      </View>

      {/* bottom bar */}
      <View className="absolute bottom-0 flex-row justify-between w-full border-t-[0.2px] border-light_gray h-[90px] px-3 pt-2 z-50 bg-white">
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aHVtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
          }}
          className="w-10 h-10 rounded-full"
        />
        <View className="">
          <Text className="text-xl text-gray-800 font-semibold">
            Abhay Bisht
          </Text>
          <View className="flex-row items-center space-x-1">
            <AntDesign name="star" size={16} color={"#EA7F01"} />
            <Text className="text-gray-600 font-medium">4.5</Text>
          </View>
        </View>
        <Pressable onPress={() => navigation.navigate("Payment" , {
          data : HouseData
        })}>
          <View className="bg-dark_red   px-5 py-2 rounded-lg">
            <Text className="text-rose-50 text-lg">Contact Agent</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default About;
