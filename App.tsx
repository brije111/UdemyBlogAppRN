import React, { useState, useReducer } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import { BlogContext } from './src/context/BlogContext';
import Contact from './src/interface/Contact';
import { ADD_BLOG, READ_CONTACTS, UPDATE_BLOG, DELETE_CONTACT } from './src/actions';
import EditScreen from './src/screens/EditScreen';
import NavigationService from './src/NavigationService';
import { CreateBlog } from './src/screens/CreateBlog';
import jsonServer from './src/api/jsonServer';
import { AxiosResponse } from 'axios';

const AppNavigator = createStackNavigator(
  {
    Index: IndexScreen,
    Edit: EditScreen,
    Create: CreateBlog
  },
  {
    initialRouteName: 'Index',
  }
);
const AppContainer = createAppContainer(AppNavigator);



const reducer = (state: Contact[], action: Action) => {
  switch (action.type) {
    // case ADD_BLOG:
    //   state.contacts.push(action.payload);
    //   return { ...state };
    case READ_CONTACTS:
      return action.payload;
    // case UPDATE_BLOG:
    //   state.contacts.forEach(element => {
    //     if (element.id === action.payload.id) {
    //       element.title = action.payload.title;
    //       //break the loop
    //       return false;
    //     }
    //   });
    //   return { ...state };
    // case DELETE_CONTACT:
    //   return action.payload;
  }
}

const getContacts = (dispatch: React.Dispatch<Action>) => {
  return async () => {
    try {
      const response = await jsonServer.get<AxiosResponse<Contact[]>>('/contact');
      console.log(response);
      dispatch({ type: READ_CONTACTS, payload: response.data.data })
    } catch (e) {
      console.log(e);
    }
  }
}

const deleteContact = (dispatch: React.Dispatch<Action>) => (id: string) => {
  return async () => {
    const response = await jsonServer.delete(`/contact/${id}`);
    dispatch({ type: DELETE_CONTACT, payload: response.data })
  }
}

export interface Action {
  type: string;
  payload: Contact[];
}

const initialState: Contact[] = [];

const App = () => {
  const [contacts, dispatch] = useReducer(reducer, initialState);

  return <BlogContext.Provider value={{ contacts, getContacts: getContacts(dispatch), deleteContact: deleteContact(dispatch) }}>
    <AppContainer ref={navigatorRef => { NavigationService.setTopLevelNavigator(navigatorRef) }} />
  </BlogContext.Provider>;
}
export default App;
