import React, { useState } from 'react';
import { Modal, TouchableOpacity, Image, StyleSheet, View, Dimensions } from 'react-native';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';

export const FSImage = ({ isVisible, imageUri, closeModal }) => {
  const [baseScale, setBaseScale] = useState(1);
  const [pinchScale, setPinchScale] = useState(1);
  const [lastScale, setLastScale] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const onPinchGestureEvent = (event) => {
    setPinchScale(event.nativeEvent.scale);
  };

  const onPinchHandlerStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const scale = lastScale * pinchScale;
      setLastScale(scale);
      setBaseScale(scale);
      setPinchScale(1);
    }
  };

  const toggleZoom = () => {
    setIsZoomed((prevZoomed) => !prevZoomed);
  };

  const imageStyle = {
    width: windowWidth,
    height: windowHeight,
    transform: [{ scale: baseScale * pinchScale }],
  };

  return (
    <Modal visible={isVisible} onRequestClose={closeModal}>
      <TouchableOpacity style={styles.modalContainer} onPress={closeModal}>
        <PinchGestureHandler
          onGestureEvent={onPinchGestureEvent}
          onHandlerStateChange={onPinchHandlerStateChange}
          enabled={isZoomed}
        >
          <View style={styles.container}>
            <Image source={{ uri: imageUri }} style={imageStyle} resizeMode="contain" />
          </View>
        </PinchGestureHandler>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
});