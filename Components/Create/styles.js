import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  welcome: {
    fontSize: 25,
    textAlign: "center",
    margin: 20,
    fontFamily: "Avenir",
    color: "#FFDB58",
  },
  bG: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  title: {
    marginTop: 20,
    marginBottom: 40,
  },
  description: {
    marginBottom: 40,
  },
  text: {
    fontFamily: "Avenir",
    fontSize: 30,
    color: "#FFDB58",
    marginRight: 20,
  },
  imgBox: {
    backgroundColor: "#f0f8ff30",
    width: 250,
    borderRadius: 6,
    marginLeft: 6,
  },
  btn: {
    alignSelf: "center",
    borderRadius: 7,
    backgroundColor: "#0000cd80",
    borderColor: "#e0ffff",
    borderTopWidth: 6,
    marginTop: 30,
    width: 100,
    height: 60,
  },
  btnText: {
    fontFamily: "Avenir",
    fontSize: 25,
    color: "#FFDB58",
  },
});

export default styles;
