import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1A1A1A',			
	},
	form: {
		backgroundColor: '#0D0D0D',
		height: 173,
		flexDirection: 'column',		
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%'
	},
	input : {
		flex: 1,
		height: 54,
		marginTop: 145,
		marginLeft: 10,
		marginRight: 5,
		backgroundColor: '#333333',
		padding: 10,
		borderRadius: 5,
		color: '#FFF'
	},
	button : {
		width: 52,
		height: 52,	
		marginTop: 145,
		marginRight: 10,
		backgroundColor: '#1E6F9F',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
	},
	buttonText : {
		
	},
	image : {	
		height: 32,
		width: 110,
		
	}
});
