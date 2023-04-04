import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

// icon imports
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";

const Header = () => {
  const [search, setSearch] = useState("");
  return (
    <View className="pt-3">
        <Text className="text-lg text-light_gray">Your location</Text>
        <View className="flex-row justify-between">
          <Text className="text-3xl text-gray-900 font-bold">Faridabad</Text>
          <FontAwesome name="bell-o" size={20} />
        </View>
      <View className="flex-row justify-between items-center mx-auto mt-3 bg-gray-200 px-3 py-2 rounded-lg">
        <AntDesign name="search1" size={20} />
        <TextInput
          placeholder="Search"
          onChangeText={setSearch}
          value={search}
          className="flex-grow pl-4 text-md tracking-wide"
        />
        <Feather name="mic" size={20} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Header;
