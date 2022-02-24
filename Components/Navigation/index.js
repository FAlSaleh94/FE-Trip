import Home from "../Home";
import React from "react";
import TripList from "../Shop";
import TripDetails from "../Shop/TripDetails";
import { createStackNavigator } from "@react-navigation/stack";
import Upload from "../Create";
import CButton from "../Create/CButton";

const StackNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#000",
        },
        headerTitleStyle: {
          fontFamily: "Avenir",
          color: "#d3d3d3",
          fontWeight: "bold",
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Trips"
        component={TripList}
        options={{
          headerRight: () => <CButton />,
        }}
      />
      <Screen
        name="Detail"
        component={TripDetails}
        options={({ route }) => ({
          title: route.params.trip.title,
        })}
      />
      <Screen name="Upload" component={Upload} />
    </Navigator>
  );
};

export default StackNavigator;
