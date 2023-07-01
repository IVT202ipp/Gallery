import React from 'react';
import { useSelector } from 'react-redux';
import { View, FlatList, Image, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';

export const Favorite = ({ navigation } : {navigation: any}) => {
    const products = useSelector((state: any) => state.img.Products);
    const favoriteProducts = products.filter((item: any) => item.isFavorite);
  
    return (
      <View style={styles.container}>
        {favoriteProducts.length > 0 ? (
          <FlatList
            data={favoriteProducts}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('FSImage', { item })}>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: item.thumbnail }} style={styles.image} />
                        {item.isFavorite && <Text style={styles.favoriteIcon}>★</Text>}
                    </View>
                </TouchableOpacity>
            )}
            numColumns={3}
          />
        ) : (
          <Text>No favorite images</Text>
        )}
      </View>
    );
};

const { width } = Dimensions.get('window');
const imageWidth = width / 3 - 16;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: imageWidth,
    height: imageWidth,
    margin: 8,
  },
  imageContainer: {
    position: 'relative',
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    color: 'gold',
    fontSize: 20,
  },
});
