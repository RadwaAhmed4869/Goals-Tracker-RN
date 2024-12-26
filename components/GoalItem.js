import { StyleSheet, Text, View, Pressable } from "react-native";

export default function GoalItem({ goal, onDeleteGoal }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        // android_ripple={{ color: "#3F0688" }}
        onPress={() => onDeleteGoal(goal.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{goal.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
