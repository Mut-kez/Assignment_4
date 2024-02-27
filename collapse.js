import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Accordion = ({ title, content, color }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.accordionContainer}>
      <TouchableOpacity style={[styles.header, { backgroundColor: color }]} onPress={toggleAccordion}>
        <View style={styles.dot} />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
      {expanded && <Text style={styles.content}>{content}</Text>}
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Here We Go!</Text>
      <Accordion title="READY" content="Get ready!" color="#730202" />
      <Accordion title="SET" content="Prepare yourself!" color="#EC6902" />
      <Accordion title="GOOO!!!!" content="Start now!" color="#012308" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 40,
    backgroundColor: '#1D1C1C',
  },
  accordionContainer: {
    marginBottom: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    borderRadius: 8,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  head: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#EAEEF0',
    backgroundColor: '#043647',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  content: {
    padding: 16,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
