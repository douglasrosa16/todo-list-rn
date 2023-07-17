import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		width: '100%',
		marginVertical: 24,
		paddingVertical: 48,
		paddingHorizontal: 20,
		borderTopColor: theme.colors.base.gray400,
		borderEndColor: theme.colors.base.gray600,
		borderStartColor: theme.colors.base.gray600,
		borderBottomColor: theme.colors.base.gray600,
		borderWidth: 1,
	},
	textFirst : {
		fontSize: theme.font_size.lg,
		color: theme.colors.base.gray300,
		fontWeight: 'bold'
	},
	textSecond : {
		fontSize: theme.font_size.lg,
		color: theme.colors.base.gray300
	},
	image : {
		marginBottom: 16
	}
});
