import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";

// components imports
import Header from "../components/Explore/Header";
import Categories from "../components/Explore/Categories";
import Nearby from "../components/Explore/Nearby";

const Explore = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View className="px-3">
        <Header />
        <Categories />
        <Nearby navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Explore;
