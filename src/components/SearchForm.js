import React from 'react'
import { TextInput, View, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const SearchForm = () => {
	return (
		<View style={styles.searchForm}>
			<TextInput
				style={styles.searchInput}
				placeholder='Find devs by techs...'
				placeholderTextColor='#999'
				autoCapitalize='words'
				autoCorrect={false}
			/>

			<TouchableOpacity onPress={() => {}} style={styles.loadButton}>
				<MaterialIcons name='my-location' size={20} color='#fff' />
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	searchForm: {
		position: 'absolute',
		top: 20,
		left: 20,
		right: 20,
		zIndex: 5,
		flexDirection: 'row'
	},
	searchInput: {
		flex: 1,
		height: 50,
		backgroundColor: '#fff',
		color: '#333',
		borderRadius: 25,
		paddingHorizontal: 20,
		fontSize: 16,
		shadowColor: '#000',
		shadowOpacity: 0.2,
		shadowOffset: {
			width: 4,
			height: 4
		},
		elevation: 2
	},
	loadButton: {
		width: 50,
		height: 50,
		backgroundColor: '#8e4dff',
		borderRadius: 25,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 15
	}
})

export default SearchForm
