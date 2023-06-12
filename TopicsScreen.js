import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopicTile from './TopicTile';

const TopicsScreen = ({ navigation }) => {
  const topics = [
  {topic: 'The Unexpected Encounter', page: 'This is topic page 1', images: ['https://api.time.com/wp-content/uploads/2015/04/google-sign.jpg']}, 
  {topic: 'Lost in the Woods', page: 'This is topic page 2', images: []},
  {topic: 'A Mysterious Package', page: 'This is topic page 3', images: []},
  {topic: 'The Last Dance', page: 'This is topic page 4', images: []},
  {topic: 'Through the Looking Glass', page: 'This is topic page 5', images: []}
  ];

  const handleTopicPress = (topic, page, images) => {
    navigation.navigate('NextPage', { topic, page, images });
  };

  return (
    <View style={styles.container}>
      {topics.map((topic, index) => (
        <TopicTile
          key={index}
          topic={topic.topic}
          onPress={() => handleTopicPress(topic.topic, topic.page, topic.images)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TopicsScreen;
