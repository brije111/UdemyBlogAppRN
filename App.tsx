import React, { useState, useReducer } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import { BlogContext } from './src/context/BlogContext';
import BlogPost from './src/interface/BlogPost';
import { ADD_BLOG, READ_BLOG, UPDATE_BLOG, DELETE_BLOG } from './src/actions';
import EditScreen from './src/screens/EditScreen';
import NavigationService from './src/NavigationService';

const AppNavigator = createStackNavigator(
  {
    Index: IndexScreen,
    Edit: EditScreen
  },
  {
    initialRouteName: 'Index',
  }
);
const AppContainer = createAppContainer(AppNavigator);



const reducer = (state: Data, action: Action) => {
  switch (action.type) {
    case ADD_BLOG:
      state.blogPosts.push(action.payload);
      return { ...state };
    case READ_BLOG:
      return { ...state };
    case UPDATE_BLOG:
      state.blogPosts.forEach(element => {
        if (element.id === action.payload.id) {
          element.title = action.payload.title;
          //break the loop
          return false;
        }
      });
      return { ...state };
    case DELETE_BLOG:
      const index = state.blogPosts.indexOf(action.payload);
      if (index != -1)
        state.blogPosts.splice(index, 1);
      return { ...state };
  }
}

export interface Action {
  type: string;
  payload: BlogPost;
}
interface Data {
  blogPosts: BlogPost[];
}

const initialState: Data = {
  blogPosts: []
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [blogPosts, setBlogPosts] = useState([{ title: 'Blog Post #1' }]);
  // const addBlogPost = () => {
  //   console.log('add blog post');
  //   setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }]);
  // }

  return <BlogContext.Provider value={{ blogPosts: state.blogPosts, dispatch }}>
    <AppContainer ref={navigatorRef => { NavigationService.setTopLevelNavigator(navigatorRef) }} />
  </BlogContext.Provider>;
}
export default App;
