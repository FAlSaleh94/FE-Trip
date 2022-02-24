import { View, Text, ImageBackground } from "react-native";
import React, { useState } from "react";
import { Box, Button, Heading, HStack, TextArea } from "native-base";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

const Uploade = () => {
  const [textAreaValue, setTextAreaValue] = useState("Title");
  const [textDValue, setTextDValue] = useState("Description");

  const demoValueControlledTextArea = (e) => {
    setTextAreaValue(e.currentTarget.value);
  };
  const demoValueControlledTextD = (e) => {
    setTextDValue(e.currentTarget.value);
  };

  return (
    <ImageBackground
      style={styles.bG}
      source={{
        uri: "https://iphone7wallpapers.co/media/uploads/2017/08/Space-War-Blue-Storm-Star-Illust-640x960.jpg",
      }}
    >
      <View>
        <Heading style={styles.welcome}>Upload</Heading>
      </View>
      <View style={styles.title}>
        <TextArea
          value={textAreaValue}
          onChange={demoValueControlledTextArea}
          w="60%"
          maxW="200"
          h="45"
          alignSelf={"center"}
          backgroundColor={"#f0f8ff77"}
        />
      </View>
      <View style={styles.description}>
        <TextArea
          value={textDValue}
          onChange={demoValueControlledTextD}
          w="70%"
          maxW="300"
          h="150"
          alignSelf={"center"}
          backgroundColor={"#f0f8ff77"}
        />
      </View>
      <Box style={styles.imgBox}>
        <HStack>
          <Text style={styles.text}>Image Upload</Text>
          <MaterialIcons name="upload-file" size={35} color="#fffaf0" />
        </HStack>
      </Box>
      <View>
        <Button style={styles.btn}>
          <Text style={styles.btnText}>Submit</Text>
        </Button>
      </View>
    </ImageBackground>
  );
};

export default Uploade;
