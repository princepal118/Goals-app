import {
  Pressable,
  StyleSheet,
  Text,
  // TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const GoalItem = (props: any) => {
  return (
    // <TouchableOpacity>
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{color: '#1738f6'}}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>

    // </TouchableOpacity>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    padding: 8,
    color: 'white',
  },
  pressedItem: {
    opacity: 0.2,
  },
});
