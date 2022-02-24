import { View, Text, Pressable } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CButton = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate("Upload")}>
      <MaterialIcons name="create" size={25} color="white" />
    </Pressable>
  );
};

export default CButton;
