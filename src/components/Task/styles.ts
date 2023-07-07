import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
  containerTask : {
    height: 64,
    paddingLeft: 12,
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 8,
    backgroundColor: theme.colors.base.gray400,
    margin: 10,
    borderRadius: 8,
    flexDirection: 'row'
  },
  taskText : {
    color: theme.colors.base.gray100,
    fontSize: theme.font_size.md,
    justifyContent: 'center'
  }
});