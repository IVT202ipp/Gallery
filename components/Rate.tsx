import React from 'react';
import { View, Image } from 'react-native';

const Rate = ({ Rating } : { Rating:any }) => {
    const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        
        const starColor = i <= Rating ? 'yellow' : 'gray';
        
        stars.push(
            <Image
                key={i}
                source={require('./star.png')}
                style={{ width: 24, height: 24, tintColor: starColor }}
            />
        );
        }
        return stars;
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            {renderStars()}
        </View>
    );
};

export default Rate;