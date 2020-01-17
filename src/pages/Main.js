import React, { useEffect, useState } from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
import MapView, { Marker, Callout } from 'react-native-maps'

import SearchForm from '../components/SearchForm'

const Main = ({ navigation }) => {
	const [currentRegion, setCurrentRegion] = useState(null)

	useEffect(() => {
		async function loadInitialPosition() {
			const { granted } = await requestPermissionsAsync()

			if (granted) {
				const { coords } = await getCurrentPositionAsync({
					enableHighAccuracy: true
				})

				const { latitude, longitude } = coords

				setCurrentRegion({
					latitude,
					longitude,
					latitudeDelta: 0.04,
					longitudeDelta: 0.04
				})
			}
		}

		loadInitialPosition()
	}, [])

	if (!currentRegion) {
		return null
	}

	return (
		<>
			<MapView initialRegion={currentRegion} style={styles.map}>
				<Marker
					coordinate={{
						latitude: 41.1466238,
						longitude: -8.5698438
					}}
				>
					<Image
						style={styles.avatar}
						source={{
							uri:
								'https://avatars1.githubusercontent.com/u/46088089?v=4'
						}}
					/>

					<Callout
						onPress={() => {
							navigation.navigate('Profile', {
								github_username: 'nubelsondev'
							})
						}}
					>
						<View style={styles.callout}>
							<Text style={styles.devName}>
								Nubelson Fernandes
							</Text>
							<Text style={styles.devBio}>
								A 22 years old self-taugth Full-Stack Developer
								with Node and React from Angola, currently
								living in Portugal.
							</Text>
							<Text style={styles.devTechs}>
								NodeJS, ReactJS, React Native
							</Text>
						</View>
					</Callout>
				</Marker>
			</MapView>

			<SearchForm />
		</>
	)
}

const styles = StyleSheet.create({
	map: {
		flex: 1
	},
	avatar: {
		width: 54,
		height: 54,
		borderRadius: 4,
		borderWidth: 4,
		borderColor: '#fff'
	},
	callout: {
		width: 260
	},
	devName: {
		fontWeight: 'bold',
		fontSize: 16
	},
	devBio: {
		color: '#666',
		marginTop: 5
	},
	devTechs: {
		marginTop: 5
	}
})

export default Main
