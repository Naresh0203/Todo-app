import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  FlatList,
} from "react-native";
import Goalinput from "./component/Goalinput";
import Goalitem from "./component/Goalitem";

export default function App() {
  const [text, settext] = useState("");
  const [goals, setgoals] = useState([]);
  const [modalvisibility, setmodalvisibility] = useState(false);

  const changetext = (e) => {
    settext(e);
  };

  const addgoal = () => {
    if (text !== "") {
      setgoals((currentgoals) => [
        ...currentgoals,
        { text: text, id: Math.random().toString() },
      ]);
      settext("");
    }
  };
  const deletegoal = (id) => {
    setgoals((goals) => {
      return goals.filter((goal) => goal.id !== id);
    });
  };
  const togglemodal = () => {
    if (modalvisibility) setmodalvisibility(false);
    else setmodalvisibility(true);
  };
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <View style={styles.Button}>
          <Button color="#a065ec" title="Add a new goal" onPress={togglemodal} />
        </View>
        <Goalinput
          text={text}
          changetext={changetext}
          goaladd={addgoal}
          togglemodal={togglemodal}
          visible={modalvisibility}
        />
        <View style={styles.goalcontainer}>
          <FlatList
            data={goals}
            renderItem={(goaldata) => {
              return (
                <Goalitem item={goaldata.item} Ondeletegoal={deletegoal} />
              );
            }}
            keyExtractor={(item) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#2b0f7a",
  },
  goalcontainer: {
    flex: 3,
  },
  Button: {
    marginBottom: 20,
  },
});
