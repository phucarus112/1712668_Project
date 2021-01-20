import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image } from 'react-native';
import { vietnam } from '../../Global/strings'
import StarRating from 'react-native-star-rating';

const ItemCourseHorizontal = (props) => {

    const vietnamStrings = JSON.parse(vietnam);

    return (
        <View style={styles.item}>
            <Image style={{ alignSelf: 'center', width: 210, height: 100 }} source={{ uri: props.imageUrl }} />

            <Text style={{ color: '#fff', fontSize: 12, margin: 7, fontWeight: 'bold' }}>{props.title}</Text>
            <Text style={{ color: '#fff', fontSize: 10, marginLeft: 7 }}>{vietnamStrings.author}: {props.name}</Text>
            {
                props.ratedNumber === "none"
                ?
<Text style={{ color: '#fff', fontSize: 10, marginLeft: 7 }}>{vietnamStrings.lastedUpdate}: {props.latestLearnTime} </Text>
                :
                <Text style={{ color: '#fff', fontSize: 10, marginLeft: 7 }}>{vietnamStrings.price}: {props.price} VNĐ</Text>
            }
            
          
            <Text style={{ color: '#fff', fontSize: 10, marginLeft: 7 }}>{props.ratedNumber === "none" ? "": vietnamStrings.rating +": ("+ props.ratedNumber+")"}</Text>
            {
                props.ratedNumber === "none"
                ?
                <View />
                :
                <StarRating
                disabled={false}
                maxStars={5}
                rating={props.ratedNumber}
                starStyle={{opacity: 1}}
                // selectedStar={(rating) => this.onStarRatingPress(rating)}
              />
            }
          
            {/* </View> */}

        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        width: 210,
        height: 250,
        flexDirection: 'column',
        backgroundColor: '#424949',
        margin: 5,
    }
});

export default ItemCourseHorizontal;