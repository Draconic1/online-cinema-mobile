import {View, Text, StyleSheet, Image, Button, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import axios from "axios";
import MovieCard from "../components/MovieCard";
import {loadMovies} from "../components/reducerSlice";
import {useDispatch, useSelector} from "react-redux";

export default function Home({ navigation }) {
    const movies = useSelector(state => state.toolkit.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await axios.get(`http://ip_компа:8080/api/movies/`);
                console.log(data);

                dispatch(loadMovies(data));
            } catch (error) {
                console.log(error);
            }

        };

        fetchData();
    }, []);


    return (
        <ScrollView>
            <View style={styles.page}>
                <Text style={styles.title}>Сегодня в кино</Text>
                {!!movies &&
                    movies.map((movie) => <MovieCard key={movie.id} {...movie} navigation={navigation} />)}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
    },
    title:{
        color: 'black',
        fontSize: 25,
        fontWeight:'bold',
        padding:15,
        textAlign:'center'},
});
