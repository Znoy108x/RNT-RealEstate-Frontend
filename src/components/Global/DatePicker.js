import React from "react";
import { View, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DatePicker = ({ show, hideDatePicker, func }) => {
  const handleConfirm = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    func(day, month, year , date);
    hideDatePicker();
  };
  return (
    <DateTimePickerModal
      isVisible={show}
      mode="date"
      onConfirm={handleConfirm}
      onCancel={hideDatePicker}
    />
  );
};

const styles = StyleSheet.create({});

export default DatePicker;
