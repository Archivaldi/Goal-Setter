import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TextPropTypes } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoal] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goal => {
    setCourseGoal(currentGoals => [...currentGoals, { uid: Math.random().toString(), value: goal }]);
    setIsAddMode(false);
  }

  const removeGoalHadler = id => {
    setCourseGoal(currentGoals => {
      return currentGoals.filter(goal => goal.uid !== id)
    })
  }

  const onCancelHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => {setIsAddMode(true)}}/>
      <GoalInput
        addGoalHandler = {addGoalHandler}
        cancelHandler = {onCancelHandler}
        visible={isAddMode}
      />
      <FlatList data={courseGoals}
        keyExtractor={(item, index) => item.uid}
        renderItem={itemData => (
          <GoalItem onDelete={removeGoalHadler.bind(this, itemData.item.uid)} title={itemData.item.value} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
})