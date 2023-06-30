import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export const Post = ({ product } : {product:any}) => {

  return (
      <View style={styles.container}>
        <Image source={{ uri: product.thumbnail }} style={styles.image} />
        <View>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.desc}>{product.description}</Text>
        </View>      
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 12,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  desc: {
    flex: 1,
    justifyContent: 'center',
    width: 250,
  },
  
});
