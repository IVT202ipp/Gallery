import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Dimensions, Animated } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { markAsFavorite } from '../Redux/imageSlice';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';

const screen = Dimensions.get('window');

export const FSImage = ({ navigation, route }: { navigation: any; route: any }) => {
    const { item } = route.params;
    const dispatch = useDispatch();
    const scale = new Animated.Value(1);

    const isFavorite = useSelector((state: any) => {
        const product = state.img.Products.find((product: any) => product.id === item.id);
        return product ? product.isFavorite : false;
    });

    const onPinchEvent = Animated.event([{ nativeEvent: { scale: scale } }], {
        useNativeDriver: true,
    });

    const onPinchStateChange = (event: { nativeEvent: { oldState: number; }; }) => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
          Animated.spring(scale, {
            toValue: 1,
            useNativeDriver: true,
            bounciness: 1,
          }).start();
        }
    };

    const toggleFavorite = () => {
        dispatch(markAsFavorite(item.id));
    };

    return (
        <View style={styles.container}>
            <PinchGestureHandler
          onGestureEvent={onPinchEvent}
          onHandlerStateChange={onPinchStateChange}
        >
          <Animated.Image
            source={{
              uri:
              item.thumbnail,
            }}
            style={[
              styles.image,
              {
                transform: [{ scale: scale }],
              },
            ]}
            resizeMode="contain"
          />
        </PinchGestureHandler>
            <View style={styles.bottomBar}>
                <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteButton}>
                    <Text style={styles.favoriteButtonText}>
                        {isFavorite ? '★' : '☆'}
                    </Text>
                </TouchableOpacity>
            </View>     
        </View>
    );
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
},
image: {
    width: screen.width,
    height: screen.height,
},
favoriteButton: {
    alignSelf: 'flex-end',
},
favoriteButtonText: {
    color: 'white',
    fontSize: 50,
},
bottomBar: {
    position: 'absolute',
    top: 0,
    width: '100%',
    padding: 20,
    },
});