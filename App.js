
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem';
import uuid from 'react-native-uuid'


const App = () => {
  const [items, setItems] = useState([
    {id: uuid.v4(), text:"Oat Milk"},
    {id: uuid.v4(), text:"Eggs"},
    {id: uuid.v4(), text:"Gluten Free Bread"},
    {id: uuid.v4(), text:"Coconut Water"}
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }

  const addItem = (text) => {
    if(!text){
      Alert.alert('Error', 'Please enter an item name.', {text:'Ok'})
    }else{
      setItems(prevItems => {
        return[{id: uuid.v4(), text},...prevItems]
      });
    }
  }

  return(
    <View style={styles.container}>
      <Header title="Shopping List"/>
      <AddItem addItem={addItem}/>
      <FlatList 
      data={items}
      renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  }
})

export default App;
