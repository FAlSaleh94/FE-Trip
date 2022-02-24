import React from "react";
import styles from "./styles";
import { View, Text, ImageBackground } from "react-native";
import { Avatar, Button } from "native-base";

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.backGround}
      source={{
        uri: "https://wallpaperaccess.com/full/373157.jpg",
      }}
    >
      <View style={styles.box}>
        <Text style={styles.text}>
          You Choose and We Tell You Every Thing About it
        </Text>
      </View>
      <View style={{ alignSelf: "center" }}>
        <Avatar
          bg="purple.600"
          alignSelf="center"
          size="2xl"
          marginTop={70}
          source={{
            uri: "https://pbs.twimg.com/media/DHbuWxjWAAAfkab.jpg",
          }}
        >
          RB
        </Avatar>
        <Button
          backgroundColor={"#1e90ff"}
          size="md"
          borderColor="#00ced1"
          borderTopWidth="6"
          width={150}
          alignSelf="center"
          marginTop={30}
          marginLeft={2.5}
          onPress={() => navigation.navigate("Trips")}
        >
          Click to See
        </Button>
      </View>
    </ImageBackground>
  );
};

export default Home;
