import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import Card from "../Global/Card";


const Nearby = ({ navigation }) => {
  const rooms_data = [
    {
      custom_image: require("../../assets/places/place1.webp"),
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
      custom_image: require("../../assets/places/place2.webp"),
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
    {
      custom_image: require("../../assets/places/place3.webp"),
      category: "Appartment",
      title: "Indian Accent",
      location: "Uttarakhand , Chamoli",
      number_of_bed_rooms: "3",
      number_of_bathrooms: "5",
      price: "4000",
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
      custom_image: require("../../assets/places/place4.webp"),
      category: "Appartment",
      title: "Dolphins",
      location: "Uttarakhand , Chamoli",
      number_of_bed_rooms: "2",
      number_of_bathrooms: "4",
      price: "2000",
      square_feet: "2000",
      garage: "1",
      time_unit: "hr",
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
      custom_image: require("../../assets/places/place5.webp"),
      category: "Appartment",
      title: "Devbhoomi",
      location: "Uttarakhand , Chamoli",
      number_of_bed_rooms: "2",
      number_of_bathrooms: "3",
      square_feet: "2000",
      garage: "1",
      price: "1400",
      time_unit: "hr",
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
      custom_image: require("../../assets/places/place6.webp"),
      category: "Land",
      title: "Moti Mehal",
      location: "Uttarakhand , Chamoli",
      number_of_bed_rooms: "2",
      number_of_bathrooms: "1",
      square_feet: "2000",
      garage: "1",
      price: "200",
      time_unit: "hr",
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
  ];
  return (
    <View clasName="bg-red-200 mt-4 h-[600px]">
      <Text className="text-xl font-semibold tex-gray-900 my-4 ml-3">
        Nearby
      </Text>

      <ScrollView className="h-[420px]" showsVerticalScrollIndicator={false}>
        {rooms_data.map((ele, index) => (
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
  );
};

const styles = StyleSheet.create({});

export default Nearby;
