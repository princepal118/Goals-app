import {StyleSheet, Button, TextInput, View, Modal, Image} from 'react-native';
import React, {useState} from 'react';

const GoalInput = (props: any) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const goalInputHandler = (enteredText: any) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/image/goal.png')}
        />
        <TextInput
          value={enteredGoalText}
          placeholder="Your Course Goal"
          style={styles.inputText}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goals"
              onPress={addGoalHandler}
              color="#5e0acc"
            />
          </View>
          <View style={styles.button}>
            <Button title="Close" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  inputText: {
    borderWidth: 2,
    borderColor: '#cccccc',
    width: '100%',
    padding: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 30,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
