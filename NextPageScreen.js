import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NextPageScreen = ({ route }) => {
  const { topic, page, images } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.topic}>{topic}</Text>
      {/* Add additional content for the next page */}
      <Text>Example content for topic {topic}</Text>
      <Text>{page}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topic: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});

export default NextPageScreen;
