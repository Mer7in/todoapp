import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Touchable,
  FlatList,
} from "react-native";
import TaksScreen from "./src/screens/TaskScreen";
import { AntDesign } from "@expo/vector-icons";
import colors from "./constants/colors";
import tempData from "./tempData";
import TodoList from "./src/components/TodoList";
export default function App() {
  
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.divider} />
        <Text style={styles.title}>
          Todo
          <Text
            style={{
              fontWeight: "300",
              color: colors.blue,
            }}
          >
            Lists{" "}
          </Text>
        </Text>
        <View style={styles.divider} />
      </View>
      <View style={{ marginVertical: 48 }}>
        <TouchableOpacity style={styles.addList}>
          <AntDesign name="plus" color="#6C757D" size={18} />
        </TouchableOpacity>
        <Text style={styles.add}>Add tasks</Text>
      </View>
      <View style={{ height: 275, paddingLeft: 32 }}>
        <FlatList
          data={tempData}
          keyExtractor={(item) => item.name}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <TodoList list={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    backgroundColor: colors.lighBlue,
    height: 1,
    width: 1,
    flex: 1,

    alignSelf: "center",
  },
  title: {
    fontWeight: "bold",
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 24,
    paddingHorizontal: 34,
  },
  addList: {
    borderWidth: 2,
    borderColor: "#6C757D",
    borderRadius: 100,
    padding: 10,
    alignItems: "center",
  },
  add: {
    color: colors.blue,
    fontWeight: "600",
    marginTop: 8,
  },
});
