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
		fontSize: theme.font_size.lg,
		fontWeight: 'bold'
	},
	textQntCriadas : {
		color: theme.colors.brand.blue,
		fontSize: theme.font_size.lg,
		fontWeight: 'bold',
		backgroundColor: theme.colors.base.gray400,
		borderRadius: 10,
		width: 25,
		height: 19,
	},
	containerConcluidas : {
		flexDirection: 'row'
	},
	textConcluidas : {
		color: theme.colors.brand.purple,
		fontSize: theme.font_size.lg,
		fontWeight: 'bold'
	},
	textQntConcluidas : {
		color: theme.colors.brand.blue,
		fontSize: theme.font_size.lg,
		fontWeight: 'bold',
		backgroundColor: theme.colors.base.gray400,
		borderRadius: 10,
		width: 25,
		height: 19,
	},	
	line : {		
		marginLeft: 24,
		marginRight: 24,
		borderBottomWidth: 1,
		borderBottomColor: theme.colors.base.gray300,
	}
});
