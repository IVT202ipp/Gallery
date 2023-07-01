import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { markAsFavorite } from '../Redux/imageSlice';

export const FSImage = ({ navigation, route }: { navigation: any; route: any }) => {
    const { item } = route.params;
    const dispatch = useDispatch();

    const isFavorite = useSelector((state: any) => {
        const product = state.img.Products.find((product: any) => product.id === item.id);
        return product ? product.isFavorite : false;
    });

    const toggleFavorite = () => {
        dispatch(markAsFavorite(item.id));
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: item.thumbnail }} resizeMode="contain" style={styles.image} />
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
      width: '100%',
      height: '100%',
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