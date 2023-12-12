import { useState,useEffect } from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';

const App =()=>{
  const[data,setData]=useState([]);
  const getApiData = async()=>{
    const url ='https://jsonplaceholder.typicode.com/users';
    let result = await fetch(url);
    result = await result.json();
    setData(result)
  }
  useEffect(()=>{
    getApiData();
  },[]);


return(
  <View style={styles.container}>
    <Text>hello</Text>
    <View>
      {
        data.length ?
        data.map((item)=><View>
        <Text>{item.id}</Text>
        </View>
        )
        :null
      }
    </View>
  </View>
)};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },

});

export default App;