import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity, Text, RefreshControl } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const images = [
  require('./image2.jpg'),
  require('./Image1.jpg'),
  require('./image3.jpg'),
  require('./image4.jpg'),
];

const App = () => {
  const [isGrid, setIsGrid] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [loadedImages, setLoadedImages] = useState(images);

  const toggleLayout = () => {
    setIsGrid(!isGrid);
  };

  const onRefresh = () => {
    setRefreshing(true);
    // Simulating data fetching delay with setTimeout
    setTimeout(() => {
      setLoadedImages([...loadedImages, ...images]);
      setRefreshing(false);
    }, 1500);
  };

  const renderImages = () => {
    if (isGrid) {
      return (
        <ScrollView
          contentContainerStyle={styles.gridContainer}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
          {loadedImages.map((image, index) => (
            <TouchableOpacity key={index} style={styles.gridItem}>
              <Image source={image} style={styles.image} resizeMode="contain" />
            </TouchableOpacity>
          ))}
        </ScrollView>
      );
    } else {
      return (
        <ScrollView
          horizontal
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
          <View style={styles.carouselContainer}>
            {loadedImages.map((image, index) => (
              <TouchableOpacity key={index} style={styles.carouselItem}>
                <Image source={image} style={styles.image} resizeMode="contain" />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.toggleContainer}>
        <TouchableOpacity style={styles.toggleButton} onPress={toggleLayout}>
          {isGrid ? (
            <Ionicons name="md-list" size={24} color="white" />
          ) : (
            <Ionicons name="md-image" size={24} color="white" />
          )}
        </TouchableOpacity>
      </View>
      {renderImages()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '',
  },
  toggleContainer: {
    marginTop: 40,
    marginBottom: 6,
  },
  toggleButton: {
    backgroundColor: '#730B02',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  gridContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItem: {
    width: width / 3 - 16,
    height: width / 3 - 16,
    margin: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  carouselContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  carouselItem: {
    width,
    height: width,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});

export default App;
