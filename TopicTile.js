import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const TopicTile = ({ topic, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.topic}>{topic}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    margin: 8,
    borderRadius: 8,
  },
  topic: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TopicTile;
