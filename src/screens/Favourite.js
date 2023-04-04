import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Pressable,
  SafeAreaView,
} from "react-native";

// components imports
import Card from "../components/Global/Card";

const Favourite = () => {
  const [favData, setFavData] = useState([
    {
      custom_image: require("../assets/places/place1.webp"),
      category: "House",
      title: "Springs Blue ",
      location: "Uttarakhand , Chamoli",
      number_of_bed_rooms: "5",
      number_of_bathrooms: "3",
      price: "1520",
      time_unit: "hr",
      square_feet: "2000",
      garage: "1",
      currency: "₹",
      is_wifi_lobby: true,
      is_wifi_rooms: true,
      is_pool: false,
      is_spa: false,
      is_parking: true,
      is_pets: false,

      is_ac: false,
      is_balcony: false,
      is_diningarea: false,
      isGym: false,
    },
    {
      custom_image: require("../assets/places/place2.webp"),
      category: "Town House",
      title: "Ganaga",
      location: "Uttarakhand , Chamoli",
      number_of_bed_rooms: "1",
      number_of_bathrooms: "3",
      price: "1100",
      time_unit: "hr",
      square_feet: "2000",
      garage: "1",
      currency: "₹",
      is_wifi_lobby: true,
      is_wifi_rooms: true,
      is_pool: false,
      is_spa: false,
      is_parking: true,
      is_pets: false,
      is_ac: false,
      is_balcony: false,
      is_diningarea: false,
      isGym: false,
    },
  ]);
  return (
    <SafeAreaView className="bg-white">
      {favData.length == 0 ? (
        <View className="bg-white flex-grow flex items-center justify-center">
          <Image
            source={require("../assets/loaders/fav.gif")}
            className="h-[400px] w-[290px]"
          />
        </View>
      ) : (
        <View className="bg-white h-full px-4">
          <Text className="text-4xl font-semibold text-gray-900 mt-7 mb-7 ml-3">
            Nearby
          </Text>

          <ScrollView
            className="h-[420px]"
            showsVerticalScrollIndicator={false}
          >
            {favData.map((ele, index) => (
              <Pressable
                onPress={() =>
                  navigation.navigate("About", {
                    data: ele,
                  })
                }
                key={index}
              >
                <Card
                  custom_image={ele.custom_image}
                  category={ele.category}
                  title={ele.title}
                  location={ele.location}
                  number_of_bed_rooms={ele.number_of_bed_rooms}
                  number_of_bathrooms={ele.number_of_bathrooms}
                  price={ele.price}
                  time_unit={ele.time_unit}
                  currency="₹"
                />
              </Pressable>
            ))}
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Favourite;
