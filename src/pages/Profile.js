import React from 'react'
import { WebView } from 'react-native-webview'

const Profile = ({ navigation }) => {
	const githubUsername = navigation.getParam('github_username')

	return (
		<WebView
			source={{ uri: `https://github.com/${githubUsername}` }}
			style={{ flex: 1 }}
		/>
	)
}

export default Profile
