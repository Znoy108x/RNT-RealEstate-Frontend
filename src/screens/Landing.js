import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
  Pressable,
} from "react-native";

const Landing = ({ navigation }) => {
  return (
    <>
      <View className="relative flex-grow bg-[#FEF7EC]">
        <View className="absolute top-0 h-[350px] w-full ">
          <Image
            source={require("../assets/images/l3.webp")}
            className="h-full w-full"
          />
        </View>
        <View className="absolute bottom-0 w-full h-[500px] pt-10">
          <View className="">
            <Text className="text-6xl font-black text-center text-[#E33D44]">
              Discover dream home
            </Text>
            <Text className="text-4xl font-black text-center text-[#E33D44] mt-1">
               from Smartphone
            </Text>
            <Text className="text-[18px] font-light text-center mx-10 text-gray-600 mt-6">
              Our properties the masterpice for every client with lastiong value
            </Text>
          </View>
          <Pressable
            className=" bg-[#E33D44] w-[80%] mx-auto  h-10 rounded-lg z-50 mt-[100px]"
            onPress={() => navigation.navigate("SignUp")}
          >
            <View className="flex items-center justify-center flex-1">
              <Text className="text-white text-xl font-semibold tracking-wider">
                Get Started
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default Landing;
