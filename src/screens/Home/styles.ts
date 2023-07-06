import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.base.gray600,			
	},
	listTask : {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 24,
		marginTop: 25,		
	},
	containerCriadas : {
		flexDirection: 'row',		
		alignContent: 'center'
	},
	textCriadas : {
		color: theme.colors.brand.blue,
		fontSize: theme.font_size.md,
		fontFamily: theme.font_family.bold
	},
	countainerCounter : {				
		marginLeft: 5,			
		backgroundColor: theme.colors.base.gray400,
		height: 19,
		borderRadius: 999,		
		alignItems: 'center'
	},
	counterText : {

	},
	textQntCriadas : {		
		color: theme.colors.brand.blue,
		fontSize: theme.font_size.md,
		fontWeight: 'bold',		
		width: 25,	
	},
	containerConcluidas : {
		flexDirection: 'row'
	},
	textConcluidas : {
		color: theme.colors.brand.purple,
		fontSize: theme.font_size.md		
	},
	line : {		
		marginLeft: 24,
		marginRight: 24,
		borderBottomWidth: 1,
		borderBottomColor: theme.colors.base.gray300,
	}
});
