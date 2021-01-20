import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image } from 'react-native';
import { vietnam } from '../../Global/strings'
import StarRating from 'react-native-star-rating';

const ItemCourseVertical = (props) => {

    const vietnamStrings = JSON.parse(vietnam);

    return (
        <View style={styles.item}>
            <View style={{ flexDirection: 'row' }}>
                <Image style={{ alignSelf: 'center', width: 110, height: 80 }} source={{ uri: props.imageUrl }} />
                <View style={styles.item2}>
                    <Text style={{ color: '#424949', fontSize: 12, margin: 7, maxWidth: 200, fontWeight: 'bold' }}>{props.title}</Text>
                    <Text style={{ color: '#424949', fontSize: 10, marginLeft: 7 }}>{vietnamStrings.author}: {props.name}</Text>
                    {
                        props.ratedNumber === "none"
                            ?
                            <Text style={{ color: '#424949', fontSize: 10, marginLeft: 7, maxWidth: 200 }}>{vietnamStrings.lastedUpdate}: {props.latestLearnTime} </Text>
                            :
                            <Text style={{ color: '#424949', fontSize: 10, marginLeft: 7 }}>{vietnamStrings.price}: {props.price} VNĐ</Text>
                    }


                    <Text style={{ color: '#424949', fontSize: 10, marginLeft: 7 }}>{props.ratedNumber === "none" ? "" : vietnamStrings.rating + ": (" + props.ratedNumber + ")"}</Text>
                    {/* </View> */}
                    {
                        props.ratedNumber === "none"
                            ?
                            <View />
                            :
                            <StarRating
                                disabled={false}
                                maxStars={5}
                                rating={props.ratedNumber}
                                starStyle={{ opacity: 1 }}
                            // selectedStar={(rating) => this.onStarRatingPress(rating)}
                            />
                    }

                </View>
            </View>





        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        justifyContent: 'space-between',
        marginBottom: 5,
        padding: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#424949',
    },
    item2: {
        marginLeft: 15,
        flexDirection: 'column',
    }
});

export default ItemCourseVertical;