import React, { useState } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import { BlogContext } from './src/context/BlogContext';

const AppNavigator = createStackNavigator(
  {
    Index: IndexScreen
  },
  {
    initialRouteName: 'Index',
  }
);

const AppContainer = createAppContainer(AppNavigator);
const App = () => {
  const [blogPosts, setBlogPosts] = useState([{ title: 'Blog Post #1' }]);
  const addBlogPost = () => {
    console.log('add blog post');
    setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }]);
  }

  return <BlogContext.Provider value={{ blogPosts, addBlogPost }}>
    <AppContainer />
  </BlogContext.Provider>;
}
export default App;
