import styles from "./styles";
import TripItem from "./TripItem";
import React, { useRef } from "react";
import tripStore from "../../Stores/tripStore";
import { ScrollView, Spinner, View } from "native-base";
import { Animated, ImageBackground, SafeAreaView } from "react-native";
import { observer } from "mobx-react";

const TripList = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  if (tripStore.loding)
    return (
      <SafeAreaView>
        <Spinner size="lg" color="warning.900" />
      </SafeAreaView>
    );

  const trips = tripStore.trips.map((trip) => (
    <TripItem key={trip._id} trip={trip} navigation={navigation} />
  ));

  return (
    <ImageBackground
      style={styles.backGround1}
      source={{
        uri: "https://cdn.wallpapersafari.com/84/75/lEqjIp.jpg",
      }}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView
          horizontal
          style={styles.scrollViewStyle}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={16}
        >
          {trips}
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default observer(TripList);
