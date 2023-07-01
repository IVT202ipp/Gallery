import React from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux/imageSlice';
import { Loading } from '../Loading';

export const Gallery = ({ navigation } : {navigation: any}) => {
    const dispatch = useDispatch<any>();
    const  products  = useSelector((state: any) => state.img.Products)
    const  isLoading  = useSelector((state: any) => state.img.isLoading)

    React.useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    if (isLoading) {
    return (
        <Loading />
    );
    }
    
    return (
    <View style={styles.container}>
        <FlatList
        data={products}
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






