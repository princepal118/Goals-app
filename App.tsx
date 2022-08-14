import React, {useState} from 'react';

import {View, StyleSheet, FlatList, Button} from 'react-native';
import GoalInput from './componants/GoalInput';
import GoalItem from './componants/GoalItem';

const App = () => {
  const [courseGoals, setCourseGoals] = useState<any>([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endGoalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = (enteredGoalText: any) => {
    setCourseGoals((currentCourseGoals: any) => [
      ...currentCourseGoals,
      {
        text: enteredGoalText,
        id: Math.random().toString(),
      },
    ]);
    setModalIsVisible(false);
  };

  const deleteGoalHandler = (id: number) => {
    setCourseGoals((currentCourseGoals: any) => {
      return currentCourseGoals.filter((item: any) => item.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#1738f6"
        onPress={startAddGoalHandler}
      />
      <GoalInput
        onAddGoal={addGoalHandler}
        visible={modalIsVisible}
        onCancel={endGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          alwaysBounceVertical={true}
          renderItem={itemData => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item: any) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
  },

  goalsContainer: {
    flex: 4,
  },
});
export default App;
