export const changeTabActive = (data) => ({
  type: 'ACTIVE_TAB',
  payload: data,
});

export const changeTheme = (theme) => ({
  type: 'CHANGE_THEME',
  payload: theme,
});