import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
const blogPosts = [
  {title:'Blog Post #1'},
  {title:'Blog Post #2'},
  {title:'Blog Post #3'}
];
export default class App extends React.Component {
  render() {
    return <BlogContext.Provider value={JSON.stringify(blogPosts)}>
      <AppContainer />
    </BlogContext.Provider>;
  }
}
