import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import SwipeableCard from './swipe';

const cards = [
  { id: 1, title: 'Card 1', description: 'Clover', backgroundColor: '#343333' },
  { id: 2, title: 'Card 2', description: 'Spade', backgroundColor: '#730202' },
  { id: 3, title: 'Card 3', description: 'Diamond', backgroundColor: '#022A59' },
  { id: 4, title: 'Card 4', description: 'Heart', backgroundColor: '#012308' },
];


const App = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleYup = () => {
    setCurrentCardIndex((currentCardIndex + 1) % cards.length);
  };

  const handleNope = () => {
    setCurrentCardIndex((currentCardIndex + 1) % cards.length);
  };

  return (
    <View style={styles.container}>
      <SwipeCards
        cards={cards}
        loop
        renderCard={(cardData) => <SwipeableCard card={cardData} />}
        renderNoMoreCards={() => <Text>No more cards</Text>}
        handleYup={handleYup}
        handleNope={handleNope}
        cardIndex={currentCardIndex}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BEBFBF',
  },
});

export default App;
