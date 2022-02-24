import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  backGround1: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    marginVertical: 10,
    width: 350,
    overflow: "hidden",
    alignSelf: "center",
    height: 450,
    marginTop: 150,
    resizeMode: "contain",
    marginTop: 150,
  },
  scrollContainer: {
    shadowColor: "#808080",
    shadowOffset: {
      width: 10,
      height: -10,
    },
    shadowOpacity: 1,
  },

  textAreaContainer: {
    width: "100%",
    marginBottom: 10,
  },
  textView: {
    position: "absolute",
    fontSize: 22,
    fontFamily: "Avenir",
    fontWeight: "600",
    textAlign: "center",
    width: "100%",
    color: "#FFDB58",
    marginTop: 40,
  },
  view: {
    alignItems: "center",
    justifyContent: "space-between",
    padding: 6,
    margin: 70,
  },

  img: {
    height: 300,
    width: 250,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: "#a9a9a9",
    marginBottom: 10,
  },
  text: {
    fontFamily: "Avenir",
    textAlign: "center",
    fontSize: 20,
    color: "#FFDB58",
    fontWeight: "bold",
    marginBottom: 3,
    marginTop: -50,
  },
  card1: {
    borderWidth: 3,
    borderRadius: 6,
    borderColor: "#a9a9a9",
    width: 350,
    height: 600,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap",
    backgroundColor: "#f0f8ff70",
  },
  detailtext: {
    fontSize: 15,
    fontFamily: "Avenir",
    color: "#696969",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 1,
  },
});

export default styles;
