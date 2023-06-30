import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../Redux/CartReducer';
import { Post } from '../Post';

export const Cart = ({ navigation } : {navigation: any}) => {
  const cartItems = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const handleDelete = (productId: any) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <View>
      <Text>{cartItems.length} products in cart</Text>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('SinglePost', { item })}>
              <Post product={item} />
            </TouchableOpacity>
            <Button
              title="Remove"
              onPress={() => handleDelete(item.id)}
            />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};
