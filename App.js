// import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import TodoCreate from './components/Todo/Create';
import TodoList from './components/Todo/List';

export default function App() {

  return (
    <View style={styles.container}>
      <Header />
      <TodoCreate /> 
       {/* <TodoList />  */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,

  }
});
