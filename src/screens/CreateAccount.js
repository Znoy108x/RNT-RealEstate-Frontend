import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  Pressable,
} from "react-native";

const CreateAccount = ({ navigation }) => {
  const SignUpButtons = (custom_text, icon) => {
    return (
      <Pressable
        onPress={() => navigation.navigate("Home_Bottom_Navigation_Tabs")}
      >
        <View className="flex-row space-x-4 items-center bg-white rounded-xl shadow-lg pl-4">
          <Image source={custom_text} className="h-16 w-16" />
          <Text className="text-[15px] text-gray-900 tracking-wider">
            {icon}
          </Text>
        </View>
      </Pressable>
    );
  };
  return (
    <SafeAreaView className="bg-light_orange">
      <View className="bg-light_orange w-full h-full">
        <View className="mx-auto items-center mt-10 mb-10 ">
          <View className="flex-row">
            <Text className="text-4xl font-black tracking-wider">
              Create an{" "}
            </Text>
            <Text className="text-dark_orange text-4xl font-black tracking-wide">
              Account
            </Text>
          </View>
          <Image
            source={require("../assets/images/two.png")}
            className="w-[390px] h-[240px] object-cover mt-6 rounded-xl"
          />
        </View>
        <View className="w-[80%] mx-auto space-y-4">
          {SignUpButtons(
            require("../assets/images/facebook.gif"),
            "Continue with Facebook"
          )}
          {SignUpButtons(
            require("../assets/images/google.gif"),
            "Continue with Google"
          )}
          {SignUpButtons(
            require("../assets/images/apple.gif"),
            "Continue with Apple"
          )}
          <Text className="mx-auto my-5 text-light_gray text-xl">or</Text>
          {SignUpButtons(
            require("../assets/images/gmail.gif"),
            "Sign Up with Email"
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default CreateAccount;
