const initialState = {
  activeTab: 'home',
  theme: 'dark'
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ACTIVE_TAB':
      return { ...state, activeTab: action.payload };
    case 'CHANGE_THEME':
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export default rootReducer;