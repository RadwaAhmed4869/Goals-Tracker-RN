import { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

export default function GoalInput({ onAddGoal }) {
  const [enteredGoal, setEnteredGoal] = useState("");

  function handleChangeText(enteredText) {
    setEnteredGoal(enteredText);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        value={enteredGoal}
        onChangeText={handleChangeText}
      />
      <Button
        title="Add Goal"
        onPress={() => {
          if (enteredGoal === "") return;
          onAddGoal(enteredGoal);
          setEnteredGoal("");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    marginRight: 8,
    padding: 10,
  },
});
