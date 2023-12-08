import { StyleSheet, View, Text, Pressable } from "react-native";

export default function Goalitem(props) {
  return (
    <View style={styles.goalsstyle}>
      <Pressable
        android_ripple={{ color: "#4b0082" }}  //this works only in android
        onPress={props.Ondeletegoal.bind(this, props.item.id)}
        // style={({ pressed }) => pressed && styles.presseditem} //This works with both android and ios
      >
        <Text style={styles.textstyle}>{props.item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalsstyle: {
    backgroundColor: "rgb(82,27,187)",
    paddingHorizontal:8,
    paddingVertical:4,
    marginBottom: 36,
    borderWidth: 1,
    borderRadius: 8,
  },
  presseditem: {
    backgroundColor: "#4b0082",
  },
  textstyle: {
    color: "white",
    padding: 4,
    fontSize: 18,
  },
});
