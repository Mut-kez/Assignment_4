import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const Screen1 = ({ navigateToScreen2 }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome!</Text>
      <TouchableOpacity onPress={navigateToScreen2} style={styles.button}>
        <Text style={styles.buttonText}>Its time</Text>
      </TouchableOpacity>
    </View>
  );
};

const Screen2 = ({ navigateToScreen1 }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Deuces!</Text>
      <TouchableOpacity onPress={navigateToScreen1} style={styles.button}>
        <Text style={styles.buttonText}> Greetings</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  const transitionValue = useSharedValue(0);
  const screen1Visible = useSharedValue(true);

  const navigateToScreen2 = () => {
    transitionValue.value = withTiming(1, {
      duration: 500,
      easing: Easing.ease,
    });

    screen1Visible.value = false;
  };

  const navigateToScreen1 = () => {
    transitionValue.value = withTiming(0, {
      duration: 500,
      easing: Easing.ease,
    });

    screen1Visible.value = true;
  };

  const screen1Style = useAnimatedStyle(() => {
    return {
      opacity: screen1Visible.value ? 1 : 0,
      transform: [
        { translateX: withTiming(screen1Visible.value ? 0 : -200) },
      ],
    };
  });

  const screen2Style = useAnimatedStyle(() => {
    return {
      opacity: screen1Visible.value ? 0 : 1,
      transform: [
        { translateX: withTiming(screen1Visible.value ? 200 : 0) },
      ],
    };
  });

  useEffect(() => {
    transitionValue.value = withTiming(1, {
      duration: 500,
      easing: Easing.ease,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.screen, screen1Style]}>
        <Screen1 navigateToScreen2={navigateToScreen2} />
      </Animated.View>
      <Animated.View style={[styles.screen, screen2Style]}>
        <Screen2 navigateToScreen1={navigateToScreen1} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    padding: 10,    
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
    backgroundColor:'#08398E',
    borderRadius: 5,    
  },
  button: {
    padding: 10,
    backgroundColor: '#8E0E08',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});

export default App;
