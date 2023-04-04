import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Pressable,
} from "react-native";

// icon imports
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";

const Profile = () => {
  return (
    <SafeAreaView className="bg-white">
      <View className="px-5 bg-white h-full w-full">
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="text-4xl font-bold text-gray-900 mt-3">Profile</Text>
          <View className="flex-row justify-between items-center mt-4 border-b-[1px] border-gray-200 pb-3">
            <View className="flex-row space-x-7 items-center ">
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1596434300655-e48d3ff3dd5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
                }}
                className="h-10 w-10 rounded-full object-cover"
              />
              <View>
                <Text className="text-2xl font-semibold text-gray-800">
                  Abhay
                </Text>
                <Text className="text-light_gray font-semibold">
                  Show Profile
                </Text>
              </View>
            </View>
            <AntDesign name="right" size={20} />
          </View>
          {/* banner */}
          <View className="w-full  mx-auto rounded-2xl shadow-md flex-row items-center bg-white mt-6 pl-4 pr-3 h-[130px]">
            <View className="w-[60%]">
              <Text className="text-xl font-bold text-gray-800">
                Homie your place
              </Text>
              <Text className="mt-2 text-gray-600">
                it's simple to get set up and start earning
              </Text>
            </View>
            <Image
              source={require("../assets/images/home.png")}
              className="h-28 w-28"
            />
          </View>

          {/* settings  */}
          <View>
            <Text className="text-2xl mt-7 text-gray-900">Settings</Text>
            <View className="flex-row justify-between items-center mt-5 border-b-[1px] border-gray-200 pb-2">
              <View className="flex-row space-x-4 items-center">
                <MaterialCommunityIcons
                  name="account-circle-outline"
                  size={24}
                  color={"#71717a"}
                />
                <Text className="font-extralight text-lg text-[#71717a]">
                  Personal Information
                </Text>
              </View>
              <AntDesign name="right" size={20} color={"#71717a"} />
            </View>
            <View className="flex-row justify-between items-center mt-5 border-b-[1px] border-gray-200 pb-2">
              <View className="flex-row space-x-4 items-center">
                <FontAwesome5 name="money-check" size={18} color={"#71717a"} />
                <Text className="font-extralight text-lg text-[#71717a]">
                  Payments & Payouts
                </Text>
              </View>
              <AntDesign name="right" size={20} color={"#71717a"} />
            </View>

            <View className="flex-row justify-between items-center mt-3 border-b-[1px] border-gray-200 pb-2">
              <View className="flex-row space-x-4 items-center">
                <Ionicons
                  name="document-text-outline"
                  size={26}
                  color={"#71717a"}
                />
                <Text className="font-extralight text-lg text-[#71717a]">Taxes</Text>
              </View>
              <AntDesign name="right" size={20} color={"#71717a"} />
            </View>

            <View className="flex-row justify-between items-center mt-3 border-b-[1px] border-gray-200 pb-2">
              <View className="flex-row space-x-4 items-center">
                <Ionicons
                  name="md-shield-outline"
                  size={24}
                  color={"#71717a"}
                />
                <Text className="font-extralight text-lg text-[#71717a]">
                  Login & Security
                </Text>
              </View>
              <AntDesign name="right" size={20} color={"#71717a"} />
            </View>

            <View className="flex-row justify-between items-center mt-3 border-b-[1px] border-gray-200 pb-2">
              <View className="flex-row space-x-4 items-center">
                <Ionicons name="ios-settings" size={24} color={"#71717a"} />
                <Text className="font-extralight text-lg text-[#71717a]">
                  Accessibility
                </Text>
              </View>
              <AntDesign name="right" size={20} color={"#71717a"} />
            </View>
          </View>

          <View className="flex-row justify-between items-center mt-3 border-b-[1px] border-gray-200 pb-2">
            <View className="flex-row space-x-4 items-center">
              <MaterialCommunityIcons
                name="google-translate"
                size={24}
                color={"#71717a"}
              />
              <Text className="font-extralight text-lg text-[#71717a]">
                Translation
              </Text>
            </View>
            <AntDesign name="right" size={20} color={"#71717a"} />
          </View>

          <View className="flex-row justify-between items-center mt-3 border-b-[1px] border-gray-200 pb-2">
            <View className="flex-row space-x-4 items-center">
              <Octicons name="bell" size={24} color={"#71717a"} />
              <Text className="font-extralight text-lg text-[#71717a]">
                Notifications
              </Text>
            </View>
            <AntDesign name="right" size={20} color={"#71717a"} />
          </View>

          <View className="flex-row justify-between items-center mt-3 border-b-[1px] border-gray-200 pb-2">
            <View className="flex-row space-x-4 items-center">
              <Ionicons
                name="md-lock-closed-outline"
                size={24}
                color={"#71717a"}
              />
              <Text className="font-extralight text-lg text-[#71717a]">
                Privacy & Sharing
              </Text>
            </View>
            <AntDesign name="right" size={20} color={"#71717a"} />
          </View>
          <Pressable className="mx-auto">
            <Text className="text-lg mt-5 mb-10 underline text-gray-500 font-extralight">Log out</Text>
          </Pressable>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Profile;
