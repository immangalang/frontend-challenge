import React, { useReducer, createContext } from 'react';

const initialState = {
  champions: [],
  tags: [],
  search: '',
  addChampion: (champion: any) => {},
  removeChampion: (champion: any) => {},
  addTag: (tag: string) => {},
  removeTag: (tag: string) => {},
  resetTags: () => {},
  searchChange: (search: string) => {},
};

export const AppContext = createContext({
  ...initialState,
});

const AppReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_CHAMPION':
      return { ...state, champions: [...state.champions, action.champion] };
    case 'REMOVE_CHAMPION':
      return {
        ...state,
        champions: state.champions.filter(
          (item: any) =>
            JSON.stringify(item) !== JSON.stringify(action.champion)
        ),
      };
    case 'ADD_TAG':
      return { ...state, tags: [...state.tags, action.tag] };
    case 'REMOVE_TAG':
      return {
        ...state,
        tags: state.tags.filter((item: any) => item !== action.tag),
      };
    case 'RESET_TAGS':
      return { ...state, tags: [] };
    case 'SEARCH':
      return { ...state, search: action.search };
    default:
      return state;
  }
};

const AppProvider = (props: any) => {
  const [appState, dispatch] = useReducer(AppReducer, initialState);

  const addChampionHandler = (champion: any) => {
    dispatch({ type: 'ADD_CHAMPION', champion });
  };

  const removeChampionHandler = (champion: any) => {
    dispatch({ type: 'REMOVE_CHAMPION', champion });
  };

  const addTagHandler = (tag: string) => {
    dispatch({ type: 'ADD_TAG', tag });
  };

  const removeTagHandler = (tag: string) => {
    dispatch({ type: 'REMOVE_TAG', tag });
  };

  const resetTagHandler = () => {
    dispatch({ type: 'RESET_TAGS' });
  };

  const searchChangeHandler = (search: string) => {
    dispatch({ type: 'SEARCH', search });
  };

  const appContext = {
    champions: appState.champions,
    tags: appState.tags,
    search: appState.search,
    searchChange: searchChangeHandler,
    addChampion: addChampionHandler,
    removeChampion: removeChampionHandler,
    addTag: addTagHandler,
    removeTag: removeTagHandler,
    resetTags: resetTagHandler,
  };

  return (
    <AppContext.Provider value={appContext}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
