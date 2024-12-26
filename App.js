import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goalsList, setGoalsList] = useState([]);

  function handleAddGoal(enteredGoal) {
    setGoalsList((prevState) => [
      ...prevState,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
    handleEndAddGoal();
  }

  function handleDeleteGoal(id) {
    setGoalsList((prevState) => prevState.filter((goal) => goal.id !== id));
  }

  function handleStartAddGoal() {
    setModalIsVisible(true);
  }

  function handleEndAddGoal() {
    setModalIsVisible(false);
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" onPress={handleStartAddGoal} />
      <GoalInput
        visible={modalIsVisible}
        onAddGoal={handleAddGoal}
        onCancel={handleEndAddGoal}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalsList}
          renderItem={(itemData) => {
            return (
              <GoalItem goal={itemData.item} onDeleteGoal={handleDeleteGoal} />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
