import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { GalleryStyle } from '../GalleryStyle';

export const Favorite = ({ navigation } : {navigation: any}) => {
    const products = useSelector((state: any) => state.img.Products);
    const favoriteProducts = products.filter((item: any) => item.isFavorite);
  
    return (
      <View style={styles.container}>
        {favoriteProducts.length > 0 ? (
          <GalleryStyle products={favoriteProducts} navigation={navigation} />
        ) : (
          <Text>No favorite images</Text>
        )}
      </View>
      
    );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});