import {View, Text, Image, Button, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import axios from "axios";
import {useSelector} from "react-redux";

export default function MovieScreen({ route }) {

    const { id } = route.params;
    const movies = useSelector((state) => state.toolkit.movies);
    let movie = movies ? movies.find((x) => x.id == id) : null;


    return (
        <ScrollView>
        <View style={styles.card}>
            <Image
                style={styles.image}
                source={{ uri: movie.image}}
            />
            <View style={styles.container}>
                <Text style={styles.brandTitle}>{movie.name}</Text>
                <View style={styles.row}>
                    <Text style={styles.textt}>{movie.description}</Text>
                </View>
                <View style={styles.row}><Text style={styles.text}>Жанры: {movie.genres}</Text></View>
                <View style={styles.row}><Text style={styles.text}>Страна: {movie.country}</Text></View>
                <View style={styles.row}><Text style={styles.text}>Год: {movie.year}</Text></View>
            </View>
        </View>
        </ScrollView>
    );
}



const styles = StyleSheet.create({
    card: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        width: 350,
        borderRadius: 12,
        padding: 24,
        gap: 12,
        margin: 8,
    },
    image: { height: 370, alignSelf: 'stretch' },
    container: { display: 'flex', width: '100%', margin: 8 },
    row: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding:5 },
    brandTitle: { color: 'black', fontSize:25, fontWeight:'bold', padding:5, textAlign:'center' },
    text: { color: 'black', fontSize: 16 },
    textt: {color: 'black', fontSize: 20, textAlign:'justify' },
    button: {color:'black'},
});
