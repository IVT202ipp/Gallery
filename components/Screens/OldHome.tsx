import React from 'react';
import { View, Alert, FlatList, TouchableOpacity, RefreshControl } from 'react-native';
import { Post } from '../Post';
import { Loading } from '../Loading';


export const Home = ({ navigation } : {navigation: any}) => {
const [IsLoading, setIsLoading] = React.useState(true); 
const [items, setItems] = React.useState([]);

const fetchPosts = () => {
    setIsLoading(true);
    fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then(({ products }) => {
        setItems(products);
    })
    .catch((err) => {
        console.log(err);
        Alert.alert('Error', 'Unable data');
    }).finally(() => {
        setIsLoading(false);
    });
};

React.useEffect(fetchPosts, []);

if (IsLoading) {
    return <Loading />;
}



return (
    <View>
        <FlatList
        refreshControl={<RefreshControl refreshing={IsLoading} onRefresh = {fetchPosts} />}
        data={items}
        renderItem={({ item }) => 
        <TouchableOpacity onPress={() => navigation.navigate('SinglePost', { item })}>
            <Post product={item} />
        </TouchableOpacity>
        }
        />
    </View>
);
}