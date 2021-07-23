import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "./../../constants/colors";

export default TodoList = ({ list }) => {
  const completedTasksCount = list.tasks.filter(
    (todo) => todo.completed
  ).length;
  const remainingTasks = list.tasks.filter((todo) => !todo.completed).length;

  return (
    <View style={[styles.listContainer, { backgroundColor: list.color }]}>
      <Text style={styles.listTitle} numberOfLines={1}>
        {list.name}
      </Text>
      <View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.count}>{completedTasksCount}</Text>
          <Text style={styles.subtitle}>Completed</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.count}>{remainingTasks}</Text>
          <Text style={styles.subtitle}>Remaining</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginHorizontal: 12,
    alignItems: "center",
    width: 200,
  },
  listTitle: {
    color: colors.white,
    fontWeight: "700",
    fontSize: 18,
    marginBottom: 12,
  },
  count: {
    fontSize: 48,
    fontWeight: "200",
    color: colors.white,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.white,
  },
  completed: {},
  remaining: {},
});
