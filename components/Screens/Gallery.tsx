import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux/imageSlice';
import { Loading } from '../Loading';
import { GalleryStyle } from '../GalleryStyle';

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
      <GalleryStyle products={products} navigation={navigation} />
    );
};





