import { StyleSheet, View, Button, TextInput, Modal, Image } from "react-native";

export default function Goalinput(props) {

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.flexcontainer}>
      <Image style={styles.image} source={require('../assets/images/goal.png')}/>
        <TextInput
          value={props.text}
          onChangeText={props.changetext}
          style={styles.textinputstyle}
          placeholder="Enter text here..."
        />
        <View style={styles.buttoncontainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={props.goaladd} color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.togglemodal} color="#f31282"/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  flexcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    backgroundColor: '#311b6b'
  },
  textinputstyle: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: "80%",
    padding: 8,
    marginRight: 8,
  },
  image:{
    width:100,
    height:100,
    margin:20
  },
  buttoncontainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width:'40%',
    marginHorizontal: 8,
  },
});
