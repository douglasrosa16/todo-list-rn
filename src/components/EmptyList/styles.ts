import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 208,				
	},
	textFirst : {
		fontSize: theme.font_size.lg,
		marginTop: 20,
		color: theme.colors.base.gray300,
		fontWeight: 'bold'
	},
	textSecond : {
		fontSize: theme.font_size.lg,
		color: theme.colors.base.gray300
	},
	image : {
		height: 56
	}
});
