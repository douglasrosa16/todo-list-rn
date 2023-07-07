import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
	Headercontainer: {	
		backgroundColor: theme.colors.base.gray700,			
		height: 173,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		position: 'relative'
	},
	image : {	
		height: 32,
		width: 110,		
	},
	form : {
		position: 'absolute',
		bottom: -54 /2,
		height: 54,		
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	input : {				
		backgroundColor: theme.colors.base.gray500,
		width: '75%',
		height: 54,
		padding: 16,
		marginRight: 4,
		fontSize: theme.font_size.md,
		borderRadius: 5,
		color: theme.colors.base.gray100
	},
	button : {
		width: 54,
		height: 54,	
		backgroundColor: theme.colors.brand.blue_dark,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
	}
});
