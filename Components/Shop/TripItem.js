import React from "react";
import styles from "./styles";
import {
  Image,
  View,
  useWindowDimensions,
  Animated,
  Pressable,
} from "react-native";

const TripItem = ({ trip, navigation }) => {
  let { width: windowWidth, height: windowHeight } = useWindowDimensions();
  windowHeight = windowWidth - 300;

  return (
    <Pressable onPress={() => navigation.navigate("Detail", { trip: trip })}>
      <View style={[styles.scrollContainer, { height: windowHeight }]}>
        <Animated.Text style={styles.textView}>{trip.title}</Animated.Text>
        <Animated.View style={{ width: windowWidth }}>
          <Image
            style={styles.card}
            source={{
              uri: trip.image,
            }}
          />
        </Animated.View>
        <View style={[styles.textAreaContainer]}></View>
      </View>
    </Pressable>
  );
};

export default TripItem;
