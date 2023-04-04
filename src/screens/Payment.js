import React, { useState } from "react";

// package imports
import {
  View,
  StyleSheet,
  Text,
  Image,
  Button,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import { CheckBox } from "@rneui/themed";

// Components imports
import Card from "../components/Global/Card";

// icon imports
import AntDesign from "react-native-vector-icons/AntDesign";
import DatePicker from "../components/Global/DatePicker";

const Payment = ({ route }) => {
  const HouseData = route.params.data;
  // check box
  const [check, setcheck] = useState(false);
  // date picker
  const [show, setshow] = useState(false);
  const [checkIn, setcheckIn] = useState({});
  const [checkOut, setcheckOut] = useState({});
  const hideDatePicker = () => {
    setshow(false);
  };

  const Checker = (UserDate) => {
    const dateNow = new Date();
    if (dateNow > UserDate) {
      return false;
    }
    return true;
  };

  const HandleChecInDate = (day, month, year, date) => {
    console.log(day, month, year);
    if (!Checker(date)) {
      Alert.alert("Invalid Date", "Please again select a valid check in date");
      return;
    }
    const Date_Data = {
      Day: day,
      Month: month,
      Year: year,
    };
    setcheckIn(Date_Data);
  };

  const HandleChecOutDate = (day, month, year, date) => {
    console.log(day, month, year);
    if (!Checker(date)) {
      Alert.alert("Invalid Date", "Please again select a valid check in date");
      return;
    }
    const Date_Data = {
      Day: day,
      Month: month,
      Year: year,
    };
    setcheckOut(Date_Data);
  };

  return (
    <View className="flex-grow bg-white pt-7">
      <ScrollView className="pb-10">
        {/* TopBar */}
        <View className="mt-2 mb-10 space-x-28   flex-row items-center pl-4">
          <AntDesign name="left" size={20} />
          <Text className="text-center font-extralight text-2xl">Payment</Text>
        </View>
        {/* Hotel Details  */}
        <View className="px-3">
          <Card
            custom_image={HouseData.custom_image}
            category={HouseData.category}
            title={HouseData.title}
            location={HouseData.location}
            number_of_bed_rooms={HouseData.number_of_bed_rooms}
            number_of_bathrooms={HouseData.number_of_bathrooms}
            price={HouseData.price}
            time_unit={HouseData.time_unit}
            currency="₹"
          />
        </View>

        {/* Cancellation Policy */}
        <View className="border-y-[10px] border-gray-200 py-4 space-y-3 pl-5 ">
          <Text className="text-xl text-gray-800 font-medium tracking-wide">
            Your Trip
          </Text>
          {/* Check in date */}
          <View className="flex-row justify-between pr-10 items-center">
            <Text className="text-[16px] tracking-wide font-light text-gray-700">
              Select check in date
            </Text>

            {checkIn.Day ? (
              <Text>{checkIn.Day}</Text>
            ) : (
              <>
                <Pressable onPress={() => setshow(true)}>
                  <AntDesign name="pluscircle" size={20} color={"#222222"} />
                </Pressable>
                <DatePicker
                  show={show}
                  hideDatePicker={hideDatePicker}
                  func={HandleChecInDate}
                />
              </>
            )}
          </View>

          {/* Check out date */}
          <View className="flex-row justify-between pr-10 items-center">
            <Text className="text-[16px] tracking-wide font-light text-gray-700">
              Select check out date
            </Text>
            <Pressable onPress={() => setshow(true)}>
              <AntDesign name="pluscircle" size={20} color={"#222222"} />
            </Pressable>
            <DatePicker
              show={show}
              hideDatePicker={hideDatePicker}
              func={HandleChecOutDate}
            />
          </View>

          {/* Pets */}
          <View className="flex-row justify-between pr-5 items-center">
            <Text className="text-[16px] tracking-wide font-light text-gray-700">
              Pets ?
            </Text>
            <CheckBox
              size={20}
              checked={check}
              onPress={() => setcheck(!check)}
            />
          </View>
        </View>

        {/* Cash Image */}

        <Image
          source={require("../assets/images/payment.png")}
          className="h-[200px] w-[80%] mx-auto my-4"
        />

        {/* Payment Section */}
        <View className="border-t-[10px] border-gray-200 py-4 space-y-3">
          <Text className="text-xl text-gray-800 font-medium tracking-wide ml-5">
            Price Details
          </Text>
          <View className="space-y-2 border-b-2 border-gray-100 pb-2 w-[90%] mx-auto">
            <View className="flex-row justify-between pr-5">
              <Text className="text-[17px] font-light">$337 x 5 nights</Text>
              <Text className="text-[17px] font-light">$1,686.30</Text>
            </View>
            <View className="flex-row justify-between pr-5">
              <Text className="text-[17px] font-light">Long stay discount</Text>
              <Text className="text-[17px]  text-lime-600 font-medium">
                -$505.90
              </Text>
            </View>
            <View className="flex-row justify-between pr-5">
              <Text className="text-[17px] font-light">Taxes</Text>
              <Text className="text-[17px] font-light">$212.48</Text>
            </View>
          </View>
          <View className="space-y-2 w-[90%] mx-auto border-b-2 border-gray-100 pb-3">
            <View className="flex-row justify-between pr-5">
              <Text className="text-[17px] font-light">Total (USD)</Text>
              <Text className="text-[17px] font-semibold">$1398.89</Text>
            </View>
          </View>
          <View className="mx-auto w-[90%]">
            <Text className="text-light text-[12px]  text-gray-500 text-center">
              This property requires a $23 security deposit . it wuill be
              collected seperately by the property prior to your arrival at
              check - in
            </Text>
          </View>
        </View>

        {/* Cancellation Policy */}
        <View className="border-t-[10px] border-gray-200 py-4 space-y-3 pl-5 ">
          <Text className="text-xl text-gray-800 font-medium tracking-wide">
            Cancellation Policy
          </Text>
          <Text className="text-[15px] tracking-wide font-light text-gray-700">
            This reservation is not refundable.
          </Text>
        </View>

        {/* Cancellation Policy */}
        <View className="border-t-[10px] border-gray-200 py-4 space-y-3 pl-5 ">
          <Text className="text-xl text-gray-800 font-medium tracking-wide">
            Ground Rules
          </Text>
          <Text className="text-[15px] tracking-wide font-light text-gray-700">
            We ask every guest to remember a few simple things about what make a
            great guest .
          </Text>
          <View className="space-y-1">
            <Text className="text-[15px] tracking-wide font-light text-gray-700">
              · Follow the house rules.
            </Text>
            <Text className="text-[15px] tracking-wide font-light text-gray-700">
              · Treat your Host's home like your own.
            </Text>
          </View>
        </View>

        {/* Buy Button */}
        <Pressable className="mb-10">
          <View className="mt-4 mx-auto w-[80%] bg-dark_red rounded-xl py-3">
            <Text className="text-[20px] tracking-wide font-semibold text-white text-center">
              Confirm & Pay
            </Text>
          </View>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Payment;
