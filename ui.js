// ui.js
import React, { useRef, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ThemeToggleButton = ({ isNight, onPress }) => {
  const translateYAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateYAnim, {
          toValue: -5,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(translateYAnim, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [translateYAnim]);

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Animated.View
        style={[
          styles.iconContainer,
          {
            transform: [{ translateY: translateYAnim }],
            opacity: translateYAnim.interpolate({
              inputRange: [-5, 0],
              outputRange: [0.7, 1],
            }),
          },
        ]}
      >
        <Icon name={isNight ? 'moon-o' : 'sun-o'} size={24} color="white" />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3E4D58',
    padding: 5,
    borderRadius: 10,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ThemeToggleButton;
