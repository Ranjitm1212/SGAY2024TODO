import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  StatusBar,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

type FilterType = "ALL" | "ACTIVE" | "COMPLETED";
type ThemeType = "LIGHT" | "DARK";

const STORAGE_KEY = "TODOS_STORAGE";
const THEME_KEY = "APP_THEME";

export default function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>("ALL");
  const [theme, setTheme] = useState<ThemeType>("LIGHT");

  const isDark = theme === "DARK";

  // Load saved data
  useEffect(() => {
    const loadData = async () => {
      try {
        const savedTodos = await AsyncStorage.getItem(STORAGE_KEY);
        const savedTheme = await AsyncStorage.getItem(THEME_KEY);

        if (savedTodos) setTodos(JSON.parse(savedTodos));
        if (savedTheme) setTheme(savedTheme as ThemeType);
      } catch (error) {
        console.log("Storage error:", error);
      }
    };

    loadData();
  }, []);

  // Save todos
  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos)).catch(() => {});
  }, [todos]);

  // Save theme
  useEffect(() => {
    AsyncStorage.setItem(THEME_KEY, theme).catch(() => {});
  }, [theme]);

  const addTodo = () => {
    if (!task.trim()) return;

    const newTodo: Todo = {
      id: Date.now().toString(),
      title: task,
      completed: false,
    };

    setTodos([newTodo, ...todos]);
    setTask("");
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "ACTIVE") return !todo.completed;
    if (filter === "COMPLETED") return todo.completed;
    return true;
  });

  const colors = {
    background: isDark ? "#121212" : "#f4f6f8",
    card: isDark ? "#1E1E1E" : "#ffffff",
    text: isDark ? "#ffffff" : "#000000",
    subText: isDark ? "#aaaaaa" : "#555",
    input: isDark ? "#2C2C2C" : "#ffffff",
    button: "#6200EE",
  };

  return (
    // <View style={{ flex: 1 }}>
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />

      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={[styles.header, { color: colors.text }]}>
          📝 Todo App
        </Text>
        <TouchableOpacity onPress={() => setTheme(isDark ? "LIGHT" : "DARK")}>
          <Text style={{ fontSize: 20 }}>
            {isDark ? "☀️" : "🌙"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Input */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add new task..."
          placeholderTextColor={colors.subText}
          value={task}
          onChangeText={setTask}
          style={[
            styles.input,
            { backgroundColor: colors.input, color: colors.text },
          ]}
        />
        <TouchableOpacity
          style={[styles.addButton, { backgroundColor: colors.button }]}
          onPress={addTodo}
        >
          <Text style={styles.addText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* Filters */}
      <View style={styles.filterContainer}>
        {(["ALL", "ACTIVE", "COMPLETED"] as FilterType[]).map(type => (
          <TouchableOpacity key={type} onPress={() => setFilter(type)}>
            <Text
              style={{
                color: filter === type ? colors.button : colors.text,
                fontWeight: filter === type ? "bold" : "normal",
              }}
            >
              {type}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Todo List */}
      <FlatList
        data={filteredTodos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.todoItem,
              { backgroundColor: colors.card },
            ]}
          >
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => toggleTodo(item.id)}
            >
              <Text
                style={[
                  { color: colors.text, fontSize: 16 },
                  item.completed && {
                    textDecorationLine: "line-through",
                    color: colors.subText,
                  },
                ]}
              >
                {item.title}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => deleteTodo(item.id)}>
              <Text style={{ fontSize: 18 }}>❌</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <Text style={{ color: colors.subText, marginTop: 10 }}>
        Total Tasks: {todos.length}
      </Text>
    </SafeAreaView>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    color:"black"
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  input: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    marginRight: 10,
     color:"black"
  },
  addButton: {
    paddingHorizontal: 16,
    justifyContent: "center",
    borderRadius: 8,
  },
  addText: {
    color: "#fff",
    fontWeight: "bold",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  todoItem: {
    flexDirection: "row",
    padding: 14,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: "center",
     color:"black"
  },
});