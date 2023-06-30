import React from 'react';
import { View, FlatList, TouchableOpacity, RefreshControl } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux/ProductsReducer';
import { Post } from '../Post';
import { Loading } from '../Loading';


export const Home = ({ navigation } : {navigation: any}) => {
  const dispatch = useDispatch<any>();
  const  products  = useSelector((state: any) => state.products.Products)
  const  isLoading  = useSelector((state: any) => state.products.isLoading)

  React.useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  if (isLoading) {
    return (
      <Loading />
    );
  }

  return (
    <View>
        <FlatList
        data={products}
        renderItem={({ item }) => 
        <TouchableOpacity onPress={() => navigation.navigate('SinglePost', { item })}>
            <Post product={item} />
        </TouchableOpacity>
        }
        />
    </View>
);
};