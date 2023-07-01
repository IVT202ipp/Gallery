import React, { useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

export const Testing = ({ navigation, route }: { navigation: any; route: any }) => {
    const translation = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

    const onPanGestureEvent = Animated.event(
      [
        {
          nativeEvent: {
            translationX: translation.x,
            translationY: translation.y,
          },
        },
      ],
      { useNativeDriver: true }
    );
  
    const onPanHandlerStateChange = (event: { nativeEvent: { oldState: number; }; }) => {
      if (event.nativeEvent.oldState === State.ACTIVE) {
        translation.extractOffset();
      }
    };
  
    return (
      <View style={styles.container}>
        <PanGestureHandler
          onGestureEvent={onPanGestureEvent}
          onHandlerStateChange={onPanHandlerStateChange}
        >
          <Animated.View
            style={[
              styles.box,
              {
                transform: [
                  { translateX: translation.x },
                  { translateY: translation.y },
                ],
              },
            ]}
          />
        </PanGestureHandler>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    box: {
      width: 100,
      height: 100,
      backgroundColor: 'red',
    },
});