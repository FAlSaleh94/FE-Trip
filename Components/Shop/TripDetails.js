import React from "react";
import styles from "./styles";
import tripStore from "../../Stores/tripStore";
import { View, Image, ImageBackground, Text, SafeAreaView } from "react-native";
import { observer } from "mobx-react";
import { Card, Spinner } from "native-base";

const TripDetails = ({ route }) => {
  if (tripStore.loding)
    return (
      <SafeAreaView>
        <Spinner size="lg" color="warning.900" />
      </SafeAreaView>
    );
  const trip = route.params.trip;
  return (
    <ImageBackground
      style={styles.backGround1}
      source={{ uri: "https://wallpapercave.com/wp/wp5123553.jpg" }}
    >
      <View style={styles.view}>
        <Text style={styles.text}>{trip.title}</Text>
        <Card style={styles.card1}>
          <Image source={{ uri: trip.image }} style={styles.img} />
          <Text style={styles.detailtext}>{trip.description}</Text>
        </Card>
      </View>
    </ImageBackground>
  );
};

export default observer(TripDetails);
