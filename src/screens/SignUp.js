import React from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  SafeAreaView,
  Image,
} from "react-native";

const SignUp = ({navigation}) => {
  return (
    <SafeAreaView className="bg-[#F6EDEE] ">
      <View className="bg-[#F6EDEE] w-full h-full relative">
        <View className="w-full absolute bottom-16  ">
          <View className="mx-auto items-center mb-20">
            <View>
              <Image
                source={require("../assets/images/home_two.png")}
                className="h-20 w-20"
              />
            </View>
            <Text className="text-5xl font-bold mt-7 text-gray-900">Homie</Text>
          </View>
          <Text className="text-center mb-12 text-2xl mx-7 mt-20 font-medium  text-[#A6A6A8]">
            Homie is reimagining real estate to make it easier to unlo{" "}
          </Text>
          <Pressable className="bg-[#B53C43] w-[80%] mx-auto rounded-md py-3" onPress={()=>navigation.navigate("Create Account")}>
            <View className="flex-row items-center justify-center">
              <Text className="text-[#F5E8E9] text-md">Create Account</Text>
            </View>
          </Pressable>
          <View className="flex-row space-x-3 items-center mx-auto mt-6">
            <Text className="text-[#A6A6A8] text-md">Have a account ?</Text>
            <Pressable onPress={()=>navigation.navigate("Login")}>
              <Text className="text-[#B53C43] text-md">Log in</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default SignUp;
