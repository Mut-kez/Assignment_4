import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';

const NavigationDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerAnimation = new Animated.Value(0);

  const handleDrawerToggle = () => {
    Animated.timing(drawerAnimation, {
      toValue: isDrawerOpen ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setIsDrawerOpen(!isDrawerOpen);
  };

  const drawerTranslateX = drawerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-200, 0],
  });

  return (
    <View style={styles.container}>
      {/* Main Content */}
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={handleDrawerToggle} style={styles.hamburgerContainer}>
          <Text style={styles.hamburger}>☰</Text>
        </TouchableOpacity>
        {/* Render the appropriate screen based on the selected menu item */}
        <View style={styles.mainContent}>
          {isDrawerOpen ? <Text>Drawer is Open</Text> : <Text>Main Content</Text>}
        </View>
      </View>

      {/* Navigation Drawer */}
      <Animated.View style={[styles.drawerContainer, { transform: [{ translateX: drawerTranslateX }] }]}>
        <TouchableOpacity style={styles.drawerItem} onPress={() => console.log('Navigate to Screen 1')}>
          <Text>Screen 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={() => console.log('Navigate to Screen 2')}>
          <Text>Screen 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={() => console.log('Navigate to Screen 3')}>
          <Text>Screen 3</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  hamburgerContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hamburger: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 200,
    backgroundColor: '#f1f1f1',
    paddingVertical: 20,
  },
  drawerItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default NavigationDrawer;
