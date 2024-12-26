import { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  Image,
} from "react-native";

const goalLogo = require("../assets/goal.png");

export default function GoalInput({ onAddGoal, visible, onCancel }) {
  const [enteredGoal, setEnteredGoal] = useState("");

  function handleChangeText(enteredText) {
    setEnteredGoal(enteredText);
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={goalLogo} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          value={enteredGoal}
          onChangeText={handleChangeText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="#F651A3" onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              color="#b180f0"
              onPress={() => {
                if (enteredGoal === "") return;
                onAddGoal(enteredGoal);
                setEnteredGoal("");
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    borderRadius: 6,
    width: "100%",
    padding: 16,
    color: "#120438",
    backgroundColor: "#e4d0ff",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "27%",
    marginHorizontal: 9,
  },
});
