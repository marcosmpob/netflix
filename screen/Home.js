import React, { useState, useEffect, useContext } from 'react'

import { StatusBar, Dimensions } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

import styled from 'styled-components/native'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Movies from '../components/Movies'


import { filterByCountry, getLocation } from '../services/movieFilter';
import { useSpring, animated, config } from 'react-spring'
import messaging from '@react-native-firebase/messaging';
import  { ProfieContext }  from '../context/ProfileContext';


const api = [
	require('../assets/movie1.jpg'),
	require('../assets/movie2.jpg'),
	require('../assets/movie3.jpg'),
	require('../assets/movie4.jpg')
]

const Container = styled.ScrollView`
	flex: 1;
	background-color: #000;
`

const Poster = styled.ImageBackground`
	width: 100%;
	height: ${(Dimensions.get('window').height * 81) / 100}px;
`
const AnimatedPoster = animated(Poster)

const Gradient = styled(LinearGradient)`
	height: 100%;
`


const Home = (props) => {
	
	const [movies, setMovies] = useState([]);
	const [nationalMovies, setNationalMovies] = useState([]);
	
	const {user, setUser} = useContext(ProfieContext);

	


	useEffect(() => {

	
		const loadingMovies = async () => {

		const moviesJson = require('../assets/Movies.json');

			const position = await getLocation();
			const nationalCountries = await filterByCountry(moviesJson.Pedro, position);
			setNationalMovies(nationalCountries);

			const nationalCountriesTitle = nationalCountries.map(
				(item, index) => item.Title,
			);
			 	
			moviesWithoutNationals = moviesJson.Pedro.filter((item, index) => {
				return !nationalCountriesTitle.includes(item.Title);
			});

			setMovies(moviesWithoutNationals);
		};
		loadingMovies();
	}, [user]);

	//console.log(movies);
	//const PosterProps = useSpring({config: config.gentle,to: {opacity:1},from:{opacity:0.5}})
	return (
		<>
			<StatusBar
				translucent
				backgroundColor='transparent'
				barStyle='light-content'
			/>
			
				<Container>
					<Poster source={require('../assets/poster.jpg')}>
						<Gradient
							locations={[0, 0.2, 0.6, 0.93]}
							colors={[
								'rgba(0,0,0,0.5)',
								'rgba(0,0,0,0.0)',
								'rgba(0,0,0,0.0)',
								'rgba(0,0,0,1)'
							]}>
							<Header />
							<Hero
								onAssistirPressed={() => {
									props.navigation.navigate('ChooseProfile');
								}}
							/>
						</Gradient>
					</Poster>
					<Movies label='Recomendados' data={movies} />
					<Movies label='Nacionais' data={nationalMovies} />
					<Movies label='Continuar Assistindo como' user={user} data={movies} />
				</Container>
			
		</>
	)
}

export default Home
