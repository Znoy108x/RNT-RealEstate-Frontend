import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  SafeAreaView,
  TextInput,
  Image,
} from "react-native";

const FacebookLogin = () => {};
const GoogleLogin = () => {};
const AppleLogin = () => {};

const FGA = (Icon, handlerFunc) => {
  return (
    <Pressable onPress={handlerFunc}>
      <View className="bg-white rounded-xl shadow-xl">
        <Image source={Icon} className="h-16 w-16" />
      </View>
    </Pressable>
  );
};

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView className="bg-light_orange">
      <View className="bg-light_orange w-full h-full">
        <View className="mx-auto items-center mt-3">
          <Image
            source={require("../assets/images/login.gif")}
            className="h-[190px] w-[250px] mb-10"
          />
          <Text className="text-4xl font-black tracking-wider">
            Welcome Back!
          </Text>
        </View>
        <View className="space-y-6  mx-auto w-[80%] mt-20">
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder={"Email"}
            className="pl-5 py-4 bg-white tracking-wide text-md rounded-md"
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder={"Password"}
            className="pl-5 py-4 bg-white tracking-wide text-md rounded-md "
          />
        </View>
        <Text className="mx-auto text-light_gray text-xl my-7">or</Text>
        <View className="flex-row space-x-7 items-center mx-auto ">
          {FGA(require("../assets/images/facebook.gif"), FacebookLogin)}
          {FGA(require("../assets/images/google.gif"), GoogleLogin)}
          {FGA(require("../assets/images/apple.gif"), AppleLogin)}
        </View>
        <View className="flex-row items-center space-x-2 mt-5 mx-auto">
          <Text className="text-lg text-light_gray">
            Don't have an account ?
          </Text>
          <Pressable onPress={() => navigation.navigate("Create Account")}>
            <Text className="text-lg text-dark_orange">Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Login;
