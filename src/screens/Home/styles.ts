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
		marginTop: 25
	},
	textCriadas : {
		color: theme.colors.brand.blue,
		fontSize: theme.font_size.lg,
		fontWeight: 'bold'
	},
	textConcluidas : {
		color: theme.colors.brand.purple,
		fontSize: theme.font_size.lg,
		fontWeight: 'bold'
	}
});
