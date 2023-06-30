import React from 'react';
import { StyleSheet, Animated } from 'react-native';

export const Profile = () => {
  const colorAnimation = new Animated.Value(0);

  React.useEffect(() => {
    startColorAnimation();
  }, []);

  const startColorAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(colorAnimation, {
          toValue: 2,
          duration: 3000,
          useNativeDriver: false,
        }),
        Animated.timing(colorAnimation, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  };

  const backgroundColor = colorAnimation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ['red', 'green', 'blue'],
  });

  return (
    <Animated.View style={[styles.container, { backgroundColor }]}/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});