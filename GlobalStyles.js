import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  flatlist: {
    flex: 1,
  }, button: {
    alignItems: "center",
    backgroundColor: "#256D85",
    margin: 3
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text1:{
    fontSize: 35,
    fontWeight: "bold",
    textShadowColor: 'black',
    textShadowRadius: 3,
    color: "#CDFCF6"
  },
  text2:{
    fontSize: 20,
    fontWeight: "300",
    fontStyle: "italic",
    lineHeight:30,
    letterSpacing: 3,
    color: "#ffff",

  }
});

export default styles;