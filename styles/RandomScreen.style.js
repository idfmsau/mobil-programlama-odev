import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  button: {
    width: width/1.25,
    marginBottom: height/10,
    borderRadius: 0,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: 'white',
    alignSelf: "center",
    zIndex: 999
  },
  movieCard: {
    alignItems: "center",
    marginTop: height/10,
    flex: 1,
    height
  },
});

export default styles;
