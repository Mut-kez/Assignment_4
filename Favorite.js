import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { TextInput, Button, List, Provider, DarkTheme } from 'react-native-paper';

const App = () => {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      setTodos([...todos, todoText]);
      setTodoText('');
    }
  };

  const handleDeleteTodo = (todo) => {
    const newTodos = todos.filter((item) => item !== todo);
    setTodos(newTodos);
  };

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Provider theme={DarkTheme}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Ball Lovers</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            label="Write a ball you want to see"
            value={todoText}
            onChangeText={setTodoText}
            style={styles.input}
            theme={{ colors: { primary: '#FF4F4F', background: '#FCA5A5', text: '#FFFFFF' } }}
          />
          <TouchableOpacity onPress={handleAddTodo} style={styles.addButton}>
            <Text style={styles.addButtonLabel}>Add</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.listContainer}>
          <List.Accordion
            title="Favorites"
            titleStyle={styles.subheader}
            expanded={isExpanded}
            onPress={handleToggleExpand}
          >
            {todos.map((todo, index) => (
              <TouchableOpacity
                key={index}
                style={styles.todoItemContainer}
                onPress={() => handleDeleteTodo(todo)}
              >
                <Text style={styles.todoItem}>{todo}</Text>
              </TouchableOpacity>
            ))}
          </List.Accordion>
        </ScrollView>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800000',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#FCA5A5',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    marginRight: 8,
    backgroundColor: 'black',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: 'black',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  addButtonLabel: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  listContainer: {
    flex: 1,
    backgroundColor: 'grey',
    borderRadius: 10,
    padding: 8,
  },
  subheader: {
    color: '#FFFFFF',
    backgroundColor: '#FF4F4F',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  todoItemContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 8,
    padding: 16,
  },
  todoItem: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#800000',
  },
});

export default App;
