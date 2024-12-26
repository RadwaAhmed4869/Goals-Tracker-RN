import { useState } from "react";
import { StyleSheet, View, Button, TextInput, Modal } from "react-native";

export default function GoalInput({ onAddGoal, visible, onCancel }) {
  const [enteredGoal, setEnteredGoal] = useState("");

  function handleChangeText(enteredText) {
    setEnteredGoal(enteredText);
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          value={enteredGoal}
          onChangeText={handleChangeText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={() => {
                if (enteredGoal === "") return;
                onAddGoal(enteredGoal);
                setEnteredGoal("");
              }}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} />
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
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    padding: 10,
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
