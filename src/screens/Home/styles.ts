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
	containerInfo : {
		flexDirection: 'row',				
	},
	textCriadas : {
		color: theme.colors.brand.blue,
		fontSize: theme.font_size.md,
		fontWeight: 'bold'
	},
	countainerCounter : {				
		marginLeft: 5,		
		width: 25,	
		height: 19,
		backgroundColor: theme.colors.base.gray400,		
		borderRadius: 999,		
		alignItems: 'center',
		justifyContent: 'center'
	},
	counterText : {
		color: theme.colors.base.gray200,
		fontSize: theme.font_size.sm,
		fontWeight: 'bold'
	},
	textConcluidas : {
		color: theme.colors.brand.purple,
		fontSize: theme.font_size.md,
		fontWeight: 'bold'
	},
	line : {		
		marginLeft: 24,
		marginRight: 24,
		borderBottomWidth: 1,
		borderBottomColor: theme.colors.base.gray300,
	}
});
